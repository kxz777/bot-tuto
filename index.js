const http = require("http");
const express = require("express");
const app = express();
app.get("/", (request, response) => {});
app.listen(process.env.PORT);
setInterval(() => {
  http.get(`http://${process.env.PROJECT_DOMAIN}.glitch.me/`);
}, 280000);

//PortGitEmCima^//
const Discord = require("discord.js");
const bot = new Discord.Client();
const client = new Discord.Client();
const config = require("./config.json");
console.log("Starting Bot...");

///////////////////////Status////////////////////////

///////////////////////Comandos////////////////////////

client.on("message", message => {
  if (message.channel.type == "dm") return;
  if (message.author.bot) return;
  if (!message.content.startsWith(config.prefix)) return;

  let command = message.content.split(" ")[0];
  command = command.slice(config.prefix.length);

  let args = message.content.split(" ").slice(1);

  try {
    let commandFile = require(`./comandos/${command}.js`);
    commandFile.run(client, message, args);
  } catch (e) {
    message.delete();
    message.reply(
      "**Esse comando não existe ou foi escrito de maneira errada!**"
    );
  }
});

///////////////////////StartBotToken////////////////////////
client.login(process.env.Token);