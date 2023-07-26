import fs from 'fs'
let handler = async (m, { conn, args }) => {
let group = m.chat
conn.reply(m.chat, 'https://chat.whatsapp.com/' + await conn.groupInviteCode(group), m, {
contextInfo: { externalAdReply :{ mediaUrl: null, mediaType: 1, description: null, 
title: 'ССЫЛКА ГРУППЫ',
body: '⫷᭄ʜᴀᴅᴇs-ʙᴏᴛ-ᴍᴅ﹏✍',         
previewType: 0, thumbnail: fs.readFileSync("./views/Menu.jpg"),
sourceUrl: `https://github.com/OFC-YOVANI/HADES-BOT-MD.git`}}})   
}
handler.help = ['linkgroup']
handler.tags = ['group']
handler.command = /^ссылка(gro?up)?$/i
handler.group = true
handler.botAdmin = true

export default handler