module.exports = async (bot,message,args,argsF) => {

    if(!message.member.voice.channel) return message.channel.send({
        embeds: [
            {    
                title: "Error",
                description:`You are not in the voice channel`,
                color: "RED"
            }
        ]
    });

    let guildQueue = bot.player.getQueue(message.guild.id);

    message.channel.send({
        embeds: [
            {
                title: "Music is loaded",
                color: "RED"
            }
        ]
    })

    let queue = bot.player.createQueue(message.guild.id);
    await queue.join(message.member.voice.channel);
    let song = await queue.play(args.join(' ')).catch(_ => {
        if(!guildQueue) queue.stop();
    });
    
};
module.exports.names = ["play", "p", "плэй"];