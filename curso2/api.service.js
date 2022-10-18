const ApiService = require("moleculer-web")

module.exports = {
    mixins: [ApiService],

    settings: {

        port: process.env.PORT ?? 4000,

        // path: "/api/v2", carregar path principal

        routes: [
            {
                path: "/", //rota padrão,
                whitelist: ["hello.world.*"],

                aliases: {
                    "GET helloworld": "hello.world.helloworld",
                    "GET bye": "hello.world.bye"
                }

                // autoAliases: true - gera as rotas automaticamente a partir dos serviços gerados 
            }
        ],

        // https - carrega a configuração do ssl
        // use: [] - middlewares

    }

}