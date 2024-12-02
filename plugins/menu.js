const {cmd , commands} = require('../command')

cmd({
    pattern: "menu",
    desc: "menu the bot",
    category: "menu",
    react: "📜",
    filename: __filename
},

async(conn, mek, m,{from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{
let dec = `👋 HEY ${pushname} *𝙼𝙴𝙽𝚄 එක තාම හැදුවේ නෑ මන් පොඩ්ඩක් බිසී නිසා ඉක්මනට ඒක හදලා දෙන්නන් 😚❤️‍🩹*

2024 ʙᴇꜱᴛ ᴡʜᴀᴛꜱᴀᴘᴘ ʙᴏᴛ

> ꜱʜᴀɴᴜᴡᴀ හැදුවේ හුත්තෝ 👾`
await conn.sendMessage(from,{image:{url: `https://i.ibb.co/yNGRypR/4665.jpg`},caption:dec},{quoted:mek});

}catch(e){
console.log(e)
reply(`${e}`)
}
})
