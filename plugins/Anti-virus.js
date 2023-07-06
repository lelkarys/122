let handler = m => m

handler.all = async function (m, { isBotAdmin }) {
// автоматическая очистка при наличии сообщений, которые невозможно просмотреть на рабочем столе wa
if (m.messageStubType === 68) {
let log = {
key: m.key,
content: m.msg,
sender: m.sender
}
await this.modifyChat(m.chat, 'clear', {
includeStarred: false
}).catch(console.log)
}}
handler.register = true
export default handler
