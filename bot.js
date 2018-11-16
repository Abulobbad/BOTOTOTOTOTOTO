const Discord = require('discord.js');
const client = new Discord.Client();
const prefix = '~'
const moment = require("moment");

console.log('=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=')
console.log('         [Wait please .. ]       ')
console.log('=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=')
client.on('ready', () => {
    console.log('')
    console.log('')
    console.log('')
    console.log('')
    console.log('')
    console.log('')
    console.log('')
    console.log('')
  console.log('=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=')
  console.log(`Logged in as [ ${client.user.tag}! ]`);
  console.log('=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=')
  console.log('[           BOT IS ONLINE         ]')
  console.log('=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=')
  console.log('[        info:         ]')
  console.log('=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=')
  console.log(`Servers! [ " ${client.guilds.size} " ]`);
  console.log('=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=')
  console.log(`Users! [ " ${client.users.size} " ]`);
  console.log('=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=')
  console.log(`Channels! [ " ${client.channels.size} " ]`);
  console.log('=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=')
});

client.on('message', msg => {
  if (msg.content === 'برب') {
    msg.reply('تيت :rose:');
  }
});





client.on('ready', () => {
client.user.setGame(`~help ~inv || New Bot❤ `)
client.user.setStatus("Online")
});
client.on("guildCreate", guild => {
  console.log(` Join Bot Of Server ${guild.name} Owner Of Server ${guild.owner.user.username}!`)
});





client.on('message', message => {
  if (!message.content.startsWith(prefix)) return;
  var args = message.content.split(' ').slice(1);
  var argresult = args.join(' ');
  if (message.author.id !== "466279297745813507") return; 

  
  if (message.content.startsWith(prefix + 'setwatch')) {
  client.user.setActivity(argresult, {type: 'WATCHING'})
     console.log('test' + argresult);
    message.channel.sendMessage(`Watch Now: **${argresult}`)
} 

 
  if (message.content.startsWith(prefix + 'setlis')) {
  client.user.setActivity(argresult, {type: 'LISTENING'})
     console.log('test' + argresult);
    message.channel.sendMessage(`LISTENING Now: **${argresult}`)
} 


if (message.content.startsWith(prefix + 'setname')) {
  client.user.setUsername(argresult).then
      message.channel.sendMessage(`Username Changed To **${argresult}**`)
  return message.reply("You Can change the username 2 times per hour");
} 

if (message.content.startsWith(prefix + 'setavatar')) {
  client.user.setAvatar(argresult);
   message.channel.sendMessage(`Avatar Changed Successfully To **${argresult}**`);
}
if (message.content.startsWith(prefix + 'setplay')) {
  client.user.setGame(argresult);
     console.log('test' + argresult);
    message.channel.sendMessage(`Playing: **${argresult}`)
} 

});


client.on('ready', () => {
  client.user.setGame(`✨type ~help | ❤ | ~invite  ✨`, "https://www.twitch.tv/TRexBotDiscord");
});




client.on('message', function(msg) {
  if(msg.content.startsWith (prefix  + 'server')) {
    let embed = new Discord.RichEmbed()
    .setColor('RANDOM')
    .setAuthor(`${msg.guild.name}`, msg.guild.iconURL)
    .setThumbnail(msg.guild.iconURL)
    .setTitle(`Showing Details Of  **${msg.guild.name}**`)
    .addField('🌐** نوع السيرفر**',`[** __${msg.guild.region}__ **]`,true)
    .addField('🏅** __الرتب__**',`[** __${msg.guild.roles.size}__ **]`,true)
    .addField('🔴**__ عدد الاعضاء__**',`[** __${msg.guild.memberCount}__ **]`,true)
    .addField('🔵**__ عدد الاعضاء الاونلاين__**',`[** __${msg.guild.members.filter(m=>m.presence.status == 'online').size}__ **]`,true)
    .addField('📝**__ الرومات الكتابية__**',`[** __${msg.guild.channels.filter(m => m.type === 'text').size}__** ]`,true)
    .addField('🎤**__ رومات الصوت__**',`[** __${msg.guild.channels.filter(m => m.type === 'voice').size}__ **]`,true)
    .addField('👑**__ الأونـر__**',`**${msg.guild.owner}**`,true)
    .addField('🆔**__ ايدي السيرفر__**',`**${msg.guild.id}**`,true)
    .addField('📅**__ تم عمل السيرفر في__**',msg.guild.createdAt.toLocaleString())
    msg.channel.send({embed:embed});
  }
});
  
  




 client.on('message',msg => {
if(msg.content === prefix + 'add') {
 var embed = new Discord.RichEmbed()
.setTitle('Invite Me !')
.setURL('https://discordapp.com/oauth2/authorize?client_id=480056529228267530&permissions=8&scope=bot')
 .setTimestamp()
.setColor('RANDOM')
msg.channel.send({embed})
}
})

 
 

     client.on('message',msg => {
if(msg.content === prefix + 'invite') {
 var embed = new Discord.RichEmbed()
.setTitle('Invite Me !')
.setURL('https://discordapp.com/oauth2/authorize?client_id=480056529228267530&permissions=8&scope=bot')
 .setTimestamp()
.setColor('RANDOM')
msg.channel.send({embed})
}
})


 client.on('message',msg => {
if(msg.content === prefix + 'inv') {
 var embed = new Discord.RichEmbed()
.setTitle('Invite Me !')
.setURL('https://discordapp.com/oauth2/authorize?client_id=480056529228267530&permissions=8&scope=bot')
 .setTimestamp()
.setColor('RANDOM')
msg.channel.send({embed})
}
})


