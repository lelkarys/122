import Presence from '@adiwajshing/baileys'
let handler  = async (m, { conn, args, text }) => {
if (!text) throw `*[❗𝐈𝐍𝐅𝐎❗]ВВЕДИТЕ ИМЯ, КОТОРОЕ ЯВЛЯЕТСЯ НОВЫМ НАЗВАНИЕМ ГРУППЫ*`
try {
let text = args.join` `
if(!args || !args[0]) {
} else {
conn.groupUpdateSubject(m.chat, text)}
} catch (e) {
throw '*[❗𝐈𝐍𝐅𝐎❗]ИЗВИНИТЕ, ПРОИЗОШЛА ОШИБКА, В НАЗВАНИИ НЕ МОЖЕТ БЫТЬ БОЛЕЕ 25 ХАРАКТЕРИСТИК*'
}}
handler.help = ['setname <text>']
handler.tags = ['group']
handler.command = /^(названиегруппы)$/i
handler.group = true
handler.admin = true

export default handler
