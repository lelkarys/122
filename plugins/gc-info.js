let handler = async (m, { conn, participants, groupMetadata }) => {
const pp = await conn.profilePictureUrl(m.chat, 'image').catch(_ => null) || './plugins/Fondos/avatar_contact.png'
const { antiToxic, antiTraba, antiviewonce, isBanned, welcome, detect, sWelcome, sBye, sPromote, sDemote, antiLink, antiLink2, modohorny, autosticker, audios, delete: del } = global.db.data.chats[m.chat]
const groupAdmins = participants.filter(p => p.admin)
const listAdmin = groupAdmins.map((v, i) => `${i + 1}. @${v.id.split('@')[0]}`).join('\n')
const owner = groupMetadata.owner || groupAdmins.find(p => p.admin === 'superadmin')?.id || m.chat.split`-`[0] + '@s.whatsapp.net'
let text = `----------------------------------------------------------------------------------------------------------

*GROUP IDENTIFICATION* 
${groupMetadata.id}
*NAME:* 
${groupMetadata.subject}
*DESCRIPTION:* 
${groupMetadata.desc?.toString() || '𝚂𝙸𝙽 𝙳𝙴𝚂𝙲𝚁𝙸𝙿𝙲𝙸𝙾𝙽'}
*TOTAL OF PARTICIPANTS:*
${participants.length} Participantes
*CREATOR OF THE GROUP:* 
@${owner.split('@')[0]}
*GROUP ADMINISTRATORS:*
${listAdmin}
*AUTOMATIC OPTIONS:*
—◉ 𝚆𝙴𝙻𝙲𝙾𝙼𝙴: ${welcome ? '✅' : '❌'}
—◉ 𝙳𝙴𝚃𝙴𝙲𝚃: ${detect ? '✅' : '❌'} 
—◉ 𝙰𝙽𝚃𝙸𝙻𝙸𝙽𝙺: ${antiLink ? '✅' : '❌'} 
—◉ 𝙰𝙽𝚃𝙸𝙻𝙸𝙽𝙺 𝟸: ${antiLink2 ? '✅' : '❌'} 
—◉ 𝙼𝙾𝙳𝙾 𝙷𝙾𝚁𝙽𝚈: ${modohorny ? '✅' : '❌'} 
—◉ 𝙰𝚄𝚃𝙾𝚂𝚃𝙸𝙲𝙺𝙴𝚁: ${autosticker ? '✅' : '❌'} 
—◉ 𝙰𝚄𝙳𝙸𝙾𝚂: ${audios ? '✅' : '❌'} 
—◉ 𝙰𝙽𝚃𝙸𝚅𝙸𝙴𝚆𝙾𝙽𝙲𝙴: ${antiviewonce ? '✅' : '❌'} 
—◉ 𝙰𝙽𝚃𝙸𝚃𝙾𝚇𝙸𝙲: ${antiToxic ? '✅' : '❌'} 
—◉ 𝙰𝙽𝚃𝙸𝚃𝚁𝙰𝙱𝙰: ${antiTraba ? '✅' : '❌'}
----------------------------------------------------------------------------------------------------------`.trim()
conn.sendFile(m.chat, pp, 'error.jpg', text, m, false, { mentions: [...groupAdmins.map(v => v.id), owner] })
}
handler.help = ['infogrup']
handler.tags = ['group']
handler.command = /^(инфогруппы|gro?upinfo|info(gro?up|gc))$/i
handler.group = true
handler.register = true
export default handler