client.on('message', message => {

    if (message.content === "~mutec") {
                        if(!message.channel.guild) return message.reply(' This command only for servers');

if(!message.member.hasPermission('MANAGE_MESSAGES')) return message.reply(' ليس لديك صلاحيات');
           message.channel.overwritePermissions(message.guild.id, {
         SEND_MESSAGES: false

           }).then(() => {
               message.reply("تم تقفيل الشات :white_check_mark: ")
           });
             }

if (message.content === "~unmutec") {
    if(!message.channel.guild) return message.reply(' This command only for servers');

if(!message.member.hasPermission('MANAGE_MESSAGES')) return message.reply('ليس لديك صلاحيات');
           message.channel.overwritePermissions(message.guild.id, {
         SEND_MESSAGES: true

           }).then(() => {
               message.reply("تم فتح الشات:white_check_mark:")
           });
             }
 
});

client.on('message' , message => {
  if(message.author.bot) return;
  if(message.content.startsWith(prefix + "ping")) {
 message.channel.send('pong').then((msg) => {
var PinG = `${Date.now() - msg.createdTimestamp}`
var ApL = `${Math.round(client.ping)}`
      msg.edit(`\`\`\`javascript\nTime taken: ${PinG} ms.\nDiscord API: ${ApL} ms.\`\`\``);
 })
  }  
 });





client.on('message', message => {
  if (message.author.bot) return;
  if (!message.content.startsWith(prefix)) return;

  let command = message.content.split(" ")[0];
  command = command.slice(prefix.length);

  let args = message.content.split(" ").slice(1);

  if (command == "say") {
   message.channel.sendMessage(args.join(""))
   message.delete()
  }
 })


      
//mute
client.on("message", message => {
    if (message.author.bot) return;
    
    let command = message.content.split(" ")[0];
    
    if (command === prefix + "mute") {
          if (!message.member.hasPermission('MANAGE_ROLES')) return message.reply("**⚠ | `[MANAGE_ROLES]`لا يوجد لديك صلاحية**").catch(console.error);
    let user = message.mentions.users.first();
    let modlog = client.channels.find('name', 'log');
    let muteRole = client.guilds.get(message.guild.id).roles.find('name', 'Muted');
    if (!muteRole) return message.reply("**`'Muted'`لا توجد رتبة** \n Muted سوي رتبة ").catch(console.error);
    if (message.mentions.users.size < 1) return message.reply('**.mute <منشن الشخص> **').catch(console.error);
    
    const embed = new Discord.RichEmbed()
      .setColor(0x00AE86)
      .setTimestamp()
      .addField('الأستعمال:', 'اسكت')
      .addField('تم ميوت:', `${user.username}#${user.discriminator} (${user.id})`)
      .addField('بواسطة:', `${message.author.username}#${message.author.discriminator}`)
     
     if (!message.guild.member(client.user).hasPermission('MANAGE_ROLES_OR_PERMISSIONS')) return message.reply('** :cry: `Manage Roles` لا يوجد لدي برمشن**').catch(console.error);
   
    if (message.guild.member(user).roles.has(muteRole.id)) {
  return message.reply("**:mute: تم إعطاء العضو ميوت**").catch(console.error);
  } else {
      message.guild.member(user).addRole(muteRole).then(() => {
  return message.reply("**:white_check_mark: تم إعطاء العضو ميوت كتابي**").catch(console.error);
  });
    }
  };
  });
  
     client.on("message", message => {
    if (message.author.bot) return;
    
    let command = message.content.split(" ")[0];
   //unmute 
    if (command === prefix + "unmute") {
          if (!message.member.hasPermission('MANAGE_ROLES')) return message.reply("**⚠ | `[MANAGE_ROLES]`لا يوجد لديك صلاحية**").catch(console.error);
    let user = message.mentions.users.first();
    let modlog = client.channels.find('name', 'log');
    let muteRole = client.guilds.get(message.guild.id).roles.find('name', 'Muted');
    if (!muteRole) return message.reply("**⚠ | `[MUTE_ROLES]`لا يوجد لديك صلاحية**").catch(console.error);
    if (message.mentions.users.size < 1) return message.reply('**.unmute <منشن الشخص>**').catch(console.error);
    const embed = new Discord.RichEmbed()
      .setColor(0x00AE86)
      .setTimestamp()
      .addField('الأستعمال:', 'اتكلم')
      .addField('تم فك الميوت عن:', `${user.username}#${user.discriminator} (${user.id})`)
      .addField('بواسطة:', `${message.author.username}#${message.author.discriminator}`)
  
    if (!message.guild.member(client.user).hasPermission('MANAGE_ROLES_OR_PERMISSIONS')) return message.reply('** ⚠ | `[MANAGE_ROLES_OR_PERMISSIONS]`لا يوجد لديك صلاحية **').catch(console.error);
  
    if (message.guild.member(user).removeRole(muteRole.id)) {
  return message.reply("**:speaker: تم فك الميوت عن الشخص **").catch(console.error);
  } else {
      message.guild.member(user).removeRole(muteRole).then(() => {
  return message.reply("**:white_check_mark: تم فك الميوت عن الشخص **").catch(console.error);
  });
    }
  
  };
  
  });    
      
 





