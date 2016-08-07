import bot from '../../bot';
import botanio from '../../botanio';
import {AUDIO_ID, STICKER_ID} from '../../config';

function roundaboutCommand(msg) {
	botanio.track(msg, 'roundabout');
	bot.sendAudio(msg.chat.id, AUDIO_ID)
		.then(() =>	bot.sendSticker(msg.chat.id, STICKER_ID));
}

export default [/^\/roundabout/, roundaboutCommand];

