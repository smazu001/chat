var restify = require('restify');
var builder = require('botbuilder');

// Create bot and add dialogs
var bot = new builder.BotConnectorBot({ appId: '1409612587434', appSecret: '9f859e683ff149b692c4c3f62e963cac' });
bot.add('/', function (session) {
    session.send('Hello World');
});

// Setup Restify Server
var server = restify.createServer();
server.post('/api/messages', bot.verifyBotFramework(), bot.listen());
server.listen(process.env.port || 3978, function () {
    console.log('%s listening to %s', server.name, server.url);
});
