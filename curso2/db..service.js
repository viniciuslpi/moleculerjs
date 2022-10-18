const DbService = require("moleculer-db");
const SqlAdapter = require("moleculer-db-adapter-sequelize");
const Sequelize = require("sequelize");


module.exports = {
    name: "db.pessoas",

    mixins: [DbService], 
    adapter: new SqlAdapter("sqlite:tems.sqlite:"),
    model: {
        name: 'pessoas',
        define: {
            nome: Sequelize.STRING
        },
        options: {

        }
    }


}