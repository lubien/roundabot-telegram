import TelegramBot from 'node-telegram-bot-api';
import {ENV, TOKEN, PORT, HOST} from './config';

const options = ENV === 'development' ?
	{polling: true} :
	{webHook: {port: 8000, host: HOST}};

const bot = new TelegramBot(TOKEN, options);

export default bot;

