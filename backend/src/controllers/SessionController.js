const connection = require("../databse/connect");
const brcypt = require('bcryptjs');
module.exports = {
    async create(request, response){
        const { user, password } = request.body;
        let sql = `SELECT * FROM adms WHERE user = '${user}'`;
        await connection.query(sql, function(err, [row]){
            if(err) throw err;
            if(brcypt.compareSync(password, row.password) == true){
                response.json(row.user);
            }else{
                console.log("senha invalida");
            }
            
            
            //response.json(row.user);

        });
    }
}