client.on("guildMemberAdd", member => {
  member.createDM().then(function (channel) {
  return channel.send(`╔╦╦╦═╦╗╔═╦═╦══╦═╗
║║║║╩╣╚╣═╣║║║║║╩╣
╚══╩═╩═╩═╩═╩╩╩╩═╝
:rose:  ولكم نورت السيرفر:rose: 
:crown:اسم العضو  ${member}:crown:  
انت العضو رقم ${member.guild.memberCount} `) 
}).catch(console.error)
})





    
client.on("message", msg => {
    var prefix = "~";
if(msg.content.startsWith (prefix + "id")) {
if(!msg.channel.guild) return msg.reply('**❌ اسف لكن هذا الامر للسيرفرات فقط **');         
const embed = new Discord.RichEmbed();
embed.addField("🌪  الاسم", `**[ ${msg.author.username}#${msg.author.discriminator} ]**`, true)
   .addField("🆔  الايدي", `**[ ${msg.author.id} ]**`, true)
   .setColor("RANDOM")
   .setFooter(msg.author.username , msg.author.avatarURL)
   .setThumbnail(`${msg.author.avatarURL}`)
   .setTimestamp()
   .setURL(`${msg.author.avatarURL}`)
   .addField('🕵  الحالة', `**[ ${msg.author.presence.status.toUpperCase()} ]**`, true)
   .addField('🛰   يلعب', `**[ ${msg.author.presence.game === null ? "No Game" : msg.author.presence.game.name} ]**`, true)
   .addField('🎖  الرتب', `**[ ${msg.member.roles.filter(r => r.name).size} ]**`, true)
   .addField('🤖  هل هو بوت', `**[ ${msg.author.bot.toString().toUpperCase()} ]**`, true);
msg.channel.send({embed: embed})
}
});














var prefix1 = '~'
var ownerbot1 = '<@466279297745813507>'
var lang = 'JavaScript'
client.on("message", msg => {
    if (msg.content === "~bot") { // By Zodo,Adam
var embed = new Discord.RichEmbed() // By Zodo,Adam
.setTitle(`**[-=-=-=-=-=-=-=-=-=-=-=-=-=-=-**__<:TwitterVerified:508975854869807114>info Bot<:TwitterVerified:508975854869807114>__**-=-=-=-=-=-=-=-=-=-=-=-=-=-=-]**`,`** **`) // By Zodo,Adam
.addField(`**__My Name :robot::__**`,`**[ ${client.user.username} ]**`) // By Zodo,Adam
.addField(`**__My Tag :robot::__**`,`**[ ${client.user.discriminator} ]**`) // By Zodo,Adam
.addField(`**__My ID <:iddd:510537500608167979>:__**`,`**[ ${client.user.id} ]**`) // By Zodo,Adam
.addField(`**__My Prefix :compression::__**`,`**[ ${prefix1} ]**`) // By Zodo,Adam
.addField(`**__My Language <:JavaScript:510537500163309568>:__**`,`**[ ${lang} ]**`) // By Zodo,Adam
.addField(`**__Servers <:Server:510537501488840734>:__**`,`**[ ${client.guilds.size} ]**`) // By Zodo,Adam
.addField(`**__Users <:user:510537500666757123>:__**`,`**[ ${client.users.size} ]**`) // By Zodo,Adam
.addField(`**__Channels :writing_hand::skin-tone-1::__**`,`**[ ${client.channels.size} ]**`) // By Zodo,Adam
.addField(`**__Developer :wrench::__**`,`**[ ${ownerbot1} ]**`) // By Zodo,Adam
.setFooter(`${ownerbot1}`, ` https://cdn.discordapp.com/avatars/480056529228267530/54828057851c1a24f075a0597857382b.jpg?size=128`)// By Zodo,Adam
msg.channel.send({embed})
  }  
  });

client.on('message' , message => { 

    var prefix = "~";

     if (message.content === prefix + "allservers") {



if(!message.channel.guild) return;

  if(message.content < 1023) return

  const Embed11 = new Discord.RichEmbed()

.setAuthor(client.user.username,client.user.avatarURL)

.setThumbnail(client.user.avatarURL)

.setDescription(`***السيرفرات الموجودة فيه البوت ${client.guilds.size} \n \n${client.guilds.map(guilds => `- ${guilds.name}`).join('\n')}***`)

         message.channel.sendEmbed(Embed11)

    }

});




