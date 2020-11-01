const { RichEmbed } = require("discord.js")
module.exports.run = (bot ,message, args, emoji) => {
message.channel.send(new RichEmbed()
.setColor('BLUE') 
.setThumbnail("https://images-ext-1.discordapp.net/external/478w6sHC10rbkvT86CHYPO6rHZuDKkpiNr7vTInVtGE/https/cdn.discordapp.com/icons/603022898566791208/7cf7943931f3ea517485baaa7afcffcd.jpg")
.setTitle(``)  
.setDescription(`
Olá!
Bem, parece que você esta precisando de um suporte melhorado né?!
Então entre no meu servidor de suporte abaixo.
Link: https://discord.gg/tNed67v
`)    
    .setFooter(`Comando solicitado por: ${message.author.tag}`, `${message.author.avatarURL}`)    
);
}
exports.config = {
    name: 'suporte',
    aliases: ['suporte','support']
}