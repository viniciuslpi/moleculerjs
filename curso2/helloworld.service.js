module.exports = {
    name: "hello.world",

    actions: {
        helloworld: {

            rest: "GET /hellow",

            handler() {
                return "Hello World"
            }
        },

        bye() {
            return "Bye bye!"
        }
    }
}