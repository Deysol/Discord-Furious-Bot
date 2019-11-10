const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
    console.log(`Logged in as ${client.user.tag}!`);
    console.log(`Bot made by: Swofty`);
});
const prefix = 'f!';
client.login('NjQyODk0ODExODYyNTMyMTI3.XcdkfQ.fJQOvYgovvYj2sMRsAtA7i7ee90');

// Prefix-Replys   
client.on('message', function(message) {
    if (message.content.startsWith("f!delrole")) {
        if (message.member.hasPermission("MANAGE_ROLES")) {
            role = message.mentions.roles.first();
                message.member.removeRole(role);
                message.channel.send('Removed role to user');
       }
   }
}); 
client.on('message', function(message) {
    if (message.content.startsWith("f!addrole")) {
        if (message.member.hasPermission("MANAGE_ROLES")) {
            role = message.mentions.roles.first();
                message.member.addRole(role);
                message.channel.send('Added role to user');
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
  if (message.content === 'f!avatar') {
    message.reply(message.author.avatarURL);
  }
});
client.on('message', message => {
  if (message.content === 'f!help') {
   message.channel.send('**Commands** \n f!help - *Helps you with the commands* \n f!avatar - *Gives you your avatar* \n f!kick - *Kicks the designated player* \n f!ban - *Bans the designated player* \n f!clear - *Clears the ENTIRE chat* \n f!addrole - *Adds a role to a user* \n f!delrole - *Removes a role from a user* \n f!resign *Removes any staff related role you have*');
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
        message.reply('That user isn\'t in this guild!');
      }
    } else {
      message.reply('You didn\'t mention the user to kick!');
    }
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
        message.reply('That user isn\'t in this guild!');
      }
    } else {
      message.reply('You didn\'t mention the user to ban!');
    }
  }
});

// Auto-Replys
client.on('message', message=> {
    if (message.isMentioned(client.users.get('579108689852760087'))) {
    message.reply('Do not ping Furious!');
    message.delete(1000);
  }
});



// Other
client.on('message', message => {
        if (message.channel.id === '640071369673146368') {
              message.react("👍");
              setTimeout(function() {
                }, 10000);
              message.react("👎");
             }
});
client.login('NjQyODk0ODExODYyNTMyMTI3.XcdkfQ.fJQOvYgovvYj2sMRsAtA7i7ee90');