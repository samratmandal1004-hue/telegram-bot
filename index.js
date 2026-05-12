const TelegramBot = require('node-telegram-bot-api');
const axios = require('axios');

const TOKEN = "8606395384:AAFp0WH0mPj6DhCj4rdrrKrDjauJ6BcS_Vc";

const SHEET_URL = "https://script.google.com/macros/s/XXXXX/exec";

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
