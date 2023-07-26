let { generateWAMessageFromContent, prepareWAMessageMedia, proto } = (await import('@adiwajshing/baileys')).default
import fetch from 'node-fetch'
const { getBinaryNodeChild, getBinaryNodeChildren } = (await import('@adiwajshing/baileys')).default
let handler = async (m, { conn, text, participants, args }) => {  
if (!global.db.data.settings[conn.user.jid].restrict) throw '*[ ⚠️ ] СОЗДАТЕЛЬ НЕ ВКЛЮЧИЛ (включить ограничить) НАПИШИТЕ СОЗДАТЕЛЮ*'
if (!args[0]) throw '*[❗] Введите номер ПОЛЬЗОВАТЕЛЯ, которого вы хотите добавить*'    
try {    
let _participants = participants.map(user => user.id)
let users = (await Promise.all(
text.split(',')
.map(v => v.replace(/[^0-9]/g, ''))
.filter(v => v.length > 4 && v.length < 20 && !_participants.includes(v + '@s.whatsapp.net'))
.map(async v => [v, await conn.onWhatsApp(v + '@s.whatsapp.net')]))).filter(v => v[1][0]?.exists).map(v => v[0] + '@c.us')
const response = await conn.query({ tag: 'iq', attrs: { type: 'set', xmlns: 'w:g2', to: m.chat }, content: users.map(jid => ({ tag: 'add', attrs: {}, content: [{ tag: 'participant', attrs: { jid } }]}))})
const pp = await conn.profilePictureUrl(m.chat).catch(_ => null)
const jpegThumbnail = pp ? await (await fetch(pp)).buffer() : Buffer.alloc(0)
const add = getBinaryNodeChild(response, 'add')
const participant = getBinaryNodeChildren(add, 'participant')
for (const user of participant.filter(item => item.attrs.error == 403)) {
const jid = user.attrs.jid
const content = getBinaryNodeChild(user, 'add_request')
const invite_code = content.attrs.code
const invite_code_exp = content.attrs.expiration
let teks = `*[❗𝐈𝐍𝐅𝐎❗] ЭТО невозможно, анадир а @${jid.split('@')[0]}, Это может произойти из-за того, что указан неправильный номер, человек недавно покинул группу или человек настроил конфиденциальность своей группы, приглашение будет отправлено группе в личном кабинете пользователя*`
m.reply(teks, null, { mentions: conn.parseMention(teks)})
let captionn = `Эй!! Здравствуйте, я представляюсь, и я бот для WhatsApp, человек из группы, я использую команду, чтобы добавить вас в группу, но я не смог добавить вас, поэтому я отправляю вам приглашение, чтобы вы присоединились, мы ждем вас!!`    
var messaa = await prepareWAMessageMedia({ image: jpegThumbnail }, { upload: conn.waUploadToServer })
var groupInvite = generateWAMessageFromContent(m.chat, proto.Message.fromObject({ groupInviteMessage: { groupJid: m.chat, inviteCode: invite_code, inviteExpiration: invite_code_exp, groupName: await conn.getName(m.chat), caption: captionn, jpegThumbnail: jpegThumbnail }}), { userJid: jid })
await conn.relayMessage(jid, groupInvite.message, { messageId: groupInvite.key.id })}
} catch {
throw '*[❗𝐈𝐍𝐅𝐎❗] БЫЛО НЕВОЗМОЖНО добавить номер, который был введен, это может произойти из-за неправильного номера, человек недавно покинул группу или человек установил конфиденциальность своей группы, мы советуем вам отправить приглашение вручную!!*'
}}
handler.help = ['add', '+'].map(v => v + ' número')
handler.tags = ['group']
handler.command = /^(добавить|agregar|añadir|\+)$/i
handler.admin = handler.group = handler.botAdmin = true

export default handler
