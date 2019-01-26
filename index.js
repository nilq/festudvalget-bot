const builder = require('botbuilder'),
    builderTeams = require('botbuilder-teams'),
    restify = require('restify');

const connector = new builderTeams.TeamsChatConnector({
    appId: '',
    appPassword: ''
});

const bot = new builder.UniversalBot(connector)
    .set('storage', new builder.MemoryBotStorage());

bot.dialog('/', session => {
    session.send('You said: ' + session.message.text);
});

const server = restify.createServer();
server.post('/api/messages', connector.listen());
server.listen(3978, () => {
    console.log('%s listening to %s', server.name, server.url);
});
