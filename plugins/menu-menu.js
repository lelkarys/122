import { xpRange } from '../lib/levelling.js'
const { levelling } = '../lib/levelling.js'
import PhoneNumber from 'awesome-phonenumber'
import { promises } from 'fs'
import { join } from 'path'
let handler = async (m, { conn, usedPrefix, usedPrefix: _p, __dirname}) => {
try {
let vn = './media/menu.mp3'
let pp = './Menu2.jpg'
let _package = JSON.parse(await promises.readFile(join(__dirname, '../package.json')).catch(_ => ({}))) || {}
let { exp, limit, level, role } = global.db.data.users[m.sender]
let { min, xp, max } = xpRange(level, global.multiplier)
let name = await conn.getName(m.sender)
let d = new Date(new Date + 3600000)
let locale = 'es'
let weton = ['Pahing', 'Pon', 'Wage', 'Kliwon', 'Legi'][Math.floor(d / 84600000) % 5]
let week = d.toLocaleDateString(locale, { weekday: 'long' })
let date = d.toLocaleDateString(locale, {
day: 'numeric',
month: 'long',
year: 'numeric'
})
let dateIslamic = Intl.DateTimeFormat(locale + '-TN-u-ca-islamic', {
day: 'numeric',
month: 'long',
year: 'numeric'
}).format(d)
let time = d.toLocaleTimeString(locale, {
hour: 'numeric',
minute: 'numeric',
second: 'numeric'
})
let _uptime = process.uptime() * 1000
let _muptime
if (process.send) {
process.send('uptime')
_muptime = await new Promise(resolve => {
process.once('message', resolve)
setTimeout(resolve, 1000)
}) * 1000
}
let muptime = clockString(_muptime)
let uptime = clockString(_uptime)
let totalreg = Object.keys(global.db.data.users).length
let rtotalreg = Object.values(global.db.data.users).filter(user => user.registered == true).length
let replace = {
'%': '%',
p: _p, uptime, muptime,
me: conn.getName(conn.user.jid),
npmname: _package.name,
npmdesc: _package.description,
version: _package.version,
exp: exp - min,
maxexp: xp,
totalexp: exp,
xp4levelup: max - exp,
github: _package.homepage ? _package.homepage.url || _package.homepage : '[unknown github url]',
level, limit, name, weton, week, date, dateIslamic, time, totalreg, rtotalreg, role,
readmore: readMore
}
text = text.replace(new RegExp(`%(${Object.keys(replace).sort((a, b) => b.length - a.length).join`|`})`, 'g'), (_, name) => '' + replace[name])
  
let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender    
let userm = `@${who.replace(/@.+/, '')}` 
        

let str = `
╭「➻❥Ванилька➻❥」
│➯ *Создатель:ᴏғᴄ➟Серёга*
│➯ **Номер➟79531126750*
│➯ *Создатель:ᴏғᴄ➟Лёлька*
│➯ **Номер➟77072763560*
│➯ *время работы:➟*${uptime}
︎╰───────────────╯
🍁᭢━━━━━━━━━᭥🍁᭢
╭─「➻❥ *Для админов* ➻❥」
│➯ *.приветствие*
│➯ *.прощание*
│➯ *.описание*
│➯ *.названиегруппы*
│➯ *.сброситьссылку*
│➯ *.добавить номер*
│➯ *.внимание*
│➯ *.датьадмина @номер*
│➯ *.снятьадмина @номер*
│➯ *.админы <текст>**
│➯ *.группу открыть/закрыть*
│➯ *.инфогруппы*
│➯ *.снести @номер*
│➯ *.снести2 @номер*
│➯ *.молчуны*
│➯ *.создатель*
│➯ *.удалить*
│➯ *.ссылка*
╰───────────────╯
🍁᭢━━━━━━━━━᭥🍁᭢
╭──「➻❥ *Аудио команды* ➻❥」
│➯ *.пей название песни*
│➯ *.басс <аудио>*
│➯ *.взорван <аудио>*
│➯ *.глубокий <аудио>*
│➯ *.раковина <аудио>*
│➯ *.быстрый <аудио>*
│➯ *.найткор <аудио>*
│➯ *.обратный <аудио>*
│➯ *.робот <аудио>*
│➯ *.медленный <аудио>*
│➯ *.гладкий <аудио>*
╰───────────────╯
🍁᭢━━━━━━━━━᭥🍁᭢
╭─「➻❥*Для учасников*➻❥」
│➯ *.стикер/с*
│➯ *.умный @номер*
│➯ *.какашка @номер*
│➯ *.свадьба @номер*
│➯ *.поцелуй @номер*
│➯ *.радуга @номер*
│➯ *.любовь @номер*
│➯ *.дурак @номер*
│➯ *.любит @номер*
│➯ *.дура @номер*
│➯ *.русский @номер*
│➯ *.правда @номер*
│➯ *.лучший @номер*
│➯ *.якрасивая @номер*
│➯ *.хитрый @номер*
│➯ *.комплимент*
︎╰───────────────╯
🍁᭢━━━━━━━━━᭥🍁᭢
╭─「➻❥ *Команды для создателя* ➻❥」
│➯ *.автоадмин*
│➯ *.банчан*
│➯ *.бан @номер*
│➯ *.банлист*
│➯ *.разблокировать*
│➯ *.списокблок*
│➯ *.выйти*
│➯ *.удалитьпрем*
│➯ *.разбанчат*
│➯ *.удалитьбан @номер*
│➯ *.обьявление*
│➯ *.обьявление2*
╰───────────────╯`.trim()
if (m.isGroup) {
//await conn.sendFile(m.chat, vn, 'Darling.mp3', null, m, true, { type: 'audioMessage', ptt: true})
let fkontak2 = { "key": { "participants":"0@s.whatsapp.net", "remoteJid": "status@broadcast", "fromMe": false, "id": "Halo" }, "message": { "contactMessage": { "vcard": `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:y\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD` }}, "participant": "0@s.whatsapp.net" }  
conn.sendMessage(m.chat, { image: pp, caption: str.trim(), mentions: [...str.matchAll(/@([0-9]{5,16}|0)/g)].map(v => v[1] + '@s.whatsapp.net')}, { quoted: fkontak2 })  
} else {    
//await conn.sendFile(m.chat, vn, 'Darling.mp3', null, m, true, { type: 'audioMessage', ptt: true})
let fkontak2 = { "key": { "participants":"0@s.whatsapp.net", "remoteJid": "status@broadcast", "fromMe": false, "id": "Halo" }, "message": { "contactMessage": { "vcard": `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:y\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD` }}, "participant": "0@s.whatsapp.net" }  
conn.sendMessage(m.chat, { image: pp, caption: str.trim(), mentions: [...str.matchAll(/@([0-9]{5,16}|0)/g)].map(v => v[1] + '@s.whatsapp.net')}, { quoted: fkontak2 })}
} catch {
conn.reply(m.chat, '*[❗𝐈𝐍𝐅𝐎❗] 𝙴𝙻 𝙼𝙴𝙽𝚄 𝚃𝙸𝙴𝙽𝙴 𝚄𝙽 𝙴𝚁𝚁𝙾𝚁 𝚈 𝙽𝙾 𝙵𝚄𝙴 𝙿𝙾𝚂𝙸𝙱𝙻𝙴 𝙴𝙽𝚅𝙸𝙰𝚁𝙻𝙾, 𝚁𝙴𝙿𝙾𝚁𝚃𝙴𝙻𝙾 𝙰𝙻 𝙿𝚁𝙾𝙿𝙸𝙴𝚃𝙰𝚁𝙸𝙾 𝙳𝙴𝙻 𝙱𝙾𝚃*', m)
}}
handler.command = /^(меню|menú|memu|memú|help|info|comandos|allmenu|2help|menu1.2|ayuda|commands|commandos|cmd)$/i
handler.exp = 50
handler.fail = null
handler.register = true
export default handler
function clockString(ms) {
let h = isNaN(ms) ? '--' : Math.floor(ms / 3600000)
let m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60
let s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60
return [h, m, s].map(v => v.toString().padStart(2, 0)).join(':')}