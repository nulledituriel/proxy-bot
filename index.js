const fs = require("fs");
const { Client, Collection } = require('discord.js');
const { TOKEN, PREFIX } = require('./config');
let {PythonShell} = require('python-shell')

const client = new Client();
client.commands = new Collection();

const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));

for (file of commandFiles) {
  const command = require(`./commands/${file}`);
  client.commands.set(command.name, command);
  console.log(client.commands);
}

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`); // voir cours ES6
});

client.on('message', message => {
    if (!message.content.startsWith(PREFIX) || message.author.bot) return;

    const args = message.content.slice(PREFIX.length).split(/ +/); /* retire les espaces après le préfixe + met la suite dans un array [bla, bla, bla] */
    const command = args.shift().toLowerCase(); /* retrait des arguments pour ne garder que la commande*/

    if (!client.commands.has(command)) return;
    client.commands.get(command).execute(client, message, args);
});

client.login(TOKEN);
