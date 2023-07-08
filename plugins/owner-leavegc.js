let handler = async (m, { conn, args, command }) => {
await m.reply('*(≧ω≦)ゞ\n\n Всем до свидания, бот прощается!(≧ω≦)ゞ*') 
await  conn.groupLeave(m.chat)}
handler.command = /^(выйти|leavegc|leave|salirdelgrupo)$/i
handler.group = true
handler.rowner = true
handler.register = true
export default handler
