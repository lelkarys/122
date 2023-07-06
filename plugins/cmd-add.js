let handler = async (m, { conn, text, usedPrefix, command }) => {
global.db.data.sticker = global.db.data.sticker || {}
if (!m.quoted) throw '*[❗𝐈𝐍𝐅𝐎❗] ОТВЕТЬТЕ НА НАКЛЕЙКУ ИЛИ ИЗОБРАЖЕНИЕ, К КОТОРОМУ ВЫ ХОТИТЕ ДОБАВИТЬ КОМАНДУ ИЛИ ТЕКСТ*'
if (!m.quoted.fileSha256) throw '*[❗𝐈𝐍𝐅𝐎❗] ВЫ МОЖЕТЕ НАЗНАЧАТЬ КОМАНДЫ ИЛИ ТЕКСТЫ ТОЛЬКО СТИКЕРАМ ИЛИ ИЗОБРАЖЕНИЯМ*'
if (!text) throw `*[❗𝐈𝐍𝐅𝐎❗] 𝙴𝚁𝚁𝙾𝚁 𝙳𝙴 𝚄𝚂𝙾, 𝚃𝙴𝚇𝚃𝙾 𝙵𝙰𝙻𝚃𝙰𝙽𝚃𝙴*\n\n*𝚄𝚂𝙾 𝙲𝙾𝚁𝚁𝙴𝙲𝚃𝙾 𝙳𝙴𝙻 𝙲𝙾𝙼𝙰𝙽𝙳𝙾:*\n*—◉ ${usedPrefix + command} <texto> <responder a sticker o imagen>*\n\n*𝙴𝙹𝙴𝙼𝙿𝙻𝙾 𝙳𝙴 𝚄𝚂𝙾 𝙲𝙾𝚁𝚁𝙴𝙲𝚃𝙾 𝙳𝙴𝙻 𝙲𝙾𝙼𝙰𝙽𝙳𝙾:*\n*—◉ ${usedPrefix + command} <#menu> <responder a sticker o imagen>*\n\n\n*[❗𝐈𝐍𝐅𝐎❗] *USAGE ERROR, MISSING TEXT*\n\nCORRECT USE* OF* *COMMAND*:*\n*—◉ ${usedPrefix + command} *<text> <respond to sticker or image>*\n\n* *EXAMPLE OF USE OF* *COMMAND* :*\n*—◉ ${usedPrefix + command} *</menu> <respond to sticker or image*`
 let sticker = global.db.data.sticker
let hash = m.quoted.fileSha256.toString('base64')
if (sticker[hash] && sticker[hash].locked) throw '*[❗𝐈𝐍𝐅𝐎❗]*ТОЛЬКО ВЛАДЕЛЕЦ МОЖЕТ ВНЕСТИ ИЗМЕНЕНИЯ*'
sticker[hash] = { text, mentionedJid: m.mentionedJid, creator: m.sender, at: + new Date, locked: false }
m.reply(`*[ ✔ ] ТЕКСТ/КОМАНДА, ПРИСВОЕННЫЕ СТИКЕРУ/ИЗОБРАЖЕНИЮ, БЫЛИ ПРАВИЛЬНО ДОБАВЛЕНЫ В БАЗУ ДАННЫХ*`)
}
handler.command = ['setcmd', 'добавитькоманду', 'cmdadd', 'cmdset']
handler.rowner = true
handler.register = true
export default handler
