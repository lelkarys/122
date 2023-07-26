let handler = async (m, { conn, text, isROwner, isOwner }) => {
if (text) {
global.db.data.chats[m.chat].sWelcome = text
m.reply('*[❗] ПРИВЕТСТВЕННОЕ СООБЩЕНИЕ УСПЕШНО НАСТРОЕНО ДЛЯ ЭТОЙ ГРУППЫ*')
} else throw `*[❗] ВВЕДИТЕ ПРИВЕТСТВЕННОЕ СООБЩЕНИЕ, КОТОРОЕ ВЫ ХОТИТЕ ДОБАВИТЬ К ЭТОМУ:*\n*- @user (упоминать)*\n*- @group (название группы)*\n*- @desc (описание группы)*`
}
handler.help = ['setwelcome <text>']
handler.tags = ['group']
handler.command = ['приветствие'] 
handler.admin = true

export default handler
