require('dotenv').config({silent: true});

const config = {
	ENV: process.env.NODE_ENV || 'development',
	TOKEN: process.env.TOKEN,
	BOTANIO_TOKEN: process.env.BOTANIO_TOKEN,
	AUDIO_ID: 'BQADAQADMQADqKphA6x8N-7okUECAg',
	STICKER_ID: 'BQADAQADfQEAArhIlAiFpcvT_BaR-QI',
	PORT: process.env.PORT || 8000,
	HOST: process.env.HOST || '0.0.0.0'
};

export default config;

