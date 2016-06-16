var express = require('express');
var builder = require('botbuilder');

var app = express();

// Create bot and add dialogs
var bot = new builder.BotConnectorBot({ appId: '1409612587434', appSecret: '9f859e683ff149b692c4c3f62e963cac' });
bot.add('/', function (session) {
    session.send('Hello World2');
});

app.post('/api/messages', bot.verifyBotFramework(), bot.listen());

app.listen(process.env.port || 3978, function () {
    console.log('%s listening on oirt 3978');
});
