let handler = async (m, { conn, usedPrefix, text, command }) => {
let hash = text
if (m.quoted && m.quoted.fileSha256) hash = m.quoted.fileSha256.toString('hex')
if (!hash) throw `*[❗𝐈𝐍𝐅𝐎❗] Стикерам или изображениям можно назначить только текст или команды, чтобы получить назначенный код, используйте команду ${usedPrefix}listcmd*\n\n\n*`
let sticker = global.db.data.sticker
if (sticker[hash] && sticker[hash].locked) throw '*[❗𝐈𝐍𝐅𝐎❗]*ТОЛЬКО ВЛАДЕЛЕЦ МОЖЕТ ВНЕСТИ ИЗМЕНЕНИЯ*'
delete sticker[hash]
m.reply(`*[ ✔ ] *[ ✔ ] ТЕКСТ/КОМАНДА, ПРИСВОЕННЫЕ СТИКЕРУ/ИЗОБРАЖЕНИЮ, БЫЛИ ПРАВИЛЬНО ДОБАВЛЕНЫ В БАЗУ ДАННЫХ*`)}
handler.command = ['delcmd']
handler.rowner = true

export default handler
