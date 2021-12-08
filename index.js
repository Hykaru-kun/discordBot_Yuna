const Discord = require("discord.js");
const client = new Discord.Client({ intents: ["GUILDS", "GUILD_MESSAGES", "GUILD_MEMBERS"] })
const settings = require('./settings.json');
const fs = require('fs');
const mongoose = require('mongoose')
const log = message => {
    console.log(`[${moment().format('YYYY-MM-DD HH:mm:ss')}] ${message}`);
};

mongoose.connect(settings.mongodbURL, { useNewUrlParser: true, useUnifiedTopology: true }, err => {
    /*if (err) return console.error(err);
    console.log(chalk.bgGreen.black('Connected to MongoDB database!'));*/
});


client.on('ready', () => {
    console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', msg => {
    if (msg.content === `<@${client.user.id}>`) {
        return msg.reply(`My current prefix is .`)
    }
});

console.log('Hello World!')
client.login('Token');
