const Discord = require("discord.js");
const client = new Discord.Client();

client.once('ready', () => {
  console.log('Ready!');
});

require('dotenv').config();


