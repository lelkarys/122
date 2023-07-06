let handler = async (m, { conn, usedPrefix, command, args, isOwner, isAdmin, isROwner }) => {
let optionsFull = `--------------------------------
*Вариант:* ✨ | ПРИВЕТСТВИЕ
*Команда:* /включить приветствие
*Descripción:* Включить или отключить приветствие в группе.
--------------------------------
*Option:* 🌎 | ОБЩЕСТВЕННЫЙ
*Команда:* /включить общественный
*Description:* Бот становится доступным для публичного и/или частного использования.
*Note:* Эта команда может быть использована только владельцами ботов.
--------------------------------
*Вариант:* 🔗 | АНТИССЫЛКА
*Команда:* /включить антиссылка
*Описание:* Активировать или деактивировать антиссылки WhatsApp.
*Примечание:* Вам необходимо активировать ограничение.
--------------------------------
*Вариант:* 🔗 | АНТИССЫЛКА 2
*Команда:* /включить антиссылка2
*Описание:* Включить или отключить анти-ссылки, начиная с HTTPS..
*Примечание:* Вам необходимо активировать ограничение.
--------------------------------
*Вариант:* 🔎 | ОБНАРУЖИТЬ
*Команда:* /включить обнаружить
*Описание:* Активировать или деактивировать уведомления об изменениях в группе.
--------------------------------
--------------------------------
*Вариант:* ❗ | ОГРАНИЧИТЬ
*Команда:* /включить ограничить
*Описание:* Включение или отключение ограничений для ботов, например удаление или добавление людей в группу.
*Примечание: * Эту команду могут использовать только владельцы бота..
--------------------------------
--------------------------------
*Вариант:* ☑️ | АВТОЧТЕНИЕ
*Команда:* /включить авточтение
*Описание:* Автоматически помечать сообщения и статусы как прочитанные.
*Примечание:* Эту команду могут использовать только владельцы ботов..
--------------------------------
*Вариант:* 🔊 | АУДИО
*Команда:* /включить аудио
*Описание:* Активирует или деактивирует аудиокоманды без префиксов, в группе.
--------------------------------
*Вариант:* 👾 | АВТОСТИКЕР
*Команда:* /включить автостикер 
*Описание:* Все изображения или видео, отправленные в группу, конвертируются в стикеры.. 
--------------------------------
*Вариант:* 💬 | PCONLY
*Команда:* /enable pconly
*Descripción:* El Bot solo responderá a los Командаs si es un chat privado.
*Nota:* Este Команда solo podrá ser usado por owners del Bot.
--------------------------------
*Вариант:* 🏢 | GCONLY
*Команда:* /enable gconly
*Descripción:* El Bot solo respondera a los Командаs si es un grupo. 
*Nota:* Este Команда solo podrá ser usado por owners del Bot.
--------------------------------
*Вариант:* ❌ | ANTIVIEWONCE 
*Команда:* /enable antiviewonce
*Descripción:* Las imagenes enviadas para ver solo una vez, son reenviadas normal por el Bot. 
--------------------------------
*Вариант:* 🤬 | ANTITOXIC
*Команда:* /enable antitoxic
*Descripción:* Detecta la malas palabras y advierte al participante del grupo, antes de ser eliminado.
*Nota:* Se necesita tener activo el restrict.
--------------------------------
*Вариант:* 🕸️ | ANTITRABAS
*Команда:* /enable antitraba
*Descripción:* El Bot detecta textos largos que podrian ser virus y causar lag en el chat y elimina al usuario.
*Nota:* Se necesita tener activo el restrict.
--------------------------------
*Вариант:* 👎 | ANTIARABES
*Команда:* /enable antiarabes
*Descripción:* Si un numero árabe se uné al grupo, el Bot lo elimina automaticamente.
*Nota:* Se necesita tener activo el welcome y el restrict.
--------------------------------
*Вариант:* 👎 | ANTIARABES 2
*Команда:* /enable antiarabes2
*Descripción:* Si un numero árabe escribe en el grupo, el Bot lo elimina automaticamente.
*Nota:* Se necesita tener activo el restrict.
--------------------------------
*Вариант:* 🤖 | MODEJADIBOT
*Команда:* /enable modejadibot
*Descripción:* Activa o desactiva el uso del Команда para sub bots (${usedPrefix}serbot / ${usedPrefix}jadibot). 
*Nota:* Este Команда solo podrá ser usado por owners del Bot.
--------------------------------
*Вариант:* 👑 | MODOADMIN
*Команда:* /enable modoadmin
*Descripción:* El Bot solo responderá a los admins del grupo.
--------------------------------
*Вариант:* 😃 | SIMSIMI
*Команда:* /enable simsimi
*Descripción:* El Bot empezará a responder a los mensajes usando la IA de SimSimi.
--------------------------------
*Option:* ⏳ | ANTISPAM
*Command:* /enable antispam
*Description:* The Bot detects when a user spams the command and bans them for 5 seconds and warns them.
*Note:* This command can only be used
--------------------------------`.trim()

let isEnable = /true|включить|(turn)?on|1/i.test(command)
let chat = global.db.data.chats[m.chat]
let user = global.db.data.users[m.sender]
let bot = global.db.data.settings[conn.user.jid] || {}
let type = (args[0] || '').toLowerCase()
let isAll = false, isUser = false
switch (type) {
case 'приветствие':
if (!m.isGroup) {
if (!isOwner) {
global.dfail('group', m, conn)
throw false
}
} else if (!(isAdmin || isOwner || isROwner)) {
global.dfail('admin', m, conn)
throw false
}
chat.welcome = isEnable
break
case 'обнаружить':
if (!m.isGroup) {
if (!isOwner) {
global.dfail('group', m, conn)
throw false
}
} else if (!isAdmin) {
global.dfail('admin', m, conn)
throw false
}
chat.detect = isEnable
break
case 'обнаружить2':
if (!m.isGroup) {
if (!isOwner) {
global.dfail('group', m, conn)
throw false
}
} else if (!isAdmin) {
global.dfail('admin', m, conn)
throw false
}
chat.detect2 = isEnable
break    
case 'simsimi':
if (m.isGroup) {
if (!(isAdmin || isOwner)) {
global.dfail('admin', m, conn)
throw false
}}
chat.simi = isEnable
break   
case 'antiporno':
if (m.isGroup) {
if (!(isAdmin || isOwner)) {
global.dfail('admin', m, conn)
throw false
}}
chat.antiporno = isEnable
break        
case 'delete':
if (m.isGroup) {
if (!(isAdmin || isOwner)) {
global.dfail('admin', m, conn)
throw false
}}
chat.delete = isEnable
break
case 'antidelete':
if (m.isGroup) {
if (!(isAdmin || isOwner)) {
global.dfail('admin', m, conn)
throw false
}}
chat.delete = !isEnable
break
case 'public':
isAll = true
if (!isROwner) {
global.dfail('rowner', m, conn)
throw false
}
global.opts['self'] = !isEnable
break
case 'антиссылка':
if (m.isGroup) {
if (!(isAdmin || isOwner)) {
global.dfail('admin', m, conn)
throw false
}}
chat.antiLink = isEnable
break
case 'антиссылка2':
if (m.isGroup) {
if (!(isAdmin || isOwner)) {
global.dfail('admin', m, conn)
throw false
}}
chat.antiLink2 = isEnable 
break
case 'antiviewonce':
if (m.isGroup) {
if (!(isAdmin || isOwner)) {
global.dfail('admin', m, conn)
throw false
}}
chat.antiviewonce = isEnable 
break
case 'modohorny':
if (m.isGroup) {
if (!(isAdmin || isOwner)) {
global.dfail('admin', m, conn)
throw false
}}
chat.modohorny = isEnable          
break
case 'modoadmin':
if (m.isGroup) {
if (!(isAdmin || isOwner)) {
global.dfail('admin', m, conn)
throw false
}}
chat.modoadmin = isEnable          
break    
case 'автостикер':
if (m.isGroup) {
if (!(isAdmin || isOwner)) {
global.dfail('admin', m, conn)
throw false
}}
chat.autosticker = isEnable          
break
case 'аудио':
if (m.isGroup) {
if (!(isAdmin || isOwner)) {
global.dfail('admin', m, conn)
throw false
}}
chat.audios = isEnable          
break
case 'ограничить':
isAll = true
if (!isOwner) {
global.dfail('owner', m, conn)
throw false
}
bot.restrict = isEnable
break
case 'nyimak':
isAll = true
if (!isROwner) {
global.dfail('rowner', m, conn)
throw false
}
global.opts['nyimak'] = isEnable
break
case 'авточтение':
isAll = true
if (!isROwner) {
global.dfail('rowner', m, conn)
throw false
}
bot.autoread2 = isEnable    
global.opts['autoread'] = isEnable  
break
case 'pconly':
case 'privateonly':
isAll = true
if (!isROwner) {
global.dfail('rowner', m, conn)
throw false
}
global.opts['pconly'] = isEnable
break
case 'gconly':
case 'grouponly':
isAll = true
if (!isROwner) {
global.dfail('rowner', m, conn)
throw false
}
global.opts['gconly'] = isEnable
break
case 'swonly':
case 'statusonly':
isAll = true
if (!isROwner) {
global.dfail('rowner', m, conn)
throw false
}
global.opts['swonly'] = isEnable
break
case 'anticall':
isAll = true
if (!isROwner) {
global.dfail('rowner', m, conn)
throw false
}
bot.antiCall = isEnable
break
case 'antiprivado':
isAll = true
if (!isROwner) {
global.dfail('rowner', m, conn)
throw false
}
bot.antiPrivate = isEnable
break
case 'modejadibot':
isAll = true
if (!isROwner) {
global.dfail('rowner', m, conn)
throw false
}
bot.modejadibot = isEnable
break     
case 'antispam':
isAll = true
if (!isROwner) {
global.dfail('rowner', m, conn)
throw false
}
bot.antispam = isEnable    
break
case 'antitoxic':
if (m.isGroup) {
if (!(isAdmin || isOwner)) {
global.dfail('admin', m, conn)
throw false
}}
chat.antiToxic = isEnable
break
case 'antitraba':
if (m.isGroup) {
if (!(isAdmin || isOwner)) {
global.dfail('admin', m, conn)
throw false
}}
chat.antiTraba = isEnable
break
case 'antiarabes':
if (m.isGroup) {
if (!(isAdmin || isOwner)) {
global.dfail('admin', m, conn)
throw false
}}
chat.antiArab = isEnable  
break
case 'antiarabes2':
if (m.isGroup) {
if (!(isAdmin || isOwner)) {
global.dfail('admin', m, conn)
throw false
}}
chat.antiArab2 = isEnable  
break    
default:
if (!/[01]/.test(command)) return await conn.sendMessage(m.chat, { text: optionsFull }, { quoted: m })
throw false
}
conn.sendMessage(m.chat, { text: `🧿 КОМАНДА: ${type}\n️🔮СТАТУС: ${isEnable ? 'ВКЛЮЧЕНА' : 'ВЫКЛЮЧЕНА'}\n🗂️КОМУ: ${isAll ? 'ЭТОМУ БОТУ' : isUser ? '' : 'ЭТОМУ ЧАТУ'}` }, { quoted: m })        
conn.sendMessage(m.chat, { text: `🧿 КОМАНДА: ${type}\n️🔮СТАТУС: ${isEnable ? 'ВКЛЮЧЕНА' : 'ВЫКЛЮЧЕНА'}\n🗂️КОМУ: ${isAll ? 'ЭТОМУ БОТУ' : isUser ? '' : 'ЭТОМУ ЧАТУ'}` }, { quoted: m })        
}
handler.help = ['вкл', 'выкл'].map(v => v + 'ючить <option>')
handler.tags = ['group', 'owner']
handler.command = /^((вк|вык)лючить|(tru|fals)e|(turn)?[01])$/i
handler.register = true
export default handler
