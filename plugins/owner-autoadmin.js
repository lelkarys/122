let handler = async (m, { conn, isAdmin }) => {  
if (m.fromMe) return
if (isAdmin) throw '*[❗] ПРИВЕТ СОЗДАТЕЛЬ, КАК ТЫ? ВЫ УЖЕ АДМИН ЭТОЙ ГРУППЫ*'
try {  
await conn.groupParticipantsUpdate(m.chat, [m.sender], "promote")
} catch {
await m.reply('*[❗] ОШИБКА, НЕБЫЛО ВОЗМОЖНОСТИ ДАТЬ ТЕБЕ АДМИНА*')}}
handler.command = /^автоадмин$/i
handler.rowner = true
handler.group = true

handler.botAdmin = true
export default handler
