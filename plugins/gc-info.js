let handler = async (m, { conn, participants, groupMetadata }) => {
const pp = await conn.profilePictureUrl(m.chat, 'image').catch(_ => null) || './plugins/Fondos/avatar_contact.png'
const { antiToxic, antiTraba, antiviewonce, isBanned, welcome, detect, sWelcome, sBye, sPromote, sDemote, antiLink, antiLink2, modohorny, autosticker, audios, delete: del } = global.db.data.chats[m.chat]
const groupAdmins = participants.filter(p => p.admin)
const listAdmin = groupAdmins.map((v, i) => `${i + 1}. @${v.id.split('@')[0]}`).join('\n')
const owner = groupMetadata.owner || groupAdmins.find(p => p.admin === 'superadmin')?.id || m.chat.split`-`[0] + '@s.whatsapp.net'
let text = `----------------------------------------------------------------------------------------------------------

*ГРУППОВАЯ ИНДЕНТИФИКАЦИЯ* 
${groupMetadata.id}
*НАЗВАНИЕ ГРУППЫ:* 
${groupMetadata.subject}
*ОПИСАНИЕ:* 
${groupMetadata.desc?.toString() || 'ОПИСАНИЕ ГРЕХОВ'}
*ВСЕГО УЧАСНИКОВ:*
${participants.length} Всего
*СОЗДАТЕЛЬ ГРУППЫ:* 
@${owner.split('@')[0]}
*АДМИННЫ ГРУППЫ:*
${listAdmin}
*КОМАНДЫ:*
—◉ ПРИВЕТСТВИЕ: ${welcome ? '✅' : '❌'}
—◉ ОБНАРУЖИТЬ: ${detect ? '✅' : '❌'} 
—◉ АНТИССЫЛКА: ${antiLink ? '✅' : '❌'} 
—◉ АНТИССЫЛКА𝟸: ${antiLink2 ? '✅' : '❌'} 
—◉ АВТОСТИКЕР: ${autosticker ? '✅' : '❌'} 
—◉ АУДИО: ${audios ? '✅' : '❌'} 
—◉ АНТИВИРУС: ${antiviewonce ? '✅' : '❌'} 
—◉ АНТИСПАМ: ${antiToxic ? '✅' : '❌'} 
—◉ АНТИИНДУС: ${antiTraba ? '✅' : '❌'}
----------------------------------------------------------------------------------------------------------`.trim()
conn.sendFile(m.chat, pp, 'error.jpg', text, m, false, { mentions: [...groupAdmins.map(v => v.id), owner] })
}
handler.help = ['infogrup']
handler.tags = ['group']
handler.command = /^(инфогруппы|gro?upinfo|info(gro?up|gc))$/i
handler.group = true

export default handler
