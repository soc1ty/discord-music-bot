module.exports = async (bot,message,args,argsF,member) => {
    let guildQueue = bot.player.getQueue(message.guild.id);

    {
        guildQueue.skip();
    }
    
};
module.exports.names = ["skip"];