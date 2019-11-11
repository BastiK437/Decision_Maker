// require the discord.js module
const Discord = require('discord.js');

// create a new Discord client
const client = new Discord.Client();

// DEBUG modus
const DEBUG = true;

function getRandomInt(max) {
	return Math.floor(Math.random() * Math.floor(max));
}

// when the client is ready, run this code
// this event will only trigger one time after logging in
client.once('ready', () => {
	console.log('Ready!');
});

// Get token from console input
const token = process.argv[2];

////////////////////////////////////////////////////////////////////
// login to Discord with your app's token || Error on raspberry pi
//const fs = require('fs');
//const token = fs.readFileSync("token").toString();
////////////////////////////////////////////////////////////////////

client.login(token);

client.on('message', message => {
	// console.log(message.content);
    
	const name  = message.author;
	const date  = new Date();
	
	// 0-6 
	// 0 sunday, 1 monday, 2 tuesday, 3 wednesday, 4 thursday, 5 friday, 6 saturday, 7 sunday
	const day   = date.getDay();
	// 0-23
	const hours = date.getHours();
	
	var timeFac = 0.0;
	var weekFac = 0.0;
	var randomFac = 0.0;

	if(DEBUG) {
		console.log("Day: " + day);
		console.log("Hour: " + hours);
	}

	if(day <= 4) {
		// during the week
		weekFac = 0.7;
	}else {
		// weekend
		weekFac = 0.3;
	}

	switch(hours){
		// 22 till 3 o'clock increase fac
		case 22:
			timeFac = 0.1;
			break;
		case 23: 
			timeFac = 0.2;
			break;
		case 0:
			timeFac = 0.4;
			break;
		case 1: 
			timeFac = 0.5;
			break;
		case 2: 
			timeFac = 0.6;
			break;
		// 3 till 10 o'clock fac = 0.7
		case 3:
		case 10:
			timeFac = 0.7;
			break;
		// 11 till 21 o'clock don't go into bed or stop drinking
		case 11:
		case 19:
		case 21:	
			timeFac = -2;
			break;
	}
	randomFac = timeFac + weekFac;
	
	var random = getRandomInt(100) * randomFac;

	if(DEBUG) {
		console.log('Week fac: ' + randomFac);
		console.log('Final fac: ' + random);
	}

	switch(message.content) {
		case '!DM Bett':
		case '!DM bett':
			if (random >= 50) {	// go to bed
				message.channel.send('Geh ins Bett ' + name + '!');
			} else if (random < 50) { // stay online
				message.channel.send('Zock noch eine Runde ' + name + '!');
			}
			break;
		case '!DM Bier':
		case '!DM bier':
			if (random >= 50) {	// stop drinking
				message.channel.send('Trink kein Bier mehr ' + name + '!');
			} else if (random < 50) { // drink one more
				message.channel.send('Trink noch ein Bier ' + name + '!');
			}
			break;
	}
});
