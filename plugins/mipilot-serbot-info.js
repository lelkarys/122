async function handler(m, { usedPrefix }) {
let users = [...new Set([...global.conns.filter(conn => conn.user && conn.state !== 'close').map(conn => conn.user)])]  
const message = users.map(v => '▢➯ wa.me/' + v.jid.replace(/[^0-9]/g, '') + `?text=${usedPrefix}serbot (${v.name})\n`).join('\n')
const replyMessage = (message.length === 0) ? "*НЕТ СУББОТОВ. ПРОВЕРЬТЕ ПОЗЖЕ.*\n\n\n*НЕТ СУББОТОВ. ПРОВЕРИТЬ ПОЗЖЕ*" : message
await m.reply( '(💥) ВОТ СПИСОК СУББОТОВ ЕСЛИ ВЫ ХОТИТЕ ОДНОГО ИЗ НИХ ВОЙТИ, ВЫ МОЖЕТЕ ПОГОВОРИТЬ С НИМИ ИЛИ НАПРЯМУЮ, ВЫ МОЖЕТЕ СТАТЬ БОТОМ, ИСПОЛЬЗУЯ КОМАНДУ /SERBOT EN EL NÚMERO OFICIAL DEL BOT*\n\n\n(💥) ЗДЕСЬ У ВАС ЕСТЬ СПИСОК СУББОТОВ ЕСЛИ ВЫ ХОТИТЕ ОДИН ИЗ НИХ ВОЙТИ, ВЫ МОЖЕТЕ ПОГОВОРИТЬ С НИМИ ИЛИ НАПРЯМУЮ, ВЫ МОЖЕТЕ СТАТЬ БОТОМ, ИСПОЛЬЗУЯ КОМАНДУ /SERBOT НА ОФИЦИАЛЬНЫЙ НОМЕР БОТА*')
await m.reply(replyMessage.trim())}
handler.command = handler.help = ['listjadibot','bots','subsbots']
handler.tags = ['jadibot']

export default handler