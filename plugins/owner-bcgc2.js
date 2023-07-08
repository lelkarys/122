let handler = async (m, { conn, text, participants, isAdmin, isOwner, usedPrefix, command}) => {
let users = participants.map(u => u.id).filter(v => v !== conn.user.jid)
let groups = Object.entries(conn.chats).filter(([jid, chat]) => jid.endsWith('@g.us') && chat.isChats && !chat.metadata?.read_only && !chat.metadata?.announce).map(v => v[0])
let fproducto = { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(false ? { remoteJid: "17608914335@s.whatsapp.net" } : {}) }, message: { "productMessage": { "product": { "productImage":{ "mimetype": "image/jpeg", "jpegThumbnail": imagen1 }, "title": `ᴄᴏᴍᴜɴɪᴄᴀᴅᴏ ᴏғɪᴄɪᴀʟ ᴀ ɢʀᴜᴘᴏs`, "description": "⫷᭄©𝙷𝙰𝙳𝙴𝚂-𝙱𝙾𝚃-𝙾𝙼𝙴𝙶𝙰﹏✍", "currencyCode": "USD", "priceAmount1000": "1000000000", "retailerId": "Ghost", "productImageCount": 1 }, "businessOwnerJid": `0@s.whatsapp.net` }}}
if (!m.quoted) throw `Ответьте на сообщение с помощью команды *${usedPrefix + command}* чтобы отправить уведомление.`
for (let id of groups) {
await conn.sendMessage(id, { forward: m.quoted.fakeObj, mentions: (await conn.groupMetadata(`${id}`)).participants.map(v => v.id) }, { quoted: fproducto })
}
m.reply(`*[❗𝐈𝐍𝐅𝐎❗] ОТПРАВИЛ ВСЕГО В ${groups.length} ЧАТОВ*\n\n*СОЗДАТЕЛЬ, Я ОТПРАВИЛ ВАШЕ СООБЩЕНИЕ*`)  
}
handler.help = ['обьявление2']
handler.tags = ['owner']
handler.command = /^(обьявление2)$/i
handler.owner = true
handler.register = true
export default handler
