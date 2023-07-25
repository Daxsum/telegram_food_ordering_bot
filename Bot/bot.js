const { Telegraf } = require("telegraf");
const bot = new Telegraf(process.env.TOKEN);

const web_link = "https://www.go8787.com/";

bot.start((ctx) =>
  ctx.reply("Welcome :)))))", {
    reply_markup: {
      keyboard: [[{ text: "web app", web_app: { url: web_link } }]],
    },
  })
);

bot.launch();
