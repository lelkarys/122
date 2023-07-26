let handler = m => m
handler.before = async function (m, {conn, isAdmin, isBotAdmin} ) {
	
if (!m.isGroup) return !1
let chat = global.db.data.chats[m.chat]

if (isBotAdmin && chat.antiArab) {
		
if (m.sender.startsWith('212' || '212')) {
global.db.data.users[m.sender].banned = true
m.reply(`*[❗] ЗДРАВСТВУЙТЕ, СООБЩАЮ ВАМ, ЧТО ВИРТУАЛЬНЫЕ НОМЕРА В ЭТОЙ ГРУППЕ ЗАПРЕЩЕНЫ 🍀*`)
await conn.groupParticipantsUpdate(m.chat, [m.sender], 'remove')}
   
if (m.sender.startsWith('265' || '265')) {
global.db.data.users[m.sender].banned = true
m.reply(`*[❗] ЗДРАВСТВУЙТЕ, СООБЩАЮ ВАМ, ЧТО ВИРТУАЛЬНЫЕ НОМЕРА В ЭТОЙ ГРУППЕ ЗАПРЕЩЕНЫ  🍀*`)
await conn.groupParticipantsUpdate(m.chat, [m.sender], 'remove')} 

if (m.sender.startsWith('972' || '972')) {
global.db.data.users[m.sender].banned = true
m.reply(`*[❗] ЗДРАВСТВУЙТЕ, СООБЩАЮ ВАМ, ЧТО ВИРТУАЛЬНЫЕ НОМЕРА В ЭТОЙ ГРУППЕ ЗАПРЕЩЕНЫ 🍀*`)
await conn.groupParticipantsUpdate(m.chat, [m.sender], 'remove')} 
   
if (m.sender.startsWith('994' || '994')) {
global.db.data.users[m.sender].banned = true
m.reply(`*[❗] ЗДРАВСТВУЙТЕ, СООБЩАЮ ВАМ, ЧТО ВИРТУАЛЬНЫЕ НОМЕРА В ЭТОЙ ГРУППЕ ЗАПРЕЩЕНЫ  🍀*`)
await conn.groupParticipantsUpdate(m.chat, [m.sender], 'remove')}    
   
}}

export default handler
