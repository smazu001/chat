var express = require('express');
var builder = require('botbuilder');
var pandoraBot = require('pb-node');

var panSessionId;

var options = {
    url:'https://aiaas.pandorabots.com',
    app_id:'1409612587434',
    user_key:'7cba51c3ab38cc4205e16afa67c1adbb',
    botname: 'indi'
};
var panbot = new pandoraBot(options);

panbot.atalk({input:'HI'}, function (err,res){
   if(!err){
       panSessionId = res.sessionid;
       console.log(panSessionId);
   }


});

var app = express();

// Create bot and add dialogs
var bot = new builder.BotConnectorBot({ appId: '1409612587434', appSecret: '9f859e683ff149b692c4c3f62e963cac' });
bot.add('/', function (session) {
    session.send('Hello World2'+ session.getMessageReceived());

});

app.post('/api/messages', bot.verifyBotFramework(), bot.listen());

app.listen(process.env.port || 3978, function () {
    console.log('%s listening on port 3978');
});
