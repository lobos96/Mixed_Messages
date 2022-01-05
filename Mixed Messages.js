console.log("Wanna hear a joke? y/n")

const jokeGenerator = () => {
    noun: ['monkey', 'robot', 'chicken', 'wiener dog', 'ex wife'];
    verb: ['run to the store', 'jump on the bus', 'smoosh the sandwich', 'sneeze on the salad', 'squirt ketchup on the counter'];
    punchline: ['To get to the other side!', "Orange you glad I didn't say banana!", 'To get to school on time!', 'To avoid a parking ticket!', 'To have room for seconds!'];
    let randElem = obj => {
        this.obj(Math.floor(math.random() * this.obj.length))
    } 
    return "Why did the " + randElem(noun) + randElem(verb) + randElem(punchline)
}

console.log(jokeGenerator())