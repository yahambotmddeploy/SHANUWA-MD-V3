const {cmd , commands} = require('../command')

cmd({
    pattern: "menu",
    desc: "menu the bot",
    category: "menu",
    react: "📃",
    filename: __filename
},

async(conn, mek, m,{from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{
let dec = `👋 HEY ${pushname} 
❮ NOT MENU 💀❯🔎*

${menu.search}

*This bot was created by the DARK-X-TEAM, more information about this bot will be posted on our channel. Keep following the channel.👇*

*👥 https://whatsapp.com/channel/0029ValzLhUBqbrFa8tMPg3U 👥*

╚═════════════════════════◊
2024 ʙᴇᴀᴛ ᴡʜᴀᴛꜱᴀᴘᴘ ʙᴏᴛ
`
await conn.sendMessage(from,{image:{url: `https://i.ibb.co/sKsNmKK/8078.jpg`},caption:dec},{quoted:mek});

}catch(e){
console.log(e)
reply(`${e}`)
}
})
