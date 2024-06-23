import * as dotenv from 'ts-dotenv';
import { Telegraf, Markup } from "Telegraf";

const gameShortName = "test";
const url = process.env.WEB_APP_URL;
const token = process.env.TELEGRAM_TOKEN;

export const initBot = () => {
    if (!token) {
        return;
    }
        
    const bot = new Telegraf(token)
    bot.use(Telegraf.log());
    const pathUrl = bot.secretPathComponent();
    // bot.telegram.setWebhook(`${url}/${pathUrl}`);
    // app.use(bot.webhookCallback(`${pathUrl}`));

    bot.start(ctx => ctx.replyWithGame(gameShortName));

    bot.gameQuery(ctx => {
        return ctx.answerGameQuery(`${url}`);
    });
}