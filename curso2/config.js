module.exports = {
    namespace: "vinicius",
    transporter: "tcp",
    hotReload: true,

    tracing: {  // nao é ativado em producao, apenas em dev. no caso, é ativado o log em producao
        enabled: true,
        exporter: "Console"
    },
    
}