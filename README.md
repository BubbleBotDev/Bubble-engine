# EN - Bubble Engine

### Are you looking for a version in another language? We also have a [Polish](PL-README.md) version.

Bubble bot engine on which you can build your very own bot
in discord.js.

Contact us: support@bubble.tk

[![](https://bubble.tk/bubble.png)](https://bubble.tk)

# Documentation

## Config

### Step 1.
In path src/config create a file named ".env"
An example of completing the file:

```env
token=BOT_TOKEN
mongoUrl=MONGODB_URL
```

If you are not using MongoDB, or you are using it locally,
paste `mongodb://localhost:27017` in place of this parameter.

### Step 2.
In the src / config folder, navigate to the config.js file
Complete it like this:

```js
require("dotenv").config({
    path: __dirname + "/.env"
})
    

module.exports = {
    prefix:"-",
    programers: ["0123456789"], // here, instead of "0123456789", paste your ID and / or ID of other people who have full control over the bot!
    testers: ["0123456789"], // here you CAN (you don't have to) paste in the id of your bot's "testers". Their access will be limited.
}

```

## Command creation

To create a new command, go to the src / cmds folder and then create
file "commandname.cmd.js", of course without the quotes and with the change of "commandname"
on the name of your command.

Next, define your command information. I present the formula below:

```js
module.exports = {
    name: "nazwakomendy", // NAZWA KOMENDY
    args: 1, // ILOSC ARGUMENTOW NIEZBĘDNA DO WYKONANIA KOMENDY
    ussage: "@wzmianka", // SPOSÓB UŻYCIA KOMENDY
    
    run(msg, args) {
      // Tutaj umieść swój kod
    }
```

## Starting a bot

In Visual Studio Code, just press the ▶ button on the NPM "start" script
or "dev:watch"

If running the bot from the command console, type in the root location of the bot
"node src index.js"

------------------------------------------------------------------------------------
### Full documentation (currently only in Polish) - https://github.com/Titon191/Bubble-engine/wiki/Dokumentacja
------------------------------------------------------------------------------------

## License
--------------------------------------------------------------------------------------
This project is released under the MIT license. See the LICENSE file for more details.

Donate us
-------------------------------------------------------------------------------------
To make the Bubble bot grow better and faster, you can make a donation to your PayPal account: natan.lipinski07@gmail.com, or your bank account (for an account number please contact support@bubble.tk or titondesign.kontakt@gmail.com )

PayPal > https://paypal.me/natanlipinski

Bank account (please contact support) > `75 1140 **** **** **** **** 1145`