var Za7f = [

  "**صورة وجهك او رجلك او خشمك او يدك**.",

  "**اصدر اي صوت يطلبه منك الاعبين**.",

  "**سكر خشمك و قول كلمة من اختيار الاعبين الي معك**.",

  "**روح الى اي قروب عندك في الواتس اب و اكتب اي شيء يطلبه منك الاعبين  الحد الاقصى 3 رسائل**.",

  "**قول نكتة اذا و لازم احد الاعبين يضحك اذا محد ضحك يعطونك ميوت الى ان يجي دورك مرة ثانية**.",

  "**سمعنا صوتك و غن اي اغنية من اختيار الاعبين الي معك**.",

  "**ذي المرة لك لا تعيدها**.",

  "**ارمي جوالك على الارض بقوة و اذا انكسر صور الجوال و ارسله في الشات العام**.",

  "**صور اي شيء يطلبه منك الاعبين**.",

  "**اتصل على ابوك و قول له انك رحت مع بنت و احين هي حامل....**.",

  "**سكر خشمك و قول كلمة من اختيار الاعبين الي معك**.",

  "**سو مشهد تمثيلي عن مصرية بتولد**.",

  "**اعطي اي احد جنبك كف اذا مافيه احد جنبك اعطي نفسك و نبي نسمع صوت الكف**.",

  "**ذي المرة لك لا تعيدها**.",

  "**تعطي اي شخص 5 الاف كرديت**.",

  "**ارمي جوالك على الارض بقوة و اذا انكسر صور الجوال و ارسله في الشات العام**.",

  "**روح عند اي احد بالخاص و قول له انك تحبه و الخ**.",

  "**اكتب في الشات اي شيء يطلبه منك الاعبين في الخاص**.",

  "**قول نكتة اذا و لازم احد الاعبين يضحك اذا محد ضحك يعطونك ميوت الى ان يجي دورك مرة ثانية**.",

  "**سامحتك خلاص مافيه عقاب لك :slight_smile:**.",

  "**اتصل على احد من اخوياك  خوياتك , و اطلب منهم مبلغ على اساس انك صدمت بسيارتك**.",

  "**غير اسمك الى اسم من اختيار الاعبين الي معك**.",

  "**اتصل على امك و قول لها انك تحبها :heart:**.",

  "**لا يوجد سؤال لك سامحتك :slight_smile:**.",

  "**قل لواحد ماتعرفه عطني كف**.",

  "**منشن الجميع وقل انا اكرهكم**.",

  "**اتصل لاخوك و قول له انك سويت حادث و الخ....**.",

  "**روح المطبخ و اكسر صحن او كوب**.",

  "**اعطي اي احد جنبك كف اذا مافيه احد جنبك اعطي نفسك و نبي نسمع صوت الكف**.",

  "**قول لاي بنت موجود في الروم كلمة حلوه**.",

  "**تكلم باللغة الانجليزية الين يجي دورك مرة ثانية لازم تتكلم اذا ما تكلمت تنفذ عقاب ثاني**.",

  "**لا تتكلم ولا كلمة الين يجي دورك مرة ثانية و اذا تكلمت يجيك باند لمدة يوم كامل من الس��رفر**.",

  "**قول قصيدة **.",

  "**تكلم باللهجة السودانية الين يجي دورك مرة ثانية**.",

  "**اتصل على احد من اخوياك  خوياتك , و اطلب منهم مبلغ على اساس انك صدمت بسيارتك**.",

  "**اول واحد تشوفه عطه كف**.",

  "**سو مشهد تمثيلي عن اي شيء يطلبه منك الاعبين**.",

  "**سامحتك خلاص مافيه عقاب لك :slight_smile:**.",

  "**اتصل على ابوك و قول له انك رحت مع بنت و احين هي حامل....**.",

  "**روح اكل ملح + ليمون اذا مافيه اكل اي شيء من اختيار الي معك**.",

  "**تاخذ عقابين**.",

  "**قول اسم امك افتخر بأسم امك**.",

  "**ارمي اي شيء قدامك على اي احد موجود او على نفسك**.",

  "**اذا انت ولد اكسر اغلى او احسن عطور عندك اذا انتي بنت اكسري الروج حقك او الميك اب حقك**.",

  "**اذهب الى واحد ماتعرفه وقل له انا كيوت وابي بوسه**.",

  "**تتصل على الوالده  و تقول لها خطفت شخص**.",

  "** تتصل على الوالده  و تقول لها تزوجت با سر**.",

  "**����تصل على الوالده  و تقول لها  احب وحده**.",

    "**تتصل على شرطي تقول له عندكم مطافي**.",

    "**خلاص سامحتك**.",

    "** تصيح في الشارع انا  مجنوون**.",

    "** تروح عند شخص تقول له احبك**.",



];



client.on('message', message => {

 if (message.content.startsWith("~38ab")) {
 
              if(!message.channel.guild) return message.reply('** This command only for servers**');

var embed = new Discord.RichEmbed()

.setColor('RANDOM')

 .setThumbnail(message.author.avatarURL) 

.addField('raptor' ,

`${Za7f[Math.floor(Math.random() * Za7f.length)]}`)

message.channel.sendEmbed(embed);

console.log('[38ab] Send By: ' + message.author.username)

  }

});





