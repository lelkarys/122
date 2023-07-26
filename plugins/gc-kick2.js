let handler = async (m, { conn, participants, usedPrefix, command }) => {
if (!global.db.data.settings[conn.user.jid].restrict) throw '*[ ⚠️ ] СОЗДАТЕЛЬ НЕ ВКЮЧИЛ  (включить ограничить) напишите создателю*'
let kicktext = `*[❗] Пометьте человека или ответьте на сообщение группы, чтобы удалить пользователя* /n/n*—◉пример:*\n*${usedPrefix + command} @${global.suittag}*`
if (!m.mentionedJid[0] && !m.quoted) return m.reply(kicktext, m.chat, { mentions: conn.parseMention(kicktext)}) 
if (m.mentionedJid.includes(conn.user.jid)) return  
let user = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted.sender
let owr = m.chat.split`-`[0]
await conn.groupParticipantsUpdate(m.chat, [user], 'remove')}
handler.command = /^(снести2|echar2|hechar2|sacar2)$/i
handler.admin = true
handler.group = true

handler.botAdmin = true
export default handler
