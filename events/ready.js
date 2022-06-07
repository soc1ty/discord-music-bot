module.exports = (bot) => {
    console.log("ready");

    bot.user.setPresence({ activities: [{ name: 'good music', type: 'LISTENING' }], status: 'idle' });
}