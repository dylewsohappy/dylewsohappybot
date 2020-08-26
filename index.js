const Discord = require('discord.js');
const bot = new Discord.Client();

const token = 'NzQ4MDM4OTU0MjYyOTg2ODMz.X0XnkA.NM_1Pyx2qggoKfE6cjAFEQQ02vI'

const PREFIX = '`';

bot.on('ready', MessageChannel=>{
    bot.user.setActivity('Twojego starego', {type: 'WATCHING'})
    console.log('Bot włączony')
})

bot.on('message', message=>{

    let args = message.content.substring(PREFIX.lenght).split(" ");

switch (args[0]){
    case '`siema':
        message.channel.send('Siema , to ja dylew');
        break;
      
    case '`clear':
        if(!message.member.hasPermission('MANAGE_MESSAGES')){
            message.channel.send('Sorry byq, nie masz pozwolenia na to.')
            return;
        }
        message.channel.bulkDelete(args[1])
break;

    
}
})

bot.login(token);