client.on("roleCreate", role => {
  client.setTimeout(() => {
    role.guild.fetchAuditLogs({
        limit: 1,
        type: 30
      })
      .then(audit => {
        let exec = audit.entries.map(a => a.executor.username)
        try {
           let log = role.guild.channels.find('name', 'log');
          if (!log) return;
          let embed = new Discord.RichEmbed()
            .setColor('RANDOM')
            .setTitle('➕ RoleCreated')
            .addField('Role Name', role.name, true)
            .addField('Role ID', role.id, true)
            .addField('By', exec, true)
            .setTimestamp()
          log.send(embed).catch(e => {
            console.log(e);
          });
        } catch (e) {
          console.log(e);
        }
      })
  }, 1000)
})
 client.on("roleDelete", role => {
  client.setTimeout(() => {
    role.guild.fetchAuditLogs({
        limit: 1,
        type: 30
      })
      .then(audit => {
        let exec = audit.entries.map(a => a.executor.username)
        try {
           let log = role.guild.channels.find('name', 'log');
          if (!log) return;
          let embed = new Discord.RichEmbed()
            .setColor('RANDOM')            
            .setTitle('❌ RoleDeleted')
            .addField('Role Name:', role.name, true)
            .addField('Role ID:', role.id, true)
            .addField('By:', exec, true)
            .setTimestamp()
          log.send(embed).catch(e => {
            console.log(e);
          });
        } catch (e) {
          console.log(e);
        }
      })
  }, 1000)
})
   client.on("roleUpdate", (re,updated) => {
    client.setTimeout(() => {
      re.guild.fetchAuditLogs({
          limit: 1,
          type: 30
        })
        .then(audit => {
          let exec = audit.entries.map(a => a.executor.username)
          try {
  
            let log = re.guild.channels.find('name', 'log');
            if (!log) return;
            let embed = new Discord.RichEmbed()
              .setColor('BLACK')
              .setTitle("✏  Role Name Updated")
              .addField("Old",`${re.name}`,true)
              .addField("New",`${updated.name}`,true )
              .addField("Role id",`${re.id}`,true )
              .addField('By', exec, true)
              .setTimestamp()
            log.send(embed).catch(e => {
              console.log(e);
            });
          } catch (e) {
            console.log(e);
          }
        })
    }, 1000)
  })
 client.on("channelDelete",  dc => {
  const channel = dc.guild.channels.find("name", "log")
  if(channel) {
  var embed = new Discord.RichEmbed()
  .setTitle(dc.guild.name)
  .setDescription(`**Channel Deleted Name : ** **${dc.name}** ⬅️`)
  .setColor(`RANDOM`)
  .setTimestamp();
  channel.sendEmbed(embed)
  }
  });
   
  
