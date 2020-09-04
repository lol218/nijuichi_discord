const discord = require('discord.js')
const client = new discord.Client
client.login('NzUxNDk0ODc1NDQyMDUzMjYx.X1J6JA.tOUzyoOmzJMdhmzNX_0odgWeUxY')

client.on('message', message => {
    if (message.content === "ping") {
        message.channel.send('pong')
    }
})