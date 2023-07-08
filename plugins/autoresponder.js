import { sticker } from '../lib/sticker.js'
let handler = m => m

handler.all = async function (m, {conn}) {
let chat = global.db.data.chats[m.chat]
    
if (m.mentionedJid.includes(this.user.jid) && m.isGroup && !chat.isBanned) {
let stiker = await sticker(imagen1, false, global.packname, global.author)  
this.sendFile(m.chat, stiker, 'sticker.webp', null, m, false, { 
contextInfo: { externalAdReply: { title: '⫷᭄©Ванилька﹏✍', body: 'Лёлька﹏✍', sourceUrl: `https://klike.net/uploads/posts/2023-02/1675590147_3-41.jpg`, thumbnail: imagen2}}})}
    
return !0 }
handler.register = true
export default handler
