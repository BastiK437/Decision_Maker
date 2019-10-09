// require the discord.js module
const Discord = require('discord.js');

// create a new Discord client
const client = new Discord.Client();

function getRandomInt(max) {
	return Math.floor(Math.random() * Math.floor(max));
}

// when the client is ready, run this code
// this event will only trigger one time after logging in
client.once('ready', () => {
	console.log('Ready!');
});

// login to Discord with your app's token
const fs = require('fs');
const textByLine = fs.readFileSync('token').toString();

client.login(textByLine);

client.on('message', message => {
	// console.log(message.content);

	// const str = message.content;
	// const pos = str.search('!DM');
	const name = message.author;

	if (message.content === '!DM') {
		const random = getRandomInt(4);
		if (random === 0) {
			message.channel.send ('Geh ins Bett ' + name + '!');
		} else if (random === 1 || random === 2) {
			message.channel.send('Zock noch eine Runde ' + name + '!');
    } else if (random === 3) {
      message.channel.send('Geh ins Bett und wixx dir noch einen ' + name + '!');
		} else {
			message.channel.send('error');
		}
	}
});