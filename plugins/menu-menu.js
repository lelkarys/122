import fetch from 'node-fetch'
let handler = async (m, { conn, usedPrefix, usedPrefix: _p, __dirname, text, isPrems }) => {
try {
let pp = imagen2
//let vn = './Plugins/Audios/menu.mp3'
let img = await(await fetch('https://i.imgur.com/JP52fdP.jpg')).buffer()
let d = new Date(new Date + 3600000)
let locale = 'es'
let week = d.toLocaleDateString(locale, { weekday: 'long' })
let date = d.toLocaleDateString(locale, { day: 'numeric', month: 'long', year: 'numeric' })
let _uptime = process.uptime() * 1000
let uptime = clockString(_uptime)
let user = global.db.data.users[m.sender]
let { money, joincount } = global.db.data.users[m.sender]
let { exp, limit, level, role } = global.db.data.users[m.sender]
let rtotalreg = Object.values(global.db.data.users).filter(user => user.registered == true).length 
let more = String.fromCharCode(8206)
let readMore = more.repeat(850)   
let taguser = '@' + m.sender.split("@s.whatsapp.net")[0]
var doc = ['pdf','zip','vnd.openxmlformats-officedocument.presentationml.presentation','vnd.openxmlformats-officedocument.spreadsheetml.sheet','vnd.openxmlformats-officedocument.wordprocessingml.document']
var document = doc[Math.floor(Math.random() * doc.length)]    
let str = `╭「➻❥𝙷𝙰𝙳𝙴𝚂-𝙱𝙾𝚃-𝙾𝙼𝙴𝙶𝙰➻❥」
│➯ *Создатель:ᴏғᴄ➟Серёга
│➯ **Номер*➟79531126750
│➯ *Создатель:ᴏғᴄ➟Лёлька
│➯ **Номер*➟77072763560
│➯ *ғᴇᴄʜᴀ:➟${date}
│➯ *ᴛɪᴇᴍᴘᴏ ᴀᴄᴛɪᴠᴏ:➟${uptime}
│➯ *ᴜsᴜᴀʀɪᴏs:➟${rtotalreg}
︎╰───────────────╯
🍁᭢━━━━━━━━━᭥🍁᭢
╭─「➻❥ *Estadísticas* ➻❥」
│➯ *✳️️Nivel:* ${level}
│➯ *🧿Experiencia:* ${exp}
│➯ *⚓Rango:* ${role}
│➯ *💎Diamantes:* ${limit}
│➯ *👾Hades-Coins:* ${money}
│➯ *🪙Tokens:* ${joincount}
╰───────────────╯
🍁᭢━━━━━━━━━᭥🍁᭢
╭─「➻❥ *gana y compara* ➻❥」
│➯ *.minar gana xp*
│➯ *.minar2 gana Diamantes*
│➯ *.minar3 gana Hades-Coins*
│➯ *.claim reclama tu recompensa diaria exp*
│➯ *.darxp recompensa diaria exp*
│➯ *.coffer un cofre de recompensas diarias*
│➯ *para ver tus diamantes usa el comando*
│➯ *.bal*
│➯ *puedes comprar diamantes usando los comandos* 
│➯ *.bus <cantidad>* 
│➯ *.busyall te cobra Hades-Coins*
│➯ *.bur <cantidad>*
│➯ *.buryall te cobra Tokens*
│➯ *.buy <cantidad>*
│➯ *.buyall te cobra experiencia*
│➯ *puedes dar diamantes o experiencia a otra persona con los comandos* 
│➯ *.transfer limit mas <cantidad>*
│➯ *.transfer exp mas <cantidad>*
╰───────────────╯
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


│➯ *.filtroanime*
│➯ *.filtrodibujo*
│➯ *.pixelar*
│➯ *.Itssostupid*
│➯ *.difuminar2*
│➯ *.sticker*
│➯ *.wm paquete | nombre*
│➯ *.removebg*
│➯ *.toimg*
│➯ *.tovn*
│➯ *.tomp3*
│➯ *.afk*
│➯ *.tomp4* 
│➯ *.togifaud*
│➯ *.tovideo*
│➯ *.attp3*
│➯ *.ttp*
│➯ *.ttp2*
│➯ *.wpmontaña*
│➯ *.wpgaming*
│➯ *.doraemon*
│➯ *.wpaesthetic*
│➯ *.planeta*
│➯ *.technology*
│➯ *.ciberespacio*
│➯ *.caricatura*
│➯ *.pubg*
│➯ *.wprandom*
│➯ *.ttp3*
│➯ *.ttp5*
│➯ *.styletext* 
︎╰───────────────╯
🍁᭢━━━━━━━━━᭥🍁᭢
╭─「➻❥ *Logos* ➻❥」
│➯ *.blackpink <texto>*
│➯ *.bloodfrosted <texto>*
│➯ *.bokelog <texto>*
│➯ *.box3d <texto>*
│➯ *.breakwall  <texto>*
│➯ *.cloud <texto>*
│➯ *.deluxesilver <texto>*
│➯ *.futureneon <texto>*
│➯ *.halloween <texto>*
│➯ *.icecold <texto>*
│➯ *.impressiveglitch <texto>*
│➯ *.jokerlogo <texto>*
│➯ *.logolol <texto>*
│➯ *.luxurylog <texto>*
│➯ *.holographic <texto>*
│➯ *.magma <texto>*
│➯ *.metaldark <texto>*
│➯ *.minion <texto>*
│➯ *.natureleaves <texto>*
│➯ *.neon <texto>*
│➯ *.neonlight <texto>*
│➯ *.newyearcard <texto>*
│➯ *.roadwarning <texto>*
│➯ *.sandengraved <texto>*
│➯ *.sandsummer <texto>*
│➯ *.sparkle <texto>*
│➯ *.strawberry <texto>*
│➯ *.text1917 <texto>*
│➯ *.thunder <texto>*
│➯ *.toxic <texto>*
│➯ *.watercolor <texto>*
│➯ *.wonderfulgraffiti <texto>*
╰───────────────╯
🍁᭢━━━━━━━━━᭥🍁᭢
╭─「➻❥ *Jadibot* ➻❥」
│➯ *.serbot*
│➯ *.stop borra tu sesión antigua*
╰───────────────╯
🍁᭢━━━━━━━━━᭥🍁᭢
╭─「➻❥ *Команды для создателя* ➻❥」
│➯ *.автоадмин*
│➯ *.банчан*
│➯ *.бан @номер*
│➯ *.банлист*
│➯ *.limpiarbot*
│➯ *.hesoyam*
│➯ *.unblock*
│➯ *.join*
│➯ *.salir*
│➯ *.blocklist*
│➯ *.unblocklist*
│➯ *.setppbot*
│➯ *.robargp*
│➯ *.banuser*
│➯ *.setprefix*
│➯ *.resetprefix*
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