client.on('messageUpdate', (message, newMessage) => {
    if (message.content === newMessage.content) return;
    if (!message || !message.id || !message.content || !message.guild || message.author.bot) return;
    const channel = message.guild.channels.find('name', 'log');
    if (!channel) return;
     let embed = new Discord.RichEmbed()
       .setAuthor(`${message.author.tag}`, message.author.avatarURL)
       .setColor('RANDOM')
       .setDescription(`✏ **Message Edited
Sender <@${message.author.id}>                                                                                                                         Edited In** <#${message.channel.id}>\n\nBefore Edited:\n \`${message.cleanContent}\`\n\nAfter Edited:\n \`${newMessage.cleanContent}\``)
       .setTimestamp();
     channel.send({embed:embed});
 });
 client.on('messageDelete', message => {
    if (!message || !message.id || !message.content || !message.guild || message.author.bot) return;
    const channel = message.guild.channels.find('name', 'log');
    if (!channel) return;
    
    let embed = new Discord.RichEmbed()
       .setAuthor(`${message.author.tag}`, message.author.avatarURL)
       .setColor('RANDOM')
       .setDescription(`🗑️ **Message Deleted**
**Sender <@${message.author.id}>                                                                                                                        Deleted In** <#${message.channel.id}>\n\n \`${message.cleanContent}\``)
       .setTimestamp();
     channel.send({embed:embed});
 });
 client.on('guildMemberAdd', member => {
    if (!member || !member.id || !member.guild) return;
    const guild = member.guild;
    
    const channel = member.guild.channels.find('name', 'log');
    if (!channel) return;
    let memberavatar = member.user.avatarURL
    const fromNow = moment(member.user.createdTimestamp).fromNow();
    const isNew = (new Date() - member.user.createdTimestamp) < 900000 ? '🆕' : '';
    
    let embed = new Discord.RichEmbed()
       .setAuthor(`${member.user.tag}`, member.user.avatarURL)
       .setThumbnail(memberavatar)
       .setColor('RANDOM')
       .setDescription(`📥 <@${member.user.id}> **Joined To The Server**\n\n`)
       .setTimestamp();
     channel.send({embed:embed});
});
 client.on('guildMemberRemove', member => {
    if (!member || !member.id || !member.guild) return;
    const guild = member.guild;
    
    const channel = member.guild.channels.find('name', 'log');
    if (!channel) return;
    let memberavatar = member.user.avatarURL
    const fromNow = moment(member.joinedTimestamp).fromNow();
    
    let embed = new Discord.RichEmbed()
       .setAuthor(`${member.user.tag}`, member.user.avatarURL)
       .setThumbnail(memberavatar)
       .setColor('RAMDOM')
       .setDescription(`📤 <@${member.user.id}> **Leave From Server**\n\n`)
       .setTimestamp();
     channel.send({embed:embed});
});
 client.on('voiceStateUpdate', (oldM, newM) => {
  let m1 = oldM.serverMute;
  let m2 = newM.serverMute;
   let d1 = oldM.serverDeaf;
  let d2 = newM.serverDeaf;
   let ch = oldM.guild.channels.find('name', 'log')
  if(!ch) return;
     oldM.guild.fetchAuditLogs()
    .then(logs => {
       let user = logs.entries.first().executor
     if(m1 === false && m2 === true) {
       let embed = new Discord.RichEmbed()
       .setAuthor(`${newM.user.tag}`, newM.user.avatarURL)
       .setDescription(`${newM} has muted in server`)
       .setFooter(`By : ${user}`)
        ch.send(embed)
    }
    if(m1 === true && m2 === false) {
       let embed = new Discord.RichEmbed()
       .setAuthor(`${newM.user.tag}`, newM.user.avatarURL)
       .setDescription(`${newM} has unmuted in server`)
       .setFooter(`By : ${user}`)
       .setTimestamp()
        ch.send(embed)
    }
    if(d1 === false && d2 === true) {
       let embed = new Discord.RichEmbed()
       .setAuthor(`${newM.user.tag}`, newM.user.avatarURL)
       .setDescription(`${newM} has deafened in server`)
       .setFooter(`By : ${user}`)
       .setTimestamp()
        ch.send(embed)
    }
    if(d1 === true && d2 === false) {
       let embed = new Discord.RichEmbed()
       .setAuthor(`${newM.user.tag}`, newM.user.avatarURL)
       .setDescription(`${newM} has undeafened in server`)
       .setFooter(`By : ${user}`)
       .setTimestamp()
        ch.send(embed)
    }
  })
});
   client.on("guildBanAdd", (guild, member) => {
  client.setTimeout(() => {
    guild.fetchAuditLogs({
        limit: 1,
        type: 22
      })
      .then(audit => {
        let exec = audit.entries.map(a => a.executor.username);
        try {
          let log = guild.channels.find('name', 'log');
          if (!log) return;
          client.fetchUser(member.id).then(myUser => {
          let embed = new Discord.RichEmbed()
        .setAuthor(exec)
        .setThumbnail(myUser.avatarURL)
        .addField('- Banned User:',`**${myUser.username}**`,true)
        .addField('- Banned By:',`**${exec}**`,true)
        .setFooter(myUser.username,myUser.avatarURL)
            .setTimestamp();
          log.send(embed).catch(e => {
            console.log(e);
          });
          });
        } catch (e) {
          console.log(e);
        }
      });
  }, 1000);
});
      


client.on('message', message => { if(!message.channel.guild) return; if(message.content.startsWith(prefix + 'allbots')) { if (message.author.bot) return; let i = 1; const botssize = message.guild.members.filter(m=>m.user.bot).map(m=>`${i++} - <@${m.id}>`); const embed = new Discord.RichEmbed() .setDescription(`**${message.guild.members.filter(m=>m.user.bot).size} Bots In ${message.guild.name}** ${botssize.join('\n')}`) .setFooter(client.user.username, client.user.avatarURL) .setTimestamp(); message.channel.send(embed) } })



client.on('message', message => {
    var prefix = "~"
  if (message.author.x5bz) return;
  if (!message.content.startsWith(prefix)) return;

  let command = message.content.split(" ")[0];
  command = command.slice(prefix.length);

  let args = message.content.split(" ").slice(1);

  if (command == "ban") {
               if(!message.channel.guild) return message.reply('** هذا الأمر فقذ للسيرفرات!**');
         
  if(!message.guild.member(message.author).hasPermission("BAN_MEMBERS")) return message.reply("**انت لا تمتلك برمشن ` BAN_MEMBERS ` **");
  if(!message.guild.member(client.user).hasPermission("BAN_MEMBERS")) return message.reply("**انا لا امتلك صلاحية ` BAN_MEMBERS ` **");
  let user = message.mentions.users.first();
  let reason = message.content.split(" ").slice(2).join(" ");
  if (message.mentions.users.size < 1) return message.reply("**Mention SomeOne**");
  if(!reason) return message.reply ("**اكتب سبب البان**");
  if (!message.guild.member(user)
  .bannable) return message.reply("**انا لا استطيع تبنيد شخص فوق رتبتي**");

  message.guild.member(user).ban(7, user);

  const banembed = new Discord.RichEmbed()
  .setAuthor(`BANNED!`, user.displayAvatarURL)
  .setColor("RANDOM")
  .setTimestamp()
  .addField("**User:**",  '**[ ' + `${user.tag}` + ' ]**')
  .addField("**By:**", '**[ ' + `${message.author.tag}` + ' ]**')
  .addField("**Reason:**", '**[ ' + `${reason}` + ' ]**')
          .setFooter('T-Rex Bot' , client.user.avatarURL)
 message.channel.send({
    embed : banembed
  })
}
});


