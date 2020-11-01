const config = require("../config.json");

module.exports.run = async (client, message, args) => {
  message.delete();

  if (!args[0]) return message.channel.send("Você deve inserir uma mensagem");
  const msg = args.slice(0).join(" ");

  message.channel.send(msg);
};
