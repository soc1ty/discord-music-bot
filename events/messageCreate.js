const { Guild } = require('discord.js');

module.exports = (bot, message) => {
    if(message.author.bot) return;
    const {content, author, guild} = message;
    const config = require('../config.json');

    const 
        messageArray = content.split(' '), 
        command = messageArray[0].replace(config.prefix, "");
        args = messageArray.slice(1), 
        messageArrayFull = content.split(' '), 
        argsF = messageArrayFull.slice(1),
	    commandRun = bot.commands.get(command);

    if(commandRun) commandRun(bot,message,args,argsF)
    .then(any => console.log(any))
    .catch(err => console.error(err));

};