client.on('message', message => {
    var prefix = "~"
  if (message.author.x5bz) return;
  if (!message.content.startsWith(prefix)) return;

  let command = message.content.split(" ")[0];
  command = command.slice(prefix.length);

  let args = message.content.split(" ").slice(1);

  if (command == "kick") {
               if(!message.channel.guild) return message.reply('** This command only for servers**');
         
  if(!message.guild.member(message.author).hasPermission("KICK_MEMBERS")) return message.reply("**انت لا تملك برمشن ` KICK_MEMBERS ` **");
  if(!message.guild.member(client.user).hasPermission("KICK_MEMBERS")) return message.reply("**انا لا امتلك صلاحية ` KICK_MEMBERS ` **");
  let user = message.mentions.users.first();
  let reason = message.content.split(" ").slice(2).join(" ");
  if (message.mentions.users.size < 1) return message.reply("**Mention SomeOne**");
  if(!reason) return message.reply ("**اكتب السبب**");
  if (!message.guild.member(user)
  .kickable) return message.reply("**لا استطيع طرد شخص اعلى من رتبتي**");

  message.guild.member(user).kick();

  const kickembed = new Discord.RichEmbed()
  .setAuthor(`KICKED!`, user.displayAvatarURL)
  .setColor("RANDOM")
  .setTimestamp()
  .addField("**User:**",  '**[ ' + `${user.tag}` + ' ]**')
  .addField("**By:**", '**[ ' + `${message.author.tag}` + ' ]**')
  .addField("**Reason:**", '**[ ' + `${reason}` + ' ]**')
           .setFooter('T-Rex Bot' , client.user.avatarURL)
  message.channel.send({
    embed : kickembed
  })
}
});





client.on('message', msg => {
  if(msg.content === prefix + 'help') {
             const embed = new Discord.RichEmbed()
             .setColor("RANDOM")
                         .setDescription(`**
 

╔[❖══════ஜ۩۞۩ஜ══════❖]╗
   Prefix   =    ' ~ '
╚[❖══════ஜ۩۞۩ஜ══════❖]╝
╔[❖══════ஜ۩۞۩ஜ══════❖]╗
    Admin   ✻  Commands
╚[❖══════ஜ۩۞۩ஜ══════❖]╝
 ❖ ~kick <mention > ➾ kick member from server 
 ❖ ~ban  <mention > ➾ ban member from server
 ❖ ~mute < mention > ➾ mute member
 ❖ ~unmute <mention> ➾ unmute member
 ❖ ~bc <message> ➾ message all members in server 
 ❖ ~clear ➾ Clears the chat
 ❖ ~mutec ➾ to mute a channel
 ❖ ~unmutec ➾ to unmute a channel
 ❖ __soon__
 ❖ __soon__
╔[❖══════ஜ۩۞۩ஜ══════❖]╗
   General  ✻ Commands
╚[❖══════ஜ۩۞۩ஜ══════❖]╝
❖ ~avatar ➾ your avatar account // __soon__عشان تشوف صورت حسابك
❖ ~ping ➾ to see ping // عشان تشوف بنقك
❖ ~id ➾ your id // عشان تشوف ايدي حقك
❖ ~cal ➾ for Calculator // الاله الحاسبه
❖ ~say ➾ for Repeat your words whith bot // بوت يكرر كلامك
❖ ~38ab ➾  to give you punishment //يعطيك عقابات
❖ ~server ➾ to give you info about the server // معلومات عن السيرفر
❖ ~bot ➾ to give you info about the bot // معلومات عن البوت
❖ ~ping ➾ to know what is your ping // عشان تعرف كم بنجك
❖ ~allbots ➾ to show you how many bots there are in the server // عشان تعرف كم بوت فلسيرفير
❖ ~invite ➾ to add <@480056529228267530> to your server // لكي تضيف البوت الى سيرفرك
❖ ~user ➾ to see your user // عشان تشوف اليوسر حقك
==================================================================
Server support : Soon!!
==================================================================
bot invite link : https://discordapp.com/oauth2/authorize?client_id=480056529228267530&permissions=8&scope=bot
❤ By ❤  :<@466279297745813507>
==================================================================

**`);
       msg.channel.send('**:mailenvelopepng8: تم ارسال اوامر البوت في الخاص**')
 msg.author.send({embed});
  }
});









client.on('message', message => {
  if (message.guild) {
 let embed = new Discord.RichEmbed()
  let args = message.content.split(' ').slice(1).join(' ');
if(message.content.split(' ')[0] == prefix + 'bc') {
  if (!args[1]) {
message.channel.send("**~bc <message>**");
return;
}
      message.guild.members.forEach(m => {
 if(!message.member.hasPermission('ADMINISTRATOR')) return;
          var bc = new Discord.RichEmbed()
          .setAuthor(message.author.username, message.author.avatarURL)
          .addField(' The server', `${message.guild.name}`, true)
          .addField(' who sended the messege ', `${message.author.username}!${message.author.discriminator}`, true)
          .addField(' the messege ', args)
          .setThumbnail(message.guild.iconURL)
          .setColor('RANDOM')
          m.send(`${m}`,{embed: bc});
      });
      const unknown = new Discord.RichEmbed()
      .setAuthor(message.author.username, message.author.avatarURL)
      .setTitle('✅| the messege is loading ')
      .addBlankField(true)
      .addField('♨| i got sended to  ', message.guild.memberCount , true)
      .addField('📝| the message ', args)
      .setColor('RANDOM')
      message.channel.sendEmbed(embed);
  }
  } else {
      return;
  }
});








