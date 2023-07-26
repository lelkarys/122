let handler = async (m, { conn, participants, usedPrefix, command }) => {
if (!global.db.data.settings[conn.user.jid].restrict) throw '*[ ⚠️ ] СОЗДАТЕЛЬ НЕ ВКЮЧИЛ  (включить ограничить) напишите создателю\n\n\n[ ⚠️ ]'
let kicktext = `*[❗] ПОМЕТЬТЕ ЧЕЛОВЕКА ИЛИ ОТВЕТЬТЕ НА ГРУППОВОЕ СООБЩЕНИЕ, ЧТОБЫ УДАЛИТЬ ПОЛЬЗОВАТЕЛЯ :*\n*${usedPrefix + command} @${global.suittag}*`
if (!m.mentionedJid[0] && !m.quoted) return m.reply(kicktext, m.chat, { mentions: conn.parseMention(kicktext)}) 
let user = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted.sender
let owr = m.chat.split`-`[0]
await conn.groupParticipantsUpdate(m.chat, [user], 'remove')}
handler.command = /^(снести|echar|hechar|sacar)$/i
handler.admin = true
handler.group = true
handler.botAdmin = true
export default handler
