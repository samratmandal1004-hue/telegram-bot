const TelegramBot = require('node-telegram-bot-api');
const axios = require('axios');

const TOKEN = "YOUR_BOT_TOKEN";

const SHEET_URL = "YOUR_GOOGLE_SCRIPT_URL";

const bot = new TelegramBot(TOKEN, {
  polling: true
});

bot.on('channel_post', async (msg) => {

  try {

    const title = msg.caption || "No Title";

    const video = msg.video
      ? `https://t.me/c/${msg.chat.id}/${msg.message_id}`
      : "";

    await axios.post(SHEET_URL, {
      title,
      video
    });

    console.log("Saved");

  } catch (err) {

    console.log(err);

  }

});
