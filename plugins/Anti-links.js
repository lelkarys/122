let linkRegex = /chat.whatsapp.com\/([0-9A-Za-z]{20,24})/i
export async function before(m, { isAdmin, isBotAdmin }) {
if (m.isBaileys && m.fromMe)
return !0
if (!m.isGroup) return !1
let chat = global.db.data.chats[m.chat]
let delet = m.key.participant
let bang = m.key.id
let bot = global.db.data.settings[this.user.jid] || {}
let user = `@${m.sender.split`@`[0]}`
const isGroupLink = linkRegex.exec(m.text)
const grupo = `https://chat.whatsapp.com`
if (isAdmin && chat.antiLink && m.text.includes(grupo)) return m.reply('*ЭЙЙ!!ССЫЛКИ В ГРУПЕ ЗАПРЕЩЕНЫ, НО ТЫ АДМИН 😎,ЖИВИ ПОКА!*')
if (chat.antiLink && isGroupLink && !isAdmin) {
if (isBotAdmin) {
const linkThisGroup = `https://chat.whatsapp.com/${await this.groupInviteCode(m.chat)}`
if (m.text.includes(linkThisGroup)) return !0
}    
await this.sendMessage(m.chat, { text: `*「АНТИССЫЛКА」*\n*НЕЛЬЗЯ КИДАТЬ ССЫЛКИ 👋 ${user} ПОШОЛ ОТ СЮДА, И БОЛЬШЕ НЕ ВОЗРОЩАЙСЯ...!!*`, mentions: [m.sender] }) 
if (!isBotAdmin) return m.reply('*[❗ИНФО❗] БОТ НЕ АДМИН, ОН НЕ МОЖЕТ УДАЛИТЬ ЛЮДЕЙ*')  
//await conn.sendButton(m.chat, `*「 АНТИССЫЛКА 」*\n*Счастливого пути, детка 👋, ${await this.getName(m.sender)}Ты нарушил правила группы, ты будешь удален...!!*${isBotAdmin ? '' : '\n\n*[❗ИНФО❗] БОТ НЕ ЯВЛЯЕТСЯ АДМИНОМ ГРУППЫ*'}`, author, ['𝙳𝙴𝚂𝙰𝙲𝚃𝙸𝚅𝙰𝚁 𝙰𝙽𝚃𝙸𝙻𝙸𝙽𝙺𝚂', '/disable antilink'], m)    
if (isBotAdmin && bot.restrict) {
await conn.sendMessage(m.chat, { delete: { remoteJid: m.chat, fromMe: false, id: bang, participant: delet }})
let responseb = await conn.groupParticipantsUpdate(m.chat, [m.sender], 'remove')
if (responseb[0].status === "404") return   
} else if (!bot.restrict) return m.reply('*[❗ИНФО❗] СОЗДАТЕЛЬ НЕ ВКЛЮЧИЛ КОМАНДУ (#включить ограничить) НАПИШИТЕ СОЗДАТЕЛЮ ЧТО БЫ ВКЛЮЧИТЬ*')
}
return !0
}
