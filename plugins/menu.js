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

❮ ꜱʜᴀɴᴜᴡᴀ ᴍᴅ ᴄᴏᴍᴍᴀɴᴅ ʟɪꜱᴛ ❯

┌────────────❐
╎☔❮ 𝙼𝙰𝙸𝙽 𝙻𝙸𝚂𝚃 ❯
╎
╎ 👾 ❪ .ᴀʟɪᴠᴇ ❫
╎ 👾 ❪ .ᴘɪɴɢ  ❫
╎ 👾 ❪ .ᴍᴇɴᴜ ❫
╎ 👾 ❪ .ꜱʏꜱᴛᴇᴍ ❫
╎ 👾 ❪ .ʀᴇᴘᴏ ❫
└────────────❐
┌─────────────❐
╎☔❮ 𝙶𝚁𝙾𝚄𝙿 𝙻𝙸𝚂𝚃 ❯
╎
╎ 👾 ❪ .ᴀᴅᴅ ❫
╎ 👾 ❪ . ᴅᴇᴍᴏᴛᴇ ❫
╎ 👾 ❪ . ᴘʀᴏᴍᴏᴛᴇ ❫
╎ 👾 ❪ . ɢᴇᴛᴘɪᴄ ❫
╎ 👾 ❪ .ʀᴇᴍᴏᴠᴇ ❫
╎ 👾 ❪ .ᴋɪᴄᴋ ❫
╎ 👾 ❪ .ꜱᴇᴛɢᴏᴏᴅʙʏᴇ ❫
╎ 👾 ❪ .ꜱᴇᴛᴡᴇʟᴄᴏᴍᴇ ❫
└──────────────❐
await conn.sendMessage(from,{image:{url: `https://i.ibb.co/sKsNmKK/8078.jpg`},caption:dec},{quoted:mek});

}catch(e){
console.log(e)
reply(`${e}`)
}
})
