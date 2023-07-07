let handler = async (m, { conn, isAdmin, isOwner, args, usedPrefix, command }) => {
  if (!(isAdmin || isOwner)) {
	  global.dfail('admin', m, conn)
          throw false
  }
  let isClose = {
	  'открыть': 'not_announcement',
	  'buka': 'not_announcement',
      'on': 'not_announcement',
	  '1': 'not_announcement',
	  'закрыть': 'announcement',
	  'tutup': 'announcement',
      'off': 'announcement',
      '0': 'announcement',
  }[(args[0] || '')]
  if (isClose === undefined) {
	  let caption = `------------------------------------------------------------------------------------------------------------
Бот
*[❗] 𝙵𝙾𝚁𝙼𝙰𝚃𝙾 𝙴𝚁𝚁𝙾𝙽𝙴𝙾!!*
✨𝙴𝙹𝙴𝙼𝙿𝙻𝙾✨ 
${usedPrefix + command} open 1*
${usedPrefix + command} close 1*
📌 *_Пример использования:_* *${usedPrefix + command} закрыть 1*
*_🌿 Чтобы группа была закрыта на час._*
------------------------------------------------------------------------------------------------------------`
      m.reply(caption)
	  throw false
  }
  let timeoutset = 86400000 * args[1] / 24
  await conn.groupSettingUpdate(m.chat, isClose).then(async _=> {
	  m.reply(`⚠️ *_Grupo ${isClose == 'announcement' ? 'cerrado' : 'abierto'} ${args[1] ? `durante *${clockString(timeoutset)}_*` : ''}`)
  })
  if (args[1]) {
	 setTimeout(async () => {
            await conn.groupSettingUpdate(m.chat, `${isClose == 'announcement' ? 'not_announcement' : 'announcement'}`).then(async _=>{
		    conn.reply(m.chat, `${isClose == 'not_announcement' ? '*El grupo ha sido cerrado, ¡ahora solo los administradores pueden enviar mensajes!*\n\n\n The group has been closed, now only admins can send messages!*' : '*El grupo se ha abierto, ¡ahora todos los miembros pueden enviar mensajes!*\n\n\n The group has been opened, now all members can send messages!*'}!`)
	    })
        }, timeoutset)
  }
  }
handler.help = ['группу *<открыть/закрыть>* *<número>*']
handler.tags = ['group']
handler.command = /^(группы|gctime)$/i

handler.botAdmin = true
handler.group = true 
handler.register = true
export default handler

function clockString(ms) {
  let h = Math.floor(ms / 3600000)
  let m = Math.floor(ms / 60000) % 60
  let s = Math.floor(ms / 1000) % 60
  console.log({ms,h,m,s})
  return [h, m, s].map(v => v.toString().padStart(2, 0) ).join(':')
}


