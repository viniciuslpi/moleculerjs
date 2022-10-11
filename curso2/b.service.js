module.exports = {
    name: "b",

    actions: {
        hello(){
            return "Hello from service b";
        }
    },

    events: {
        "hello"(){
            this.log("Opaaa!")
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