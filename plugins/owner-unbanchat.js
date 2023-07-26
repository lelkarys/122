let handler = async (m) => {
global.db.data.chats[m.chat].isBanned = false
m.reply('*│✔️ЭТОТ ЧАТ БЫЛ УСПЕШНО РАЗБЛОКИРОВАН🌴*')
}
handler.help = ['unbanchat']
handler.tags = ['owner']
handler.command = /^разбанчат$/i
handler.rowner = true

export default handler
