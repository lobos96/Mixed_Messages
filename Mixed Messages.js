console.log("Wanna hear a joke?")

const jokeGenerator = {
    noun: ['monkey', 'robot', 'chicken', 'wiener dog', 'ex wife'],
    verb: ['run to the store', 'jump on the bus', 'smoosh the sandwich', 'sneeze on the salad', 'squirt ketchup on the counter'],
    punchline: ['To get to the other side!', "Because it's part of a complete breakfast!", 'To get to school on time!', 'To avoid a parking ticket!', 'To have room for seconds!'],
    randElem(obj) {
        return obj[Math.floor(Math.random() * obj.length)]
    }, 
    generateJoke() {return `Why did the ${this.randElem(this.noun)} ${this.randElem(this.verb)}? ${this.randElem(this.punchline)}`}
}

//var userAns = window.prompt("Type 'y' for yes or 'n' for no: ");

//if (userAns !== 'y' && userAns !== 'n') {
    //return "Not a valid input. Please type 'y' or 'n"
//}
//if (userAns === 'y') {
    console.log(jokeGenerator.generateJoke())
//}
