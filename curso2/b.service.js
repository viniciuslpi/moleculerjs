module.exports = {
    name: "b",

    actions: {
        calculate(ctx){
            let { num1, num2 } = ctx.params;
            let result = num1 + num2;
            this.log("Teste: " + result)
            return result;
        }
    },

    events: {
        "message"(){
            this.log("Calculo realizado!")
        }   
    },

    methods: {
        log(text) {
            console.log(text);
        }
    },

    started() {
        console.log('Iniciou serviço B')
    }
}