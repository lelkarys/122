const toxicRegex = /сука|блять|заебал|пидор|питух|нахуй|гандон|залупа|чмо|ебал|хуйло|пизда|шлюха|шалава|уёбище/i

export async function before(m, { isAdmin, isBotAdmin, isOwner }) {
    if (m.isBaileys && m.fromMe)
        return !0
    if (!m.isGroup)
        return !1
    let user = global.db.data.users[m.sender]
    let chat = global.db.data.chats[m.chat]
    let bot = global.db.data.settings[this.user.jid] || {}
    const isToxic = toxicRegex.exec(m.text)
    
    if (isToxic && chat.antiToxic && !isOwner && !isAdmin) {
       user.warn += 1
       if (!(user.warn >= 5)) await m.reply(`${user.warn == 1 ? `Привет *@${m.sender.split`@`[0]}*` : `*@${m.sender.split`@`[0]}*`}, сказать слово (${isToxic}) это запрещено в этом боте *${user.warn}/5* предупреждение`, false, { mentions: [m.sender] })
    
     }
    
    if (user.warn >= 5) {
       user.warn = 0
       await m.reply(`*Привет*@${m.sender.split`@`[0]},* Вы превысили 5 предупреждений, вы будете заблокированы и удалены из этой группы*\n\n\n*HELLO*@${m.sender.split`@`[0]},*ВЫ ПРЕВЫСИЛИ 5 ПРЕДУПРЕЖДЕНИЙ, ВЫ БУДЕТЕ ЗАБЛОКИРОВАНЫ И УДАЛЕНЫ ИЗ ЭТОЙ ГРУППЫ*`, false, { mentions: [m.sender] })
       user.banned = true
       await this.groupParticipantsUpdate(m.chat, [m.sender], 'remove')
       //await this.updateBlockStatus(m.sender, 'block')
    }
    return !1
}
