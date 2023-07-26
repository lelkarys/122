let handler = async (m, { conn, text, participants }) => {
let member = participants.map(u => u.id)
if(!text) {
var sum = member.length
} else {
var sum = text} 
var total = 0
var sider = []
for(let i = 0; i < sum; i++) {
let users = m.isGroup ? participants.find(u => u.id == member[i]) : {}
if((typeof global.db.data.users[member[i]] == 'undefined' || global.db.data.users[member[i]].chat == 0) && !users.isAdmin && !users.isSuperAdmin) { 
if (typeof global.db.data.users[member[i]] !== 'undefined'){
if(global.db.data.users[member[i]].whitelist == false){
total++
sider.push(member[i])}
}else {
total++
sider.push(member[i])}}}
if(total == 0) return conn.reply(m.chat, `*[❗]Эта группа Активна, в ней НЕТ призраков*`, m) 
m.reply(`*[ ⚠ Реверсия деактивации ⚠ ]*\n\n*группа:* ${await conn.getName(m.chat)}\n*Члены группы:* ${sum}\n\n*[ 👻 Список призраков 👻 ]*\n${sider.map(v => '  👉🏻 @' + v.replace(/@.+/, '')).join('\n')}\n\n*Примечание: это может быть НЕ на 100% верно, бот начинает подсчет сообщений с того момента, как он активируется на этот номер.*\n\n\n*`)}
handler.command = /^(verfantasmas|молчуны|призраки)$/i
handler.admin = true
handler.botAdmin = true

export default handler