const math = require('math-expression-evaluator');
const stripIndents = require('common-tags').stripIndents;

client.on('message', msg => {
if (msg.content.startsWith( "~cal" )) {
  let args = msg.content.split(" ").slice(1);
      const question = args.join(' ');
  if (args.length < 1) {
      msg.reply('**من فضلك .. قم بكتابة سؤال **.');
} else {    let answer;
  try {
      answer = math.eval(question);
  } catch (err) {
      return msg.reply(`Error: ${err}`);
  }

  const embed = new Discord.RichEmbed()
  .setThumbnail('https://banner2.kisspng.com/20180215/ade/kisspng-office-supplies-animation-calculator-5a85e764e3aa68.4914103215187249649325.jpg')
.setDescription(`**
 السؤال يقولك :thinking:  : ${question}
 طبعا الاجابة :writing_hand: : ${answer}**
`)
  msg.channel.send(embed)
  }
};
});



client.on('message', message => {       
if (message.content.startsWith(prefix + 'clear')) { 
    if(!message.channel.guild) return message.reply(':no_entry: | This Command For Servers Only!'); 
        if(!message.member.hasPermission('MANAGE_MESSAGES')) return message.channel.send(':no_entry: | You dont have **MANAGE_MESSAGES** Permission!');
        if(!message.guild.member(client.user).hasPermission('MANAGE_MESSAGES')) return message.channel.send(':no_entry: | I dont have **MANAGE_MESSAGES** Permission!');
 let args = message.content.split(" ").slice(1)
    let messagecount = parseInt(args);
    if (args > 99) return message.reply("**:octagonal_sign: || يجب ان يكون عدد المسح أقل من 100 .**").then(messages => messages.delete(5000))
    if(!messagecount) args = '100';
    message.channel.fetchMessages({limit: messagecount + 1}).then(messages => message.channel.bulkDelete(messages));
    message.channel.send(`\`${args}\` : __عدد الرسائل التي تم مسحها __ `).then(messages => messages.delete(5000));
  }
  });



client.on('message', message => { if (message.content === "~count") 
{ let embed = new Discord.RichEmbed() 
.addField('Count: ' , message.guild.memberCount)
.setColor("RANDOM").setDescription(`${message.guild.name}`)
message.channel.sendEmbed(embed);} });


client.on('message', message => {
    var prefix = "~" // البريفكس
    let command = message.content.split(" ")[0];
  command = command.slice(prefix.length);

  let args = message.content.split(" ").slice(1);


if(command == "draw") { // الامر
    var Canvas = require('canvas')
  , Image = new Canvas.Image
  , canvas = new Canvas(450, 170)
  , ctx = canvas.getContext('2d');
  ctx.font = '30px Impact';
  let args = message.content.split(" ").slice(1);
  
Image.src = canvas.toBuffer();

    console.log(Image);
ctx.drawImage(Image, 0, 0, Image.width / 470, Image.height / 170);
ctx.fillText(args.join("  "),110, 70);


ctx.beginPath();
ctx.lineTo(50, 102);
ctx.stroke();

message.channel.sendFile(canvas.toBuffer());
}
}).on('ready', () => {

});








client.on('message', message => {
          

  if (message.content.startsWith(prefix + "user")) {
   
   if(!message.channel.guild) return message.reply(`هذا الأمر فقط ل السيرفرات ❌`);

       message.guild.fetchInvites().then(invs => {
let member = client.guilds.get(message.guild.id).members.get(message.author.id);
let personalInvites = invs.filter(i => i.inviter.id === message.author.id);
let inviteCount = personalInvites.reduce((p, v) => v.uses + p, 0);
var moment = require('moment');
var args = message.content.split(" ").slice(1);
let user = message.mentions.users.first();
var men = message.mentions.users.first();
var heg;
if(men) {
heg = men
} else {
heg = message.author
}
var mentionned = message.mentions.members.first();
var h;
if(mentionned) {
h = mentionned
} else {
h = message.member
}
moment.locale('ar-TN');
var id = new  Discord.RichEmbed()

.setColor("#0a0909")
.setThumbnail(message.author.avatarURL)
.addField(': تاريخ دخولك للديسكورد',` \`${moment(heg.createdTimestamp).format('YYYY/M/D HH:mm:ss')} \`**\n ${moment(heg.createdTimestamp).fromNow()}**` ,true) 
.addField(': تاريخ دخولك لسيرفرنا', `\`${moment(h.joinedAt).format('YYYY/M/D HH:mm:ss')}  \` **\n ${moment(h.joinedAt).fromNow()} **`, true)
.addField(` :لقد قمت بدعوة `, ` ${inviteCount} `)


.setFooter(message.author.username, message.author.avatarURL)  
message.channel.sendEmbed(id);
})
}



});















client.login('');
