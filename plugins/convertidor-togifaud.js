let handler = async (m, { conn, usedPrefix, command }) => {
if (!m.quoted) throw `*[❗𝐈𝐍𝐅𝐎❗]ОТВЕТЬТЕ НА ВИДЕО, КОТОРОЕ ВЫ ХОТИТЕ ПРЕОБРАЗОВАТЬ В ФОРМАТ GTF, СО ЗВУКОМ *`
const q = m.quoted || m
let mime = (q.msg || q).mimetype || ''
if (!/(mp4)/.test(mime)) throw `*[❗]*ТИП ФАЙЛА ${mime} ЭТО НЕПРАВИЛЬНЫЙ ОТВЕТ НА ВИДЕО, КОТОРОЕ ВЫ ХОТИТЕ ПРЕВРАТИТЬ В GIF СО ЗВУКОМ*`
m.reply(global.wait)
let media = await q.download()
conn.sendMessage(m.chat, { video: media, gifPlayback: true, caption: '*Вот ваш GIF со звуком, При открытии он воспроизводится с помощью aудио*' }, { quoted: m })}
handler.command = ['togifaud']

export default handler
