let handler  = async (m, { conn }) => {
    if (global.conn.user.jid == conn.user.jid) conn.reply(m.chat, 'Почему бы вам не перейти непосредственно к номеру бота?', m)
    else {
      await conn.reply(m.chat, 'Прощай, Бот', m)
      conn.ws.close()
    }
  }
  handler.help = ['berhenti','stop']
  handler.tags = ['General']
  handler.command = /^(berhenti|стоп)$/i
  handler.owner = true
  handler.mods = false
  handler.premium = false
  handler.group = false
  handler.private = false
  
  handler.admin = false
  handler.botAdmin = false
  
  handler.fail = null
  
  export default handler