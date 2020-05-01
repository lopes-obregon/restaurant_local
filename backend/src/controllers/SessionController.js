const connection = require("../databse/connect");
module.exports = {
    async create(request, response){
        const { user } = request.body;
        let sql = `SELECT * FROM adms WHERE user = '${user}'`;
        await connection.query(sql, function(err, [row]){
            if(err) throw err;
            response.json(row.user);
        });
    }
}