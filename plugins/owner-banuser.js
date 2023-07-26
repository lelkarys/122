let handler = async (m, { conn, participants, usedPrefix, command }) => {
let BANtext = `[❗]*ОТМЕТЬТЕ ЧЕЛОВЕКА ИЛИ ОТВЕТЬТЕ НА СООБЩЕНИЕ, ОТПРАВЛЕННОЕ ПОЛЬЗОВАТЕЛЕМ, КОТОРОГО ВЫ ХОТИТЕ ЗАБЛОКИРОВАТЬ, НАПРИМЕР:*\n*${usedPrefix + command} @${global.suittag}*`
let who
if (m.isGroup) who = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted.sender
else who = m.chat
let users = global.db.data.users
users[who].banned = true
m.reply('*[❗𝐈𝐍𝐅𝐎❗]ПОЛЬЗОВАТЕЛЬ БЫЛ УСПЕШНО ЗАБАНЕН \n ПОЛЬЗОВАТЕЛЬ НЕ СМОЖЕТ ИСПОЛЬЗОВАТЬ БОТА ДО ТЕХ ПОР, ПОКА ОН НЕ БУДЕТ РАЗБЛОКИРОВАН*')    }
handler.command = /^бан$/i
handler.rowner = true

export default handler
