const { Message } = require("discord.js")
let {PythonShell} = require('python-shell')
const fs = require("fs");

module.exports = {
    name : 'scrape',
    description : 'scrapes proxies',
    execute(client, message, args) {
        if (args[0] === "all"){

            PythonShell.run('./python_scripts/allproxies.py', null, function (err) {
                if (err) throw err;
              });

            setTimeout(() => {
                message.channel.send('Here are your proxies!');
                message.channel.send({
                    files: ['./results/all_proxies.txt']
                });
            }, 2000)
        }

        else if(args[0] === 'http' || args[0] === 'https'){

            PythonShell.run('./python_scripts/httpproxies.py', null, function (err) {
                if (err) throw err;
              });

              setTimeout(() => {
                message.channel.send('Here are your proxies!');
                message.channel.send({
                    files: ['./results/http_proxies.txt']
                });
            }, 2000)
        }

        else if(args[0] === 'socks4'){

            PythonShell.run('./python_scripts/socks4.py', null, function (err) {
                if (err) throw err;
              });

              setTimeout(() => {
                message.channel.send('Here are your proxies!');
                message.channel.send({
                    files: ['./results/socks4_proxies.txt']
                });
            }, 2000)
        }

        else if(args[0] === 'socks5'){

            PythonShell.run('./python_scripts/socks5.py', null, function (err) {
                if (err) throw err;
              });

              setTimeout(() => {
                message.channel.send('Here are your proxies!');
                message.channel.send({
                    files: ['./results/socks5_proxies.txt']
                });
            }, 2000)
        }

        else if(args[0] != "http" && args[0] != "https" && args[0] != "socks4" && args[0] != "socks5"){
            message.channel.send("You provided an invalid argument. Avaible proxies : `http`, `https`, `socks4`, `socks5` or `all`");
        }
    }
}
