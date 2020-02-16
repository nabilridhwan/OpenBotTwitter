import CommandHandler from "./BotFiles/CommandHandler.js/index.js"
import Commands from "./BotFiles/Commands.js/index.js"
import dotenv from "dotenv"
import Twit from "twit"

// Configure dotenv
dotenv.config()

let T = new Twit({
    consumer_key: process.env.consumer_key,
    consumer_secret: process.env.consumer_secret,
    access_token: process.env.access_token,
    access_token_secret: process.env.access_token_secret
})

let stream = T.stream('statuses/filter', {
    track: '@OpenBeepBot'
})

stream.on('tweet', (tweet) => {
    let {
        text,
        id,
        user
    } = tweet;

    if (text.match("/")) {
        // Run commands!
        let stat = new CommandHandler(text, Commands).runCommand()
        console.log(stat)

        // TODO: Fix not replying!
        T.post("statuses/update", {
            in_reply_to_status_id: id.toString(),
            status: `@${user.screen_name} ${stat}`
        })
    }
})