/*

KAYANYA YANG DISINI GADA YG PERLU DI UBAH UBAH TERUNTUK USER SCRIPT
JIKA KAMU SUDAH PAHAM TENTANG BOT TIDAK MASALAH SIH
ERROR TANGGUNG SENDIRI

 Allert !
jangan asal ubah nanti eror
// eror? contact me : 6283804078729

jangan hapus Nama gw di Tq To dasar bocah Copy paste
// copy boleh asal apa? asal no delete w m
// apa itu wm: watermark
// apa itu watermark? fungsi google apa

anda bingung? masuk aja gc ini
https://chat.whatsapp.com/Lf6XnvJfYZdESpR9RfEnJh
jangan sungkan² untuk bertanya

 ©Aypa Team
* [`Aprilia`](https://github.com/?)
* [`YanzBotz`](https://github.com/YanzBotz)
* [`Febriansyah`](https://github.com/FebriansyahXd)
* [`Aldi Fauzi`](https://github.com/xZiyyy) // ME xZiyy

Thanks For Using My Project and Thanks For u Has Respect The creator
*/

const process = require('process');
process.on('uncaughtException', console.error)

require('../media/settings/ownerConfig.js');
require('../media/settings/config')
const { default: makeWaSocket, proto, prepareWAMessageMedia, generateWAMessageFromContent, downloadContentFromMessage, useMultiFileAuthState } = require('@whiskeysockets/baileys')
const { exec, spawn, execSync } = require("child_process")
const fs = require('fs')
const fsx = require('fs-extra')
const { util, promisify } = require('util')
const fetch = require('node-fetch')
const axios = require('axios')
const path = require("path");
const yts = require ('yt-search');
const chalk = require('chalk')
const crypto = require('crypto')
const cheerio = require('cheerio')
const { performance } = require("perf_hooks");
const { TelegraPH } = require("../library/TelegraPH")
const moment = require("moment-timezone")
const os = require('os');
const pino = require('pino')
const { pipeline } = require('stream')
const ytdl = require('ytdl-core')
const speed = require('performance-now')
const more = String.fromCharCode(8206); 
const readmore = more.repeat(4001);
const { bytesToSize, getRandomFile, smsg, checkBandwidth, sleep, formatSize, getRandom, format, getBuffer, isUrl, jsonformat, nganuin, pickRandom, runtime, shorturl, formatp, fetchJson, color, getGroupAdmins } = require("../library/myfunc");
const { addExif } = require('../library/exif')

