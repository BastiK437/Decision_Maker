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
    
	const name  = message.author;
  
	const date  = new Date();
	
	// 0-6 
	// 0 sunday, 1 monday, 2 tuesday, 3 wednesday, 4 thursday, 5 friday, 6 saturday, 7 sunday
	const day   = date.getDay();
	// 0-23
	const hours = date.getHours();
	
	const timeFac = 0;
	const weekFac = 0;
	const randomFac = 0;

	if(day <= 4) {
		// during the week
		weekFac = 1;
	}else {
		// weekend
		weekFac = 0.3;
	}

	switch(hours){
		// 22 till 3 o'clock increase probability to go in bed
		case 22:
			timeFac = 0.1;
			break;
		case 23: 
			timeFac = 0.2;
			break;
		case 0:
			timeFac = 0.3;
			break;
		case 1: 
			timeFac = 0.4;
			break;
		case 2: 
			timeFac = 0.45;
			break;
		// 3 till 10 o'clock fac = 0.5
		case 3:
		case 10:
			timeFac = 0.5;
			break;
		// 11 till 21 o'clock don't go into bed
		case 11:
		case 21:	
			timeFac = -2;
			break;
	}
	randomFac = timeFac + weekFac;

	if (message.content === '!DM') {
		const random = getRandomInt(100) * randomFac;
		if (random >= 50) {	// go to bed
			message.channel.send('Geh ins Bett ' + name + '!');
		} else if (random < 50) { // stay online
			message.channel.send('Zock noch eine Runde ' + name + '!');
    } 
});