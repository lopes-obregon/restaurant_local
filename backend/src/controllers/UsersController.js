const brcypt = require('bcryptjs');
const connect = require('../databse/connect');
module.exports = {
    async index (request, response){
        
        await connect.query("SELECT * FROM adms", function(error, users){
            if(error) throw error;
            return response.json(users)
        })
    },
     async create(request, response){
        try{
            console.log(request.body);
            const {user, password} = request.body;
            console.log("user:" + user + "password:" + password);
            const salt = brcypt.genSaltSync(10);
            const hash = brcypt.hashSync(password, salt);
            console.log("new password:" + hash);
            let sql = `INSERT INTO adms (user, password) VALUES ('${user}', '${hash}')`;
            await connect.query(sql);
            //retorna só depois que o insert der certo async e awiat
        }catch(err){
            console.log(err);
        }
    }   
}
/**
 * Para verificar (comparar) os hashes, use:

// Assumindo que `db_password` seja o hash encriptado no exemplo anterior:

const db_password = db.password; // Imagine que veio da base de dados.

bcrypt.compareSync('123', db_password); // Irá retornar true.
bcrypt.compareSync('456', db_password); // Irá retornar false.

 */