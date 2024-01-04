/*
   RECORD By zyko md official 
   My Contact wa.me/6283856687521
   • IG @zzyko_04
   • TT @zzyko_04
*/
//*code pairing by yt @raisrfae*/

require("./settings");
const { default: 
makeWASocket, 
useMultiFileAuthState, 
DisconnectReason, 
fetchLatestBaileysVersion, 
generateForwardMessageContent, 
prepareWAMessageMedia, 
generateWAMessageFromContent, 
generateMessageID, 
downloadContentFromMessage, 
makeInMemoryStore, 
jidDecode, 
getAggregateVotesInPollMessage, 
proto 
} = require("@whiskeysockets/baileys")
const { 
imageToWebp, 
videoToWebp, 
writeExifImg, 
writeExifVid 
} = require('./lib/exif')
const { 
smsg, 
isUrl, 
generateMessageTag, 
getBuffer, 
getSizeMedia, 
fetchJson, 
await, 
sleep 
} = require('./lib/myfunc')
const fs = require('fs')
const pino = require('pino')
const chalk = require('chalk')
const path = require('path')
const readline = require("readline");
const axios = require('axios')
const FileType = require('file-type')
const yargs = require('yargs/yargs')
const _ = require('lodash')
const { Boom } = require('@hapi/boom')
const figlet = require('figlet')
const PhoneNumber = require('awesome-phonenumber')
const usePairingCode = true
const botNumber = global.nomorbot;
const { color } = require('./lib/color')
// Console
listcolor = ['aqua','red','blue','purple','magenta']
const randomcolor = listcolor[Math.floor(Math.random() * (listcolor.length))]

// Space
spc1 = '         '
spc2 = '\n                           '
spc3 = '                   '
spc4 = '               '
const question = (text) => {
const rl = readline.createInterface({
input: process.stdin,
output: process.stdout
  });
  return new Promise((resolve) => {
rl.question(text, resolve)
  })
};
//=================================================//
var low
try {
low = require('lowdb')
} catch (e) {
low = require('./lib/lowdb')}
//=================================================//
const { Low, JSONFile } = low
const mongoDB = require('./lib/mongoDB')
//=================================================//
//=================================================//
const store = makeInMemoryStore({ logger: pino().child({ level: 'silent', stream: 'store' }) })
//=================================================//
global.opts = new Object(yargs(process.argv.slice(2)).exitProcess(false).parse())
global.db = new Low(
  /https?:\/\//.test(opts['db'] || '') ?
    new cloudDBAdapter(opts['db']) : /mongodb/.test(opts['db']) ?
      new mongoDB(opts['db']) :
      new JSONFile(`database/json/database.json`)
)

global.DATABASE = global.db
global.loadDatabase = async function loadDatabase() {
  if (global.db.READ) return new Promise((resolve) => setInterval(function () { (!global.db.READ ? (clearInterval(this), resolve(global.db.data == null ? global.loadDatabase() : global.db.data)) : null) }, 1 * 1000))
  if (global.db.data !== null) return
  global.db.READ = true
  await global.db.read()
  global.db.READ = false
  global.db.data = {
    users: {},
    chats: {},
    database: {},
    game: {},
    settings: {},
    others: {},
    sticker: {},
    ...(global.db.data || {})
  }
  global.db.chain = _.chain(global.db.data)
}
loadDatabase()
// save database every 30seconds
if (global.db) setInterval(async () => {
    if (global.db.data) await global.db.write()
  }, 30 * 1000)
  
