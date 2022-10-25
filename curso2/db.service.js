const DbService = require("moleculer-db");
const SqlAdapter = require("moleculer-db-adapter-sequelize");
const Sequelize = require("sequelize");


module.exports = {
    name: "db.pessoas",

    mixins: [DbService], 
    adapter: new SqlAdapter('escola_ingles', 'root', 'Templo@2000', {
        host: 'localhost',
        dialect: 'mysql',
    
        pool: {
            max: 5,
            min: 0,
            idle: 10000
        },
    
        // SQLite only
        // storage: 'path/to/database.sqlite'
    }),
    // "postgres://user:pass@example.com:5432/dbname"
    model: {
        name: 'pessoas',
        define: {
            nome: Sequelize.STRING,
            ativo: Sequelize.BOOLEAN,
            email: Sequelize.STRING,
            role: Sequelize.STRING,
            createdAt: Sequelize.DATE,
            updatedAt: Sequelize.DATE,
        },
        options: {

        }
    }


}