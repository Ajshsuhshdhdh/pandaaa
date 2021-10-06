const { Client, Collection, MessageEmbed } = require(`discord.js`);
const { 
  PREFIX, 
} = require(`../config.json`);

  


module.exports = {
  name: "help",
  aliases: ["h"],
  cooldown: 8,
  description: "**all commands**",
  execute(message) {
    let commands = message.client.commands.array();

    let helpEmbed = new MessageEmbed()
    .setThumbnail(`https://images-ext-1.discordapp.net/external/ywW90Qq3ButrY58SXGKsfdaHJ5Fl3fAX-jCt66kxq2k/%3Fsize%3D1024/https/cdn.discordapp.com/avatars/807350534901071932/323c09ffbcd4777d8b5d14ac80df56a5.png `)
    .setTitle(`**__RED BOT__**`)
    .setDescription(`
╭───────╯<:modeee:895155174115516456>╰───────╮
**__<:modeee:895155174115516456>┊Info Command__**
invite : support : about : ping : prefix : sug : roleuser 
╭───────╯<:modeee:895155174115516456>╰───────╮
**__<:modeee:895155174115516456>┊Moderantor**__

ban : kick : clear
unban : lock : unlock

╭───────╯<:musicc:895157716031520848>╰───────╮
**__<:musicc:895157716031520848>┊Music Commands__**

play : skip : skipto
stop : volume{vol} : nowplaying
shuffle : search : resume
remove : queue : loop
lyrics : radio 

╭───────╯<:gifff:895160463799779388>╰───────╮
**__<:gifff:895160463799779388>┊Gif Commands__**

boy : girl : anime : couple
sad : cartoon : neon : rules
welcome

╭───────╯🍁╰───────╮
**__🍁┊Photo Commands__**
pboy : pgirl : panime
pemoji : pwelcome : rules

╭───────╯╰───────╮
**__<:Redbot:892922899571310642>┊Click__**

<:kurdd:895161567409221702>┊[Kurd Designer](https://discord.gg/AaC2MCVupt)
<:youuu:895167415774740521>┊[Youtube KD](https://youtube.com/channel/UCgtuqXzhuIqLgm912plcENQ)
---------------------
<:phh:895161682878423070>┊[Progress Home](https://discord.gg/5MWPYkyWsz)
<:youuu:895167415774740521>┊[Youtube PH](https://youtube.com/channel/UCHYQh0HXyYPO4FvGhwcTNiQ)
---------------------
<:invitee:895164789150593064>┊[Invite Bot](https://discord.com/oauth2/authorize?client_id=892061148285894736&permissions=8&scope=bot)
`)
   .setFooter(`${message.author.username}#${message.author.discriminator}`, message.member.user.displayAvatarURL({ dynamic: true }))
   .setColor("#F21313");
   message.react("<:emoji_4:822203026776391711>")
    return message.channel.send(helpEmbed).catch(console.error);

  }
};
