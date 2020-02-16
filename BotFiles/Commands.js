export default {
    "/greet": {
        run: (name) => {
            if(!name) name = ""
            if(name) name = ` ${name}`
            return `Hello${name}!`
        },
        description: "Says hello to you!",
        "author": "Nabil Ridhwanshah",
        usage: "/greet name"
    },

    "/rolldice": {
        run: (maxNumber) => {
            if(isNaN(maxNumber) || !maxNumber) maxNumber = 6;
            let roll = Math.floor(Math.random() * maxNumber) + 1;
            return `I rolled a ${roll}`
        },
        description: "Rolls a die!",
        "author": "Nabil Ridhwanshah",
        usage: "/rolldice maxnumber"
    },
    "/m8b": {
        run: (input) => {
            let choice = Math.floor(Math.random() * 8)
            let choices = [
                "It is certain",
                "You may rely on it",
                "As I see it, yes",
                "Reply hazy try again",
                "Better not tell you now",
                "Concentrate and ask again",
                "My sources say no",
                "My reply is no"
            ]

            return choices[choice]
        },
        description: "Magic 8 Ball!",
        "author": "Nabil Ridhwanshah",
        usage: "/m8b"
    },
}