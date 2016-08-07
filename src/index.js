import {readdirSync} from 'fs';
import reqAll from 'req-all';
import camelCase from 'camel-case';
import bot from './bot';
import {ENV, HOST, PORT} from './config';

const commandTypes = readdirSync('./src/commands');

for (const folder of commandTypes) {
	const event = camelCase(folder);

	for (const args of Object.values(
		reqAll(`./commands/${folder}`)
	)) {
		bot[event](...args);
	}
}

console.log('Initialized bot with ENV', ENV);
if (ENV === 'production') {
	console.log(`Listening at ${HOST}:${PORT}`);
}

