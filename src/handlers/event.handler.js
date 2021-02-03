const fs = require("fs")
const f = require(__dirname + "/../functions.js")
const chalk = require("chalk")
const { Constants: { Events } } = require("discord.js")
const { dirname } = require("path")
const haste = new hastebin()
const serverEvents = Object.values(Events)

module.exports = (client) => {
    const events = fs.readdirSync(__dirname + "/../events").filter(file => file.endsWith("event.js"))

    for (const file of events) {
        const event = require(__dirname + `/../events/${file}`)
        
     

        if (serverEvents.includes(event.name)) {
             client.on(event.name, event.run)
        
            } else {

                console.log(chalk.red(`Event ${event.name} w pliku ${file} nie istnieje.`))

                process.exit(1)
                
            }

        
      
        }
    }

