const { CommandoClient } = require('discord.js-commando');
const config = require('./config.json')
const path = require('path');
const discord = require('discord.js')

const client = new CommandoClient({
    commandPrefix: config.bot.prefix,
    unknownCommandResponse: false,
    owner: config.owner.id,
    disableEveryone: true
});

client.registry
    .registerDefaultTypes()
    .registerGroups([
        ['allcommands', 'All command']
    ])
    .registerDefaultGroups()
    .registerDefaultCommands()
    .registerCommandsIn(path.join(__dirname, 'commands'));

client.on('ready', () => {
    console.log('BOT: Bot Started');
    client.user.setActivity('Commando! Go');
});

client.login(config.bot.token);