module.exports = fuzzy = async (fuzzy, m, msg, chatUpdate, store) => {
const { type, sender, pushname, isGroup } = m
try {

// no multi prefix
//must use prefix
var body = (m.mtype === 'interactiveResponseMessage') ? JSON.parse(m.message.interactiveResponseMessage.nativeFlowResponseMessage.paramsJson).id : (m.mtype === 'conversation') ? m.message.conversation : (m.mtype == 'imageMessage') ? m.message.imageMessage.caption : (m.mtype == 'videoMessage') ? m.message.videoMessage.caption : (m.mtype == 'extendedTextMessage') ? m.message.extendedTextMessage.text : (m.mtype == 'buttonsResponseMessage') ? m.message.buttonsResponseMessage.selectedButtonId : (m.mtype == 'listResponseMessage') ? m.message.listResponseMessage.singleSelectReply.selectedRowId : (m.mtype == 'templateButtonReplyMessage') ? m.message.templateButtonReplyMessage.selectedId : (m.mtype == 'messageContextInfo') ? (m.message.buttonsResponseMessage?.selectedButtonId || m.message.listResponseMessage?.singleSelectReply.selectedRowId || m.text) : ""

const prefix = /^[°zZ#$*+,.?=''():√%!¢£¥€π¤ΠΦ_&><`™©®Δ^βα~¦|/\\©^]/.test(body) ? body.match(/^[°zZ#$*+,.?=''():√%¢£¥€π¤ΠΦ_&><!`™©®Δ^βα~¦|/\\©^]/gi) : '.'

const isCmd = body.startsWith(prefix)
const command = isCmd ? body.slice(prefix.length).trim().split(' ').shift().toLowerCase() : ''   
const order = body.slice(0).trim().split(/ +/).shift().toLowerCase()	   
   
const budy = (m && typeof m?.text === 'string') ? m?.text : '';
const args = body.trim().split(/ +/).slice(1);
const full_args = body.replace(command, '').slice(1).trim();
const pushname = m?.pushName || "No Name";
const botNumber = await fuzzy.decodeJid(fuzzy.user.id);
const senderNumber = sender.split('@')[0]
const pureNumber = botNumber.split('@')[0];
const isBot = botNumber.includes(senderNumber)
const isCreator = (m && m?.sender && [botNumber, ...global.ownerNumber].map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').includes(m?.sender)) || false;
const itsMe = (m && m?.sender && m?.sender == botNumber) || false;
const q = args.join(' ')
const text = args.join(" ");
const chat = isGroup?[m.chat] : false
const mentionedJid = [m.sender]
const fatkuns = m && (m?.quoted || m);
const quoted = (fatkuns?.mtype == 'buttonsMessage') ? fatkuns[Object.keys(fatkuns)[1]] : (fatkuns?.mtype == 'templateMessage') ? fatkuns.hydratedTemplate[Object.keys(fatkuns.hydratedTemplate)[1]] : (fatkuns?.mtype == 'product') ? fatkuns[Object.keys(fatkuns)[0]] : m?.quoted || m;
const mime = (quoted.msg || quoted).mimetype || ''
const qmsg = (quoted?.msg || quoted);
const from = m.key.remoteJid
const isMedia = /image|video|sticker|audio/.test(mime);
const content = JSON.stringify(m.message)
const isImage = (type == 'imageMessage')
const isVideo = (type == 'videoMessage')
const isAudio = (type == 'audioMessage')

const isQuotedImage = type === 'extendedTextMessage' && content.includes('imageMessage')
const isQuotedVideo = type === 'extendedTextMessage' && content.includes('videoMessage')
const isQuotedSticker = type === 'extendedTextMessage' && content.includes('stickerMessage')
const isQuotedAudio = type === 'extendedTextMessage' && content.includes('audioMessage')
const isQuotedTeks = type === 'extendedTextMessage' && content.includes('quotedMessage')
const isQuotedTag = type === 'extendedTextMessage' && content.includes('mentionedJid')
const isQuotedReply = type === 'extendedTextMessage' && content.includes('Message')
const isQuotedText = type === 'extendedTextMessage' && content.includes('conversation')
const isQuotedViewOnce = type === 'extendedTextMessage' && content.includes('viewOnceMessageV2') 
//group
const groupMetadata = m?.isGroup ? await fuzzy.groupMetadata(m?.chat).catch(e => {}) : {};
const groupName = m?.isGroup ? groupMetadata.subject || '' : '';
const participants = m?.isGroup ? await groupMetadata.participants || [] : [];
const groupAdmins = m?.isGroup ? await getGroupAdmins(participants) || [] : [];
const isBotAdmins = m?.isGroup ? groupAdmins.includes(botNumber) : false;
const isAdmins = m?.isGroup ? groupAdmins.includes(m?.sender) : false;
const groupOwner = m?.isGroup ? groupMetadata.owner || '' : '';
const isGroupOwner = m?.isGroup ? (groupOwner ? groupOwner : groupAdmins).includes(m?.sender) : false;
    

let datauser = JSON.parse(fs.readFileSync('./media/database/datauser.json'))

const isUser = datauser.includes(m.sender)
//================== [ TIME ] ==================//
const Today = moment.tz('Asia/Jakarta').format('dddd, DD MMMM YYYY')
const wib = moment.tz('Asia/Jakarta').format('HH : mm : ss')
const wit = moment.tz('Asia/Jayapura').format('HH : mm : ss')
const wita = moment.tz('Asia/Makassar').format('HH : mm : ss')

const time2 = moment().tz('Asia/Jakarta').format('HH:mm:ss')
if(time2 < "23:59:00"){
var ucapanWaktu = 'Selamat Malam 🏙️'
}
if(time2 < "19:00:00"){
var ucapanWaktu = 'Selamat Petang 🌆'
}
if(time2 < "18:00:00"){
var ucapanWaktu = 'Selamat Sore 🌇'
}
if(time2 < "15:00:00"){
var ucapanWaktu = 'Selamat Siang 🌤️'
}
if(time2 < "10:00:00"){
var ucapanWaktu = 'Selamat Pagi 🌄'
}
if(time2 < "05:00:00"){
var ucapanWaktu = 'Selamat Subuh 🌆'
}
if(time2 < "03:00:00"){
var ucapanWaktu = 'Selamat Tengah Malam 🌃'
}

//================== [ DATABASE ] ==================//
try {
let isNumber = x => typeof x === 'number' && !isNaN(x)
let user = global.db.data.users[m?.sender]
if (typeof user !== 'object') global.db.data.users[m?.sender] = {}
if (user) {
} else global.db.data.users[m?.sender] = {
}

// chats
 let chats = global.db.data.chats[m?.chat]
 if (typeof chats !== 'object') global.db.data.chats[m?.chat] = {}
 if (chats) {
 if (!('isBanned' in chat)) chat.isBanned = false
 if (!('autoai' in chats)) chats.autoai = false
} else global.db.data.chats[m.chat] = {
autoai: false,
isBanned: false,
}
// setting
let setting = global.db.data.settings[botNumber]
if (typeof setting !== 'object') global.db.data.settings[botNumber] = {}
if (setting) {
 if (!('autoread' in setting)) setting.autoread = false
if (!("public" in settings)) settings.public = true
if (!('onlygrub' in setting)) setting.onlygrub = false
} else global.db.data.settings[botNumber] = {
 autoread: false,
 public: true,
 onlygrub: false,
}
} catch (err) {
}
if (!db.data.settings[botNumber].public) {
if (!isCreator) return
}


//======[ AUTO REGISTER ]=======\\
if (isCmd && !isUser) {
datauser.push(m.sender)
fs.writeFileSync('./media/database/datauser.json', JSON.stringify(datauser, null, 2))
}

//======[ SETTING ]=======\\
// self public
if ((m?.chat in global.db.data.chats || m?.sender in global.db.data.users)) {
let chat = global.db.data.chats[m?.chat]
if (chat && chat.isBanned && !isCreator) return
}

// AUTOREAD
if (db.data.settings[botNumber].autoread) { fuzzy.readMessages([m?.key]) }

if (isCmd) {
    console.log(
        chalk.bgHex('#00FF00').black.bold(' [ LOG ] '),
        chalk.bgHex('#1B1B1B').green(`${moment.tz('Asia/Jakarta').format('HH:mm:ss')}`),
        chalk.bgHex('#4CAF50').black.bold(` ${command.toUpperCase()} `) + '\n' +
        chalk.hex('#2E8B57').bold('⇝ From:'),
        chalk.green.underline(pushname),
        chalk.magenta.bold(`(${m.sender})`) + '\n' +
        chalk.hex('#2E8B57').bold('⇝ In:'),
        chalk.greenBright(m.isGroup ? groupName : 'Private Chat'),
        chalk.hex('#39FF14').dim(from)
    );
} else if (isCmd && !isBot) {
    console.log(
        chalk.bgHex('#00FF00').black.bold(' [ LOG CHAT ] '),
        chalk.bgHex('#1B1B1B').green(`${moment.tz('Asia/Jakarta').format('HH:mm:ss')}`),
        chalk.bgHex('#4CAF50').black.bold(` ${body} `) + '\n' +
        chalk.hex('#2E8B57').bold('⇝ From:'),
        chalk.green.underline(pushname),
        chalk.magenta.bold(`(${m.sender})`) + '\n' +
        chalk.hex('#2E8B57').bold('⇝ In:'),
        chalk.greenBright(m.isGroup ? groupName : 'Private Chat'),
        chalk.hex('#39FF14').dim(from)
    );
}

const reply = async (teks) => {
    try {
      fuzzy.sendMessage(
        m.chat, {
          text: teks,
          contextInfo: {
            externalAdReply: {
              body: `Hi ${pushname}`, // Isi deskripsi atau teks tambahan
              containsAutoReply: true, // Menunjukkan ini balasan otomatis (opsional)
              mediaType: 1, // Tipe media (1 untuk gambar, 2 untuk video, dll.)
              mediaUrl: "https://xziyy.my.id", // URL media atau link utama
              renderLargerThumbnail: false, // Membuat thumbnail lebih besar
              showAdAttribution: true, // Menampilkan label "Ad" (opsional)
              sourceUrl: "", // URL sumber yang akan diakses
              thumbnailUrl: global.imgUrl, // URL thumbnail
              title: botname, // Judul link preview
            },
          },
        }, {
          quoted: m
        }
      );
    } catch (error) {
        console.error('Error saat mengirim pesan:', error);
        m.reply('Gagal mengirim pesan, silakan coba lagi.');
    }
};

//======[ PLUGIN ]=======\\
    for (let name in plugins) {
      let plugin = plugins[name]
      if (plugin.command && plugin.command.includes(command)) {
        let turn = plugin.command instanceof Array ?
          plugin.command.includes(command) :
          plugin.command instanceof String ?
          plugin.command == command :
          false
        if (!turn) continue
        if (plugin.owner && !isCreator) {
          m.reply('only owner')
          continue
        }
        if (plugin.group && !isGroup) {
          m.reply('only group')
          continue
        }
        if (plugin.groupAdmins && !isGroupAdmins) {
          m.reply('only admin')
          continue
        }
        if (plugin.botGroupAdmins && !isBotGroupAdmins) {
          m.reply('bot must admin')
          continue
        }
        await plugin.exec(m, from, { q, fuzzy, args, command, prefix, reply, quoted, mime, pushname, getBuffer })
      }
    }

 const pickRandom = (arr) => {
  return arr[Math.floor(Math.random() * arr.length)];
};

function makeid(length) {
let result = "";
const characters =
"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
const charactersLength = characters.length;

for (let i = 0; i < length; i++) {
result += characters.charAt(
Math.floor(Math.random() * charactersLength),
);
}
return result;
}

const pw = crypto.randomBytes(5).toString('hex')

        if (!isCreator && !m.isGroup && db.data.settings[botNumber].onlygrub ) {
        	if (command){
            return reply(`Hello buddy! Because We Want to Reduce Spam, Please Use Bot in the Group\n\nhttps://chat.whatsapp.com/HeXU27T77XaCGZYLjZGoVk !\n\nIf you have issue please chat owner wa.me/${global.ownerNumber}`)
            }
        }
switch(command) {
case 'script':{
reply(`
▧ 「 *LINK SCRIPT* 」
│    Secret
┗─────────────
`)
}
break
case 'getsession': {
if (!isCreator) return m.reply(mess.owner)
await fuzzy.sendMessage(m.chat, {
document: fs.readFileSync('./media/database/session/creds.json'),
mimetype: 'application/json',
fileName: 'creds.json'
}, { quoted: m });
}
break
case 'menu':{
let speed = require('performance-now')
let timestampe = speed();
let latensie = speed() - timestampe
menu =`
Hai ${ucapanWaktu} 👋

*[ I N F O - B O T ]*
*Name*: ${global.botname}
*Version*: 5.0.0
*Speed*: ${latensie.toFixed(4)} detik
*totalUser*: ${datauser.length}
*Runtime*: ${runtime(process.uptime())}

*[ T I M E ]*
*Today*: ${Today}
*wib*: ${wib}
*wita*: ${wita}
*wit*: ${wit}

┏─『 \`MAIN\` 』
│ ⿻ ${prefix}script
│ ⿻ ${prefix}tes
│ ⿻ ${prefix}ping
│ ⿻ ${prefix}owner
┗─────────────❐

┏─『 \`OWNER\` 』
│ ⿻ ${prefix}mode self/public
│ ⿻ ${prefix}onlygc on/off
│ ⿻ ${prefix}setimgmenu
│ ⿻ ${prefix}setimgbot
│ ⿻ ${prefix}setbotname
│ ⿻ ${prefix}delsampah
│ ⿻ ${prefix}delsesi
│ ⿻ ${prefix}backup
│ ⿻ ${prefix}getsession 
┗─────────────❐

┏─『 \`ARTIFICIAL\` 』
│ ⿻ ${prefix}yousearch
│ ⿻ ${prefix}cody
│ ⿻ ${prefix}flux 
┗─────────────❐

┏─『 \`GROUP\` 』
│ ⿻ ${prefix}linkgroup
│ ⿻ ${prefix}setppgroup
│ ⿻ ${prefix}kick
│ ⿻ ${prefix}add
│ ⿻ ${prefix}delete
│ ⿻ ${prefix}opentime
│ ⿻ ${prefix}closetime
┗─────────────❐

┏─『 \`MAKER\` 』
│ ⿻ ${prefix}brat text
│ ⿻ ${prefix}sticker
│ ⿻ ${prefix}stickergif
│ ⿻ ${prefix}qc
│ ⿻ ${prefix}qcwhite
│ ⿻ ${prefix}wasted
│ ⿻ ${prefix}ytcomment
┗─────────────❐

┏─『 \`STICKER\` 』
│ ⿻ ${prefix}kuromi
│ ⿻ ${prefix}pocoyo
│ ⿻ ${prefix}dino
┗─────────────❐

┏─『 \`download\` 』
│ ⿻ ${prefix}play
│ ⿻ ${prefix}ytmp3
│ ⿻ ${prefix}tiktok
│ ⿻ ${prefix}tiksave
│ ⿻ ${prefix}igdl
┗─────────────❐

┏─『 \`SEARCH\` 』
│ ⿻ ${prefix}rumaysho
│ ⿻ ${prefix}caribuku
│ ⿻ ${prefix}kajian
│ ⿻ ${prefix}gamedva
│ ⿻ ${prefix}soundcloud
┗─────────────❐

┏─『 \`BERITA\` 』
│ ⿻ ${prefix}gempa
│ ⿻ ${prefix}liputan6
┗─────────────❐

┏─『 \`TOOLS\` 』
│ ⿻ ${prefix}tourl
│ ⿻ ${prefix}ssweb
│ ⿻ ${prefix}translate 
│ ⿻ ${prefix}languages
┗─────────────❐

┏─ *TQ TO:*
│   - ${global.ownername} (Dev)
│   - And All Creator
┗─────────────❐
`
          fuzzy.sendMessage(from, {
            image: {
              url: global.menuimgUrl
            },
            caption: menu
          });
}
break
//======[ AI ]======\\
case 'yousearch': {
  let input = `Ex : ${prefix + command} Siapakah Presiden Indonesia Sekarang`

  if (!text) return m.reply(input)
  const website = axios.create({
    baseURL: "https://app.yoursearch.ai",
    headers: {
      "Content-Type": "application/json",
    },
  });

  const yousearch = async (searchTerm) => {
    const requestData = {
      searchTerm: searchTerm,
      promptTemplate: `Search term: "${searchTerm}"

Make your language less formal and use emoticons.
I want you to always use Indonesian slang from Jakarta where the words "you" and "anda" are replaced with "lu" and the word I is replaced with "gw".
Create a summary of the search results in three paragraphs with reference numbers, which you then list numbered at the bottom.
Include emojis in the summary.
Be sure to include the reference numbers in the summary.
Both in the text of the summary and in the reference list, the reference numbers should look like this: "(1)".
Formulate simple sentences.
Include blank lines between the paragraphs.
Do not reply with an introduction, but start directly with the summary.
Include emojis in the summary.
At the end write a hint text where I can find search results as comparison with the above search term with a link to Google search in this format \`See Google results: \` and append the link.
Below write a tip how I can optimize the search results for my search query.
I show you in which format this should be structured:

\`\`\`
<Summary of search results with reference numbers>

Sources:
(1) <URL of the first reference>
(2) <URL of the second reference>

<Hint text for further search results with Google link>
<Tip>
\`\`\`

Here are the search results:
{searchResults}`,
      searchParameters: "{}",
      searchResultTemplate: `[{order}] "{snippet}"
URL: {link}`,
    };

    try {
      const response = await website.post("/api", requestData);
      return response.data.response;
    } catch (error) {
      console.error("Error:", error);
      throw error;
    }
  };

  let hanjing = await yousearch(text)
  reply(`${hanjing}`)
}
break
case 'flux': {
  if (!text) return reply('prompt nya mana?')
  const imgData = await getBuffer(`https://api.siputzx.my.id/api/ai/flux?prompt=${text}`);
  await fuzzy.sendMessage(from, {
    image: imgData,
    caption: "nihh"
  }, {
    quoted: m
  });
}
break;
case 'cody': {
  try {
    if (!text) return reply("Masukkan teks untuk mendapatkan respons.");

    const apiUrl = `https://clairity.us.kg/api/cody?text=${encodeURIComponent(text)}`;

    const response = await axios.get(apiUrl);
    const {
      success,
      answer
    } = response.data;

    if (!success) {
      return reply("Gagal mendapatkan respons dari API.");
    }

    reply(answer);
  } catch (error) {
    console.error("Error fetching Cody response:", error);
    reply("Maaf, terjadi kesalahan saat mengambil respons.");
  }
  break;
}
case 'cody': {
  try {
    if (!text) return reply("Masukkan teks untuk mendapatkan respons.");
    reply('_Tunggu sebentar, sedang membuat gambar..._');

    const apiUrl = `https://clairity.us.kg/api/cody?text=${encodeURIComponent(text)}`;

    const response = await axios.get(apiUrl);
    const {
      success,
      answer
    } = response.data;

    if (!success) {
      return reply("Gagal mendapatkan respons dari API.");
    }

    reply(answer);
  } catch (error) {
    console.error("Error fetching Cody response:", error);
    reply("Maaf, terjadi kesalahan saat mengambil respons.");
  }
  break;
}
//======[ GROUP ]======\\

case 'setppgroup':
case 'setppgrup':
case 'setppgc': {
  if (!m.isGroup) return reply(mess.group)
  if (!isAdmins && !isCreator) return reply('only admin')
  let media = await fuzzy.downloadAndSaveMediaMessage(quoted)
  await fuzzy.updateProfilePicture(m.chat, {
    url: media
  }).catch((err) => fs.unlinkSync(media))
  m.reply('done')
}
break
case 'linkgroup':
case 'linkgc': {
  if (!isBotAdmins) return reply(mess.Badmin)
  let response = await fuzzy.groupInviteCode(from)
  fuzzy.sendText(from, `https://chat.whatsapp.com/${response}\n\nLink Group : ${groupMetadata.subject}`, m, {
    detectLink: true
  })
}
break
case 'd':
case 'del':
case 'delete':
case 'hapus': {
  if (!isAdmins && !isCreator) return reply('only admin')
  if (!m.quoted) return reply('Reply pesan yang ingin dihapus!')
  fuzzy.sendMessage(from, {
    delete: {
      remoteJid: from,
      id: m.quoted.id,
      fromMe: m.quoted.fromMe,
      participant: m.quoted.sender
    }
  })
}
break
case 'totag': {
  if (!isAdmins && !isCreator) return reply('only admin')
  if (!m.quoted)
    return reply(`Reply pesan dengan caption ${prefix + command}`);
  fuzzy.sendMessage(m.chat, {
    forward: m.quoted.fakeObj,
    mentions: participants.map((a) => a.id),
  });
}
break;
case 'closetime':
if (!isGroup) return reply(mess.group)
if (!isBotAdmins) return reply(mess.Badmin)
if (args[1] == "detik") {
  var timer = args[0] * `1000`
} else if (args[1] == "menit") {
  var timer = args[0] * `60000`
} else if (args[1] == "jam") {
  var timer = args[0] * `3600000`
} else if (args[1] == "hari") {
  var timer = args[0] * `86400000`
} else {
  return reply("*pilih:*\ndetik\nmenit\njam\n\n*contoh*\n10 detik")
}
reply(`Close time ${q} dimulai dari sekarang`)
setTimeout(() => {
  const close = `*Tepat waktu* grup ditutup oleh admin\nsekarang hanya admin yang dapat mengirim pesan`
  fuzzy.groupSettingUpdate(from, 'announcement')
  reply(close)
}, timer)
break

case 'opentime':
if (!isGroup) return reply(mess.group)
if (!isBotAdmins) return reply(mess.Badmin)
if (args[1] == "detik") {
  var timer = args[0] * `1000`
} else if (args[1] == "menit") {
  var timer = args[0] * `60000`
} else if (args[1] == "jam") {
  var timer = args[0] * `3600000`
} else if (args[1] == "hari") {
  var timer = args[0] * `86400000`
} else {
  return reply("*pilih:*\ndetik\nmenit\njam\n\n*contoh*\n10 detik")
}
reply(`Open time ${q} dimulai dari sekarang`)
setTimeout(() => {
  const open = `*Tepat waktu* grup dibuka oleh admin\n sekarang member dapat mengirim pesan`
  fuzzy.groupSettingUpdate(from, 'not_announcement')
  reply(open)
}, timer)
break

case 'add': {
  if (!m.isGroup) return reply(mess.group)
  if (!isBotAdmins) return reply(mess.Badmin)
  if (!isAdmins && !isCreator) return reply('only admin')
  let users = m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '') + '@s.whatsapp.net'
  await fuzzy.groupParticipantsUpdate(from, [users], 'add')
  reply('succss')
}
break
case 'kick': {
  if (m?.isGroup && !isAdmins && !isGroupOwner && isBotAdmins) return reply('only admin')
  let users = m?.quoted ? m?.quoted.sender : text.replace(/[^0-9]/g, '') + '@s.whatsapp.net'
  await fuzzy.groupParticipantsUpdate(m?.chat, [users], 'remove').catch(console.log)
  m.reply('bye bye kasian deh')
}
break
//======[ DOWNLOAD ]======\\
case 'igdl': {
  reply('Tunggu sebentar, sedang mengunduh video dari Instagram...');

  async function fetchInstagramVideo(url) {
    const res = await axios.get(`https://clairity.us.kg/api/ig-indownloader?url=${encodeURIComponent(url)}`);
    return res.data;
  }

  const igUrl = args[0]; // Link Instagram diberikan sebagai argumen

  if (!igUrl) {
    return m.reply('Masukkan URL Instagram yang ingin diunduh.');
  }

  try {
    const result = await fetchInstagramVideo(igUrl);

    if (!result || result.length === 0) {
      return m.reply('Gagal mengunduh video. Pastikan URL benar.');
    }

    const {
      url
    } = result[0];

    m.reply('Video berhasil ditemukan! Mengirim video...');
    await fuzzy.sendFile(m.chat, url, 'ig_video.mp4', 'Berikut video yang berhasil diunduh.', m);
  } catch (error) {
    console.error('Error fetching Instagram video:', error);
    m.reply('Maaf, terjadi kesalahan saat mengunduh video.');
  }

}
break;

case 'tiksave': {
  reply('Tunggu sebentar, sedang mengunduh video TikTok...');

  async function fetchTikTokVideo(url) {
    const res = await axios.get(`https://clairity.us.kg/api/tiksave?url=${encodeURIComponent(url)}`);
    return res.data;
  }

  const tiktokUrl = args[0];
  if (!tiktokUrl) {
    return m.reply('Masukkan URL TikTok yang ingin diunduh.');
  }

  try {
    const videoData = await fetchTikTokVideo(tiktokUrl);

    if (!videoData.success) {
      return m.reply('Gagal mengunduh video. Pastikan URL benar.');
    }

    const {
      title,
      videoData: {
        thumbnail,
        downloadLinks
      }
    } = videoData.data;

    const downloadLink = downloadLinks[0].link; // Mendapatkan link unduhan pertama

    await fuzzy.sendFile(m.chat, downloadLink, `ttsave.mp4`, `Nihh".`, m);
  } catch (error) {
    console.error('Error fetching TikTok video:', error);
    m.reply('Maaf, terjadi kesalahan saat mengunduh video.');
  }

}
break;


case 'tt':
case 'tiktok': {
  try {
    if (!text.startsWith('http')) return reply("Masukkan URL yang valid.");
    m.reply('_Mohon tunggu, sedang memproses..._')
    const apiUrl = `https://clairity.us.kg/api/tiktok?url=${text}`;
    const response = await axios.get(apiUrl);
    const {
      status,
      result
    } = response.data;

    if (!status) {
      return reply("Gagal mendapatkan data. Pastikan URL valid.");
    }

    const title = result.title || "Judul tidak tersedia";
    const author = result.author || "Pembuat tidak diketahui";
    const {
      nowm,
      audio
    } = result;

    let key = await fuzzy.sendMessage(m.chat, {
      video: {
        url: nowm,
      },
      caption: ` Judul: ${title}\n Pembuat: ${author}`,
      fileName: `tiktok.mp4`,
      mimetype: 'video/mp4'
    }, {
      quoted: m
    });

    await fuzzy.sendMessage(m.chat, {
      audio: {
        url: audio,
      },
      fileName: `tiktok.mp3`,
      mimetype: 'audio/mp4'
    }, {
      quoted: key
    });
  } catch (error) {
    console.error("Error fetching TikTok data:", error);
    reply("Maaf, terjadi kesalahan saat mengambil data TikTok.");
  }
}
break;
case 'ytmp3': {
  if (!text) return m.reply(`• Example :* .ytmp3 link`)
  m.reply('_Mohon tunggu, sedang memproses..._')

  const formatAudio = ['mp3', 'm4a', 'webm', 'acc', 'flac', 'opus', 'ogg', 'wav'];
  const formatVideo = ['360', '480', '720', '1080', '1440', '4k'];

  const ddownr = {
    download: async (url, format) => {
      if (!formatAudio.includes(format) && !formatVideo.includes(format)) {
        throw new Error('Format nya gk support wak, coba cek lagi listnya.');
      }

      const config = {
        method: 'GET',
        url: `https://p.oceansaver.in/ajax/download.php?format=${format}&url=${encodeURIComponent(url)}&api=dfcb6d76f2f6a9894gjkege8a4ab232222`,
        headers: {
          'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36'
        }
      };

      try {
        const response = await axios.request(config);

        if (response.data && response.data.success) {
          const {
            id,
            title,
            info
          } = response.data;
          const {
            image
          } = info;
          const downloadUrl = await ddownr.cekProgress(id);

          return {
            id: id,
            image: image,
            title: title,
            downloadUrl: downloadUrl
          };
        } else {
          throw new Error('Failed to fetch video details.');
        }
      } catch (error) {
        console.error('Error:', error);
        throw error;
      }
    },
    cekProgress: async (id) => {
      const config = {
        method: 'GET',
        url: `https://p.oceansaver.in/ajax/progress.php?id=${id}`,
        headers: {
          'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36'
        }
      };

      try {
        while (true) {
          const response = await axios.request(config);

          if (response.data && response.data.success && response.data.progress === 1000) {
            return response.data.download_url;
          }
          await new Promise(resolve => setTimeout(resolve, 5000));
        }
      } catch (error) {
        console.error('Error:', error);
        throw error;
      }
    }
  }

  try {

    try {
      const downloadResult = await ddownr.download(text, 'mp3')

      if (!downloadResult || !downloadResult.downloadUrl) {
        return m.reply('Gagal mendapatkan audio. Pastikan query valid.')
      }

      await fuzzy.sendMessage(m.chat, {
        audio: {
          url: downloadResult.downloadUrl
        },
        mimetype: "audio/mpeg",
        fileName: `${downloadResult.title || 'Play Downloader'}.mp3`,
      }, {
        quoted: m
      })


    } catch (scraperError) {
      console.error('Scraper error:', scraperError)
      return m.reply('Terjadi kesalahan saat mengunduh audio. Silakan coba lagi.')
    }

  } catch (searchError) {
    console.error('Search error:', searchError)
    return m.reply('Terjadi kesalahan saat mencari video. Silakan coba lagi.')
  }
}
break

case 'play': {
  if (!text) return m.reply(`• Example :* .play *[query]`)
  m.reply('_Mohon tunggu, sedang memproses..._')

  const formatAudio = ['mp3', 'm4a', 'webm', 'acc', 'flac', 'opus', 'ogg', 'wav'];
  const formatVideo = ['360', '480', '720', '1080', '1440', '4k'];

  const ddownr = {
    download: async (url, format) => {
      if (!formatAudio.includes(format) && !formatVideo.includes(format)) {
        throw new Error('Format nya gk support wak, coba cek lagi listnya.');
      }

      const config = {
        method: 'GET',
        url: `https://p.oceansaver.in/ajax/download.php?format=${format}&url=${encodeURIComponent(url)}&api=dfcb6d76f2f6a9894gjkege8a4ab232222`,
        headers: {
          'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36'
        }
      };

      try {
        const response = await axios.request(config);

        if (response.data && response.data.success) {
          const {
            id,
            title,
            info
          } = response.data;
          const {
            image
          } = info;
          const downloadUrl = await ddownr.cekProgress(id);

          return {
            id: id,
            image: image,
            title: title,
            downloadUrl: downloadUrl
          };
        } else {
          throw new Error('Failed to fetch video details.');
        }
      } catch (error) {
        console.error('Error:', error);
        throw error;
      }
    },
    cekProgress: async (id) => {
      const config = {
        method: 'GET',
        url: `https://p.oceansaver.in/ajax/progress.php?id=${id}`,
        headers: {
          'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36'
        }
      };

      try {
        while (true) {
          const response = await axios.request(config);

          if (response.data && response.data.success && response.data.progress === 1000) {
            return response.data.download_url;
          }
          await new Promise(resolve => setTimeout(resolve, 5000));
        }
      } catch (error) {
        console.error('Error:', error);
        throw error;
      }
    }
  }

  try {
    const searchResults = await yts(text)
    if (!searchResults.videos.length) {
      return m.reply('Tidak menemukan video yang cocok.')
    }

    const videoData = searchResults.videos[0]
    const videoUrl = videoData.url

    try {
      const downloadResult = await ddownr.download(videoUrl, 'mp3')

      if (!downloadResult || !downloadResult.downloadUrl) {
        return m.reply('Gagal mendapatkan audio. Pastikan query valid.')
      }

      await fuzzy.sendMessage(m.chat, {
        audio: {
          url: downloadResult.downloadUrl
        },
        mimetype: "audio/mpeg",
        fileName: `${downloadResult.title || 'Play Downloader'}.mp3`,
      }, {
        quoted: m
      })


    } catch (scraperError) {
      console.error('Scraper error:', scraperError)
      return m.reply('Terjadi kesalahan saat mengunduh audio. Silakan coba lagi.')
    }

  } catch (searchError) {
    console.error('Search error:', searchError)
    return m.reply('Terjadi kesalahan saat mencari video. Silakan coba lagi.')
  }
}
break
//======[ SEARCH ]======\\
case 'kuromi': {
  try {
    let query = 'kuromi';
    let response = await fetch(`https://api.siputzx.my.id/api/s/pinterest?query=${query}`);
    let data = await response.json();

    if (!data.status || !data.data.length) {
      return reply('Tidak ditemukan gambar untuk kata kunci tersebut.');
    }

    let randomImage = data.data[Math.floor(Math.random() * data.data.length)].images_url;

    await fuzzy.sendImageAsSticker(from, randomImage, m, {
      packname: global.packname,
      author: global.author
    });
  } catch (error) {
    console.error(error);
    reply('Terjadi kesalahan saat memproses permintaan.');
  }
}
break;
case 'dino': {
  try {
    let query = 'dino kuning';
    let response = await fetch(`https://api.siputzx.my.id/api/s/pinterest?query=${query}`);
    let data = await response.json();

    if (!data.status || !data.data.length) {
      return reply('Tidak ditemukan gambar untuk kata kunci tersebut.');
    }

    let randomImage = data.data[Math.floor(Math.random() * data.data.length)].images_url;

    await fuzzy.sendImageAsSticker(from, randomImage, m, {
      packname: global.packname,
      author: global.author
    });
  } catch (error) {
    console.error(error);
    reply('Terjadi kesalahan saat memproses permintaan.');
  }
}
break;
case 'pucoyo': case 'pocoyo': {
  try {
    let query = 'pocoyo';
    let response = await fetch(`https://api.siputzx.my.id/api/s/pinterest?query=${query}`);
    let data = await response.json();

    if (!data.status || !data.data.length) {
      return reply('Tidak ditemukan gambar untuk kata kunci tersebut.');
    }

    let randomImage = data.data[Math.floor(Math.random() * data.data.length)].images_url;

    await fuzzy.sendImageAsSticker(from, randomImage, m, {
      packname: global.packname,
      author: global.author
    });
  } catch (error) {
    console.error(error);
    reply('Terjadi kesalahan saat memproses permintaan.');
  }
}
break;
case 'caribuku': {
  if (!text) return reply(`Gunakan dengan cara ${command} *judul*\n\n_Contoh_\n\n${command} Nayla`);

  await fuzzy.sendMessage(from, {
    react: {
      text: "📚",
      key: m.key
    }
  });

  try {
    // Mengambil data dari API cari buku
    let {
      data
    } = await axios.get(`https://clairity.us.kg/api/caribuku?query=${text}`);

    // Cek apakah respons memiliki data buku
    if (!data || !data.length) {
      return reply("Tidak ada buku yang ditemukan. Silakan coba dengan judul yang berbeda.");
    }

    // Menyusun hasil buku dalam format pesan
    let bukuList = `Hasil Pencarian Buku untuk *"${text}"*:\n\n`;
    data.slice(0, 5).forEach((buku, index) => {
      bukuList += `*${index + 1}. ${buku.title}*\n`;
      bukuList += `📖 Rating: ${buku.rating}\n`;
      bukuList += `🔗 [Goodreads Link](${buku.link})\n\n`;
    });

    reply(bukuList); // Menampilkan hasil buku

  } catch (error) {
    console.error("Error fetching book data:", error);
    reply("Maaf, terjadi kesalahan dalam mengambil data buku. Silakan coba lagi nanti.");
  }
}
break;

case 'rumaysho': {
  if (!text) return reply(`Gunakan dengan cara ${command} *topik*\n\n_Contoh_\n\n${command} Jum'at`);

  await fuzzy.sendMessage(from, {
    react: {
      text: "⏱️",
      key: m.key
    }
  });

  try {
    // Mengambil data dari API Rumaysho
    let {
      data
    } = await axios.get(`https://clairity.us.kg/api/rumaysho?query=${encodeURIComponent(text)}`);

    // Cek apakah data yang diterima bukan array kosong
    if (!data || data.length === 0) {
      reply("Maaf, artikel tidak ditemukan untuk pencarian ini.");
      return;
    }

    // Membuat teks hasil pencarian artikel
    let hasil = '*Hasil Pencarian Artikel*:\n\n';
    data.forEach((item, index) => {
      hasil += `*${index + 1}. ${item.title}*\n`;
      hasil += `🔗 ${item.link}\n\n`;
    });

    reply(hasil);
  } catch (error) {
    console.error("Error fetching articles:", error);
    reply("Maaf, terjadi kesalahan dalam mengambil data. Silakan coba lagi nanti.");
  }
}
break;
case 'kajian': {
  if (!text) return reply(`Gunakan dengan cara ${command} *topik*\n\n_Contoh_\n\n${command} Kajian Rutin Kamis Sore`);

  await fuzzy.sendMessage(from, {
    react: {
      text: "⏱️",
      key: m.key
    }
  });

  try {
    // Mengambil data dari API YPIA
    let {
      data
    } = await axios.get(`https://clairity.us.kg/api/ypia?query=${encodeURIComponent(text)}`);

    // Cek apakah data yang diterima bukan array kosong
    if (!data || data.length === 0) {
      reply("Maaf, tidak ditemukan kajian untuk topik yang dicari.");
      return;
    }

    // Membuat teks hasil pencarian kajian
    let hasil = '*Hasil Pencarian Kajian*:\n\n';
    data.forEach((item, index) => {
      hasil += `*${index + 1}. ${item.title}*\n`;
      hasil += `🔗 ${item.link}\n\n`;
    });

    reply(hasil);
  } catch (error) {
    console.error("Error fetching kajian:", error);
    reply("Maaf, terjadi kesalahan dalam mengambil data. Silakan coba lagi nanti.");
  }
}
break;
case 'soundc':
case 'soundcloud': {
  // Mengecek apakah pengguna memberikan query pencarian
  if (!text) return reply(`Gunakan dengan format ${command} *judul lagu*\n\nContoh:\n\n${command} helena`);

  await fuzzy.sendMessage(from, {
    react: {
      text: "🔍",
      key: m.key
    }
  });

  try {
    // Mengirim request ke API dengan query
    let response = await axios.get(`https://clairity.us.kg/api/soundcloud?query=${encodeURIComponent(text)}`);

    // Mengambil data dari hasil API
    let results = response.data;

    // Mengecek apakah ada hasil
    if (results.length > 0) {
      let message = `Hasil pencarian SoundCloud untuk *"${text}"*:\n\n`;

      // Looping hasil dan format menjadi string
      results.forEach((item, index) => {
        message += `${index + 1}. *${item.title}*\n`;
        if (item.creator) message += `   🎙️ Creator: ${item.creator}\n`;
        if (item.views) message += `   👀 Views: ${item.views}\n`;
        if (item.duration) message += `   ⏱️ Duration: ${item.duration}\n`;
        if (item.uploadDate) message += `   📅 Uploaded: ${item.uploadDate}\n`;
        message += `   🔗 [Link](${item.url})\n\n`;
      });

      reply(message);
    } else {
      reply("Maaf, tidak ada hasil yang ditemukan untuk pencarian tersebut.");
    }
  } catch (error) {
    console.error("Error fetching SoundCloud results:", error);
    reply("Maaf, terjadi kesalahan saat mengambil data dari SoundCloud.");
  }
}
break;

case 'gamedva': {
  try {
    if (!text) return reply("Masukkan query untuk pencarian.");

    const apiUrl = `https://clairity.us.kg/api/gamedva?query=${encodeURIComponent(text)}&url=&type=searchApp`;

    const response = await axios.get(apiUrl);
    res = response.data

    if (res.length === 0) {
      return reply("Tidak ditemukan hasil pencarian.");
    }

    const message = res.map(res => {
      const {
        title,
        developer,
        link,
        image,
        version
      } = res
      return `🎮 **${title}**\n🔗 link: ${link}\nimage: ${image}\nversion: ${version}`;
    }).join("\n");

    reply(message);
  } catch (error) {
    console.error("Error fetching GameDVA data:", error);
    reply("Maaf, terjadi kesalahan saat mengambil data.");
  }
}
break;
//======[ BERITA ]======\\
case 'gempa': {
  try {
    const apiUrl = 'https://clairity.us.kg/api/gempa';

    const response = await axios.get(apiUrl);
    const {
      status,
      data
    } = response.data;

    if (status !== "success") {
      return reply("Gagal mendapatkan data gempa.");
    }

    const {
      gempa
    } = data.Infogempa;
    const {
      Tanggal,
      Jam,
      Coordinates,
      Lintang,
      Bujur,
      Magnitude,
      Kedalaman,
      Wilayah,
      Potensi,
      Dirasakan,
      Shakemap
    } = gempa;

    // Menyusun pesan detail gempa
    const message = `
      🌀 **Info Gempa** 🌀
      📅 Tanggal: ${Tanggal}
      🕒 Jam: ${Jam}
      📍 Koordinat: ${Coordinates} (${Lintang}, ${Bujur})
      🌍 Wilayah: ${Wilayah}
      ⚖️ Magnitude: ${Magnitude}
      🌊 Kedalaman: ${Kedalaman}
      💨 Potensi: ${Potensi}
      🌍 Dirasakan: ${Dirasakan}
    `;

    reply(message);
  } catch (error) {
    console.error("Error fetching Gempa data:", error);
    reply("Maaf, terjadi kesalahan saat mengambil data gempa.");
  }
}
break;
case 'liputan6': {
  reply('Tunggu sebentar, sedang mengambil data...');

  // Fungsi untuk mengambil data dari API
  async function fetchNews() {
    const res = await axios.get('https://clairity.us.kg/api/liputan6');
    return res.data.data;
  }

  try {
    const newsData = await fetchNews();

    if (!newsData || newsData.length === 0) {
      return m.reply('Tidak ada berita ditemukan.');
    }

    // Gabungkan semua berita ke dalam satu pesan
    let allNews = `*Berita Terbaru dari Liputan6*\n\n`;

    newsData.forEach((item, index) => {
      const {
        title,
        link,
        tag,
        image,
        source
      } = item;

      allNews += `*Berita ${index + 1}*\n` +
        `▢ *Judul* : ${title}\n` +
        `▢ *Tag* : ${tag || 'Tidak ada tag'}\n` +
        `▢ *Sumber* : ${source}\n` +
        `▢ *Link* : [Baca Selengkapnya](${link})\n\n`;
    });

    // Kirim semua berita dalam satu pesan
    m.reply(allNews);
  } catch (error) {
    console.error('Error fetching news:', error);
    m.reply('Maaf, terjadi kesalahan saat mengambil berita.');
  }
}
break;
//======[ TOOLS ]======\\
case 'ssweb': {
  if (!text) return reply(`Gunakan dengan cara ${command} *link*\n\n_Contoh_\n\n${command} https://xZiyy.com`);

  if (!text.startsWith('https://')) {
    return reply('Link harus menggunakan https://');
  }

  let ss = await (await fetch(`https://image.thum.io/get/fullpage/${text}`)).buffer();
  fuzzy.sendFile(m?.chat, ss, "", "Done", m);
}
break;
case 'tourl': {
  let q = m.quoted ? m.quoted : m
  let mime = (q.msg || q).mimetype || ''
  if (!mime) return reply(' reply media')
  let media = await q.download()
  let uploadImage = require('../library/uploadImage')
  let isTele = /image\/(png|jpe?g|gif)|video\/mp4|audio\/mpeg/.test(mime);
  let link = await (isTele ? uploadImage : "not found")(media)
  reply(`${link}
${media.length} Byte(s)
${isTele ? '(Tidak Ada Tanggal Kedaluwarsa)' : '(Tidak diketahui)'}`)
}
break
case 'translate': {

  async function fetchTranslation(text, target) {
    const res = await axios.get(`https://clairity.us.kg/api/translate?text=${encodeURIComponent(text)}&target=${target}`);
    return res.data;
  }

  const swn = args.join(" ")
  const text = swn.split(",")[0];
  const target = swn.split(",")[1];

  if (!text) {
    return m.reply('Masukkan teks yang ingin diterjemahkan.\ncontoh:\n!translate hello world, en\n!translate hello world, id\n\nketik !languages untuk melihat bahasa');
  }

  if (!target) {
    return m.reply('Masukkan teks yang ingin diterjemahkan.\ncontoh:\n!translate hello world, en\n!translate hello world, id\n\nketik !languages untuk melihat bahasa');
  }

  try {
    const result = await fetchTranslation(text, target);

    if (!result.success) {
      return m.reply('Gagal menerjemahkan teks.');
    }

    const {
      translatedText
    } = result;
    m.reply(`Hasil terjemahan:\n\n${translatedText}`);
  } catch (error) {
    console.error('Error fetching translation:', error);
    m.reply('Maaf, terjadi kesalahan saat menerjemahkan teks.');
  }
}
break;
case 'languages': {
  reply('Tunggu sebentar, sedang mengambil daftar bahasa...');

  async function fetchLanguages() {
    const res = await axios.get('https://clairity.us.kg/api/languages');
    return res.data;
  }

  try {
    const result = await fetchLanguages();

    if (!result.success) {
      return m.reply('Gagal mengambil daftar bahasa.');
    }

    const {
      languages
    } = result;
    let languageList = '*Daftar Bahasa yang Tersedia*\n\n';

    for (const [code, name] of Object.entries(languages)) {
      languageList += `▢ ${name} (${code})\n`;
    }

    m.reply(languageList);
  } catch (error) {
    console.error('Error fetching languages:', error);
    m.reply('Maaf, terjadi kesalahan saat mengambil daftar bahasa.');
  }

}
break;
//======[ OWNER ]======\\
      case 'delsesi':
      case 'clear':
      case 'ds':
      case 'clearsession': {
        if (!isCreator) return reply(mess.owner)
        fs.readdir("./media/database/session", async function (err, files) {
          if (err) {
            console.log('Unable to scan directory: ' + err);
            return reply('Unable to scan directory: ' + err);
          }
          let filteredArray = await files.filter(item => item.startsWith("pre-key") ||
            item.startsWith("sender-key") || item.startsWith("session-") || item.startsWith("app-state")
          )
          console.log(filteredArray.length);
          /*let teks = `Terdeteksi ${filteredArray.length} file sampah\n\n`
          if (filteredArray.length == 0) return reply(teks)
          filteredArray.map(function(e, i) {
          teks += (i + 1) + `. ${e}\n`
          })
          reply(teks)
          await sleep(2000)*/
          reply("Menghapus file sampah...")
          await filteredArray.forEach(function (file) {
            fs.unlinkSync(`./media/database/session/${file}`)
          });
          await sleep(2000)
          reply("Berhasil menghapus semua sampah di folder session")
        });
      }
      break
      case 'delsampah': {
        if (!isCreator) return reply(mess.owner)
        let directoryPath = path.join('./media/tmp') //&& './media') //path.join();
        fs.readdir(directoryPath, async function (err, files) {
          if (err) {
            return reply('Tidak dapat memindai direktori: ' + err);
          }
          let filteredArray = await files.filter(item => item.endsWith("gif") || item.endsWith("png") || item.endsWith("mp3") || item.endsWith("mp4") || item.endsWith("jpg") || item.endsWith("jpeg") || item.endsWith("webp") || item.endsWith("webm") || item.endsWith("bin"))
          var teks = `Terdeteksi ${filteredArray.length} file sampah\n\n`
          if (filteredArray.length == 0) return reply(teks)
          filteredArray.map(function (e, i) {
            teks += (i + 1) + `. ${e}\n`
          })
          reply(teks)
          await sleep(2000)
          m.reply("Menghapus file sampah...")
          await filteredArray.forEach(function (file) {
            fs.unlinkSync(`./media/tmp/${file}`) //&& `./media/${file}`) 
          });
          await sleep(2000)
          reply("Berhasil menghapus semua sampah")
        });
      }
      break
      case 'backup': {
        if (!isCreator) return reply(mess.owner)
        await reply('akan dikirim me nomor owner..');
        const {
          execSync
        } = require("child_process");
        const ls = (await execSync("ls"))
          .toString()
          .split("\n")
          .filter(
            (pe) =>
            pe != "node_modules" &&
            pe != "package-lock.json" &&
            pe != "yarn.lock" &&
            pe != ""
          );
        const dyn = moment.tz('Asia/Jakarta').format('dddd-DD-MMMM-YYYY')
        const exec = await execSync(`zip -r clairity-${dyn}.zip ${ls.join(" ")}`);
        await fuzzy.sendMessage(`${global.owner}@s.whatsapp.net`, {
          document: await fs.readFileSync(`./clairity-${dyn}.zip`),
          mimetype: "application/zip",
          fileName: `clairity-${dyn}.zip`,
        }, {
          quoted: m
        });
        await execSync(`rm -rf clairity-${dyn}.zip`);
      }
      break
case 'creator':
case 'owner': {
  const Kontol = await m.reply("ini dia ownerku yang baik hati dan tidak sombong, jangan di spam yaa kalo gak di bales!!")
  const options = {
    contextInfo: {
      forwardingScore: 10,
      isForwarded: true
    }
  }; // Opsional
  fuzzy.sendContact(from, global.owner, Kontol, options)
}
break
case 'setimgmenu': {
  let q = m.quoted ? m.quoted : m
  let mime = (q.msg || q).mimetype || ''
  if (!mime) return reply('reply image')
  let media = await q.download()
  let uploadImage = require('../library/uploadImage')
  let isTele = /image\/(png|jpe?g|gif)|video\/mp4|audio\/mpeg/.test(mime);
  let link = await (isTele ? uploadImage : "not found")(media)
  global.menuimgUrl = link
  reply(`succes`)
}
break
case 'setimgreply': {
  let q = m.quoted ? m.quoted : m
  let mime = (q.msg || q).mimetype || ''
  if (!mime) return reply('reply image')
  let media = await q.download()
  let uploadImage = require('../library/uploadImage')
  let isTele = /image\/(png|jpe?g|gif)|video\/mp4|audio\/mpeg/.test(mime);
  let link = await (isTele ? uploadImage : "not found")(media)
  global.imgUrl = link
  reply(`succes`)
}
break
case 'setbotname': {
  if (!text) return reply(`mana text nya?\n\ncontoh:\n${prefix + command} mayura bot`)
  global.botname = text
}
break
case 'setownername': {
  if (!text) return reply(`mana text nya?\n\ncontoh:\n${prefix + command} mayura bot`)
  global.ownername = text
}
break
case 'setownernumber': {
  if (!text) return reply(`mana text nya?\n\ncontoh:\n${prefix + command} mayura bot`)
  global.owner = text
}
break
case 'tes': {
  reply('aktif kak')
}
break
case 'onlygroup':
case 'onlygc':
if (!isCreator) return reply(mess.owner)
if (args.length < 1) return reply(`Example ${prefix + command} on/off`)
if (q == 'on') {
  db.data.settings[botNumber].onlygrub = true
  db.data.settings[botNumber].onlypc = true
  reply(`Successfully Changed Onlygroup To ${q}`)
} else if (q == 'off') {
  db.data.settings[botNumber].onlygrub = false
  db.data.settings[botNumber].onlypc = false
  reply(`Successfully Changed Onlygroup To ${q}`)
}
break
case 'banchat': {
  if (!isCreator) return reply(mess.owner)
  if (args[0] == "on") {
    db.data.chats[m?.chat].isBannedChat = true
    reply("berhasil banchat")
  } else if (args[0] == "off") {
    db.data.chats[m?.chat].isBannedChat = false
    reply("berhasil unbanchat")
  } else {
    reply('contoh:\n!banchat on')
  }
}
break

case 'mode': {
  if (!isCreator) return reply(mess.owner)
  if (args[0] == "public") {
    if (db.data.settings[botNumber].public == true) return reply("Sudah Active")
    db.data.settings[botNumber].public = true
    reply("Mode Public Telah Active")
  } else if (args[0] == "self") {
    if (db.data.settings[botNumber].public == false) return reply("Sudah Off")
    db.data.settings[botNumber].public = false
    reply("Mode Self Telah Active")
  }
}
break

case 'ai': {
  if (!args[0]) {
    return m.reply("Gunakan perintah:\n- .ai on (untuk mengaktifkan AI)\n- .ai off (untuk menonaktifkan AI)");
  }

  if (args[0].toLowerCase() === "on") {
    if (!global.db.data.chats[m?.chat]) global.db.data.chats[m?.chat] = {};
    global.db.data.chats[m?.chat].autoai = true;
    return m.reply("Fitur AI telah diaktifkan untuk chat ini.");
  } else if (args[0].toLowerCase() === "off") {
    if (!global.db.data.chats[m?.chat]) global.db.data.chats[m?.chat] = {};
    global.db.data.chats[m?.chat].autoai = false;
    return m.reply("Fitur AI telah dinonaktifkan untuk chat ini.");
  } else {
    return m.reply("Pilihan tidak valid! Gunakan:\n- .ai on (untuk mengaktifkan AI)\n- .ai off (untuk menonaktifkan AI)");
  }
}
break
default:
  function resetSession(user) {
    if (global.db.data.users[user]?.aiSession) {
      delete global.db.data.users[user].aiSession;
      return true;
    }
    return false;
  }

if (body.startsWith(prefix + "resetsesi")) {
  const success = resetSession(m.sender);
  if (success) {
    return m.reply("Sesi AI berhasil direset!");
  } else {
    return m.reply("Tidak ada sesi AI yang ditemukan.");
  }
}

if (!m.isBaileys && !isBot && !isCmd && body != "") {

  const chatData = global.db.data.chats[m?.chat];
  if (!chatData || !chatData.autoai) return; // AI hanya aktif jika autoai = true

  const isMentioned = m.isGroup ? body.includes(`@${pureNumber}`) : true;
  const isRepliedToBot = m.isGroup ? m.quoted && m.quoted.sender === `${pureNumber}@s.whatsapp.net` : false;
  if (m.isGroup && !isMentioned && !isRepliedToBot) return; // Untuk grup, hanya merespon mention/reply

  function readSession(user) {
    try {
      return global.db.data.users[user]?.aiSession || "";
    } catch (error) {
      return "";
    }
  }

  function writeSession(user, session) {
    if (!global.db.data.users[user]) global.db.data.users[user] = {};
    global.db.data.users[user].aiSession = session;
  }
  
  
  if (body.startsWith(prefix)) return;

  let userSession = readSession(m.chat);

  try {
    const prompt = `
${global.prompt}

## Berikut adalah sesi percakapan sebelumnya (jika ada):
${userSession || "(Tidak ada sesi sebelumnya)"}

`;

    // Gunakan axios.get dengan query langsung di URL
    let { data } = await axios.get(
      `https://api.siputzx.my.id/api/ai/llama?prompt=${encodeURIComponent(prompt)}&message=${body}`
    );

    if (data.status) {
      // Update session
      writeSession(m.chat, `${userSession}\nUser: ${body}\nAI: ${data.data}`);
      return m.reply(data.data);
    } else {
      return m.reply("Gagal mendapatkan respons dari API.");
    }
  } catch (e) {
    console.log(e);
    return m.reply("Sesi sudah mencapai batas!\nketik .resetsesi dan coba lagi.");
  }
}



if (budy.startsWith('=>')) {
if (!isCreator) return
function Return(sul) {
sat = JSON.stringify(sul, null, 2)
bang = util.format(sat)
if (sat == undefined) {
bang = util.format(sul)
}
return m.reply(bang)
}
try {
m.reply(util.format(eval(`(async () => { return ${budy.slice(3)} })()`)))
} catch (e) {
m.reply(String(e))
}
}

if (budy.startsWith('>')) {
if (!isCreator) return
let kode = budy.trim().split(/ +/)[0]
let teks
try {
teks = await eval(`(async () => { ${kode == ">>" ? "return" : ""} ${q}})()`)
} catch (e) {
teks = e
} finally {
await m.reply(require('util').format(teks))
}
}

if (budy.startsWith('$')) {
if (!isCreator) return
exec(budy.slice(2), (err, stdout) => {
if (err) return m.reply(`${err}`)
if (stdout) return m.reply(stdout)
})
}


if ((m?.mtype === 'groupInviteMessage' || text.startsWith('Undangan untuk bergabung') || text.startsWith('Invitation to join') || text.startsWith('Buka tautan ini')) && !m.isBaileys && !m.isGroup) {
await fuzzy.sendMessage(m.chat, {react: {text: `❌`,key: m.key,}})
let teks = 'acces denied harus minta izin dulu ke owner'
m.reply(teks)
}
}
} catch (err) {
console.log(require("util").format(err));
}
}
let file = require.resolve(__filename)
fs.watchFile(file, () => {
fs.unwatchFile(file)
console.log(color(`Update ${__filename}`))
delete require.cache[file]
require(file)
})
