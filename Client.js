const Discord = require('discord.js'),
    config = require('./config.json');
    fs = require('fs'),
config.cfg.intents = new Discord.Intents(config.cfg.intents);

const bot = new Discord.Client(config.cfg);
bot.login(config.token);

const { Player } = require("discord-music-player");
const player = new Player(bot, {
    leaveOnEmpty: false,
});
bot.player = player;

require('./events')(bot);

bot.commands = new Discord.Collection();
bot.commands.any = [];

const commandsFilles = fs.readdirSync('./commands');

for (const file of commandsFilles) {
    const comand = require(`./commands/${file}`);
    comand.names.forEach(el => {
        bot.commands.set(el, comand);
    });
    bot.commands.any.push(comand);
}