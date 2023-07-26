let handler = async (m, { conn, args }) => {
await conn.groupUpdateDescription(m.chat, `${args.join(" ")}`);
m.reply('*✅ Описание группы изменено правильно*\n\n\n*')
}
handler.help = ['Setdesc <text>']
handler.tags = ['group']
handler.command = /^описание|setdesc$/i
handler.group = true

handler.admin = true
handler.botAdmin = true
export default handler
