const Discord = require('discord.js');
const client = new Discord.Client();

const fs = require('fs');

var annoys = Number(fs.readFileSync('annoys.txt'));

client.on('ready', () => {
    console.log(`Logged in as ${client.user.tag}!`);
    updateAnnoys();
});

client.on('message', msg => {
    if (msg.content.toLowerCase() == '#reformed' && msg.author.id != '222844795142275072') {
        msg.channel.send('https://twitter.com/Hyde_R6/status/960929070606413825'); // ANNOY LEVEL TWO
        annoys++;
        fs.writeFileSync('annoys.txt', annoys);
        updateAnnoys();
    }
});

// ANNOY LEVEL 3 IS REACHED WHEN EVERYONE SPAMS #reformed SIMULTANIOUSLY

client.login('<use your own token>');

function updateAnnoys() {
    client.user.setActivity(annoys + ' ANNOYS', { type: "WATCHING" }); // ANNOY LEVEL ONE
}
