let handler = async (m, { conn, args, command }) => {
await m.reply('*(≧ω≦)ゞВсем до свидания, бот прощается!(≧ω≦)ゞ*') 
await  conn.groupLeave(m.chat)}
handler.command = /^(выйти|leavegc|leave|salirdelgrupo)$/i
handler.group = true
handler.rowner = true

export default handler
