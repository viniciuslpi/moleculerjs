module.exports = { 
    name: "a",

    actions: {
        async init(ctx){
            let resultb = await ctx.call("b.calculate", { num1: 1, num2: 2 });
            ctx.emit("message");
            return "Resultado da soma: " + resultb;
        }
    },

    started() {
        console.log('Iniciou serviço A')
    }
 
}