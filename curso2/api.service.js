const ApiService = require("moleculer-web")

module.exports = {
    mixins: [ApiService],

    settings: {

        port: process.env.PORT ?? 4000,

        // path: "/api/v2", carregar path principal

        routes: [
            {
                path: "/", //rota padrão,
                whitelist: ["hello.world.*","db.pessoas.*"],

                aliases: {
                    "GET helloworld": "hello.world.helloworld",
                    "GET bye": "hello.world.bye",
                    "GET user": "db.pessoas.list",
                    "GET user/:id": "db.pessoas.get",
                    // "GET user": "db.pessoas.count",
                    "POST user": "db.pessoas.create",
                    "DELETE user/:id": "db.pessoas.remove",
                    "PUT user/:id": "db.pessoas.update",
                }

                // autoAliases: true - gera as rotas automaticamente a partir dos serviços gerados 
            }
        ],

        // https - carrega a configuração do ssl
        // use: [] - middlewares

    }

}