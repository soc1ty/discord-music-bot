module.exports = async (bot,message,args,argsF) => {

        let queue = client.player.createQueue(message.guild.id);
        await queue.join(message.member.voice.channel);
        let song = await queue.play(args.join(' ')).catch(_ => {
            if(!guildQueue)
                queue.stop();
        });
    };
module.exports.names = ["play", "p", "плэй"];