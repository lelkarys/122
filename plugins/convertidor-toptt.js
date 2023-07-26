import { toPTT } from '../lib/converter.js'
let handler = async (m, { conn, usedPrefix, command }) => {
let q = m.quoted ? m.quoted : m
let mime = (m.quoted ? m.quoted : m.msg).mimetype || ''
if (!/video|audio/.test(mime)) throw `*[❗𝐈𝐍𝐅𝐎❗]ОТВЕТЬТЕ НА ВИДЕО ИЛИ АУДИО, КОТОРЫЕ БЫЛИ ПРЕОБРАЗОВАНЫ В ГОЛОСОВУЮ ЗАМЕТКУ*`
let media = await q.download?.()
if (!media && !/video/.test(mime)) throw '*[❗𝐈𝐍𝐅𝐎❗]ИЗВИНИТЕ, ПРОИЗОШЛА ОШИБКА ПРИ ЗАГРУЗКЕ ВАШЕГО ВИДЕО, ПОЖАЛУЙСТА, ПОВТОРИТЕ ПОПЫТКУ*'
if (!media && !/audio/.test(mime)) throw '*[❗𝐈𝐍𝐅𝐎❗] ИЗВИНИТЕ, ПРОИЗОШЛА ОШИБКА ПРИ ЗАГРУЗКЕ ВАШЕГО АУДИО, ПОЖАЛУЙСТА, ПОВТОРИТЕ ПОПЫТКУ*'
let audio = await toPTT(media, 'mp4')
if (!audio.data && !/audio/.test(mime)) throw '*[❗𝐈𝐍𝐅𝐎❗]ИЗВИНИТЕ, ПРОИЗОШЛА ОШИБКА ПРИ ПРЕОБРАЗОВАНИИ ВАШЕГО АУДИО В ГОЛОСОВУЮ ЗАМЕТКУ, ПОЖАЛУЙСТА, ПОВТОРИТЕ ПОПЫТКУ*'
if (!audio.data && !/video/.test(mime)) throw '*[❗𝐈𝐍𝐅𝐎❗]ПРОИЗОШЛА ТОЛЬКО ОШИБКА ПРИ ПРЕОБРАЗОВАНИИ ВАШЕГО АУДИО В ГОЛОСОВУЮ ЗАМЕТКУ ПОВТОРИТЕ ПОПЫТКУ*'
conn.sendFile(m.chat, audio.data, 'error.mp3', '', m, true, { mimetype: 'audio/mp4' })
}
handler.help = ['tovn (reply)']
handler.tags = ['audio']
handler.command = /^to(vn|(ptt)?)$/i

export default handler
