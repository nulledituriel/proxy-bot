const { Message } = require("discord.js")
const { MessageEmbed } = require("discord.js");

module.exports = {
    name : 'help',
    description : 'displays help menu',
    execute(client, message, args) {
        let embed = new MessageEmbed()
        .setColor('#07B8F3')
        .setAuthor('ProxyBot Help', message.guild.iconURL())
        .setThumbnail(client.user.displayAvatarURL())
        .setDescription(`Here are the main bot's commands.`)
        .addField('`p/scrape <proxy type>`', 'Scrapes proxies. Avaible proxies are `http`, `https`, `socks4`, `socks5` or `all`')
        .setFooter('ProxyBot', client.user.displayAvatarURL())
    
        message.channel.send(embed);
    }
}