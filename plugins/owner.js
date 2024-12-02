const {cmd , commands} = require('../command')

cmd({
    pattern: "owner",
    desc: "owner the bot",
    category: "main",
    react: "👨‍💻",
    filename: __filename
},

async(conn, mek, m,{from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{

let dec = `*👋 Hello ${pushname}*

> *SHANUWA MD INFO* 

☔ *ᴏᴡɴᴇʀ ɴᴀᴍᴇ -: ꜱʜᴀɴᴜᴡᴀ ᴍᴅ*
☔ *ɴᴜᴍʙᴇʀ* -: 94774609569
☔ *ᴡʜᴀᴛꜱᴀᴘᴘ ᴄʜᴀɴɴᴇʟ-:* https://whatsapp.com/channel/0029VatUyIgJf05e75Nlnc3Y

*2024 ʙᴇꜱᴛ ᴡʜᴀᴛꜱᴀᴘᴘ ʙᴏᴛ*
`
await conn.sendMessage(from,{image:{url: `https://i.ibb.co/ySFMqxp/9825.jpg`},caption:dec},{quoted:mek});

}catch(e){
console.log(e)
reply(`${e}`)
}
})
