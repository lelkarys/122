import { toAudio } from '../lib/converter.js'
let handler = async (m, { conn, usedPrefix, command }) => {
let q = m.quoted ? m.quoted : m
let mime = (m.quoted ? m.quoted : m.msg).mimetype || ''
if (!/video|audio/.test(mime)) throw `*[❗𝐈𝐍𝐅𝐎❗]ОТВЕТЬТЕ НА ВИДЕО ИЛИ АУДИО, КОТОРЫЕ БЫЛИ ПРЕОБРАЗОВАНЫ В ГОЛОСОВУЮ ЗАМЕТКУ/mp3*`
let media = await q.download?.()
if (!media && !/video/.test(mime)) throw '*[❗𝐈𝐍𝐅𝐎❗]ИЗВИНИТЕ, ПРОИЗОШЛА ОШИБКА ПРИ ЗАГРУЗКЕ ВАШЕГО ВИДЕО, ПОЖАЛУЙСТА, ПОВТОРИТЕ ПОПЫТКУ*'
if (!media && !/audio/.test(mime)) throw '*[❗𝐈𝐍𝐅𝐎❗] ИЗВИНИТЕ, ПРОИЗОШЛА ОШИБКА ПРИ ЗАГРУЗКЕ ВАШЕГО АУДИО, ПОЖАЛУЙСТА, ПОВТОРИТЕ ПОПЫТКУ*'
let audio = await toAudio(media, 'mp4')
if (!audio.data && !/audio/.test(mime)) throw '*[❗𝐈𝐍𝐅𝐎❗]ИЗВИНИТЕ, ПРОИЗОШЛА ОШИБКА ПРИ ПРЕОБРАЗОВАНИИ ВАШЕГО АУДИО / mp3 В ГОЛОСОВОЕ ПРИМЕЧАНИЕ, ПОЖАЛУЙСТА, ПОВТОРИТЕ ПОПЫТКУ*'
if (!audio.data && !/video/.test(mime)) throw '*[❗𝐈𝐍𝐅𝐎❗]ПРОИЗОШЛА ТОЛЬКО ОШИБКА ПРИ ПРЕОБРАЗОВАНИИ ВАШЕГО АУДИО / mp3 В ГОЛОСОВУЮ ЗАМЕТКУ, ПОВТОРИТЕ ПОПЫТКУ*'
conn.sendFile(m.chat, audio.data, 'error.mp3', '', m, null, { mimetype: 'audio/mp4' })
}
handler.help = ['tomp3 (reply)']
handler.tags = ['audio']
handler.command = ['tomp3', 'toaudio', 'mp3']

export default handler
