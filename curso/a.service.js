const express = require("express");
const ApiGateway = require("moleculer-web");

module.exports = {
    name: "www",
    mixins: [ApiGateway],

    settings: {
        port: process.env.PORT || 3333,

        routes: [
            {
                path: "/",

                whitelist: [
                    "users.get",
                    "$node.*"
                ],

                authorization: true,

                mappingPolicy: "all",

                bodyParsers: {
                    json: true,
                    urlencoded: { extended: true }
                },

                aliases: {
                    async "GET /"(req, res) {
                        res.status(200).send({ message: this.init() })
                    },
                    "GET favicon.ico"(route, req, res) { }
                }
            }
        ]
    },


    methods: {
        init() {
            return "TESTE";
        }
    },

    created() {
        const app = express();
        app.use(this.express());
        this.app = app;
    },

    started() {
        this.app.listen(Number(this.settings.port), err => {
            if (err) return err;
            this.logger.info(`Server running on http://localhost:${this.settings.port}`);
        });

    },

    stopped() {
        if (this.app.listening) {
            this.app.close(err => {
                if (err)
                    return this.logger.error("WWW server close error!", err);

                this.logger.info("WWW server stopped!");
            });
        }
    }

}


// actions: {
//     async init(ctx){
//         let resultb = await ctx.call("b.calculate", { num1: 1, num2: 2 });
//         ctx.emit("message");
//         return "Resultado da soma: " + resultb;
//     }
// },