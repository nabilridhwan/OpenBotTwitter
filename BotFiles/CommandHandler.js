export default class CommandHandler {
    constructor(inputText, commandList) {
        this.commandList = commandList;
        this.inputText = inputText;
        this.userCommand = this.extractCommand(this.inputText);
        this.userInput = this.extractInput(this.inputText);

        this.commands = Object.keys(this.commandList).map(key => {
            return {
                "name": key,
                "description": this.commandList[key].description,
                "usage": this.commandList[key].usage
            }
        })
    }

    runCommand() {
        // Run the function and with userInput as its arg
        return this.commandList[this.userCommand].run(this.userInput)
    }
    extractInput() {
        try {
            return this.inputText.match(/[^@\w+\/\w+]\w+/g).join("").trim()
        } catch (error) {
            return null
        }
    }

    extractCommand() {
        try {
            return this.inputText.match(/\/\w+/g)[0]
        } catch (errir) {
            return null
        }
    }
}

export function hello(name) {
    return `Hello ${name}!`
}