module.exports = { 
    name: "a",

    actions: {
        async hello(ctx){
            let resultb = await ctx.call("b.hello");
            ctx.emit("hello");
            return "Hello from service a alterado" + ". " + resultb;
        }
    },

    started() {
        console.log('Iniciou serviço B')
    }
 
}