const Discord = require('discord.js')
exports.run = async (client, message, args, prefix) => {

    let user = message.mentions.users.first()
    let reason = args[0]
    if (!message.member.hasPermission("MANAGE_MESSAGES")) return message.channel.send("Voce está sem permissao")
    if (!message.guild.me.hasPermission("MANAGE_MESSAGES")) return message.channel.send("Estou sem permissao")
    if (!reason) return message.channel.send("É necessario colocar um numero de 2 à 100")
    if (isNaN(reason)) return message.channel.send("É necessario colocar um numero de 2 à 100")
    if (reason < 2) return message.channel.send("Você deve colocar no mínimo 2")
    if (reason > 100) return message.channel.send("Você deve colocar até 100")

    message.delete()
    let massagem ="";
    let viagem ="";

    message.channel.fetchMessages({
        limit: reason,
    }).then((messages) => {
        if (!user) {
            massagem = messages.filter(m => m.author.id).array().slice(0, reason)
            viagem = massagem.filter(a => a.pinned === false)
        }
        message.channel.bulkDelete(viagem).catch(error => console.log(error.stack))

        let pEmbed = new Discord.RichEmbed()
          .setTitle("Limpeza")
          .addField("Chat limpo por: ", `${message.author.tag}`)
          .setThumbnail("https://cdn.discordapp.com/attachments/727668578509258816/741820370432032919/android_video_1596934094810_HD_1.gif")
          .setColor("GREEN")

          message.channel.send(pEmbed)
      
  message.delete();
     })
}

module.exports.help = {
    name: "clear"
}