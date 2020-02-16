# OpenBot
## Developing
To develop, you need to understand the structure of commands and where are they. The commands for OpenBot are located at `./BotFiles/Commands.js`. Each command is a Javascript object. Here is an example of it below so it is easier to understand:
```js
export default {
    "/command_name": {
        run: (input) => {
            // TODO: Do something with the input!
            // Return something to display!
            return input
        },
        description: "Description of Command and what it does!",
        "author": "Your Name Here",
        usage: "Usage of the command - for example: /command_name your_name_here"
    },

    "/command_name_two": {
        run: (input) => {
            // TODO: Do something with the input!
            // Return something to display!
            return input
        },
        description: "Description of Command and what it does!",
        "author": "Your Name Here",
        usage: "Usage of the command - for example: /command_name_two your_name_here"
    },
}
```
So, a few things to highlight:
1.  The key of the object is the command name with the `/` at the front. This is what the users will type. So example: `@bothandle /command_one Nabil Ridhwanshah`
2.  Inside the key of the object is another object containing four main parts:
    1.  `run()` function
    2.  description
    3.  author
    3.  usage
3.  The `run()` function takes the input as the parameter, input is everything after the `/command`.
    -   Example 1: If the tweet is `@bothandle /command_one Nabil Ridhwanshah` then the input will be `Nabil Ridhwanshah`.
    -   Example 2: If the tweet is `@bothandle /command_one Nabil Ridhwanshah @friendhandle hey check this bot out!` then the input will be `Nabil Ridhwanshah @friendhandle hey check this bot out!`.
4.  Lastly the `run()` function must return something to display. If you return `uwu` then the tweet will be displayed as `@userhandler uwu`