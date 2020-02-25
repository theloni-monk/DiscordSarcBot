var Discord = require('discord.js');
const auth = {token: "Njc4MTU3MjUwMTM2ODk5NTg0.XlRyww.iR2DMaEMlDtP5eXaiYIFSMBbBWs"};

// Initialize Discord Bot
var bot = new Discord.Client();

bot.on('ready', (evt) => {
    console.log('Connected');
    console.log('Logged in as: ');
    console.log(bot.user.username + ' - (' + bot.user.id + ')');
});

//bot.on('message', (msg)=>{console.log('message recieved')})
bot.on('messageReactionAdd', (msgReaction, usr) => {
    //console.log('messageReaction triggered: ' + msgReaction.emoji.identifier);
    if(msgReaction.emoji.identifier === '%F0%9F%99%84'){ // :rolling_eyes:  identifier
        let sarcasticMsg = deadMemeSarcasmCaps(msgReaction.message.cleanContent);
        msgReaction.message.channel.send(sarcasticMsg, {tts: true});
    }
});

function deadMemeSarcasmCaps(str){
    let sarcStr = '';
    for(let i = 0; i< str.length; i++){
        sarcStr += (i%2) ? str.charAt(i).toUpperCase() : str.charAt(i);
    }
    return sarcStr;
}

bot.login(auth.token);
