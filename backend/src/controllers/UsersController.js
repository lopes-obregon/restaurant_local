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
         let txtResponse
        try{
           
            const {user, password} = request.body;
            const salt = brcypt.genSaltSync(10);
            const hash = brcypt.hashSync(password, salt);
            let sql = `INSERT INTO adms (user, password) VALUES ('${user}', '${hash}')`;
            await connect.query(sql);
            //retorna só depois que o insert der certo async e awiat
            txtResponse = "successfully registered"
        }catch(err){
            console.log(err);
            txtResponse = "error in the register"
        }
        return response.json(txtResponse);
    }   
}
/**
 * Para verificar (comparar) os hashes, use:

// Assumindo que `db_password` seja o hash encriptado no exemplo anterior:

const db_password = db.password; // Imagine que veio da base de dados.

bcrypt.compareSync('123', db_password); // Irá retornar true.
bcrypt.compareSync('456', db_password); // Irá retornar false.

 */