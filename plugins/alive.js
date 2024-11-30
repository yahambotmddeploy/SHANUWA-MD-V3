const config = require('../config')
const {cmd , commands} = require('../command')

cmd({
    pattern: "alive",
    desc: "Check bot online or no.",
    category: "main",
    react: "👾",
    filename: __filename
},
async(conn, mek, m,{from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{
let des = `*හායි හුත්තෝ* ,${pushname}\n *I Am AlIVE NOW....! 🖐🏻*

╭════════════⊷❍ 
┊
┊FOR MORE DETAILS  ,   TYPE ( *.menu*) 🔐
┊
╰════════════⊷❍

*- ꜱʜᴀɴᴜᴡᴀ ɪꜱ ᴡᴇʙ ᴄᴏᴍɪɴɢ ꜱᴏᴏɴ*


> 2024 ʙᴇꜱᴛ ᴡʜᴀᴛꜱᴀᴘᴘ ʙᴏᴛ`
return await conn.sendMessage(from,{image: {url: `https://i.ibb.co/2qD0Syx/6648.jpg`},caption: des},{quoted: mek})
}catch(e){
console.log(e)
reply(`${e}`)
}
})