//=================================================//
//=================================================//
async function connectToWhatsApp() {
const { state, saveCreds } = await useMultiFileAuthState(global.sessionName)
const zyko = makeWASocket({
logger: pino({ level: "silent" }),
printQRInTerminal: !usePairingCode,
auth: state,
browser: ['Chrome (Linux)', '', '']
});
console.log(color(figlet.textSync('ZykoBotz-MD', {
		font: 'Small',
		horizontalLayout: 'default',
		vertivalLayout: 'default',
	    width: 90,
		whitespaceBreak: true
        }), `${randomcolor}`))
	console.log(color(`${spc2}           [ Created by: Zyko MD ]` ,`${randomcolor}`))
	console.log(color(`${spc4}                       < =============================== >`, `${randomcolor}`))
	console.log(color(`${spc3}                    [•]`, `${randomcolor}`), color(`Hai         : i.m ${namebot}`, `${randomcolor}`))
	console.log(color(`${spc3}                    [•]`, `${randomcolor}`), color(`Bot Version : 1.0.0`, `${randomcolor}`))
	console.log(color(`${spc3}                    [•]`, `${randomcolor}`), color(`Library     : Baileys Multi Device`, `${randomcolor}`))
	console.log(color(`${spc3}                    [•]`, `${randomcolor}`), color(`Status      : Online!`, `${randomcolor}`))
	console.log(color(`${spc3}                    [•]`, `${randomcolor}`), color(`Owner       : ${namaowner}`, `${randomcolor}`))
	console.log(color(`${spc3}                    [•]`, `${randomcolor}`), color(`Author      : Zyko MD`, `${randomcolor}`))
	console.log(color(`${spc3}                    [•]`, `${randomcolor}`), color(`Base Ori By : Zyko MD`, `${randomcolor}`))
	console.log(color(`${spc4}                       < =============================== >`, `${randomcolor}`))
if(usePairingCode && !zyko.authState.creds.registered) {
		const phoneNumber = await question('Masukan Nomer Yang Aktif Awali Dengan 62 Recode : zykomdofficial:\n');
		const code = await zyko.requestPairingCode(phoneNumber.trim())
		console.log(`Pairing code: ${code}`)

	}
//=================================================//
zyko.decodeJid = (jid) => {
if (!jid) return jid
if (/:\d+@/gi.test(jid)) {
let decode = jidDecode(jid) || {}
return decode.user && decode.server && decode.user + '@' + decode.server || jid
} else return jid
}
//=================================================//
zyko.ev.on('messages.upsert', async chatUpdate => {
try {
mek = chatUpdate.messages[0]
if (!mek.message) return
mek.message = (Object.keys(mek.message)[0] === 'ephemeralMessage') ? mek.message.ephemeralMessage.message : mek.message
if (mek.key && mek.key.remoteJid === 'status@broadcast') return
if (!zyko.public && !mek.key.fromMe && chatUpdate.type === 'notify') return
if (mek.key.id.startsWith('BAE5') && mek.key.id.length === 16) return
m = smsg(zyko, mek, store)
require("./zyko")(zyko, m, chatUpdate, store)
} catch (err) {
console.log(err)
}
})
zyko.ev.on('call', async (celled) => {
let botNumber = await zyko.decodeJid(zyko.user.id)
let koloi = global.anticall
if (!koloi) return
console.log(celled)
for (let kopel of celled) {
if (kopel.isGroup == false) {
if (kopel.status == "offer") {
let nomer = await zyko.sendTextWithMentions(kopel.from, `*${zyko.user.name}* tidak bisa menerima panggilan ${kopel.isVideo ? `video` : `suara`}. Maaf @${kopel.from.split('@')[0]} kamu akan diblokir. Silahkan hubungi Owner membuka blok !`)
zyko.sendContact(kopel.from, owner.map( i => i.split("@")[0]), nomer)
await sleep(8000)
await zyko.updateBlockStatus(kopel.from, "block")
}
}
}
})
//=================================================//
zyko.ev.on('group-participants.update', async (anu) => {
if (!welcom.includes(anu.id)) return
console.log(anu)
try {
let metadata = await zyko.groupMetadata(anu.id)
let participants = anu.participants
for (let num of participants) {
try {
ppuser = await zyko.profilePictureUrl(num, 'image')
} catch {
ppuser = 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png?q=60'
}

try {
ppgroup = await zyko.profilePictureUrl(anu.id, 'image')
} catch {
ppgroup = 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png?q=60'
}

if (anu.action == 'add') {
zyko.sendMessage(anu.id, { image: { url: ppuser }, mentions: [num], caption: `Haii Kak *@${num.split("@")[0]}* Selamat Datang Di Group *${metadata.subject}* 👋

Terima Kasih Sudah Bergabung Di Group ${metadata.subject}
`})
} else if (anu.action == 'remove') {
zyko.sendMessage(anu.id, { image: { url: ppuser }, mentions: [num], caption: `Selamat Tinggal *@${num.split("@")[0]}* Di Group *${metadata.subject}*`})
} else if (anu.action == 'promote') {
zyko.sendMessage(anu.id, { image: { url: ppuser }, mentions: [num], caption: `@${num.split('@')[0]} Ciee Jadi Admin Di Group ${metadata.subject}\n\n${metadata.desc}`  })
} else if (anu.action == 'demote') {
zyko.sendMessage(anu.id, { image: { url: ppuser }, mentions: [num], caption: `@${num.split('@')[0]} Ciee Di Hapus Jadi Admin Di Group ${metadata.subject}\n\n${metadata.desc}`})
  }
}
} catch (err) {
console.log(err)
}
})
//=================================================//
//=================================================//
zyko.ev.on('contacts.update', update => {
for (let contact of update) {
let id = zyko.decodeJid(contact.id)
if (store && store.contacts) store.contacts[id] = { id, name: contact.notify }}})
//=================================================//
zyko.getName = (jid, withoutContact  = false) => {
id = zyko.decodeJid(jid)
withoutContact = zyko.withoutContact || withoutContact 
let v
if (id.endsWith("@g.us")) return new Promise(async (resolve) => {
v = store.contacts[id] || {}
if (!(v.name || v.subject)) v = zyko.groupMetadata(id) || {}
resolve(v.name || v.subject || PhoneNumber('+' + id.replace('@s.whatsapp.net', '')).getNumber('international'))
})
else v = id === '0@s.whatsapp.net' ? {
id,
name: 'WhatsApp'
} : id === zyko.decodeJid(zyko.user.id) ?
zyko.user :
(store.contacts[id] || {})
return (withoutContact ? '' : v.name) || v.subject || v.verifiedName || PhoneNumber('+' + jid.replace('@s.whatsapp.net', '')).getNumber('international')}
//=================================================//
zyko.sendContact = async (jid, kon, quoted = '', opts = {}) => {
let list = []
for (let i of kon) {
list.push({
displayName: await zyko.getName(i + '@s.whatsapp.net'),
vcard: `BEGIN:VCARD\nVERSION:3.0\nN:${await zyko.getName(i + '@s.whatsapp.net')}\nFN:${await zyko.getName(i + '@s.whatsapp.net')}\nitem1.TEL;waid=${i}:${i}\nitem1.X-ABLabel:Ponsel\nitem2.EMAIL;type=INTERNET:zykobotmdofficial@gmail.com\nitem2.X-ABLabel:Email\nitem3.URL:https://chat.whatsapp.com/HQy6bLpnrYs2OnPY3r6Bq4\nitem3.X-ABLabel:Instagram\nitem4.ADR:;;Indonesia;;;;\nitem4.X-ABLabel:Region\nEND:VCARD`})}
//=================================================//
zyko.sendMessage(jid, { contacts: { displayName: `${list.length} Kontak`, contacts: list }, ...opts }, { quoted })}
//=================================================//
//Kalau Mau Self Lu Buat Jadi false
zyko.public = true
zyko.serializeM = (m) => smsg(zyko, m, store)
zyko.ev.on("connection.update", async (update) => {
const { connection, lastDisconnect } = update;
if (connection === "close") {
  let reason = new Boom(lastDisconnect?.error)?.output.statusCode;
  if (reason === DisconnectReason.badSession) {
console.log(`Bad Session File, Please Delete Session and Scan Again`);
process.exit();
  } else if (reason === DisconnectReason.connectionClosed) {
console.log("Connection closed, reconnecting....");
connectToWhatsApp();
  } else if (reason === DisconnectReason.connectionLost) {
console.log("Connection Lost from Server, reconnecting...");
connectToWhatsApp();
  } else if (reason === DisconnectReason.connectionReplaced) {
console.log("Connection Replaced, Another New Session Opened, Please Restart Bot");
process.exit();
  } else if (reason === DisconnectReason.loggedOut) {
console.log(`Device Logged Out, Please Delete Folder Session yusril and Scan Again.`);
process.exit();
  } else if (reason === DisconnectReason.restartRequired) {
console.log("Restart Required, Restarting...");
connectToWhatsApp();
  } else if (reason === DisconnectReason.timedOut) {
console.log("Connection TimedOut, Reconnecting...");
connectToWhatsApp();
  } else {
console.log(`Unknown DisconnectReason: ${reason}|${connection}`);
connectToWhatsApp();
  }
} else if (connection === "open") {
  zyko.sendMessage(global.owner + "@s.whatsapp.net", { text: `*WhatsApp!*\n\n_Sukses Terhubung ke bot WhatsApp_` });
}
// console.log('Connected...', update)
});
//=================================================//
//=================================================//
zyko.ev.on('creds.update', saveCreds)
 //=================================================//
 zyko.downloadMediaMessage = async (message) => {
let mime = (message.msg || message).mimetype || ''
let messageType = message.mtype ? message.mtype.replace(/Message/gi, '') : mime.split('/')[0]
const stream = await downloadContentFromMessage(message, messageType)
let buffer = Buffer.from([])
for await(const chunk of stream) {
buffer = Buffer.concat([buffer, chunk])}
return buffer} 
 //=================================================//
 zyko.sendImage = async (jid, path, caption = '', quoted = '', options) => {
let buffer = Buffer.isBuffer(path) ? path : /^data:.*?\/.*?;base64,/i.test(path) ? Buffer.from(path.split`,`[1], 'base64') : /^https?:\/\//.test(path) ? await (await getBuffer(path)) : fs.existsSync(path) ? fs.readFileSync(path) : Buffer.alloc(0)
return await zyko.sendMessage(jid, { image: buffer, caption: caption, ...options }, { quoted })}
//=================================================//
zyko.sendText = (jid, text, quoted = '', options) => zyko.sendMessage(jid, { text: text, ...options }, { quoted })
//=================================================//
zyko.sendTextWithMentions = async (jid, text, quoted, options = {}) => zyko.sendMessage(jid, { text: text, contextInfo: { mentionedJid: [...text.matchAll(/@(\d{0,16})/g)].map(v => v[1] + '@s.whatsapp.net') }, ...options }, { quoted })
 //=================================================//
zyko.sendImageAsSticker = async (jid, path, quoted, options = {}) => {
let buff = Buffer.isBuffer(path) ? path : /^data:.*?\/.*?;base64,/i.test(path) ? Buffer.from(path.split`,`[1], 'base64') : /^https?:\/\//.test(path) ? await (await getBuffer(path)) : fs.existsSync(path) ? fs.readFileSync(path) : Buffer.alloc(0)
let buffer
if (options && (options.packname || options.author)) {
buffer = await writeExifImg(buff, options)
} else {
buffer = await imageToWebp(buff)}
await zyko.sendMessage(jid, { sticker: { url: buffer }, ...options }, { quoted })
return buffer}
 //=================================================//
zyko.sendVideoAsSticker = async (jid, path, quoted, options = {}) => {
let buff = Buffer.isBuffer(path) ? path : /^data:.*?\/.*?;base64,/i.test(path) ? Buffer.from(path.split`,`[1], 'base64') : /^https?:\/\//.test(path) ? await (await getBuffer(path)) : fs.existsSync(path) ? fs.readFileSync(path) : Buffer.alloc(0)
let buffer
if (options && (options.packname || options.author)) {
buffer = await writeExifVid(buff, options)
} else {
buffer = await videoToWebp(buff)}
await zyko.sendMessage(jid, { sticker: { url: buffer }, ...options }, { quoted })
return buffer}
 //=================================================//
 zyko.downloadAndSaveMediaMessage = async (message, filename, attachExtension = true) => {
let quoted = message.msg ? message.msg : message
let mime = (message.msg || message).mimetype || ''
let messageType = message.mtype ? message.mtype.replace(/Message/gi, '') : mime.split('/')[0]
const stream = await downloadContentFromMessage(quoted, messageType)
let buffer = Buffer.from([])
for await(const chunk of stream) {
buffer = Buffer.concat([buffer, chunk])}
let type = await FileType.fromBuffer(buffer)
trueFileName = attachExtension ? (filename + '.' + type.ext) : filename
// save to file
await fs.writeFileSync(trueFileName, buffer)
return trueFileName}
//=================================================
 zyko.cMod = (jid, copy, text = '', sender = zyko.user.id, options = {}) => {
//let copy = message.toJSON()
let mtype = Object.keys(copy.message)[0]
let isEphemeral = mtype === 'ephemeralMessage'
if (isEphemeral) {
mtype = Object.keys(copy.message.ephemeralMessage.message)[0]}
let msg = isEphemeral ? copy.message.ephemeralMessage.message : copy.message
let content = msg[mtype]
if (typeof content === 'string') msg[mtype] = text || content
else if (content.caption) content.caption = text || content.caption
else if (content.text) content.text = text || content.text
if (typeof content !== 'string') msg[mtype] = {
...content,
...options}
if (copy.key.participant) sender = copy.key.participant = sender || copy.key.participant
else if (copy.key.participant) sender = copy.key.participant = sender || copy.key.participant
if (copy.key.remoteJid.includes('@s.whatsapp.net')) sender = sender || copy.key.remoteJid
else if (copy.key.remoteJid.includes('@broadcast')) sender = sender || copy.key.remoteJid
copy.key.remoteJid = jid
copy.key.fromMe = sender === zyko.user.id
return proto.WebMessageInfo.fromObject(copy)}
zyko.sendFile = async (jid, path, filename = '', caption = '', quoted, ptt = false, options = {}) => {
let type = await zyko.getFile(path, true)
let { res, data: file, filename: pathFile } = type
if (res && res.status !== 200 || file.length <= 65536) {
try {
throw {
json: JSON.parse(file.toString())
}
}
catch (e) {
if (e.json) throw e.json
}
}
let opt = {
filename
}
if (quoted) opt.quoted = quoted
if (!type) options.asDocument = true
let mtype = '',
mimetype = type.mime,
convert
if (/webp/.test(type.mime) || (/image/.test(type.mime) && options.asSticker)) mtype = 'sticker'
else if (/image/.test(type.mime) || (/webp/.test(type.mime) && options.asImage)) mtype = 'image'
else if (/video/.test(type.mime)) mtype = 'video'
else if (/audio/.test(type.mime))(
convert = await (ptt ? toPTT : toAudio)(file, type.ext),
file = convert.data,
pathFile = convert.filename,
mtype = 'audio',
mimetype = 'audio/ogg; codecs=opus'
)
else mtype = 'document'
if (options.asDocument) mtype = 'document'
delete options.asSticker
delete options.asLocation
delete options.asVideo
delete options.asDocument
delete options.asImage
let message = { ...options, caption, ptt, [mtype]: { url: pathFile }, mimetype }
let m
try {
m = await zyko.sendMessage(jid, message, { ...opt, ...options })
} catch (e) {
//console.error(e)
m = null
} finally {
if (!m) m = await zyko.sendMessage(jid, { ...message, [mtype]: file }, { ...opt, ...options })
file = null
return m
}
}
/*await zyko.sendMessage(jid, { [type]: { url: pathFile }, mimetype, fileName, ...options }, { quoted, ...options })
return fs.promises.unlink(pathFile)}
zyko.parseMention = async(text) => {
return [...text.matchAll(/@([0-9]{5,16}|0)/g)].map(v => v[1] + '@s.whatsapp.net')}*/
//=================================================//
zyko.copyNForward = async (jid, message, forceForward = false, options = {}) => {
let vtype
if (options.readViewOnce) {
message.message = message.message && message.message.ephemeralMessage && message.message.ephemeralMessage.message ? message.message.ephemeralMessage.message : (message.message || undefined)
vtype = Object.keys(message.message.viewOnceMessage.message)[0]
delete(message.message && message.message.ignore ? message.message.ignore : (message.message || undefined))
delete message.message.viewOnceMessage.message[vtype].viewOnce
message.message = {
...message.message.viewOnceMessage.message}}
let mtype = Object.keys(message.message)[0]
let content = await generateForwardMessageContent(message, forceForward)
let ctype = Object.keys(content)[0]
let context = {}
if (mtype != "conversation") context = message.message[mtype].contextInfo
content[ctype].contextInfo = {
...context,
...content[ctype].contextInfo}
const waMessage = await generateWAMessageFromContent(jid, content, options ? {
...content[ctype],
...options,
...(options.contextInfo ? {
contextInfo: {
...content[ctype].contextInfo,
...options.contextInfo}} : {})} : {})
await zyko.relayMessage(jid, waMessage.message, { messageId:  waMessage.key.id })
return waMessage}
//////////////
zyko.sendMessageV2 = async (chatId, message, options = {}) => {
let generate = await generateWAMessage(chatId, message, options)
let type2 = getContentType(generate.message)
if ('contextInfo' in options) generate.message[type2].contextInfo = options?.contextInfo
if ('contextInfo' in message) generate.message[type2].contextInfo = message?.contextInfo
return await zyko.relayMessage(chatId, generate.message, { messageId: generate.key.id })
}
////
zyko.pushMessage = async(m) => {
if (!m) return
if (!Array.isArray(m)) m = [m]
for (const message of m) {
try {
if (!message) continue
if (message.messageStubType && message.messageStubType != WAMessageStubType.CIPHERTEXT) zyko.processMessageStubType(message).catch(console.error)
const _mtype = Object.keys(message.message || {})
const mtype = (!['senderKeyDistributionMessage', 'messageContextInfo'].includes(_mtype[0]) && _mtype[0]) ||
(_mtype.length >= 3 && _mtype[1] !== 'messageContextInfo' && _mtype[1]) ||
_mtype[_mtype.length - 1]
const chat = zyko.decodeJid(message.key.remoteJid || message.message?.senderKeyDistributionMessage?.groupId || '')
if (message.message?.[mtype]?.contextInfo?.quotedMessage) {
let context = message.message[mtype].contextInfo
let participant = zyko.decodeJid(context.participant)
const remoteJid = zyko.decodeJid(context.remoteJid || participant)
let quoted = message.message[mtype].contextInfo.quotedMessage
if ((remoteJid && remoteJid !== 'status@broadcast') && quoted) {
let qMtype = Object.keys(quoted)[0]
if (qMtype == 'conversation') {
quoted.extendedTextMessage = { text: quoted[qMtype] }
delete quoted.conversation
qMtype = 'extendedTextMessage'
}
if (!quoted[qMtype].contextInfo) quoted[qMtype].contextInfo = {}
quoted[qMtype].contextInfo.mentionedJid = context.mentionedJid || quoted[qMtype].contextInfo.mentionedJid || []
const isGroup = remoteJid.endsWith('g.us')
if (isGroup && !participant) participant = remoteJid
const qM = {
key: {
remoteJid,
fromMe: areJidsSameUser(zyko.user.jid, remoteJid),
id: context.stanzaId,
participant,
},
message: JSON.parse(JSON.stringify(quoted)),
...(isGroup ? { participant } : {})
}
let qChats = zyko.chats[participant]
if (!qChats) qChats = zyko.chats[participant] = { id: participant, isChats: !isGroup }
if (!qChats.messages) qChats.messages = {}
if (!qChats.messages[context.stanzaId] && !qM.key.fromMe) qChats.messages[context.stanzaId] = qM
let qChatsMessages
if ((qChatsMessages = Object.entries(qChats.messages)).length > 40) qChats.messages = Object.fromEntries(qChatsMessages.slice(30, qChatsMessages.length)) // maybe avoid memory leak
}
}
if (!chat || chat === 'status@broadcast') continue
const isGroup = chat.endsWith('@g.us')
let chats = zyko.chats[chat]
if (!chats) {
if (isGroup) await zyko.insertAllGroup().catch(console.error)
chats = zyko.chats[chat] = { id: chat, isChats: true, ...(zyko.chats[chat] || {}) }
}
let metadata, sender
if (isGroup) {
if (!chats.subject || !chats.metadata) {
metadata = await zyko.groupMetadata(chat).catch(_ => ({})) || {}
if (!chats.subject) chats.subject = metadata.subject || ''
if (!chats.metadata) chats.metadata = metadata
}
sender = zyko.decodeJid(message.key?.fromMe && zyko.user.id || message.participant || message.key?.participant || chat || '')
if (sender !== chat) {
let chats = zyko.chats[sender]
if (!chats) chats = zyko.chats[sender] = { id: sender }
if (!chats.name) chats.name = message.pushName || chats.name || ''
}
} else if (!chats.name) chats.name = message.pushName || chats.name || ''
if (['senderKeyDistributionMessage', 'messageContextInfo'].includes(mtype)) continue
chats.isChats = true
if (!chats.messages) chats.messages = {}
const fromMe = message.key.fromMe || areJidsSameUser(sender || chat, zyko.user.id)
if (!['protocolMessage'].includes(mtype) && !fromMe && message.messageStubType != WAMessageStubType.CIPHERTEXT && message.message) {
delete message.message.messageContextInfo
delete message.message.senderKeyDistributionMessage
chats.messages[message.key.id] = JSON.parse(JSON.stringify(message, null, 2))
let chatsMessages
if ((chatsMessages = Object.entries(chats.messages)).length > 40) chats.messages = Object.fromEntries(chatsMessages.slice(30, chatsMessages.length))
}
} catch (e) {
console.error(e)
}
}
}
///////
//=================================================//
zyko.getFile = async (PATH, save) => {
let res
let data = Buffer.isBuffer(PATH) ? PATH : /^data:.*?\/.*?;base64,/i.test(PATH) ? Buffer.from(PATH.split`,`[1], 'base64') : /^https?:\/\//.test(PATH) ? await (res = await getBuffer(PATH)) : fs.existsSync(PATH) ? (filename = PATH, fs.readFileSync(PATH)) : typeof PATH === 'string' ? PATH : Buffer.alloc(0)
//if (!Buffer.isBuffer(data)) throw new TypeError('Result is not a buffer')
let type = await FileType.fromBuffer(data) || {
mime: 'application/octet-stream',
ext: '.bin'
}
filename = path.join(__filename, '../src/' + new Date * 1 + '.' + type.ext)
if (data && save) fs.promises.writeFile(filename, data)
return {
res,
filename,
	size: await getSizeMedia(data),
...type,
data
}
}

return zyko
}
connectToWhatsApp()
let file = require.resolve(__filename)
fs.watchFile(file, () => {
fs.unwatchFile(file)
console.log(chalk.redBright(`Update ${__filename}`))
delete require.cache[file]
require(file)
})
