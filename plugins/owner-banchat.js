let handler = async (m) => {
global.db.data.chats[m.chat].isBanned = true
m.reply('*🗝️│‼️│ЭТОТ ЧАТ БЫЛ УСПЕШНО ЗАБЛОКИРОВАН🗝*')
}
handler.help = ['banchat']
handler.tags = ['owner']
handler.command = /^банчан$/i

handler.rowner = true
export default handler
