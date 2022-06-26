
process.on('uncaughtException', console.error) //Safe Log Error
/*-----[⬇️MODULE]-------------------------------------------------------------------------------------------------------------------------------------------------------------*/
require("./options/config")
const { BufferJSON, WA_DEFAULT_EPHEMERAL, generateWAMessageFromContent, proto, generateWAMessageContent, generateWAMessage, prepareWAMessageMedia, areJidsSameUser, getContentType, WAFlag } = require('@adiwajshing/baileys')
const fs = require('fs')
const util = require('util')
const fetch = require('node-fetch')
const chalk = require('chalk')
const { exec, spawn, execSync } = require("child_process")
const axios = require('axios')
const path = require('path')
const os = require('os')
const ms = require("parse-ms");
const moment = require('moment-timezone')
const { JSDOM } = require('jsdom')
const speed = require('performance-now')
const hx = require("hxz-api")
const yogipw = require("tod-api")
const thiccysapi = require('textmaker-thiccy')
const toHur = require('@develoka/angka-terbilang-js')
const mathjs = require('mathjs')
const { performance } = require('perf_hooks')
const { Primbon } = require('scrape-primbon')
const { EmojiAPI } = require("emoji-api")
const imgbbUploader = require('imgbb-uploader')
const primbon = new Primbon()
const emoji = new EmojiAPI()
const { smsg, formatp, tanggal, formatDate, getTime, isUrl, sleep, clockString, runtime, fetchJson, getBuffer, jsonformat, format, parseMention, getRandom } = require('./message/myfunc')
const maker = require('mumaker')
const { FajarNews, BBCNews, metroNews, CNNNews, iNews, KumparanNews, TribunNews, DailyNews, DetikNews, OkezoneNews, CNBCNews, KompasNews, SindoNews, TempoNews, IndozoneNews, AntaraNews, RepublikaNews, VivaNews, KontanNews, MerdekaNews, KomikuSearch, AniPlanetSearch, KomikFoxSearch, KomikStationSearch, MangakuSearch, KiryuuSearch, KissMangaSearch, KlikMangaSearch, PalingMurah, LayarKaca21, AminoApps, Mangatoon, WAModsSearch, Emojis, CoronaInfo, JalanTikusMeme,  Cerpen, Quotes, Couples, Darkjokes } = require("dhn-api");
const did = require('didyoumean') 
var sim = require('similarity') 
const ra = require('ra-api') 
const cheerio = require('cheerio')
/*-----[⬇️Scrape & Function]-------------------------------------------------------------------------------------------------------------------------------------------------------------*/
const { aiovideodl } = require('./message/scraper.js')
const cerpen = require('./message/cerpen.js')
//Function
const { color, bgcolor } = require("./message/color")
let hit = [];
const { addCmd, AddHituser } = require("./message/hitbot.js");
let { msgFilter } = require('./message/antispam')
let _sewa = require("./message/sewa");
let { addResponList, delResponList, isAlreadyResponList, isAlreadyResponListGroup, sendResponList, updateResponList, getDataResponList } = require('./message/list.js')
/*-----[⬇️DATABASE]-------------------------------------------------------------------------------------------------------------------------------------------------------------*/
let sewa = JSON.parse(fs.readFileSync('./plugins/src/sewa.json'));
let commund = JSON.parse(fs.readFileSync('./plugins/src/dashboard/datacmd.json'));
let hitbot = JSON.parse(fs.readFileSync('./plugins/src/dashboard/command.json'));
let userHit = JSON.parse(fs.readFileSync('./plugins/src/dashboard/userhit.json'));
let db_respon_list = JSON.parse(fs.readFileSync('./plugins/src/list/list.json'));
let bad = JSON.parse(fs.readFileSync('./plugins/src/Toxic/bad.json'))
global.db = JSON.parse(fs.readFileSync('./plugins/src/database.json'))
if (global.db) global.db = {
    sticker: {},
    database: {},
    game: {},
    others: {},
    users: {},
    ...(global.db || {})
}
let tebaklagu = db.game.tebaklagu = []
let _family100 = db.game.family100 = []
let kuismath = db.game.math = []
let tebakgambar = db.game.tebakgambar = []
let tebakkata = db.game.tebakkata = []
let caklontong = db.game.lontong = []
let caklontong_desk = db.game.lontong_desk = []
let tebakkalimat = db.game.kalimat = []
let tebaklirik = db.game.lirik = []
let tebaktebakan = db.game.tebakan = []
let vote = db.others.vote = []
/*-----[⬇️FUNCTIONAL]-------------------------------------------------------------------------------------------------------------------------------------------------------------*/
// UCAPAN WAKTU By MyMans APIs)
const time2 = moment().tz('Asia/Jakarta').format('HH.mm')
if(time2 < "23:59:00"){
var ucapanWaktu = 'Malam'
                                        }
if(time2 < "19:00:00"){
var ucapanWaktu = 'Petang'
                                         }
if(time2 < "18:00:00"){
var ucapanWaktu = 'Sore'
                                         }
if(time2 < "15:00:00"){
var ucapanWaktu = 'Siang'
                                         }
if(time2 < "11:00:00"){
var ucapanWaktu = 'Pagi'
                                         }
if(time2 < "05:00:00"){
var ucapanWaktu = 'Malam'
                                         }
// TANGGAL By MyMans APIs 
var buln = ['/01/', '/02/', '/03/', '/04/', '/05/', '/06/', '/07/', '/08/', '/09/', '/10/', '/11/', '/12/'];
var myHari = ['Minggu', 'Senin', 'Selasa', 'Rabu', 'Kamis', 'Jumat', 'Sabtu'];
var tgel = new Date();
var hri = tgel.getDate();
var bulnh = tgel.getMonth();
var thisHari = tgel.getDay(),
    thisDaye = myHari[thisHari];
var yye = tgel.getYear();
var syear = (yye < 1000) ? yye + 1900 : yye;
const jangwak = (hri + '' + buln[bulnh] + '' + syear)
const janghar = (thisDaye)

var creator = global.footer

/*-----[⬇️Module Export]-------------------------------------------------------------------------------------------------------------------------------------------------------------*/

module.exports = neoxy = async (neoxy, m, chatUpdate, store) => {
try {
var body = (m.mtype === 'conversation' && m.message.conversation) ? m.message.conversation : (m.mtype == 'imageMessage') ? m.message.imageMessage.caption : (m.mtype == 'videoMessage') ? m.message.videoMessage.caption : (m.mtype == 'extendedTextMessage') ? m.message.extendedTextMessage.text : (m.mtype == 'buttonsResponseMessage') ? m.message.buttonsResponseMessage.selectedButtonId : (m.mtype == 'listResponseMessage') ? m.message.listResponseMessage.singleSelectReply.selectedRowId : (m.mtype == 'templateButtonReplyMessage') ? m.message.templateButtonReplyMessage.selectedId : (m.mtype === 'messageContextInfo') ? (m.message.buttonsResponseMessage?.selectedButtonId || m.message.listResponseMessage?.singleSelectReply.selectedRowId || m.text) : ''
var budy = (typeof m.text == 'string' ? m.text : '')
var prefix = /^[°•π÷×¶∆£¢€¥®™✓_=|~!?#$%^&.+-,\/\\©^]/.test(body) ? body.match(/^[°•π÷×¶∆£¢€¥®™✓_=|~!?#$%^&.+-,\/\\©^]/gi) : '#'
const allcmd = [`${prefix}menu`,`${prefix}sticker`,`${prefix}play`,`${prefix}addlist`,`${prefix}list`,`${prefix}cerpen`,`${prefix}ytmp3`,`${prefix}ytmp4`,`${prefix}ping`,`${prefix}dashboard`,`${prefix}updatelist`,`${prefix}dellist`,`${prefix}owner`,`${prefix}cowner`,`${prefix}tes`,`${prefix}linkgroup`,`${prefix}setppgc`,`${prefix}setname`,`${prefix}setdesc`,`${prefix}ephemeral`,`${prefix}hidetag`,`${prefix}tagall`,`${prefix}promote`,`${prefix}demote`,`${prefix}upvote`,`${prefix}cekvote`,`${prefix}hapusvote`,`${prefix}antilink`,`${prefix}welcome`,`${prefix}add`,`${prefix}kick`,`${prefix}revoke`,`${prefix}group`,`${prefix}editinfo`,`${prefix}ceksewa`,`${prefix}instagram`,`${prefix}tiktok`,`${prefix}facebook`,`${prefix}igstory`,`${prefix}jpeg`,`${prefix}mp4`,`${prefix}gimage`,`${prefix}ytsearch`,`${prefix}searchgc`,`${prefix}happymod`,`${prefix}servermc`,`${prefix}mcpedl`,`${prefix}google`,`${prefix}pinterest`,`${prefix}layarkaca-search`,`${prefix}smeme`,`${prefix}swm`,`${prefix}stickerwm`,`${prefix}emojimix`,`${prefix}tomp3`,`${prefix}tovn`,`${prefix}tourl`,`${prefix}togif`,`${prefix}tomp4`,`${prefix}toimage`,`${prefix}quotes`,`${prefix}inspect`,`${prefix}getname`,`${prefix}nulis`,`${prefix}kalkulator`,`${prefix}quoted`,`${prefix}join`,`${prefix}tohuruf`,`${prefix}volume`,`${prefix}bass`,`${prefix}blown`,`${prefix}deep`,`${prefix}earrape`,`${prefix}fast`,`${prefix}fat`,`${prefix}nightcore`,`${prefix}reverse`,`${prefix}robot`,`${prefix}slow`,`${prefix}tupai`,`${prefix}translate`,`${prefix}halah`,`${prefix}hilih`,`${prefix}huluh`,`${prefix}holoh`,`${prefix}math`,`${prefix}tictactoe`,`${prefix}delttt`,`${prefix}tebak`,`${prefix}family100`,`${prefix}suitpvp`,`${prefix}3dbox`,`${prefix}roadwarning`,`${prefix}icecold`,`${prefix}luxury`,`${prefix}cloud`,`${prefix}summersand`,`${prefix}horrorblood`,`${prefix}thunder`,`${prefix}pornhub`,`${prefix}glitch`,`${prefix}avenger`,`${prefix}space`,`${prefix}ninjalogo`,`${prefix}marvelstudio`,`${prefix}lionlogo`,`${prefix}wolflogo`,`${prefix}steel3d`,`${prefix}wallgravity`,`${prefix}merdeka-news`,`${prefix}kontan-news`,`${prefix}cnbc-news`,`${prefix}tribun-news`,`${prefix}indozone-news`,`${prefix}kompas-news`,`${prefix}detik-news`,`${prefix}daily-news`,`${prefix}inews-news`,`${prefix}okezone-news`,`${prefix}sindo-news`,`${prefix}tempo-news`,`${prefix}antara-news`,`${prefix}cnn-news`,`${prefix}fajar-news`,`${prefix}setcmd`,`${prefix}listcmd`,`${prefix}delcmd`,`${prefix}lockcmd`,`${prefix}addmsg`,`${prefix}listmsg`,`${prefix}getmsg`,`${prefix}getmsg`,`${prefix}delmsg`,`${prefix}addlist`,`${prefix}dellist`,`${prefix}updatelist`,`${prefix}list`,`${prefix}owner`,`${prefix}listpc`,`${prefix}listgc`,`${prefix}mcserver`,`${prefix}sc`,`${prefix}ping`,`${prefix}afk`,`${prefix}cekupdate`,`${prefix}getscmd`,`${prefix}delete`,`${prefix}infochat`,`${prefix}request`,`${prefix}report`,`${prefix}donate`,`${prefix}listonline`,`${prefix}self`,`${prefix}sewa`,`${prefix}listsewa`,`${prefix}public`,`${prefix}bcall`,`${prefix}bcgroup`,`${prefix}chat`,`${prefix}antitag`,`${prefix}ban`,`${prefix}cowner`]
const isCmd = body.startsWith(prefix)
const command = body.replace(prefix, '').trim().split(/ +/).shift().toLowerCase()
const Det = command.startsWith(prefix) 
const args = body.trim().split(/ +/).slice(1)
const pushname = m.pushName || "No Name"
const botNumber = await neoxy.decodeJid(neoxy.user.id)
const isCreator = [botNumber, ...global.owner].map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').includes(m.sender)
const itsMe = m.sender == botNumber ? true : false
const text = args.join(" ")
const q = args.join(" ")
const from = m.chat
const quoted = m.quoted ? m.quoted : m
const mime = (quoted.msg || quoted).mimetype || ''
const isMedia = /image|video|sticker|audio/.test(mime)
const sender = m.isGroup ? (m.key.participant ? m.key.participant : m.participant) : m.key.remoteJid
const more = String.fromCharCode(8206)
const readmore = more.repeat(4001)
// Group
const groupMetadata = m.isGroup ? await neoxy.groupMetadata(m.chat).catch(e => {}) : ''
const groupName = m.isGroup ? groupMetadata.subject : ''
const participants = m.isGroup ? await groupMetadata.participants : ''
const groupAdmins = m.isGroup ? await participants.filter(v => v.admin !== null).map(v => v.id) : ''
const groupOwner = m.isGroup ? groupMetadata.owner : ''
const isBotAdmins = m.isGroup ? groupAdmins.includes(botNumber) : false
const isAdmins = m.isGroup ? groupAdmins.includes(m.sender) : false
const isSewa = _sewa.checkSewaGroup(from, sewa)
const groupMembers = m.isGroup ? groupMetadata.participants : ''
const cmdBotTotal = require('util').inspect(hit.all)
const cmdBotHarian = require('util').inspect(hit.today)

// Other
const isBan = banUser.includes(m.sender)
const isRakyat = isCreator || global.rkyt.map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').includes(m.sender) || false
const AntiLink = m.isGroup ? ntilink.includes(from) : false
const welcm = m.isGroup ? wlcm.includes(from) : false
const GcRvk = m.isGroup ? gcrevoke.includes(from) : false

// Quoted
const content = JSON.stringify(m.message)
const isImage = (m.mtype == 'imageMessage')
const isVideo = (m.mtype == 'videoMessage')
const isSticker = (m.mtype == 'stickerMessage')
const isMedias = (m.mtype === 'imageMessage' || m.mtype === 'videoMessage')
const isQuotedImage = m.mtype === 'extendedTextMessage' && content.includes('imageMessage')
const isQuotedVideo = m.mtype === 'extendedTextMessage' && content.includes('videoMessage')
const isQuotedAudio = m.mtype === 'extendedTextMessage' && content.includes('audioMessage')
const isQuotedSticker = m.mtype === 'extendedTextMessage' && content.includes('stickerMessage')
const isQuotedLoca = m.mtype === 'extendedTextMessage' && content.includes('locationMessage')
const isQuotedContact = m.mtype === 'extendedTextMessage' && content.includes('contactMessage')
const isQuotedDocs = m.mtype === 'extendedTextMessage' && content.includes('documentMessage')
const isQuotedTeks = m.mtype === 'extendedTextMessage' && content.includes('quotedMessage')
const isQuotedTag = m.mtype === 'extendedTextMessage' && content.includes('mentionedJid')
const isQuotedProd = m.mtype === 'extendedTextMessage' && content.includes('productMessage')
const isQuotedReply = m.mtype === 'extendedTextMessage' && content.includes('Message')

if (m.message) {
console.log('->(MESSAGE)', color(moment(m.messageTimestamp * 1000).format('DD/MM/YYYY HH:mm:ss'), 'yellow'), color(`${budy} [${args.length}]`), 'from', color(m.pushName))
}
if (command) {
await neoxy.sendPresenceUpdate('composing', m.chat)
neoxy.sendReadReceipt(from, m.sender, [m.key.id])
}
if (bad.includes(body)) {
tos = ['Astaghfirullah','Heh mulut jaga','Gapernah diajarin cara ngomong?','Dih🤢','Toxic teross']
sin =  tos[Math.floor(Math.random() * (tos.length))]
m.reply(sin) 
}
try {
let isNumber = x => typeof x === 'number' && !isNaN(x)
let limitUser = isRakyat ? global.limitawal.rakyat : global.limitawal.free
let user = global.db.users[m.sender]
if (typeof user !== 'object') global.db.users[m.sender] = {}
if (user) {
if (!isNumber(user.afkTime)) user.afkTime = -1
if (!('afkReason' in user)) user.afkReason = ''
if (!isNumber(user.limit)) user.limit = limitUser
} else global.db.users[m.sender] = {
afkTime: -1,
afkReason: '',
limit: limitUser,
}
} catch (err) {
console.error(err)
}

// Rakyat
if (!isRakyat) {
rkyt.push(m.sender.split("@")[0])
}

// AFK
let mentionUser = [...new Set([...(m.mentionedJid || []), ...(m.quoted ? [m.quoted.sender] : [])])]
for (let jid of mentionUser) {
let user = global.db.users[jid]
if (!user) continue
let afkTime = user.afkTime
if (!afkTime || afkTime < 0) continue
let reason = user.afkReason || ''
ads(`
Jangan tag dia!
Dia sedang AFK ${reason ? 'dengan alasan ' + reason : 'tanpa alasan'}
Selama ${clockString(new Date - afkTime)}
`.trim())
}

if (db.users[m.sender].afkTime > -1) {
let user = global.db.users[m.sender]
ads(`
Kamu berhenti AFK${user.afkReason ? ' setelah ' + user.afkReason : ''}
Selama ${clockString(new Date - user.afkTime)}
`.trim())
user.afkTime = -1
user.afkReason = ''
}

// Detect Group Invite
if (m.mtype === 'groupInviteMessage') {
teks = `Ketik join untuk bergabung ke group whatsapp anda`
sendOrder(m.chat, teks, "391028153034238", fs.readFileSync('./plugins/media/image/thumb.jpg'), 2022, "NEOXY~MD", "6289501060783@s.whatsapp.net", "AR7zJt8MasFx2Uir/fdxhkhPGDbswfWrAr2gmoyqNZ/0Wg==", "99999999999999999999")
}

// Functions
if (!isCmd && m.isGroup && isAlreadyResponList(from, body, db_respon_list)) {
    var get_data_respon = getDataResponList(from, body, db_respon_list)
    if (get_data_respon.isImage === false) {
        neoxy.sendMessage(from, { text: sendResponList(from, body, db_respon_list) }, {
            quoted: m
        })
    } else {
      neoxy.sendMessage(from, { image: await getBuffer(get_data_respon.image_url), caption: get_data_respon.response }, {
            quoted: m
        })
    }
}

// AntiLink
if (AntiLink) {
if (!isBotAdmins) return
linkgce = await neoxy.groupInviteCode(from)
if (budy.includes(`https://chat.whatsapp.com/${linkgce}`)) {
ads(`\`\`\`「 Detect Link 」\`\`\`\n\nAnda tidak akan dikick bot karena yang anda kirim adalah link group yg ada di group ini`)
} else if (isUrl(m.text)) {
bvl = `\`\`\`「 Detect Link 」\`\`\`\n\nAdmin telah mengirim link, admin dibebaskan untuk mengirim link apapun`
if (isAdmins) return ads(bvl)
if (m.key.fromMe) return ads(bvl)
if (isCreator) return ads(bvl)
kice = m.sender
await neoxy.groupParticipantsUpdate(m.chat, [kice], 'remove').then((res) => ads(jsonformat(res))).catch((err) => ads(jsonformat(err)))
neoxy.sendMessage(from, {text:`\`\`\`「 Detect Link 」\`\`\`\n\n@${kice.split("@")[0]} Telah dikick karena send link di group ini`, contextInfo:{mentionedJid:[kice]}}, {quoted:m})
} else {
}
}

// Public & Self
if (!neoxy.public) {
if (!m.key.fromMe) return
}

// write database every 1 minute
setInterval(() => {
fs.writeFileSync('./plugins/src/database.json', JSON.stringify(global.db, null, 2))
}, 60 * 1000)

// reset limit every 12 hours
let cron = require('node-cron')
cron.schedule('00 12 * * *', () => {
let user = Object.keys(global.db.users)
let limitUser = isRakyat ? global.limitawal.rakyat : global.limitawal.free
for (let jid of user) global.db.users[jid].limit = limitUser
console.log('Reseted Limit')
}, {
scheduled: true,
timezone: "Asia/Jakarta"
})


if (tebaklagu.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
kuis = true
jawaban = tebaklagu[m.sender.split('@')[0]]
if (budy.toLowerCase() == jawaban) {
await neoxy.sendButtonText(m.chat, [{ buttonid: '##tebak lagu', buttonText: { displayText: 'Tebak Lagu' }, type: 1 }], `🎮 Tebak Lagu 🎮\n\nJawaban Benar 🎉\n\nIngin bermain lagi? tekan button dibawah`, "© Created By Lexxy Official", m)
delete tebaklagu[m.sender.split('@')[0]]
} else ads('*Jawaban Salah!*')
}

if (tebakgambar.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
kuis = true
jawaban = tebakgambar[m.sender.split('@')[0]]
if (budy.toLowerCase() == jawaban) {
await neoxy.sendButtonText(m.chat, [{ buttonid: '##tebak gambar', buttonText: { displayText: 'Tebak Gambar' }, type: 1 }], `🎮 Tebak Gambar 🎮\n\nJawaban Benar 🎉\n\nIngin bermain lagi? tekan button dibawah`, "© Created By Lexxy Official", m)
delete tebakgambar[m.sender.split('@')[0]]
} else ads('*Jawaban Salah!*')
}

if (tebakkata.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
kuis = true
jawaban = tebakkata[m.sender.split('@')[0]]
if (budy.toLowerCase() == jawaban) {
await neoxy.sendButtonText(m.chat, [{ buttonid: '##tebak kata', buttonText: { displayText: 'Tebak Kata' }, type: 1 }], `🎮 Tebak Kata 🎮\n\nJawaban Benar 🎉\n\nIngin bermain lagi? tekan button dibawah`, "© Created By Lexxy Official", m)
delete tebakkata[m.sender.split('@')[0]]
} else ads('*Jawaban Salah!*')
}

if (caklontong.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
kuis = true
jawaban = caklontong[m.sender.split('@')[0]]
deskripsi = caklontong_desk[m.sender.split('@')[0]]
if (budy.toLowerCase() == jawaban) {
await neoxy.sendButtonText(m.chat, [{ buttonid: '##tebak lontong', buttonText: { displayText: 'Tebak Lontong' }, type: 1 }], `🎮 Cak Lontong 🎮\n\nJawaban Benar 🎉\n*${deskripsi}*\n\nIngin bermain lagi? tekan button dibawah`, "© Created By Lexxy Official", m)
delete caklontong[m.sender.split('@')[0]]
delete caklontong_desk[m.sender.split('@')[0]]
} else ads('*Jawaban Salah!*')
}

if (tebakkalimat.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
kuis = true
jawaban = tebakkalimat[m.sender.split('@')[0]]
if (budy.toLowerCase() == jawaban) {
await neoxy.sendButtonText(m.chat, [{ buttonid: '##tebak kalimat', buttonText: { displayText: 'Tebak Kalimat' }, type: 1 }], `🎮 Tebak Kalimat 🎮\n\nJawaban Benar 🎉\n\nIngin bermain lagi? tekan button dibawah`, "© Created By Lexxy Official", m)
delete tebakkalimat[m.sender.split('@')[0]]
} else ads('*Jawaban Salah!*')
}

if (tebaklirik.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
kuis = true
jawaban = tebaklirik[m.sender.split('@')[0]]
if (budy.toLowerCase() == jawaban) {
await neoxy.sendButtonText(m.chat, [{ buttonid: '##tebak lirik', buttonText: { displayText: 'Tebak Lirik' }, type: 1 }], `🎮 Tebak Lirik 🎮\n\nJawaban Benar 🎉\n\nIngin bermain lagi? tekan button dibawah`, "© Created By Lexxy Official", m)
delete tebaklirik[m.sender.split('@')[0]]
} else ads('*Jawaban Salah!*')
}

if (tebaktebakan.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
kuis = true
jawaban = tebaktebakan[m.sender.split('@')[0]]
if (budy.toLowerCase() == jawaban) {
await neoxy.sendButtonText(m.chat, [{ buttonid: '##tebak tebakan', buttonText: { displayText: 'Tebak Tebakan' }, type: 1 }], `🎮 Tebak Tebakan 🎮\n\nJawaban Benar 🎉\n\nIngin bermain lagi? tekan button dibawah`, "© Created By Lexxy Official", m)
delete tebaktebakan[m.sender.split('@')[0]]
} else ads('*Jawaban Salah!*')
}

if (('family100'+m.chat in _family100) && isCmd) {
kuis = true
let room = _family100['family100'+m.chat]
let teks = budy.toLowerCase().replace(/[^\w\s\-]+/, '')
let isSurender = /^((me)?nyerah|surr?ender)$/i.test(m.text)
if (!isSurender) {
let index = room.jawaban.findIndex(v => v.toLowerCase().replace(/[^\w\s\-]+/, '') === teks)
if (room.terjawab[index]) return !0
room.terjawab[index] = m.sender
}
let isWin = room.terjawab.length === room.terjawab.filter(v => v).length
let caption = `
Jawablah Pertanyaan Berikut :\n${room.soal}\n\n\nTerdapat ${room.jawaban.length} Jawaban ${room.jawaban.find(v => v.includes(' ')) ? `(beberapa Jawaban Terdapat Spasi)` : ''}
${isWin ? `Semua Jawaban Terjawab` : isSurender ? 'Menyerah!' : ''}
${Array.from(room.jawaban, (jawaban, index) => {
return isSurender || room.terjawab[index] ? `(${index + 1}) ${jawaban} ${room.terjawab[index] ? '@' + room.terjawab[index].split('@')[0] : ''}`.trim() : false
}).filter(v => v).join('\n')}
${isSurender ? '' : `Perfect Player`}`.trim()
neoxy.sendText(m.chat, caption, m, { contextInfo: { mentionedJid: parseMention(caption) }}).then(mes => { return _family100['family100'+m.chat].pesan = mesg }).catch(_ => _)
if (isWin || isSurender) delete _family100['family100'+m.chat]
}

//Suit PvP
this.suit = this.suit ? this.suit : {}
let roof = Object.values(this.suit).find(roof => roof.id && roof.status && [roof.p, roof.p2].includes(m.sender))
if (roof) {
let win = ''
let tie = false
if (m.sender == roof.p2 && /^(acc(ept)?|terima|gas|oke?|tolak|gamau|nanti|ga(k.)?bisa|y)/i.test(m.text) && m.isGroup && roof.status == 'wait') {
if (/^(tolak|gamau|nanti|n|ga(k.)?bisa)/i.test(m.text)) {
neoxy.sendTextWithMentions(m.chat, `@${roof.p2.split`@`[0]} menolak suit, suit dibatalkan`, m)
delete this.suit[roof.id]
return !0
}
roof.status = 'play'
roof.asal = m.chat
clearTimeout(roof.waktu)
//delete roof[roof.id].waktu
neoxy.sendText(m.chat, `Suit telah dikirimkan ke chat

@${roof.p.split`@`[0]} dan 
@${roof.p2.split`@`[0]}

Silahkan pilih suit di chat masing"
klik https://wa.me/${botNumber.split`@`[0]}`, m, { mentions: [roof.p, roof.p2] })
if (!roof.pilih) neoxy.sendText(roof.p, `Silahkan pilih \n\nBatu🗿\nKertas📄\nGunting✂️`, m)
if (!roof.pilih2) neoxy.sendText(roof.p2, `Silahkan pilih \n\nBatu🗿\nKertas📄\nGunting✂️`, m)
roof.waktu_milih = setTimeout(() => {
if (!roof.pilih && !roof.pilih2) neoxy.sendText(m.chat, `Kedua pemain tidak niat main,\nSuit dibatalkan`)
else if (!roof.pilih || !roof.pilih2) {
win = !roof.pilih ? roof.p2 : roof.p
neoxy.sendTextWithMentions(m.chat, `@${(roof.pilih ? roof.p2 : roof.p).split`@`[0]} tidak memilih suit, game berakhir`, m)
}
delete this.suit[roof.id]
return !0
}, roof.timeout)
}
let jwb = m.sender == roof.p
let jwb2 = m.sender == roof.p2
let g = /gunting/i
let b = /batu/i
let k = /kertas/i
let reg = /^(gunting|batu|kertas)/i
if (jwb && reg.test(m.text) && !roof.pilih && !m.isGroup) {
roof.pilih = reg.exec(m.text.toLowerCase())[0]
roof.text = m.text
ads(`Kamu telah memilih ${m.text} ${!roof.pilih2 ? `\n\nMenunggu lawan memilih` : ''}`)
if (!roof.pilih2) neoxy.sendText(roof.p2, '_Lawan sudah memilih_\nSekarang giliran kamu', 0)
}
if (jwb2 && reg.test(m.text) && !roof.pilih2 && !m.isGroup) {
roof.pilih2 = reg.exec(m.text.toLowerCase())[0]
roof.text2 = m.text
ads(`Kamu telah memilih ${m.text} ${!roof.pilih ? `\n\nMenunggu lawan memilih` : ''}`)
if (!roof.pilih) neoxy.sendText(roof.p, '_Lawan sudah memilih_\nSekarang giliran kamu', 0)
}
let stage = roof.pilih
let stage2 = roof.pilih2
if (roof.pilih && roof.pilih2) {
clearTimeout(roof.waktu_milih)
if (b.test(stage) && g.test(stage2)) win = roof.p
else if (b.test(stage) && k.test(stage2)) win = roof.p2
else if (g.test(stage) && k.test(stage2)) win = roof.p
else if (g.test(stage) && b.test(stage2)) win = roof.p2
else if (k.test(stage) && b.test(stage2)) win = roof.p
else if (k.test(stage) && g.test(stage2)) win = roof.p2
else if (stage == stage2) tie = true
neoxy.sendText(roof.asal, `_*Hasil Suit*_${tie ? '\nSERI' : ''}

@${roof.p.split`@`[0]} (${roof.text}) ${tie ? '' : roof.p == win ? ` Menang \n` : ` Kalah \n`}
@${roof.p2.split`@`[0]} (${roof.text2}) ${tie ? '' : roof.p2 == win ? ` Menang \n` : ` Kalah \n`}
`.trim(), m, { mentions: [roof.p, roof.p2] })
delete this.suit[roof.id]
}
}

// Math
if (kuismath.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
kuis = true
jawaban = kuismath[m.sender.split('@')[0]]
if (budy.toLowerCase() == jawaban) {
await ads(`🎮 Kuis Matematika  🎮\n\nJawaban Benar 🎉\n\nIngin bermain lagi? kirim ${prefix}math mode`)
delete kuismath[m.sender.split('@')[0]]
} else ads('*Jawaban Salah!*')
}

//TicTacToe
this.game = this.game ? this.game : {}
let room = Object.values(this.game).find(room => room.id && room.game && room.state && room.id.startsWith('tictactoe') && [room.game.playerX, room.game.playerO].includes(m.sender) && room.state == 'PLAYING')
if (room) {
let ok
let isWin = !1
let isTie = !1
let isSurrender = !1
// ads(`[DEBUG]\n${parseInt(m.text)}`)
if (!/^([1-9]|(me)?nyerah|surr?ender|off|skip)$/i.test(m.text)) return
isSurrender = !/^[1-9]$/.test(m.text)
if (m.sender !== room.game.currentTurn) { // nek wayahku
if (!isSurrender) return !0
}
if (!isSurrender && 1 > (ok = room.game.turn(m.sender === room.game.playerO, parseInt(m.text) - 1))) {
ads({
'-3': 'Game telah berakhir',
'-2': 'Invalid',
'-1': 'Posisi Invalid',
0: 'Posisi Invalid',
}[ok])
return !0
}
if (m.sender === room.game.winner) isWin = true
else if (room.game.board === 511) isTie = true
let arr = room.game.render().map(v => {
return {
X: '❌',
O: '⭕',
1: '1️⃣',
2: '2️⃣',
3: '3️⃣',
4: '4️⃣',
5: '5️⃣',
6: '6️⃣',
7: '7️⃣',
8: '8️⃣',
9: '9️⃣',
}[v]
})
if (isSurrender) {
room.game._currentTurn = m.sender === room.game.playerX
isWin = true
}
let winner = isSurrender ? room.game.currentTurn : room.game.winner
let str = `     「 Tictactoe Game 」
Room ID: ${room.id}

${arr.slice(0, 3).join('')}
${arr.slice(3, 6).join('')}
${arr.slice(6).join('')}

${isWin ? `@${winner.split('@')[0]} Menang!` : isTie ? `Game berakhir` : `Giliran ${['❌', '⭕'][1 * room.game._currentTurn]} (@${room.game.currentTurn.split('@')[0]})`}
❌: @${room.game.playerX.split('@')[0]}
⭕: @${room.game.playerO.split('@')[0]}

Ketik *nyerah* untuk menyerah dan mengakui kekalahan`
if ((room.game._currentTurn ^ isSurrender ? room.x : room.o) !== m.chat)
room[room.game._currentTurn ^ isSurrender ? 'x' : 'o'] = m.chat
if (room.x !== room.o) await neoxy.sendText(room.x, str, m, { mentions: parseMention(str) } )
await neoxy.sendText(room.o, str, m, { mentions: parseMention(str) } )
if (isTie || isWin) {
delete this.game[room.id]
}
}

// Respon Cmd with media
if (isMedia && m.msg.fileSha256 && (m.msg.fileSha256.toString('base64') in global.db.sticker)) {
let hash = global.db.sticker[m.msg.fileSha256.toString('base64')]
let { text, mentionedJid } = hash
let messages = await generateWAMessage(m.chat, { text: text, mentions: mentionedJid }, {
userJid: neoxy.user.id,
quoted: m.quoted && m.quoted.fakeObj
})
messages.key.fromMe = areJidsSameUser(m.sender, neoxy.user.id)
messages.key.id = m.key.id
messages.pushName = m.pushName
if (m.isGroup) messages.participant = m.sender
let msg = {
...chatUpdate,
messages: [proto.WebMessageInfo.fromObject(messages)],
type: 'append'
}
neoxy.ev.emit('messages.upsert', msg)
}
const textImg = (teks) => {
neoxy.sendMessage(m.chat, { text :teks, }, {quoted: m, thumbnail: fs.readFileSync('./plugins/media/image/wpmobile.png')}) 
}
const ads = (teks) => {
neoxy.sendMessage(from, { text : teks, contextInfo: {"externalAdReply": { title: "WHASTAPP BOT",mediaType: 3,renderLargerThumbnail: true, showAdAttribution: true, body: "🤫",thumbnail: log0,sourceUrl: "https://www.instagram.com/p/CdE0RPbDRXi/?igshid=YmMyMTA2M2Y="}}})
}
const detect = (teks) => {  /// Jangan Diubah ntar error
neoxy.sendMessage(from, { text : teks, contextInfo: {"externalAdReply": { title: `Akurasi : ${anu2}`,mediaType: 3,renderLargerThumbnail: true, showAdAttribution: true, body: "Command Not Found",thumbnail: global.thum,sourceUrl: "https://www.instagram.com/p/CdE0RPbDRXi/?igshid=YmMyMTA2M2Y="}}})
}

function mentions(teks, mems = [], id) {
if (id == null || id == undefined || id == false) {
let res = neoxy.sendMessage(from, { text: teks, mentions: mems })
return res
} else {
let res = neoxy.sendMessage(from, { text: teks, mentions: mems }, { quoted: m })
return res
 }
}

const butkon = [
{ urlButton: { displayText: 'Source Code', url: 'https://github.com/Lexxy24/Neoxy-Base' }},
{ quickReplyButton: { displayText: 'Contact Owner', id: 'owner'}},
{ quickReplyButton: { displayText: 'Back To Menu',id: 'menu' }}]

const bitkin = [
{ quickReplyButton: { displayText: 'Sewa Bot', id: 'sewabot'}},
{ quickReplyButton: { displayText: 'Speed Bot', id: 'speed'}},
{ quickReplyButton: { displayText: 'List All Menu',id: 'all' }}]

        
const listmn = `
 *${ucapanWaktu} ${pushname} 👋*

  ❑ *DATA INFO*
 *▷ Library : Baileys - Multi Device*
 *▷ Language : JavaScript*
 *▷ Tanggal : ${hri}${buln[bulnh]}${syear}*
 *▷ Waktu : ${time2} Wib*

  ❑ *PROFILE BOT*
 *▷ Botname : ${global.packname}*
 *▷ Owner : ${numberOwner}*
 *▷ Creator : Lexxy Official*
 
  ❑ *PROFILE GROUP*
 *▷ Antilink : ${AntiLink? "on" : "off"}*
 *▷ Autorevoke : ${GcRvk? "on" : "off"}*
 *▷ Welcome : ${welcm? "on" : "off"}*
`
var kb = '```'
const swtext =`▷ *LIST HARGA SEWABOT*
${kb}${global.txtSewabot}${kb}`

const listft =`
 ❑ *_Group Menu_*
  • #linkgroup 
  • #setppgc 
  • #setname 
  • #setdesc 
  • #ephemeral 
  • #hidetag 
  • #tagall 
  • #promote 
  • #demote 
  • #vote 
  • #devote 
  • #upvote 
  • #cekvote 
  • #hapusvote 
  • #antilink <on/off>
  • #welcome <on/off>
  • #autorevoke <on/off>
  • #add 
  • #kick 
  • #revoke 
  • #group <open/close>
  • #editinfo <open/close>
  • #ceksewa 
  
 ❑ *_Store Menu_*
  • #addlist 
  • #dellist 
  • #updatelist 
  • #list 

 ❑ *_Owner Menu_*
  • #self 
  • #sewa <add/del>
  • #listsewa 
  • #public 
  • #bcall 
  • #bcgroup 
  • #chat 
  • #antitag 
  • #ban <add/del>
  • #cowner <add/del>
  
 ❑ *_Download Menu_*
  • #instagram 
  • #tiktok 
  • #twitter 
  • #facebook 
  • #youtube 
  • #igstory 
  • #jpeg 
  • #mp4 
  • #ytmp3
  • #ytmp4
  • #ytplay
  • #tiktok
  • #tiktokmp3
  • #tiktokaudio
  • #tiktoknowm
  • #mediafire

 ❑ *_Search Menu_*
  • #gimage 
  • #ytsearch 
  • #searchgc 
  • #play 
  • #happymod 
  • #servermc 
  • #mcpedl 
  • #google 
  • #pinterest 

 ❑ *_Convert Menu_*
  • #sticker  
  • #stickerwm 
  • #tomp3 
  • #tovn 
  • #toaudio 
  • #togif 
  • #tourl 
  • #tomp4 
  • #toimage 
  
 ❑ *_Nulis Menu_*
  • #nulis
  • #nuliskiri
  • #nuliskanan
  • #foliokiri
  • #foliokanan

 ❑ *_Tools Menu_*
  • #inspect 
  • #getname 
  • #getpic 
  • #nulis 
  • #kalkulator 
  • #quoted 
  • #join 
  • #fliptext 
  • #tohuruf 
  • #volume 
  • #bass
  • #blown
  • #deep
  • #earrape
  • #fast
  • #fat
  • #nightcore
  • #reverse
  • #robot
  • #slow
  • #tupai
  • #translate 
  • #emoji 
  • #emojimix 
  • #attp 
  • #doge unde
  • #patrick
  • #bucinsticker

 ❑ *_Games Menu_*
  • #halah 
  • #hilih 
  • #huluh 
  • #heleh 
  • #holoh 
  • #math 
  • #tictactoe 
  • #delttt 
  • #tebak 
  • #family100 
  • #suitpvp

 ❑ *_Maker Menu_*
  • #3dbox   
  • #drapwater   
  • #lion2   
  • #papercut   
  • #transformer   
  • #herryp   
  • #neondevil   
  • #3dstone   
  • #3davengers   
  • #thunder   
  • #window   
  • #graffiti   
  • #pornhub   
  • #glitch   
  • #blackping   
  • #glitch3   
  • #glitch2   
  • #3dspace   
  • #lion   
  • #3dneon   
  • #neon   
  • #greenneon   
  • #bokeh   
  • #hollographic   
  • #bear   
  • #wolf   
  • #joker   
  • #dropwater   
  • #neonlight   
  • #thewall   
  • #natural   
  • #carbon   
  • #pencil   
  • #blackpink  
  • #neon  
  • #greenneon  
  • #advanceglow  
  • #futureneon  
  • #sandwriting  
  • #sandsummer  
  • #sandengraved  
  • #metaldark  
  • #neonlight  
  • #holographic  
  • #text1917  
  • #minion  
  • #deluxesilver  
  • #newyearcard  
  • #bloodfrosted  
  • #halloween  
  • #jokerlogo  
  • #fireworksparkle  
  • #natureleaves  
  • #bokeh  
  • #toxic  
  • #strawberry  
  • #box3d  
  • #roadwarning  
  • #icecold  
  • #luxury  
  • #cloud  
  • #summersand  
  • #horrorblood  
  • #thunder  
  • #pornhub  
  • #glitch  
  • #avenger  
  • #space  
  • #ninjalogo  
  • #marvelstudio  
  • #lionlogo  
  • #wolflogo  
  • #steel3d  
  • #wallgravity  

 ❑ *_Storage Menu_*
  • #setcmd 
  • #listcmd 
  • #delcmd 
  • #lockcmd 
  • #addmsg 
  • #listmsg 
  • #getmsg 
  • #delmsg 

 ❑ *_Others Menu_*
  • #owner 
  • #listpc 
  • #listgc 
  • #mcserver 
  • #speed
  • #tes
  • #sc 
  • #ping 
  • #afk 
  • #ceknomor
  • #cekname
  • #sewabot
  • #cekupdate [UpdateBot]
  • #getscmd [GetSticker]
  • #delete 
  • #infochat 
  • #request 
  • #report 
  • #donate 
  • #listonline 
`

var hoid =`*───╼[  _LIST-MENU_  ]╾───➲*`
var left = "*│"
var branch = "*├*"
var bracketmenu = "*┞─╼「"
var F = "」*"
var A = "*┟*"
var B = "*┞*"
var stick = "*╿▷*"
var stkci = "*╿*"
var borderlist = "*╭╾───────────────╼╮*"
var borderlistend = "*╰╾───────────────╼╯*"
var opener = "*╭─────────────────╮*"
var closing = "*╰─────────────────╯*"
var headtqto = "*╭╾─「 _Thanks To✨_ 」╾───╮*"
var endbordertqto = "*╰╾───────────────╾╯*"
var end = "*╰╾────────────╼*"
var juh = "*╰╾────────────────╼*"
var head = `*╭───╼[ _${global.packname}_ ]╾──➲*
${left}*
${left} › Library : Baileys Multi Device*
${left} › Language : JavaScript*
${left} › Tanggal : ${hri}${buln[bulnh]}${syear}*
${left} › Waktu : ${time2} Wib*
${left}*`

const groupmenu =`
${head}
${bracketmenu} _Group Menu_ ${F}
${stkci}
${stick} #linkgroup 
${stick} #setppgc 
${stick} #setname 
${stick} #setdesc 
${stick} #ephemeral 
${stick} #hidetag 
${stick} #tagall 
${stick} #promote 
${stick} #demote 
${stick} #vote 
${stick} #devote 
${stick} #upvote 
${stick} #cekvote 
${stick} #hapusvote 
${stick} #antilink <on/off>
${stick} #welcome <on/off>
${stick} #autorevoke <on/off>
${stick} #add 
${stick} #kick 
${stick} #revoke 
${stick} #group <open/close>
${stick} #editinfo <open/close>
${stick} #ceksewa
${stkci}
${end}
`
const storemenu =`
${head}
${bracketmenu} _Store Menu_ ${F}
${stkci}
${stick} #addlist 
${stick} #dellist 
${stick} #updatelist 
${stick} #list 
${stkci}
${end}
  `
const ownermenu =`
${head}
${bracketmenu} _Owner Menu_ ${F}
${stkci}
${stick} #self 
${stick} #sewa <add/del>
${stick} #listsewa 
${stick} #public 
${stick} #bcall 
${stick} #bcgroup 
${stick} #chat 
${stick} #antitag 
${stick} #ban <add/del>
${stick} #cowner <add/del>
${stkci}
${end}
  `
const downloadmenu =`
${head}
${bracketmenu} _Download Menu_ ${F}
${stkci}
${stick} #instagram 
${stick} #tiktok 
${stick} #twitter 
${stick} #facebook 
${stick} #youtube 
${stick} #igstory 
${stick} #jpeg 
${stick} #mp4 
${stick} #ytmp3
${stick} #ytmp4
${stick} #ytplay
${stick} #tiktok
${stick} #tiktokmp3
${stick} #tiktokaudio
${stick} #tiktoknowm
${stick} #mediafire
${stkci}
${end}
  `
const searchmenu =`
${head}
${bracketmenu} _Search Menu_ ${F}
${stkci}
${stick} #gimage 
${stick} #ytsearch 
${stick} #searchgc 
${stick} #play 
${stick} #happymod 
${stick} #servermc 
${stick} #mcpedl 
${stick} #google 
${stick} #pinterest 
${stkci}
${end}
  `
const convertmenu =`
${head}
${bracketmenu} _Convert Menu_ ${F}
${stkci}
${stick} #sticker  
${stick} #stickerwm 
${stick} #tomp3 
${stick} #tovn 
${stick} #toaudio 
${stick} #togif 
${stick} #tourl 
${stick} #tomp4 
${stick} #toimage
${stkci}
${end}
  `
const nulismenu =`
${head}
${bracketmenu} _Nulis Menu_ ${F}
${stkci}
${stick} #nulis
${stick} #nuliskiri
${stick} #nuliskanan
${stick} #foliokiri
${stick} #foliokanan
${stkci}
${end}
  `
const toolsmenu =`
${head}
${bracketmenu} _Tools Menu_ ${F}
${stkci}
${stick} #inspect 
${stick} #getname 
${stick} #getpic 
${stick} #nulis 
${stick} #kalkulator 
${stick} #quoted 
${stick} #join 
${stick} #fliptext 
${stick} #tohuruf 
${stick} #volume 
${stick} #bass
${stick} #blown
${stick} #deep
${stick} #earrape
${stick} #fast
${stick} #fat
${stick} #nightcore
${stick} #reverse
${stick} #robot
${stick} #slow
${stick} #tupai
${stick} #translate 
${stick} #emoji 
${stick} #emojimix 
${stick} #attp 
${stick} #doge unde
${stick} #patrick
${stick} #bucinsticker
${stkci}
${end}
  `
const gamesmenu =`
${head}
${bracketmenu} _Games Menu_ ${F}
${stkci}
${stick} #halah 
${stick} #hilih 
${stick} #huluh 
${stick} #heleh 
${stick} #holoh 
${stick} #math 
${stick} #tictactoe 
${stick} #delttt 
${stick} #tebak 
${stick} #family100 
${stick} #suitpvp
${stkci}
${end}
  `
const makermenu =`
${head}
${bracketmenu} _Maker Menu_ ${F}
${stkci}
${stick} #3dbox   
${stick} #drapwater   
${stick} #lion2   
${stick} #papercut   
${stick} #transformer   
${stick} #herryp   
${stick} #neondevil   
${stick} #3dstone   
${stick} #3davengers   
${stick} #thunder   
${stick} #window   
${stick} #graffiti   
${stick} #pornhub   
${stick} #glitch   
${stick} #blackping   
${stick} #glitch3   
${stick} #glitch2   
${stick} #3dspace   
${stick} #lion   
${stick} #3dneon   
${stick} #neon   
${stick} #greenneon   
${stick} #bokeh   
${stick} #hollographic   
${stick} #bear   
${stick} #wolf   
${stick} #joker   
${stick} #dropwater   
${stick} #neonlight   
${stick} #thewall   
${stick} #natural   
${stick} #carbon   
${stick} #pencil   
${stick} #blackpink  
${stick} #neon  
${stick} #greenneon  
${stick} #advanceglow  
${stick} #futureneon  
${stick} #sandwriting  
${stick} #sandsummer  
${stick} #sandengraved  
${stick} #metaldark  
${stick} #neonlight  
${stick} #holographic  
${stick} #text1917  
${stick} #minion  
${stick} #deluxesilver  
${stick} #newyearcard  
${stick} #bloodfrosted  
${stick} #halloween  
${stick} #jokerlogo  
${stick} #fireworksparkle  
${stick} #natureleaves  
${stick} #bokeh  
${stick} #toxic  
${stick} #strawberry  
${stick} #box3d  
${stick} #roadwarning  
${stick} #icecold  
${stick} #luxury  
${stick} #cloud  
${stick} #summersand  
${stick} #horrorblood  
${stick} #thunder  
${stick} #pornhub  
${stick} #glitch  
${stick} #avenger  
${stick} #space  
${stick} #ninjalogo  
${stick} #marvelstudio  
${stick} #lionlogo  
${stick} #wolflogo  
${stick} #steel3d  
${stick} #wallgravity
${stkci}
${end}
  `
const storagemenu =`
${head}
${bracketmenu} _Storage Menu_ ${F}
${stkci}
${stick} #setcmd 
${stick} #listcmd 
${stick} #delcmd 
${stick} #lockcmd 
${stick} #addmsg 
${stick} #listmsg 
${stick} #getmsg 
${stick} #delmsg 
${stkci}
${end}
  `
const othersmenu =`
${head}
${bracketmenu} _Others Menu_ ${F}
${stkci}
${stick} #owner 
${stick} #listpc 
${stick} #listgc 
${stick} #mcserver 
${stick} #speed
${stick} #tes
${stick} #sc 
${stick} #ping 
${stick} #afk 
${stick} #ceknomor
${stick} #cekname
${stick} #sewabot
${stick} #cekupdate [UpdateBot]
${stick} #getscmd [GetSticker]
${stick} #delete 
${stick} #infochat 
${stick} #request 
${stick} #report 
${stick} #donate 
${stick} #listonline 
${stkci}
${end}
`
const rulesbot =`
*── 「 RULES BOT 」 ──*

1. Jangan spam bot. 🙅
Sanksi: *❎ WARN/SOFT BLOCK*

2. Jangan telepon bot. ☎️
Sanksi: *❎ SOFT BLOCK*

3. Jangan mengeksploitasi bot.😖
Sanksi: *PERMANENT BLOCK*

🗯️ Bot tidak atau lambat merespon ?
➡️ Mungkin dipengaruhi oleh jaringan, signal, banned oleh Whatsapp dan beberapa asalan. Tetap patuhi rules‼️

🗯️ Dimana saya bisa mendapatkan Script dari bot ini ?
➡️ Script ini masih private dan tidak pernah diperjual belikan ,bijaklah dalam mengetahui penipu.

🗯️ Boleh saya menambah ke grup?
➡️ Untuk sementara bot dalam status free to add.

🗯️ Prefixnya apa ya?
➡️ Bot ini menggunakan multi prefix. Berarti anda bisa menggunakan prefix #, . , Dan prefix wajar lainnya.

🗯️ Kak, kok syaa chat owner tidak direspon?
➡️ Owner hanya merespon pertanyaan seputar bot Dan kendala eror, tidak untuk kenalan ataupun mengemis script.


Jika sudah dipahami rules-nya, silakan ketik *#menu* untuk memulai!

⚠️ Segala kebijakan dan ketentuan ${global.packname} di pegang oleh owner dan segala perubahan kebijakan, sewaktu waktu owner berhak mencabut, memblokir user(*﹏*) 

Arigatou Gozaimasu! Untuk kalian user ramah dan Beberapa orang yg ikut membantu juga dalam project pembuatan ${global.packname}
😖🙏
`
let timestamp = speed()
let latensi = speed() - timestamp

const cmdtextt =`
❑ 𝗜𝗡𝗙𝗢 𝗦𝗘𝗥𝗩𝗘𝗥 :
▷ 𝘓𝘪𝘣𝘳𝘢𝘳𝘺 : Baileys - Multi Device
▷ 𝘓𝘢𝘯𝘨𝘶𝘢𝘨𝘦 : JavaScript
▷ 𝘛𝘢𝘯𝘨𝘨𝘢𝘭 : ${hri}${buln[bulnh]}${syear}
▷ 𝘞𝘢𝘬𝘵𝘶 : ${time2} Wib
▷ 𝘚𝘱𝘦𝘦𝘥 : ${latensi.toFixed(4)} Second
▷ 𝘙𝘶𝘯𝘵𝘪𝘮𝘦 : ${runtime(process.uptime())}`

// Case Nye Sini Ngab
switch(command) {
case 'simpel':
case 'menusimpel':
case 'simpelmenu':
case 'cmdsimpel':
const smpl =`
 *${ucapanWaktu} ${pushname} 👋*
 
 *🤖 Botname : ${global.packname}*
 *👤 Owner : ${numberOwner}*
 *👑 Creator : Lexxy Official*
 
 [ ×-( _*SIMPLE MENU*_ )-× ]
 
 *_➵ #nulismenu_*
 *_➵ #toolsmenu_*
 *_➵ #groupmenu_*
 *_➵ #storemenu_*
 *_➵ #ownermenu_*
 *_➵ #downloadmenu_*
 *_➵ #searchmenu_*
 *_➵ #convertmenu_*
 *_➵ #gamesmenu_*
 *_➵ #makermenu_*
 *_➵ #storagemenu_*
 *_➵ #othersmenu_*`
await neoxy.send5Loc(m.chat, smpl, cmdtextt, locimg, bitkin)
break
case 'menu': case 'help':
let btn = [{
urlButton: {
displayText: 'Source Code',
url: 'https://github.com/Lexxy24/Neoxy-Base'
}
}, {
urlButton: {
displayText: 'Group WhatsApp',
url: `${global.group}`,
}
}, {
quickReplyButton: {
displayText: 'Rules',
id: '#rules'
}
}, {
quickReplyButton: {
displayText: 'Speed',
id: '#ping'
}
}, {
quickReplyButton: {
displayText: 'Simple Menu',
id: '#cmdsimpel'
}
}]
await neoxy.send5Loc(m.chat, listmn, creator, locimg, btn)
break
case 'rules':
await neoxy.send5Loc(m.chat, rulesbot, creator, locimg, butkon)
break
case 'grupmenu':
case 'groupmenu':
await neoxy.send5Loc(m.chat, groupmenu, creator, locimg, butkon)
break
case 'storemenu':
await neoxy.send5Loc(m.chat, storemenu, creator, locimg, butkon)
break
case 'ownermenu':
await neoxy.send5Loc(m.chat, ownermenu, creator, locimg, butkon)
break
case 'downloadmenu':
await neoxy.send5Loc(m.chat, downloadmenu, creator, locimg, butkon)
break
case 'searchmenu':
await neoxy.send5Loc(m.chat, searchmenu, creator, locimg, butkon)
break
case 'convertmenu':
await neoxy.send5Loc(m.chat, convertmenu, creator, locimg, butkon)
break
case 'nulismenu':
await neoxy.send5Loc(m.chat, nulismenu, creator, locimg, butkon)
break
case 'toolsmenu':
await neoxy.send5Loc(m.chat, toolsmenu, creator, locimg, butkon)
break
case 'gamesmenu':
await neoxy.send5Loc(m.chat, gamesmenu, creator, locimg, butkon)
break
case 'stickermenu':
await neoxy.send5Loc(m.chat, stickermenu, creator, locimg, butkon)
break
case 'makermenu':
await neoxy.send5Loc(m.chat, makermenu, creator, locimg, butkon)
break
case 'storagemenu':
await neoxy.send5Loc(m.chat, storagemenu, creator, locimg, butkon)
break
case 'othersmenu':
await neoxy.send5Loc(m.chat, othersmenu, creator, locimg, butkon)
break

case 'sewabot':
let swtn = [{
urlButton: {
displayText: 'Source Code',
url: 'https://github.com/Lexxy24/Neoxy-Base'
}
}, {
urlButton: {
displayText: 'Group WhatsApp',
url: `${global.group}`,
}
}, {
quickReplyButton: {
displayText: 'List Menu Bot',
id: '#cmdfitur'
}
}]
await neoxy.send5Loc(m.chat, swtext, creator, locimg, swtn)
break
case 'all':
let liststt = [{
urlButton: {
displayText: 'Group WhatsApp',
url: `${global.group}`,
}
}, {
quickReplyButton: {
displayText: 'Contact Owner',
id: '#owner'
}
}, {
quickReplyButton: {
displayText: 'Sewa Bot',
id: '#sewabot'
}
}]
await neoxy.send5Loc(m.chat, listft, creator, locimg, liststt)
break
break
case 'gura':
case 'gurastick':{
var ano = await fetchJson('https://raw.githubusercontent.com/rashidsiregar28/data/main/gura')
var wifegerak = ano.split('\n')
var wifegerakx = wifegerak[Math.floor(Math.random() * wifegerak.length)]
encmedia = await neoxy.sendImageAsSticker(from, wifegerakx, m, { packname: global.packname, author: global.author, })
await fs.unlinkSync(encmedia)
}
break
case 'doge':
case 'dogestick':{
var ano = await fetchJson('https://raw.githubusercontent.com/rashidsiregar28/data/main/anjing')
var wifegerak = ano.split('\n')
var wifegerakx = wifegerak[Math.floor(Math.random() * wifegerak.length)]
encmedia = await neoxy.sendImageAsSticker(from, wifegerakx, m, { packname: global.packname, author: global.author, })
await fs.unlinkSync(encmedia)
}
break
case 'bucinstick':
case 'bucinp' :{
var ano = await fetchJson('https://raw.githubusercontent.com/rashidsiregar28/data/main/bucin')
var wifegerak = ano.split('\n')
var wifegerakx = wifegerak[Math.floor(Math.random() * wifegerak.length)]
encmedia = await neoxy.sendImageAsSticker(from, wifegerakx, m, { packname: global.packname, author: global.author, })
await fs.unlinkSync(encmedia)
}
break
case 'patrik':
case 'patrick': {
var ano = await fetchJson('https://raw.githubusercontent.com/rashidsiregar28/data/main/patrik')
var wifegerak = ano.split('\n')
var wifegerakx = wifegerak[Math.floor(Math.random() * wifegerak.length)]
encmedia = await neoxy.sendImageAsSticker(from, wifegerakx, m, { packname: global.packname, author: global.author, })
await fs.unlinkSync(encmedia)
}
break
case 'cekname':
ads(pushname)
break
case 'ceknomor':
ads(from)
break
case 'attp': {
const buff = await getBuffer(`https://api.xteam.xyz/attp?file&text=${encodeURIComponent(q)}`)
neoxy.sendMessage(from, { sticker : buff}) 
}
break
case 'list':
if (!m.isGroup) throw mess.group
            if (db_respon_list.length === 0) return m.reply(`Belum ada list message di database`)
            if (!isAlreadyResponListGroup(from, db_respon_list)) return m.reply(`Belum ada list message yang terdaftar di group ini`)
            var arr_rows = [];
            for (let x of db_respon_list) {
                if (x.id === from) {
                    arr_rows.push({
                        title: x.key,
                        rowId: x.key
                    })
                }
            }
            var listMsg = {
                text: 'Silahkan Pilih Produk Nya',
                buttonText: 'Click Here!',
                footer: 'My list', 
                sections: [{
                    title: groupName, rows: arr_rows
                }]
            }
            neoxy.sendMessage(from, listMsg)

            break
        case 'addlist':
if (!m.isGroup) throw mess.group
if (!isAdmins) throw mess.admin
            var args1 = q.split("@")[0]
            var args2 = q.split("@")[1]                
            if (!q.includes("@")) return m.reply(`Gunakan dengan cara ${command} *key@response*\n\n_Contoh_\n\n${command} tes@apa`)
            if (isAlreadyResponList(from, args1, db_respon_list)) return m.reply(`List respon dengan key : *${args1}* sudah ada di group ini.`)
            if (isImage || isQuotedImage) {
            let { TelegraPh } = require('./message/uploader')
                let media = await neoxy.downloadAndSaveMediaMessage(quoted)
                let anu = await TelegraPh(media)
                        addResponList(from, args1, args2, true, `${anu}`, db_respon_list)
                        m.reply(`Sukses set list message dengan key : *${args1}*`)
                        if (fs.existsSync(media)) fs.unlinkSync(media)
            } else {
                addResponList(from, args1, args2, false, '-', db_respon_list)
                m.reply(`Sukses set list message dengan key : *${args1}*`)
            }
            
            break
        case 'dellist':
if (!m.isGroup) throw mess.group
if (!isAdmins) throw mess.admin
            if (db_respon_list.length === 0) return m.reply(`Belum ada list message di database`)
            if (!q) return m.reply(`Gunakan dengan cara ${command} *key*\n\n_Contoh_\n\n${command} hello`)
            if (!isAlreadyResponList(from, q, db_respon_list)) return m.reply(`List respon dengan key *${q}* tidak ada di database!`)
            delResponList(from, q, db_respon_list)
            m.reply(`Sukses delete list message dengan key *${q}*`)
            
            break
        case 'updatelist': case 'update':
            if (!m.isGroup) return m.reply('Khusus Grup')
            if (!isAdmins && !isCreator) return m.reply(mess.admin)
            var args1 = q.split("@")[0]
            var args2 = q.split("@")[1]
            if (!q.includes("@")) return m.reply(`Gunakan dengan cara ${command} *key@response*\n\n_Contoh_\n\n${command} tes@apa`)
            if (!isAlreadyResponListGroup(from, db_respon_list)) return m.reply(`Maaf, untuk key *${args1}* belum terdaftar di group ini`)
            if (isImage || isQuotedImage) {
            let { TelegraPh } = require('./message/uploader')
                let media = await neoxy.downloadAndSaveMediaMessage(quoted)
                 let anu = await TelegraPh(media)
                        updateResponList(from, args1, args2, true, `${anu}`, db_respon_list)
                        m.reply(`Sukses update list message dengan key : *${args1}*`)
                        if (fs.existsSync(media)) fs.unlinkSync(media)
            } else {
                updateResponList(from, args1, args2, false, '-', db_respon_list)
                m.reply(`Sukses update respon list dengan key *${args1}*`)
            }
            
            break
case 'dashboard': 
const _0x29ee60=_0x54e2;function _0x54e2(_0x18afec,_0x5a29d3){const _0x56b0f5=_0x56b0();return _0x54e2=function(_0x54e234,_0x5573fe){_0x54e234=_0x54e234-0x175;let _0x31e41f=_0x56b0f5[_0x54e234];return _0x31e41f;},_0x54e2(_0x18afec,_0x5a29d3);}(function(_0x40fed5,_0x284029){const _0x261611=_0x54e2,_0x41249a=_0x40fed5();while(!![]){try{const _0x4094f1=-parseInt(_0x261611(0x186))/0x1+parseInt(_0x261611(0x18a))/0x2*(parseInt(_0x261611(0x17c))/0x3)+parseInt(_0x261611(0x17f))/0x4*(-parseInt(_0x261611(0x179))/0x5)+parseInt(_0x261611(0x17a))/0x6+-parseInt(_0x261611(0x181))/0x7+-parseInt(_0x261611(0x175))/0x8*(parseInt(_0x261611(0x17b))/0x9)+parseInt(_0x261611(0x176))/0xa;if(_0x4094f1===_0x284029)break;else _0x41249a['push'](_0x41249a['shift']());}catch(_0x426114){_0x41249a['push'](_0x41249a['shift']());}}}(_0x56b0,0x86afe));function _0x56b0(){const _0x5a4999=['294429yGeHuk','all','today','12KxdUEl','sort','5134703WQiXqK','*DASHBOARD*\x0a\x0a*HIT*\x0aGlobal\x20Hit\x20:\x20','length','push','Load\x20Detect','475966kLqkVz','commund','slice','\x0aToday\x20Hit\x20:\x20','6vigDER','8gHFjHo','15718880AVVeVi','\x20:\x20','\x0a*Most\x20Command\x20Global*\x0a','1195345ODlVvc','6238608zFrsbs','3849345sJnvVn'];_0x56b0=function(){return _0x5a4999;};return _0x56b0();}{commund[_0x29ee60(0x180)]((_0x2a7766,_0x2f8a69)=>_0x2a7766[_0x29ee60(0x187)]<_0x2f8a69['commund']?0x1:-0x1);let top=_0x29ee60(0x182)+(hit[_0x29ee60(0x17d)]||_0x29ee60(0x185))+_0x29ee60(0x189)+(hit[_0x29ee60(0x17e)]||'Load\x20Detect')+_0x29ee60(0x178),arrTop=[];for(let i=0x0;i<commund[_0x29ee60(0x183)];i++){top+=commund[i]['id']+_0x29ee60(0x177)+commund[i]['total']+'\x0a',arrTop[_0x29ee60(0x184)](commund[i]['id']);}mentions(top,arrTop,!![]);}addCmd(command[_0x29ee60(0x188)](0x1),0x1,commund);
break
case 'tes':
ads('y') 
addCmd(command.slice(1), 1, commund)
break
case 'fajar-news':
FajarNews().then(async(res) => {
console.log(res) 
no = 0
teks = ".•♫•♬.•♫••♬•♫•.•♬•♫•.•♫•♬.•♫••♬•♫•.•♬•♫•."
for (let i of res) {
no += 1
teks += `\n• ${no.toString()} •\n`
teks += `Berita: ${i.berita}\n`
teks += `Upload: ${i.berita_diupload}\n`
teks += `Jenis: ${i.berita_jenis}\n`
teks += `Link: ${i.berita_url}\n`
}
teks += ".•♫•♬.•♫••♬•♫•.•♬•♫•.•♫•♬.•♫••♬•♫•.•♬•♫•."
ads(teks) 
})
addCmd(command.slice(1), 1, commund)
break
case prefix+"quotes":
var res = await Quotes()
teks = ".•♫•♬.•♫••♬•♫•.•♬•♫•.•♫•♬.•♫••♬•♫•.•♬•♫•."
teks += `\nAuthor: ${res.author}\n`
teks += `\nQuotes:\n`
teks += `${res.quotes}\n`
teks += ".•♫•♬.•♫••♬•♫•.•♬•♫•.•♫•♬.•♫••♬•♫•.•♬•♫•."
ads(teks)
addCmd(command.slice(1), 1, commund)
break
case prefix+"darkjoke":
var res = await Darkjokes()
teks = "\nDarkjokes*"
neoxy.sendMessage(m.chat, { image : { url : res }, caption: teks }, { quoted : m })
addCmd(command.slice(1), 1, commund)
break
case 'cnn-news':
CNNNews().then(res => {
no = 0
teks = ".•♫•♬.•♫••♬•♫•.•♬•♫•.•♫•♬.•♫••♬•♫•.•♬•♫•."
for (let i of res) {
no += 1
teks += `\n• ${no.toString()} •\n`
teks += `Berita: ${i.berita}\n`
teks += `Link: ${i.berita_url}\n`
}
teks += ".•♫•♬.•♫••♬•♫•.•♬•♫•.•♫•♬.•♫••♬•♫•.•♬•♫•."
ads(teks) 
})
addCmd(command.slice(1), 1, commund)
break
case 'layarkaca-search':
if (!q) return m.reply('Judul') 
LayarKaca21(q).then(async(res) => {
no = 0
teks = ".•♫•♬.•♫••♬•♫•.•♬•♫•.•♫•♬.•♫••♬•♫•.•♬•♫•."
for (let i of res) {
  no += 1
teks += `\n• ${no.toString()} •\n`
teks += `Film: ${i.film_title}\n`
teks += `Link: ${i.film_link}\n`
}
teks += `.•♫•♬.•♫••♬•♫•.•♬•♫•.•♫•♬.•♫••♬•♫•.•♬•♫•.`
ads(teks) 
})
addCmd(command.slice(1), 1, commund)
break
case 'cnbc-news':
CNBCNews().then(async(res) => {
no = 0
teks = ".•♫•♬.•♫••♬•♫•.•♬•♫•.•♫•♬.•♫••♬•♫•.•♬•♫•."
for (let i of res) {
no += 1
teks += `\n• ${no.toString()} •\n`
teks += `Berita: ${i.berita}\n`
teks += `Upload: ${i.berita_diupload}\n`
teks += `Link: ${i.berita_url}\n`
}
teks += ".•♫•♬.•♫••♬•♫•.•♬•♫•.•♫•♬.•♫••♬•♫•.•♬•♫•."
neoxy.sendMessage(m.chat, { image : { url : res[0].berita_thumb }, caption: teks }, { quoted : m })

})
addCmd(command.slice(1), 1, commund)
break
case 'tribun-news':
TribunNews().then(async(res) => {
no = 0
teks = ".•♫•♬.•♫••♬•♫•.•♬•♫•.•♫•♬.•♫••♬•♫•.•♬•♫•."
for (let i of res) {
no += 1
teks += `\n• ${no.toString()} •\n`
teks += `Berita: ${i.berita}\n`
teks += `Upload: ${i.berita_diupload}\n`
teks += `Jenis: ${i.berita_jenis}\n`
teks += `Link: ${i.berita_url}\n`
}
teks += ".•♫•♬.•♫••♬•♫•.•♬•♫•.•♫•♬.•♫••♬•♫•.•♬•♫•."
neoxy.sendMessage(m.chat, { image : { url : res[0].berita_thumb }, caption: teks }, { quoted : m })
})
addCmd(command.slice(1), 1, commund)
break
case 'indozone-news':
IndozoneNews().then(async(res) => {
no = 0
teks = ".•♫•♬.•♫••♬•♫•.•♬•♫•.•♫•♬.•♫••♬•♫•.•♬•♫•."
for (let i of res) {
no += 1
teks += `\n• ${no.toString()} •\n`
teks += `Berita: ${i.berita}\n`
teks += `Upload: ${i.berita_diupload}\n`
teks += `Jenis: ${i.berita_jenis}\n`
teks += `Link: ${i.berita_url}\n`
}
teks += ".•♫•♬.•♫••♬•♫•.•♬•♫•.•♫•♬.•♫••♬•♫•.•♬•♫•."
neoxy.sendMessage(m.chat, { image : { url : res[0].berita_thumb }, caption: teks }, { quoted : m })
})
addCmd(command.slice(1), 1, commund)
break
case 'kompas-news':
KompasNews().then(async(res) => {

no = 0
teks = ".•♫•♬.•♫••♬•♫•.•♬•♫•.•♫•♬.•♫••♬•♫•.•♬•♫•."
for (let i of res) {
no += 1
teks += `\n• ${no.toString()} •\n`
teks += `Berita: ${i.berita}\n`
teks += `Upload: ${i.berita_diupload}\n`
teks += `Jenis: ${i.berita_jenis}\n`
teks += `Link: ${i.berita_url}\n`
}
teks += ".•♫•♬.•♫••♬•♫•.•♬•♫•.•♫•♬.•♫••♬•♫•.•♬•♫•."
neoxy.sendMessage(m.chat, { image : { url : res[0].berita_thumb }, caption: teks }, { quoted : m })

})
addCmd(command.slice(1), 1, commund)
break
case 'detik-news':
DetikNews().then(async(res) => {

no = 0
teks = ".•♫•♬.•♫••♬•♫•.•♬•♫•.•♫•♬.•♫••♬•♫•.•♬•♫•."
for (let i of res) {
no += 1
teks += `\n• ${no.toString()} •\n`
teks += `Berita: ${i.berita}\n`
teks += `Upload: ${i.berita_diupload}\n`
teks += `Link: ${i.berita_url}\n`
}
teks += ".•♫•♬.•♫••♬•♫•.•♬•♫•.•♫•♬.•♫••♬•♫•.•♬•♫•."
neoxy.sendMessage(m.chat, { image : { url : res[0].berita_thumb }, caption: teks }, { quoted : m })

})
addCmd(command.slice(1), 1, commund)
break
case 'daily-news':
DailyNews().then(async(res) => {

no = 0
teks = ".•♫•♬.•♫••♬•♫•.•♬•♫•.•♫•♬.•♫••♬•♫•.•♬•♫•."
for (let i of res) {
no += 1
teks += `\n• ${no.toString()} •\n`
teks += `Berita: ${i.berita}\n`
teks += `Link: ${i.berita_url}\n`
}
teks += ".•♫•♬.•♫••♬•♫•.•♬•♫•.•♫•♬.•♫••♬•♫•.•♬•♫•."
neoxy.sendMessage(m.chat, { image : { url : res[0].berita_thumb }, caption: teks }, { quoted : m })

})
addCmd(command.slice(1), 1, commund)
break

case 'inews-news':
iNews().then(async(res) => {

no = 0
teks = ".•♫•♬.•♫••♬•♫•.•♬•♫•.•♫•♬.•♫••♬•♫•.•♬•♫•."
for (let i of res) {
no += 1
teks += `\n• ${no.toString()} •\n`
teks += `Berita: ${i.berita}\n`
teks += `Upload: ${i.berita_diupload}\n`
teks += `Jenis: ${i.berita_jenis}\n`
teks += `Link: ${i.berita_url}\n`
}
teks += ".•♫•♬.•♫••♬•♫•.•♬•♫•.•♫•♬.•♫••♬•♫•.•♬•♫•."
ads(teks) 
})
addCmd(command.slice(1), 1, commund)
break
case 'okezone-news':
OkezoneNews().then(async(res) => {

no = 0
teks = ".•♫•♬.•♫••♬•♫•.•♬•♫•.•♫•♬.•♫••♬•♫•.•♬•♫•."
for (let i of res) {
no += 1
teks += `\n• ${no.toString()} •\n`
teks += `Berita: ${i.berita}\n`
teks += `Upload: ${i.berita_diupload}\n`
teks += `Link: ${i.berita_url}\n`
}
teks += ".•♫•♬.•♫••♬•♫•.•♬•♫•.•♫•♬.•♫••♬•♫•.•♬•♫•."
neoxy.sendMessage(m.chat, { image : { url : res[0].berita_thumb }, caption: teks }, { quoted : m })

})
addCmd(command.slice(1), 1, commund)
break

case 'sindo-news':
SindoNews().then(async(res) => {

no = 0
teks = ".•♫•♬.•♫••♬•♫•.•♬•♫•.•♫•♬.•♫••♬•♫•.•♬•♫•."
for (let i of res) {
no += 1
teks += `\n• ${no.toString()} •\n`
teks += `Berita: ${i.berita}\n`
teks += `Jenis: ${i.berita_jenis}\n`
teks += `Link: ${i.berita_url}\n`
}
teks += ".•♫•♬.•♫••♬•♫•.•♬•♫•.•♫•♬.•♫••♬•♫•.•♬•♫•."
ads(teks) 
})
addCmd(command.slice(1), 1, commund)
break
case 'tempo-news':
TempoNews().then(async(res) => {

no = 0
teks = ".•♫•♬.•♫••♬•♫•.•♬•♫•.•♫•♬.•♫••♬•♫•.•♬•♫•."
for (let i of res) {
no += 1
teks += `\n• ${no.toString()} •\n`
teks += `Berita: ${i.berita}\n`
teks += `Upload: ${i.berita_diupload}\n`
teks += `Link: ${i.berita_url}\n`
}
teks += ".•♫•♬.•♫••♬•♫•.•♬•♫•.•♫•♬.•♫••♬•♫•.•♬•♫•."
neoxy.sendMessage(m.chat, { image : { url : res[0].berita_thumb }, caption: teks }, { quoted : m })

})
addCmd(command.slice(1), 1, commund)
break
case 'antara-news':
AntaraNews().then(async(res) => {

no = 0
teks = ".•♫•♬.•♫••♬•♫•.•♬•♫•.•♫•♬.•♫••♬•♫•.•♬•♫•."
for (let i of res) {
no += 1
teks += `\n• ${no.toString()} •\n`
teks += `Berita: ${i.berita}\n`
teks += `Upload: ${i.berita_diupload}\n`
teks += `Jenis: ${i.berita_jenis}\n`
teks += `Link: ${i.berita_url}\n`
}
teks += ".•♫•♬.•♫••♬•♫•.•♬•♫•.•♫•♬.•♫••♬•♫•.•♬•♫•."
neoxy.sendMessage(m.chat, { image : { url : res[0].berita_thumb }, caption: teks }, { quoted : m })

})
addCmd(command.slice(1), 1, commund)
break

case prefix+"kontan-news":
  KontanNews().then(async (res) => {
    
    teks = ".•♫•♬.•♫••♬•♫•.•♬•♫•.•♫•♬.•♫••♬•♫•.•♬•♫•."
    no = 0
    for (let i of res) {
      no += 1
      teks += `\n• ${no.toString()} •\n`
      teks += `Berita: ${i.berita}\n`
      teks += `Jenis: ${i.berita_jenis}\n`
      teks += `Upload: ${i.berita_diupload}\n`
      teks += `Link: ${i.berita_url}\n`
    }
    teks += ".•♫•♬.•♫••♬•♫•.•♬•♫•.•♫•♬.•♫••♬•♫•.•♬•♫•."
    neoxy.sendMessage(m.chat, { image : { url : res[0].berita_thumb }, caption: teks }, { quoted : m })

  })
  addCmd(command.slice(1), 1, commund)
break
case prefix+"merdeka-news":
  MerdekaNews().then(async (res) => {
    
    teks = ".•♫•♬.•♫••♬•♫•.•♬•♫•.•♫•♬.•♫••♬•♫•.•♬•♫•."
    no = 0
    for (let i of res) {
      no += 1
      teks += `\n• ${no.toString()} •\n`
      teks += `Berita: ${i.berita}\n`
      teks += `Upload: ${i.berita_diupload}\n`
      teks += `Link: ${i.berita_url}\n`
    }
    teks += ".•♫•♬.•♫••♬•♫•.•♬•♫•.•♫•♬.•♫••♬•♫•.•♬•♫•."
    neoxy.sendMessage(m.chat, { image : { url : res[0].berita_thumb }, caption: teks }, { quoted : m })

  })
  addCmd(command.slice(1), 1, commund)
break

case prefix+"jalantikus-meme":
  var res = await JalanTikusMeme()
teks = ".•♫•♬.•♫••♬•♫•.•♬•♫•.•♫•♬.•♫••♬•♫•.•♬•♫•."
teks += "\nNgakak?\n"
teks += `\nSource: ${res}\n`
teks += ".•♫•♬.•♫••♬•♫•.•♬•♫•.•♫•♬.•♫••♬•♫•.•♬•♫•."
neoxy.sendMessage(m.chat, { image : { url : res }, caption: teks }, { quoted : m })

addCmd(command.slice(1), 1, commund)
break
case 'react': { neoxy.sendMessage(m.chat, reactionMessage)} addCmd(command.slice(1), 1, commund)
break  
case 'cerpen':{
if (!q) return ads(`*List*\n${prefix}Cerpen Anak\n${prefix}Cerpen Bahasa Daerah\n${prefix}Cerpen Bahasa Inggris\n${prefix}Cerpen Bahasa Jawa\n${prefix}Cerpen Bahasa Sunda\n${prefix}Cerpen Budaya\n${prefix}Cerpen Cinta\n${prefix}Cerpen Cinta Islami\n${prefix}Cerpen Cinta Pertama\n${prefix}Cerpen Cinta Romantis\n${prefix}Cerpen Cinta Sedih\n${prefix}Cerpen Cinta Segitiga\n${prefix}Cerpen Cinta Sejati\n${prefix}Cerpen Galau\n${prefix}Cerpen Gokil\n${prefix}Cerpen Inspiratif\n${prefix}Cerpen Jepang\n${prefix}Cerpen Kehidupan\n${prefix}Cerpen Keluarga\n${prefix}Cerpen Kisah Nyata\n${prefix}Cerpen Korea\n${prefix}Cerpen Kristen\n${prefix}Cerpen Liburan\n${prefix}Cerpen Lingkungan\n${prefix}Cerpen Lucu\n${prefix}Cerpen Malaysia\n${prefix}Cerpen Mengharukan\n${prefix}Cerpen Misteri\n${prefix}Cerpen Motivasi\n${prefix}Cerpen Nasihat\n${prefix}Cerpen Nasionalisme\n${prefix}Cerpen Olahraga\n${prefix}Cerpen Patah Hati\n${prefix}Cerpen Penantian\n${prefix}Cerpen Pendidikan\n${prefix}Cerpen Pengalaman Pribadi\n${prefix}Cerpen Pengorbanan\n${prefix}Cerpen Penyesalan\n${prefix}Cerpen Perjuangan\n${prefix}Cerpen Perpisahan\n${prefix}Cerpen Persahabatan\n${prefix}Cerpen Petualangan\n${prefix}Cerpen Ramadhan\n${prefix}Cerpen Remaja\n${prefix}Cerpen Renungan\n${prefix}Cerpen Rindu\n${prefix}Cerpen Rohani\n${prefix}Cerpen Romantis\n${prefix}Cerpen Sastra\n${prefix}Cerpen Sedih\n${prefix}Cerpen Sejarah\n${prefix}Cerpen Slice Of Life\n${prefix}Cerpen Terjemahan\n${prefix}Cerpen Thriller`)
let cerpe = await cerpen(q)
ads(`⭔ _*Title :*_ ${cerpe.title}\n⭔ _*Author :*_ ${cerpe.author}\n⭔ _*Category :*_ ${cerpe.kategori}\n⭔ _*Pass Moderation :*_ ${cerpe.lolos}\n⭔ _*Story :*_\n${cerpe.cerita}`)
}
addCmd(command.slice(1), 1, commund)
break

case 'sewa':
if (!isCreator) return reply('Khusus Owner') 
if (!q) return ads(`Penggunaan :\n*${prefix}sewa* add/del waktu`)
if (args[0].toLowerCase() === 'add'){
_sewa.addSewaGroup(from, args[1], sewa)
ads(`Success`)
} else if (args[0].toLowerCase() === 'del'){
sewa.splice(_sewa.getSewaPosition(from, sewa), 1)
fs.writeFileSync('./plugins/src/sewa.json', JSON.stringify(sewa))
reply(mess.success)
} else {
ads(`Penggunaan :\n*${prefix}sewa* add/del waktu`)}
addCmd(command.slice(1), 1, commund)
break
case 'sewalist': 
case 'listsewa':
let txtnyee = `List Sewa\nJumlah : ${sewa.length}\n\n`
for (let i of sewa){
let cekvippsewa = ms(i.expired - Date.now())
txtnyee += `*ID :* ${i.id} \n*Expire :* ${cekvippsewa.days} day(s) ${cekvippsewa.hours} hour(s) ${cekvippsewa.minutes} minute(s) ${cekvipp.seconds} second(s)\n\n`
}
ads(txtnyee)
addCmd(command.slice(1), 1, commund)
break
case 'sewacheck':
case 'ceksewa': 
if (!m.isGroup) return ads('khusus Grup')
if (!isSewa) return ads(`Group ini tidak terdaftar dalam list sewabot. Ketik ${prefix}sewabot untuk info lebih lanjut`)
let cekvipsewa = ms(_sewa.getSewaExpired(from, sewa) - Date.now())
let sewanya = `*「 SEWA EXPIRE 」*\n\n➸ *ID*: ${from}\n➸ *Expired :* ${cekvipsewa.days} day(s) ${cekvipsewa.hours} hour(s) ${cekvipsewa.minutes} minute(s)`
ads(sewanya)
addCmd(command.slice(1), 1, commund)
break
case 'setppbot': {
                if (!isCreator) return ads(mess.owner)
                if (!quoted) throw `Kirim/Reply Image Dengan Caption ${prefix + command}`
                if (!/image/.test(mime)) throw `Kirim/Reply Image Dengan Caption ${prefix + command}`
                if (/webp/.test(mime)) throw `Kirim/Reply Image Dengan Caption ${prefix + command}`
                let media = await neoxy.downloadAndSaveMediaMessage(quoted)
                await neoxy.updateProfilePicture(botNumber, { url: media }).catch((err) => fs.unlinkSync(media))
                ads(mess.success)
                }
                addCmd(command.slice(1), 1, commund)
break
case'glitch3':
if(!q) return reply(`Penggunaan ${prefix + command} teks|teks`)
reply(mess.wait)
teks1 = q.split("|")[0]
teks2 = q.split("|")[1]
maker.textpro("https://textpro.me/create-glitch-text-effect-style-tik-tok-983.html", [
    `${teks1}`,`${teks2}`])
  .then((data) => neoxy.sendMessage(m.chat, { image: { url: data }, caption: `Dont forget to donate` }, { quoted: m }))
  .catch((err) => console.log(err));
   addCmd(command.slice(1), 1, commund)
break

case '3dbox':
if(!q) return ads(`Penggunaan ${prefix + command} teks`)
ads(mess.wait)
maker.textpro("https://textpro.me/3d-box-text-effect-online-880.html", [
    `${q}`,])
.then((data) => neoxy.sendMessage(m.chat, { image: { url: data }, caption: `Dont forget to donate` }, { quoted: m }))
.catch((err) => console.log(err));
addCmd(command.slice(1), 1, commund)
break


case 'drapwater':
if(!q) return ads(`Penggunaan ${prefix + command} teks`)
ads(mess.wait)
 maker.textpro("https://textpro.me/dropwater-text-effect-872.html", [
     `${q}`,])
    .then((data) => neoxy.sendMessage(m.chat, { image: { url: data }, caption: `Dont forget to donate` }, { quoted: m }))
    .catch((err) => console.log(err));
     addCmd(command.slice(1), 1, commund)
break


case 'lion2':
  if(!q) return ads(`Penggunaan ${prefix + command} teks`)
  ads(mess.wait)
  maker.textpro("https://textpro.me/create-lion-logo-mascot-online-938.html", [
      `${q}`,])
     .then((data) => neoxy.sendMessage(m.chat, { image: { url: data }, caption: `Dont forget to donate` }, { quoted: m }))
     .catch((err) => console.log(err));
     addCmd(command.slice(1), 1, commund)
break


case 'papercut':
      if(!q) return ads(`Penggunaan ${prefix + command} teks`)
      ads(mess.wait)
      maker.textpro("https://textpro.me/create-art-paper-cut-text-effect-online-1022.html", [
`${q}`,])
         .then((data) => neoxy.sendMessage(m.chat, { image: { url: data }, caption: `Dont forget to donate` }, { quoted: m }))
         .catch((err) => console.log(err));
         addCmd(command.slice(1), 1, commund)
break


case 'transformer':
      if(!q) return ads(`Penggunaan ${prefix + command} teks`)
      ads(mess.wait)
      maker.textpro("https://textpro.me/create-a-transformer-text-effect-online-1035.html", [
`${q}`,])
.then((data) => neoxy.sendMessage(m.chat, { image: { url: data }, caption: `Dont forget to donate` }, { quoted: m }))
.catch((err) => console.log(err));
addCmd(command.slice(1), 1, commund)
break
   

case 'herryp':
       if(!q) return ads(`Penggunaan ${prefix + command} teks|teks`)
       ads(mess.wait)
       teks1 = q.split("|")[0]
       teks2 = q.split("|")[1]
       maker.textpro("https://textpro.me/create-harry-potter-text-effect-online-1025.html", [
 `${teks1}`,`${teks2}`])
 .then((data) => neoxy.sendMessage(m.chat, { image: { url: data }, caption: `Dont forget to donate` }, { quoted: m }))
 .catch((err) => console.log(err));
 addCmd(command.slice(1), 1, commund)
break


case 'neondevil':
      if(!q) return ads(`Penggunaan ${prefix + command} teks`)
      ads(mess.wait)
      maker.textpro("https://textpro.me/create-neon-devil-wings-text-effect-online-free-1014.html", [
`${q}`,])
         .then((data) => neoxy.sendMessage(m.chat, { image: { url: data }, caption: `Dont forget to donate` }, { quoted: m }))
         .catch((err) => console.log(err));
         addCmd(command.slice(1), 1, commund)
break


case '3dstone':
if(!q) return ads(`Penggunaan ${prefix + command} teks`)
ads(mess.wait)
maker.textpro("https://textpro.me/3d-stone-cracked-cool-text-effect-1029.html", [
    `${q}`,])
  .then((data) => neoxy.sendMessage(m.chat, { image: { url: data }, caption: `Dont forget to donate` }, { quoted: m }))
  .catch((err) => console.log(err));
   addCmd(command.slice(1), 1, commund)
break


case '3davengers':
if(!q) return ads(`Penggunaan ${prefix + command} teks`)
ads(mess.wait)
maker.textpro("https://textpro.me/create-3d-avengers-logo-online-974.html", [
    `${q}`,])
  .then((data) => neoxy.sendMessage(m.chat, { image: { url: data }, caption: `Dont forget to donate` }, { quoted: m }))
  .catch((err) => console.log(err));
   addCmd(command.slice(1), 1, commund)
break


case 'thunder':
if(!q) return ads(`Penggunaan ${prefix + command} teks`)
ads(mess.wait)
maker.textpro("https://textpro.me/online-thunder-text-effect-generator-1031.html", [
    `${q}`,])
  .then((data) => neoxy.sendMessage(m.chat, { image: { url: data }, caption: `Dont forget to donate` }, { quoted: m }))
  .catch((err) => console.log(err));
   addCmd(command.slice(1), 1, commund)
break


case 'window':
if(!q) return ads(`Penggunaan ${prefix + command} teks`)
ads(mess.wait)
maker.textpro("https://textpro.me/write-text-on-foggy-window-online-free-1015.html", [
    `${q}`,])
  .then((data) => neoxy.sendMessage(m.chat, { image: { url: data }, caption: `Dont forget to donate` }, { quoted: m }))
  .catch((err) => console.log(err));
   addCmd(command.slice(1), 1, commund)
break


case 'graffiti':
   case 'grafiti':
if(!q) return ads(`Penggunaan ${prefix + command} teks|teks`)
ads(mess.wait)
teks1 = q.split("|")[0]
teks2 = q.split("|")[1]
maker.textpro("https://textpro.me/create-a-cool-graffiti-text-on-the-wall-1010.html", [
    `${teks1}`,`${teks2}`])
  .then((data) => neoxy.sendMessage(m.chat, { image: { url: data }, caption: `Dont forget to donate` }, { quoted: m }))
  .catch((err) => console.log(err));
   addCmd(command.slice(1), 1, commund)
break



case 'pornhub':
if(!q) return ads(`Penggunaan ${prefix + command} teks`)
ads(mess.wait)
teks1 = q.split("|")[0]
teks2 = q.split("|")[1]
maker.textpro("https://textpro.me/pornhub-style-logo-online-generator-free-977.html", [
    `${teks1}`,`${teks2}`])
  .then((data) => neoxy.sendMessage(m.chat, { image: { url: data }, caption: `Dont forget to donate` }, { quoted: m }))
  .catch((err) => console.log(err));
   addCmd(command.slice(1), 1, commund)
break



case 'blackping':
if(!q) return ads(`Penggunaan ${prefix + command} teks`)
ads(mess.wait)
maker.textpro("https://textpro.me/create-blackpink-logo-style-online-1001.html", [
    `${q}`,])
  .then((data) => neoxy.sendMessage(m.chat, { image: { url: data }, caption: `Dont forget to donate` }, { quoted: m }))
  .catch((err) => console.log(err));
   addCmd(command.slice(1), 1, commund)
break

case 'glitch':
if(!q) return ads(`Penggunaan ${prefix + command} teks`)
ads(mess.wait)
maker.textpro("https://textpro.me/create-impressive-glitch-text-effects-online-1027.html", [
    `${q}`,])
  .then((data) => neoxy.sendMessage(m.chat, { image: { url: data }, caption: `Dont forget to donate` }, { quoted: m }))
  .catch((err) => console.log(err));
   addCmd(command.slice(1), 1, commund)
break



case 'glitch2':
if(!q) return ads(`Penggunaan ${prefix + command} teks|teks`)
ads(mess.wait)
teks1 = q.split("|")[0]
teks2 = q.split("|")[1]
maker.textpro("https://textpro.me/create-a-glitch-text-effect-online-free-1026.html", [
    `${teks1}`,`${teks2}`])
  .then((data) => neoxy.sendMessage(m.chat, { image: { url: data }, caption: `Dont forget to donate` }, { quoted: m }))
  .catch((err) => console.log(err));
   addCmd(command.slice(1), 1, commund)
break



case 'glitch3':
if(!q) return ads(`Penggunaan ${prefix + command} teks|teks`)
ads(mess.wait)
teks1 = q.split("|")[0]
teks2 = q.split("|")[1]
maker.textpro("https://textpro.me/create-glitch-text-effect-style-tik-tok-983.html", [
    `${teks1}`,`${teks2}`])
  .then((data) => neoxy.sendMessage(m.chat, { image: { url: data }, caption: `Dont forget to donate` }, { quoted: m }))
  .catch((err) => console.log(err));
   addCmd(command.slice(1), 1, commund)
break



case '3dspace':
if(!q) return ads(`Penggunaan ${prefix + command} teks|teks`)
ads(mess.wait)
teks1 = q.split("|")[0]
teks2 = q.split("|")[1]
maker.textpro("https://textpro.me/create-space-3d-text-effect-online-985.html", [
    `${teks1}`,`${teks2}`])
  .then((data) => neoxy.sendMessage(m.chat, { image: { url: data }, caption: `Dont forget to donate` }, { quoted: m }))
  .catch((err) => console.log(err));
   addCmd(command.slice(1), 1, commund)
break



case 'lion':
if(!q) return ads(`Penggunaan ${prefix + command} teks|teks`)
ads(mess.wait)
teks1 = q.split("|")[0]
teks2 = q.split("|")[1]
maker.textpro("https://textpro.me/create-lion-logo-mascot-online-938.html", [
    `${teks1}`,`${teks2}`])
  .then((data) => neoxy.sendMessage(m.chat, { image: { url: data }, caption: `Dont forget to donate` }, { quoted: m }))
  .catch((err) => console.log(err));
   addCmd(command.slice(1), 1, commund)
break



case '3dneon':
if(!q) return ads(`Penggunaan ${prefix + command} teks`)
ads(mess.wait)
maker.textpro("https://textpro.me/create-3d-neon-light-text-effect-online-1028.html", [
    `${q}`,])
  .then((data) => neoxy.sendMessage(m.chat, { image: { url: data }, caption: `Dont forget to donate` }, { quoted: m }))
  .catch((err) => console.log(err));
   addCmd(command.slice(1), 1, commund)
break



case 'neon':
if(!q) return ads(`Penggunaan ${prefix + command} teks`)
ads(mess.wait)
maker.textpro("https://textpro.me/neon-text-effect-online-879.html", [
    `${q}`,])
  .then((data) => neoxy.sendMessage(m.chat, { image: { url: data }, caption: `Dont forget to donate` }, { quoted: m }))
  .catch((err) => console.log(err));
   addCmd(command.slice(1), 1, commund)
break



case 'greenneon':
if(!q) return ads(`Penggunaan ${prefix + command} teks`)
ads(mess.wait)
maker.textpro("https://textpro.me/green-neon-text-effect-874.html", [
    `${q}`,])
  .then((data) => neoxy.sendMessage(m.chat, { image: { url: data }, caption: `Dont forget to donate` }, { quoted: m }))
  .catch((err) => console.log(err));
   addCmd(command.slice(1), 1, commund)
break
   
   
  
case 'bokeh':
if(!q) return ads(`Penggunaan ${prefix + command} teks`)
ads(mess.wait)
maker.textpro("https://textpro.me/bokeh-text-effect-876.html", [
    `${q}`,])
  .then((data) => neoxy.sendMessage(m.chat, { image: { url: data }, caption: `Dont forget to donate` }, { quoted: m }))
  .catch((err) => console.log(err));
   addCmd(command.slice(1), 1, commund)
break
   
   

case 'hollographic':
if(!q) return ads(`Penggunaan ${prefix + command} teks`)
ads(mess.wait)
maker.textpro("https://textpro.me/holographic-3d-text-effect-975.html", [
    `${q}`,])
  .then((data) => neoxy.sendMessage(m.chat, { image: { url: data }, caption: `Dont forget to donate` }, { quoted: m }))
  .catch((err) => console.log(err));
   addCmd(command.slice(1), 1, commund)
break



case 'bear':
if(!q) return ads(`Penggunaan ${prefix + command} teks`)
ads(mess.wait)
teks1 = q.split("|")[0]
teks2 = q.split("|")[1]
maker.textpro("https://textpro.me/online-black-and-white-bear-mascot-logo-creation-1012.html", [
    `${teks1}`,`${teks2}`])
  .then((data) => neoxy.sendMessage(m.chat, { image: { url: data }, caption: `Dont forget to donate` }, { quoted: m }))
  .catch((err) => console.log(err));
   addCmd(command.slice(1), 1, commund)
break



case 'wolf':
if(!q) return ads(`Penggunaan ${prefix + command} teks`)
ads(mess.wait)
teks1 = q.split("|")[0]
teks2 = q.split("|")[1]
maker.textpro("https://textpro.me/create-wolf-logo-galaxy-online-936.html", [
    `${teks1}`,`${teks2}`])
  .then((data) => neoxy.sendMessage(m.chat, { image: { url: data }, caption: `Dont forget to donate` }, { quoted: m }))
  .catch((err) => console.log(err));
   addCmd(command.slice(1), 1, commund)
break




case 'joker':
if(!q) return ads(`Penggunaan ${prefix + command} teks`)
ads(mess.wait)
maker.textpro("https://textpro.me/create-logo-joker-online-934.html", [
    `${q}`,])
  .then((data) => neoxy.sendMessage(m.chat, { image: { url: data }, caption: `Dont forget to donate` }, { quoted: m }))
  .catch((err) => console.log(err));
   addCmd(command.slice(1), 1, commund)
break



case 'dropwater':
if(!q) return ads(`Penggunaan ${prefix + command} teks`)
ads(mess.wait)
maker.textpro("https://textpro.me/dropwater-text-effect-872.html", [
    `${q}`,])
  .then((data) => neoxy.sendMessage(m.chat, { image: { url: data }, caption: `Dont forget to donate` }, { quoted: m }))
  .catch((err) => console.log(err));
   addCmd(command.slice(1), 1, commund)
break



case 'neonlight':
if(!q) return ads(`Penggunaan ${prefix + command} teks`)
ads(mess.wait)
maker.textpro("https://textpro.me/neon-light-text-effect-with-galaxy-style-981.html", [
    `${q}`,])
  .then((data) => neoxy.sendMessage(m.chat, { image: { url: data }, caption: `Dont forget to donate` }, { quoted: m }))
  .catch((err) => console.log(err));
   addCmd(command.slice(1), 1, commund)
break






case 'natural':
if(!q) return ads(`Penggunaan ${prefix + command} teks`)
ads(mess.wait)
maker.textpro("https://textpro.me/natural-leaves-text-effect-931.html", [
    `${q}`,])
  .then((data) => neoxy.sendMessage(m.chat, { image: { url: data }, caption: `Dont forget to donate` }, { quoted: m }))
  .catch((err) => console.log(err));
   addCmd(command.slice(1), 1, commund)
break



case 'carbon':
if(!q) return ads(`Penggunaan ${prefix + command} teks`)
ads(mess.wait)
maker.textpro("https://textpro.me/carbon-text-effect-833.html", [
    `${q}`,])
  .then((data) => neoxy.sendMessage(m.chat, { image: { url: data }, caption: `Dont forget to donate` }, { quoted: m }))
  .catch((err) => console.log(err));
   addCmd(command.slice(1), 1, commund)
break



case 'pencil':
if(!q) return ads(`Penggunaan ${prefix + command} teks`)
ads(mess.wait)
textpro("https://textpro.me/create-a-sketch-text-effect-online-1044.html", [
    `${q}`,])
  .then((data) => neoxy.sendMessage(m.chat, { image: { url: data }, caption: `Dont forget to donate` }, { quoted: m }))
  .catch((err) => console.log(err));
   addCmd(command.slice(1), 1, commund)
break
  
 
case 'candy': case 'christmas': case '3dchristmas': case 'sparklechristmas':
case 'deepsea': case 'scifi': case 'rainbow': case 'waterpipe': case 'spooky': 
case 'pencil': case 'circuit': case 'discovery': case 'metalic': case 'fiction': case 'demon': 
case 'transformer': case 'berry': case 'thunder': case 'magma': case '3dstone': 
case 'neonlight': case 'glitch': case 'harrypotter': case 'brokenglass': case 'papercut': 
case 'watercolor': case 'multicolor': case 'neondevil': case 'underwater': case 'graffitibike':
 case 'snow': case 'cloud': case 'honey': case 'ice': case 'fruitjuice': case 'biscuit': case 'wood': 
case 'chocolate': case 'strawberry': case 'matrix': case 'blood': case 'dropwater': case 'toxic': 
case 'lava': case 'rock': case 'bloodglas': case 'hallowen': case 'darkgold': case 'joker': case 'wicker':
 case 'firework': case 'skeleton': case 'blackpink': case 'sand': case 'glue': case '1917': case 'leaves': {
             if (!q) return ads(`Example : ${prefix + command} NEOXY`) 
             ads(mess.wait)
             let link
             if (/candy/.test(command)) link = 'https://textpro.me/create-christmas-candy-cane-text-effect-1056.html'
             if (/christmas/.test(command)) link = 'https://textpro.me/christmas-tree-text-effect-online-free-1057.html'
             if (/3dchristmas/.test(command)) link = 'https://textpro.me/3d-christmas-text-effect-by-name-1055.html'
             if (/sparklechristmas/.test(command)) link = 'https://textpro.me/sparkles-merry-christmas-text-effect-1054.html'
             if (/deepsea/.test(command)) link = 'https://textpro.me/create-3d-deep-sea-metal-text-effect-online-1053.html'
             if (/scifi/.test(command)) link = 'https://textpro.me/create-3d-sci-fi-text-effect-online-1050.html'
             if (/rainbow/.test(command)) link = 'https://textpro.me/3d-rainbow-color-calligraphy-text-effect-1049.html'
             if (/waterpipe/.test(command)) link = 'https://textpro.me/create-3d-water-pipe-text-effects-online-1048.html'
             if (/spooky/.test(command)) link = 'https://textpro.me/create-halloween-skeleton-text-effect-online-1047.html'
             if (/pencil/.test(command)) link = 'https://textpro.me/create-a-sketch-text-effect-online-1044.html'
             if (/circuit/.test(command)) link = 'https://textpro.me/create-blue-circuit-style-text-effect-online-1043.html'
             if (/discovery/.test(command)) link = 'https://textpro.me/create-space-text-effects-online-free-1042.html'
             if (/metalic/.test(command)) link = 'https://textpro.me/creat-glossy-metalic-text-effect-free-online-1040.html'
             if (/fiction/.test(command)) link = 'https://textpro.me/create-science-fiction-text-effect-online-free-1038.html'
             if (/demon/.test(command)) link = 'https://textpro.me/create-green-horror-style-text-effect-online-1036.html'
             if (/transformer/.test(command)) link = 'https://textpro.me/create-a-transformer-text-effect-online-1035.html'
             if (/berry/.test(command)) link = 'https://textpro.me/create-berry-text-effect-online-free-1033.html'
             if (/thunder/.test(command)) link = 'https://textpro.me/online-thunder-text-effect-generator-1031.html'
             if (/magma/.test(command)) link = 'https://textpro.me/create-a-magma-hot-text-effect-online-1030.html'
             if (/3dstone/.test(command)) link = 'https://textpro.me/3d-stone-cracked-cool-text-effect-1029.html'
             if (/neonlight/.test(command)) link = 'https://textpro.me/create-3d-neon-light-text-effect-online-1028.html'
             if (/glitch/.test(command)) link = 'https://textpro.me/create-impressive-glitch-text-effects-online-1027.html'
             if (/harrypotter/.test(command)) link = 'https://textpro.me/create-harry-potter-text-effect-online-1025.html'
             if (/brokenglass/.test(command)) link = 'https://textpro.me/broken-glass-text-effect-free-online-1023.html'
             if (/papercut/.test(command)) link = 'https://textpro.me/create-art-paper-cut-text-effect-online-1022.html'
             if (/watercolor/.test(command)) link = 'https://textpro.me/create-a-free-online-watercolor-text-effect-1017.html'
             if (/multicolor/.test(command)) link = 'https://textpro.me/online-multicolor-3d-paper-cut-text-effect-1016.html'
             if (/neondevil/.test(command)) link = 'https://textpro.me/create-neon-devil-wings-text-effect-online-free-1014.html'
             if (/underwater/.test(command)) link = 'https://textpro.me/3d-underwater-text-effect-generator-online-1013.html'
             if (/graffitibike/.test(command)) link = 'https://textpro.me/create-wonderful-graffiti-art-text-effect-1011.html'
             if (/snow/.test(command)) link = 'https://textpro.me/create-snow-text-effects-for-winter-holidays-1005.html'
             if (/cloud/.test(command)) link = 'https://textpro.me/create-a-cloud-text-effect-on-the-sky-online-1004.html'
             if (/honey/.test(command)) link = 'https://textpro.me/honey-text-effect-868.html'
             if (/ice/.test(command)) link = 'https://textpro.me/ice-cold-text-effect-862.html'
             if (/fruitjuice/.test(command)) link = 'https://textpro.me/fruit-juice-text-effect-861.html'
             if (/biscuit/.test(command)) link = 'https://textpro.me/biscuit-text-effect-858.html'
             if (/wood/.test(command)) link = 'https://textpro.me/wood-text-effect-856.html'
             if (/chocolate/.test(command)) link = 'https://textpro.me/chocolate-cake-text-effect-890.html'
             if (/strawberry/.test(command)) link = 'https://textpro.me/strawberry-text-effect-online-889.html'
             if (/matrix/.test(command)) link = 'https://textpro.me/matrix-style-text-effect-online-884.html'
             if (/blood/.test(command)) link = 'https://textpro.me/horror-blood-text-effect-online-883.html'
             if (/dropwater/.test(command)) link = 'https://textpro.me/dropwater-text-effect-872.html'
             if (/toxic/.test(command)) link = 'https://textpro.me/toxic-text-effect-online-901.html'
             if (/lava/.test(command)) link = 'https://textpro.me/lava-text-effect-online-914.html'
             if (/rock/.test(command)) link = 'https://textpro.me/rock-text-effect-online-915.html'
             if (/bloodglas/.test(command)) link = 'https://textpro.me/blood-text-on-the-frosted-glass-941.html'
             if (/hallowen/.test(command)) link = 'https://textpro.me/halloween-fire-text-effect-940.html'
             if (/darkgold/.test(command)) link = 'https://textpro.me/metal-dark-gold-text-effect-online-939.html'
             if (/joker/.test(command)) link = 'https://textpro.me/create-logo-joker-online-934.html'
             if (/wicker/.test(command)) link = 'https://textpro.me/wicker-text-effect-online-932.html'
             if (/firework/.test(command)) link = 'https://textpro.me/firework-sparkle-text-effect-930.html'
             if (/skeleton/.test(command)) link = 'https://textpro.me/skeleton-text-effect-online-929.html'
             if (/blackpink/.test(command)) link = 'https://textpro.me/create-blackpink-logo-style-online-1001.html'
             if (/sand/.test(command)) link = 'https://textpro.me/write-in-sand-summer-beach-free-online-991.html'
             if (/glue/.test(command)) link = 'https://textpro.me/create-3d-glue-text-effect-with-realistic-style-986.html'
             if (/1917/.test(command)) link = 'https://textpro.me/1917-style-text-effect-online-980.html'
                if (/leaves/.test(command)) link = 'https://textpro.me/natural-leaves-text-effect-931.html'
             let anu = await maker.textpro(link, q)
                neoxy.sendMessage(m.chat, { image: { url: anu }, caption: `*Done*` }, { quoted: m })
             }
             addCmd(command.slice(1), 1, commund)
break

case 'emojimix': {
if (!q) throw `*Example :* ${prefix + command} 😅+🤔`
let [emoji1, emoji2] = q.split`+`
let kuntuh = await fetchJson(`https://tenor.googleapis.com/v2/featured?key=AIzaSyAyimkuYQYF_FXVALexPuGQctUWRURdCYQ&contentfilter=high&media_filter=png_transparent&component=proactive&collection=emoji_kitchen_v5&q=${encodeURIComponent(emoji1)}_${encodeURIComponent(emoji2)}`)
for (let res of kuntuh.results) {
let encmedia = await neoxy.sendImageAsSticker(from, res.url, m, { packname: global.packname, author: global.author, categories: res.tags })
await fs.unlinkSync(encmedia)
}
}
addCmd(command.slice(1), 1, commund)
break
case 'getcase':
if (m.isGroup) throw mess.private
if (!isCreator) return reply(mess.owner)
const getCase = (cases) => {
return "case"+`'${cases}'`+fs.readFileSync("plugins/command.js").toString().split('case \''+cases+'\'')[1].split("break")[0]+"break"
}
ads(`${getCase(q)}`)
addCmd(command.slice(1), 1, commund)
break

case 'textmaker': {
if (isBan) return ads(mess.ban)
if (args.length < 1) return ads(`Example :\n${prefix + command} <name>`)
if (args[0] === 'glitch') {
if (args.length < 2) return ads(`Example :\n${prefix + command + ' ' + args[0]} ZackMans`)
let teds = await thiccysapi.textpro("https://textpro.me/create-impressive-glitch-text-effects-online-1027.html", [args[1]])
neoxy.sendMessage(from, {image:{url:teds}, caption:"Done!"}, {quoted:m})
} else if (args[0] === 'glow') {
if (args.length < 2) return ads(`Example :\n${prefix + command + ' ' + args[0]} ZackMans`)
let teds = await thiccysapi.textpro("https://textpro.me/create-light-glow-sliced-text-effect-online-1068.html", [args[1]])
neoxy.sendMessage(from, {image:{url:teds}, caption:"Done!"}, {quoted:m})
} else {
ads(`*List Text Maker :*\n•> glitch\n•> glow`)
}
}
addCmd(command.slice(1), 1, commund)
break
case 'emoji': {
if (isBan) return ads(mess.ban)
if (!args.join(" ")) return ads('emojinya?')
emoji.get(args.join(" ")).then(async(emoji) => {
let mese = await neoxy.sendMessage(m.chat, {image:{url:emoji.images[4].url}, caption:"Done!"}, {quoted:m})
await neoxy.sendMessage(from, {text:"s"}, {quoted:mese})
})
}
addCmd(command.slice(1), 1, commund)
break
case 'suitpvp': case 'suit': {
if (isBan) return ads(mess.ban)
this.suit = this.suit ? this.suit : {}
let poin = 10
let poin_lose = 10
let timeout = 60000
if (Object.values(this.suit).find(roof => roof.id.startsWith('suit') && [roof.p, roof.p2].includes(m.sender))) ads(`Selesaikan suit mu yang sebelumnya`)
if (m.mentionedJid[0] === m.sender) return ads(`Tidak bisa bermain dengan diri sendiri !`)
if (!m.mentionedJid[0]) return ads(`_Siapa yang ingin kamu tantang?_\nTag orangnya..\n\nContoh : ${prefix}suit @${owner[1]}`, m.chat, { mentions: [owner[1] + '@s.whatsapp.net'] })
if (Object.values(this.suit).find(roof => roof.id.startsWith('suit') && [roof.p, roof.p2].includes(m.mentionedJid[0]))) throw `Orang yang kamu tantang sedang bermain suit bersama orang lain :(`
let id = 'suit_' + new Date() * 1
let caption = `_*SUIT PvP*_

@${m.sender.split`@`[0]} menantang @${m.mentionedJid[0].split`@`[0]} untuk bermain suit

Silahkan @${m.mentionedJid[0].split`@`[0]} untuk ketik terima/tolak`
this.suit[id] = {
chat: await neoxy.sendText(m.chat, caption, m, { mentions: parseMention(caption) }),
id: id,
p: m.sender,
p2: m.mentionedJid[0],
status: 'wait',
waktu: setTimeout(() => {
if (this.suit[id]) neoxy.sendText(m.chat, `_Waktu suit habis_`, m)
delete this.suit[id]
}, 60000), poin, poin_lose, timeout
}
}
addCmd(command.slice(1), 1, commund)
break
case 'family100': {
if (isBan) return ads(mess.ban)
if ('family100'+m.chat in _family100) {
ads('Masih Ada Sesi Yang Belum Diselesaikan!')
throw false
}
let anu = await fetchJson('https://raw.githubusercontent.com/BochilTeam/database/master/games/family100.json')
let random = anu[Math.floor(Math.random() * anu.length)]
let hasil = `*Jawablah Pertanyaan Berikut :*\n${random.soal}\n\nTerdapat *${random.jawaban.length}* Jawaban ${random.jawaban.find(v => v.includes(' ')) ? `(beberapa Jawaban Terdapat Spasi)` : ''}`.trim()
_family100['family100'+m.chat] = {
id: '#family100'+m.chat,
pesan: await neoxy.sendText(m.chat, hasil, m),
...random,
terjawab: Array.from(random.jawaban, () => false),
hadiah: 6,
}
}
addCmd(command.slice(1), 1, commund)
break
case 'tebak': {
if (isBan) return ads(mess.ban)
if (!args.join(" ")) return ads(`Example : ${prefix + command} lagu\n\nOption : \n1. lagu\n2. gambar\n3. kata\n4. kalimat\n5. lirik\n6.lontong`)
if (args[0] === "lagu") {
if (tebaklagu.hasOwnProperty(m.sender.split('@')[0])) return ads("Masih Ada Sesi Yang Belum Diselesaikan!")
let anu = await fetchJson('https://fatiharridho.github.io/tebaklagu.json')
let result = anu[Math.floor(Math.random() * anu.length)]
let msg = await neoxy.sendMessage(m.chat, { audio: { url: result.link_song }, mimetype: 'audio/mpeg' }, { quoted: m })
neoxy.sendText(m.chat, `Lagu Tersebut Adalah Lagu dari?\n\nArtist : ${result.artist}\nWaktu : 60s`, msg).then(() => {
tebaklagu[m.sender.split('@')[0]] = result.jawaban.toLowerCase()
})
await sleep(60000)
if (tebaklagu.hasOwnProperty(m.sender.split('@')[0])) {
console.log("Jawaban: " + result.jawaban)
neoxy.sendButtonText(m.chat, [{ buttonid: '##tebak lagu', buttonText: { displayText: 'Tebak Lagu' }, type: 1 }], `Waktu Habis\nJawaban:  ${tebaklagu[m.sender.split('@')[0]]}\n\nIngin bermain? tekan button dibawah`, "© Created By Lexxy Official", m)
delete tebaklagu[m.sender.split('@')[0]]
}
} else if (args[0] === 'gambar') {
if (tebakgambar.hasOwnProperty(m.sender.split('@')[0])) return ads("Masih Ada Sesi Yang Belum Diselesaikan!")
let anu = await fetchJson('https://raw.githubusercontent.com/BochilTeam/database/master/games/tebakgambar.json')
let result = anu[Math.floor(Math.random() * anu.length)]
neoxy.sendImage(m.chat, result.img, `Silahkan Jawab Soal Di Atas Ini\n\nDeskripsi : ${result.deskripsi}\nWaktu : 60s`, m).then(() => {
tebakgambar[m.sender.split('@')[0]] = result.jawaban.toLowerCase()
})
await sleep(60000)
if (tebakgambar.hasOwnProperty(m.sender.split('@')[0])) {
console.log("Jawaban: " + result.jawaban)
neoxy.sendButtonText(m.chat, [{ buttonid: '##tebak gambar', buttonText: { displayText: 'Tebak Gambar' }, type: 1 }], `Waktu Habis\nJawaban:  ${tebakgambar[m.sender.split('@')[0]]}\n\nIngin bermain? tekan button dibawah`,"© Created By Lexxy Official", m)
delete tebakgambar[m.sender.split('@')[0]]
}
} else if (args[0] === 'kata') {
if (tebakkata.hasOwnProperty(m.sender.split('@')[0])) return ads("Masih Ada Sesi Yang Belum Diselesaikan!")
let anu = await fetchJson('https://raw.githubusercontent.com/BochilTeam/database/master/games/tebakkata.json')
let result = anu[Math.floor(Math.random() * anu.length)]
neoxy.sendText(m.chat, `Silahkan Jawab Pertanyaan Berikut\n\n${result.soal}\nWaktu : 60s`, m).then(() => {
tebakkata[m.sender.split('@')[0]] = result.jawaban.toLowerCase()
})
await sleep(60000)
if (tebakkata.hasOwnProperty(m.sender.split('@')[0])) {
console.log("Jawaban: " + result.jawaban)
neoxy.sendButtonText(m.chat, [{ buttonid: '##tebak kata', buttonText: { displayText: 'Tebak Kata' }, type: 1 }], `Waktu Habis\nJawaban:  ${tebakkata[m.sender.split('@')[0]]}\n\nIngin bermain? tekan button dibawah`, "© Created By Lexxy Official", m)
delete tebakkata[m.sender.split('@')[0]]
}
} else if (args[0] === 'kalimat') {
if (tebakkalimat.hasOwnProperty(m.sender.split('@')[0])) return ads("Masih Ada Sesi Yang Belum Diselesaikan!")
let anu = await fetchJson('https://raw.githubusercontent.com/BochilTeam/database/master/games/tebakkalimat.json')
let result = anu[Math.floor(Math.random() * anu.length)]
neoxy.sendText(m.chat, `Silahkan Jawab Pertanyaan Berikut\n\n${result.soal}\nWaktu : 60s`, m).then(() => {
tebakkalimat[m.sender.split('@')[0]] = result.jawaban.toLowerCase()
})
await sleep(60000)
if (tebakkalimat.hasOwnProperty(m.sender.split('@')[0])) {
console.log("Jawaban: " + result.jawaban)
neoxy.sendButtonText(m.chat, [{ buttonid: '##tebak kalimat', buttonText: { displayText: 'Tebak Kalimat' }, type: 1 }], `Waktu Habis\nJawaban:  ${tebakkalimat[m.sender.split('@')[0]]}\n\nIngin bermain? tekan button dibawah`, "© Created By Lexxy Official", m)
delete tebakkalimat[m.sender.split('@')[0]]
}
} else if (args[0] === 'lirik') {
if (tebaklirik.hasOwnProperty(m.sender.split('@')[0])) return ads("Masih Ada Sesi Yang Belum Diselesaikan!")
let anu = await fetchJson('https://raw.githubusercontent.com/BochilTeam/database/master/games/tebaklirik.json')
let result = anu[Math.floor(Math.random() * anu.length)]
neoxy.sendText(m.chat, `Ini Adalah Lirik Dari Lagu? : *${result.soal}*?\nWaktu : 60s`, m).then(() => {
tebaklirik[m.sender.split('@')[0]] = result.jawaban.toLowerCase()
})
await sleep(60000)
if (tebaklirik.hasOwnProperty(m.sender.split('@')[0])) {
console.log("Jawaban: " + result.jawaban)
neoxy.sendButtonText(m.chat, [{ buttonid: '##tebak lirik', buttonText: { displayText: 'Tebak Lirik' }, type: 1 }], `Waktu Habis\nJawaban:  ${tebaklirik[m.sender.split('@')[0]]}\n\nIngin bermain? tekan button dibawah`, "© Created By Lexxy Official", m)
delete tebaklirik[m.sender.split('@')[0]]
}
} else if (args[0] === 'lontong') {
if (caklontong.hasOwnProperty(m.sender.split('@')[0])) return ads("Masih Ada Sesi Yang Belum Diselesaikan!")
let anu = await fetchJson('https://raw.githubusercontent.com/BochilTeam/database/master/games/caklontong.json')
let result = anu[Math.floor(Math.random() * anu.length)]
neoxy.sendText(m.chat, `*Jawablah Pertanyaan Berikut :*\n${result.soal}*\nWaktu : 60s`, m).then(() => {
caklontong[m.sender.split('@')[0]] = result.jawaban.toLowerCase()
caklontong_desk[m.sender.split('@')[0]] = result.deskripsi
})
await sleep(60000)
if (caklontong.hasOwnProperty(m.sender.split('@')[0])) {
console.log("Jawaban: " + result.jawaban)
neoxy.sendButtonText(m.chat, [{ buttonid: '##tebak lontong', buttonText: { displayText: 'Tebak Lontong' }, type: 1 }], `Waktu Habis\nJawaban:  ${caklontong[m.sender.split('@')[0]]}\nDeskripsi : ${caklontong_desk[m.sender.split('@')[0]]}\n\nIngin bermain? tekan button dibawah`, "© Created By Lexxy Official", m)
delete caklontong[m.sender.split('@')[0]]
delete caklontong_desk[m.sender.split('@')[0]]
}
}
}
addCmd(command.slice(1), 1, commund)
break
case 'ttc': case 'ttt': case 'tictactoe': {
if (isBan) return ads(mess.ban)
let TicTacToe = require("./message/tictactoe")
this.game = this.game ? this.game : {}
if (Object.values(this.game).find(room => room.id.startsWith('tictactoe') && [room.game.playerX, room.game.playerO].includes(m.sender))) return ads('Kamu masih didalam game')
let room = Object.values(this.game).find(room => room.state === 'WAITING' && (args.join(" ") ? room.name === args.join(" ") : true))
if (room) {
ads('Partner ditemukan!')
room.o = m.chat
room.game.playerO = m.sender
room.state = 'PLAYING'
let arr = room.game.render().map(v => {
return {
X: '❌',
O: '⭕',
1: '1️⃣',
2: '2️⃣',
3: '3️⃣',
4: '4️⃣',
5: '5️⃣',
6: '6️⃣',
7: '7️⃣',
8: '8️⃣',
9: '9️⃣',
}[v]
})
let str = `Room ID: ${room.id}

${arr.slice(0, 3).join('')}
${arr.slice(3, 6).join('')}
${arr.slice(6).join('')}

Menunggu @${room.game.currentTurn.split('@')[0]}

Ketik *nyerah* untuk menyerah dan mengakui kekalahan`
if (room.x !== room.o) await neoxy.sendText(room.x, str, m, { mentions: parseMention(str) } )
await neoxy.sendText(room.o, str, m, { mentions: parseMention(str) } )
} else {
room = {
id: '#tictactoe-' + (+new Date),
x: m.chat,
o: '',
game: new TicTacToe(m.sender, 'o'),
state: 'WAITING'
}
if (args.join(" ")) room.name = args.join(" ")
ads('Menunggu partner' + (args.join(" ") ? ` mengetik command dibawah ini ${prefix}${command} ${args.join(" ")}` : ''))
this.game[room.id] = room
}
}
addCmd(command.slice(1), 1, commund)
break
case 'delttc': case 'delttt': {
if (isBan) return ads(mess.ban)
this.game = this.game ? this.game : {}
try {
if (this.game) {
delete this.game
neoxy.sendText(m.chat, `Berhasil delete session TicTacToe`, m)
} else if (!this.game) {
ads(`Session TicTacToe🎮 tidak ada`)
} else throw '?'
} catch (e) {
ads('rusak')
}
}
addCmd(command.slice(1), 1, commund)
break
case 'kuismath': case 'math': {
if (isBan) return ads(mess.ban)
if (kuismath.hasOwnProperty(m.sender.split('@')[0])) return ads("Masih Ada Sesi Yang Belum Diselesaikan!")
let { genMath, modes } = require('./plugins/src/math')
if (!args.join(" ")) return ads(`Mode: ${Object.keys(modes).join(' | ')}\nContoh penggunaan: ${prefix}math medium`)
let result = await genMath(text.toLowerCase())
neoxy.sendText(m.chat, `*Berapa hasil dari: ${result.soal.toLowerCase()}*?\n\nWaktu: ${(result.waktu / 1000).toFixed(2)} detik`, m).then(() => {
kuismath[m.sender.split('@')[0]] = result.jawaban
})
await sleep(result.waktu)
if (kuismath.hasOwnProperty(m.sender.split('@')[0])) {
console.log("Jawaban: " + result.jawaban)
ads("Waktu Habis\nJawaban: " + kuismath[m.sender.split('@')[0]])
delete kuismath[m.sender.split('@')[0]]
}
}
addCmd(command.slice(1), 1, commund)
break
case 'delete': case 'del': {
if (isBan) return ads(mess.ban)
if (!m.quoted) return
let { chat, fromMe, id, isBaileys } = m.quoted
if (!isBaileys) return ads('Pesan tersebut bukan dikirim oleh bot!')
neoxy.sendMessage(m.chat, { delete: { remoteJid: m.chat, fromMe: true, id: m.quoted.id, participant: m.quoted.sender } })
}
addCmd(command.slice(1), 1, commund)
break
case 'halah': case 'hilih': case 'huluh': case 'heleh': case 'holoh': {
if (isBan) return ads(mess.ban)
if (!m.quoted && !args.join(" ")) return ads(`Kirim/reply text dengan caption ${prefix + command}`)
ter = command[1].toLowerCase()
tex = m.quoted ? m.quoted.text ? m.quoted.text : args.join(" ") ? args.join(" ") : m.text : args.join(" ") ? args.join(" ") : m.text
ads(tex.replace(/[aiueo]/g, ter).replace(/[AIUEO]/g, ter.toUpperCase()))
}
addCmd(command.slice(1), 1, commund)
break
case 'vote': {
if (isBan) return ads(mess.ban)
if (!m.isGroup) return ads(mess.group)
if (m.chat in vote) return ads(`_Masih ada vote di chat ini!_\n\n*${prefix}hapusvote* - untuk menghapus vote`)
if (!args.join(" ")) return ads(`Masukkan Alasan Melakukan Vote, Example: *${prefix + command} Owner Ganteng*`)
ads(`Vote dimulai!\n\n*${prefix}upvote* - untuk ya\n*${prefix}devote* - untuk tidak\n*${prefix}cekvote* - untuk mengecek vote\n*${prefix}hapusvote* - untuk menghapus vote`)
vote[m.chat] = [args.join(" "), [], []]
await sleep(1000)
upvote = vote[m.chat][1]
devote = vote[m.chat][2]
teks_vote = `*「 VOTE 」*

*Alasan:* ${vote[m.chat][0]}

┌〔 UPVOTE 〕
│ 
├ Total: ${vote[m.chat][1].length}
│
│ 
└────

┌〔 DEVOTE 〕
│ 
├ Total: ${vote[m.chat][2].length}
│
│ 
└────

*${prefix}hapusvote* - untuk menghapus vote`
let buttonsVote = [
{buttonId: `${prefix}upvote`, buttonText: {displayText: '𝚄𝙿𝚅𝙾𝚃𝙴'}, type: 1},
{buttonId: `${prefix}devote`, buttonText: {displayText: '𝙳𝙴𝚅𝙾𝚃𝙴'}, type: 1}
]

let buttonMessageVote = {
image: log0,
jpegThumbnail: thum,
caption: teks_vote,
footer: "© Created By Lexxy Official",
buttons: buttonsVote,
headerType: 1
}
neoxy.sendMessage(m.chat, buttonMessageVote)
}
addCmd(command.slice(1), 1, commund)
break
case 'upvote': {
if (isBan) return ads(mess.ban)
if (!m.isGroup) return ads(mess.group)
if (!(m.chat in vote)) return ads(`_*tidak ada voting digrup ini!*_\n\n*${prefix}vote* - untuk memulai vote`)
isVote = vote[m.chat][1].concat(vote[m.chat][2])
wasVote = isVote.includes(m.sender)
if (wasVote) return ads('Kamu Sudah Vote')
vote[m.chat][1].push(m.sender)
menvote = vote[m.chat][1].concat(vote[m.chat][2])
teks_vote = `*「 VOTE 」*

*Alasan:* ${vote[m.chat][0]}

┌〔 UPVOTE 〕
│ 
├ Total: ${vote[m.chat][1].length}
${vote[m.chat][1].map((v, i) => `├ ${i + 1}. @${v.split`@`[0]}`).join('\n')}
│ 
└────

┌〔 DEVOTE 〕
│ 
├ Total: ${vote[m.chat][2].length}
${vote[m.chat][2].map((v, i) => `├ ${i + 1}. @${v.split`@`[0]}`).join('\n')}
│ 
└────

*${prefix}hapusvote* - untuk menghapus vote`
let buttonsUpvote = [
{buttonId: `${prefix}upvote`, buttonText: {displayText: '𝚄𝙿𝚅𝙾𝚃𝙴'}, type: 1},
{buttonId: `${prefix}devote`, buttonText: {displayText: '𝙳𝙴𝚅𝙾𝚃𝙴'}, type: 1}
]

let buttonMessageUpvote = {
image: log0,
jpegThumbnail: thum,
caption: teks_vote,
footer: "© Created By Lexxy Official",
buttons: buttonsUpvote,
headerType: 1,
mentions: menvote
}
neoxy.sendMessage(m.chat, buttonMessageUpvote)
}
addCmd(command.slice(1), 1, commund)
break
case 'devote': {
if (isBan) return ads(mess.ban)
if (!m.isGroup) return ads(mess.group)
if (!(m.chat in vote)) return ads(`_*tidak ada voting digrup ini!*_\n\n*${prefix}vote* - untuk memulai vote`)
isVote = vote[m.chat][1].concat(vote[m.chat][2])
wasVote = isVote.includes(m.sender)
if (wasVote) return ads('Kamu Sudah Vote')
vote[m.chat][2].push(m.sender)
menvote = vote[m.chat][1].concat(vote[m.chat][2])
teks_vote = `*「 VOTE 」*

*Alasan:* ${vote[m.chat][0]}

┌〔 UPVOTE 〕
│ 
├ Total: ${vote[m.chat][1].length}
${vote[m.chat][1].map((v, i) => `├ ${i + 1}. @${v.split`@`[0]}`).join('\n')}
│ 
└────

┌〔 DEVOTE 〕
│ 
├ Total: ${vote[m.chat][2].length}
${vote[m.chat][2].map((v, i) => `├ ${i + 1}. @${v.split`@`[0]}`).join('\n')}
│ 
└────

*${prefix}hapusvote* - untuk menghapus vote`
let buttonsDevote = [
{buttonId: `${prefix}upvote`, buttonText: {displayText: '𝚄𝙿𝚅𝙾𝚃𝙴'}, type: 1},
{buttonId: `${prefix}devote`, buttonText: {displayText: '𝙳𝙴𝚅𝙾𝚃𝙴'}, type: 1}
]

let buttonMessageDevote = {
image: log0,
jpegThumbnail: thum,
caption: teks_vote,
footer: "© Created By Lexxy Official",
buttons: buttonsDevote,
headerType: 1,
mentions: menvote
}
neoxy.sendMessage(m.chat, buttonMessageDevote)
}
addCmd(command.slice(1), 1, commund)
break
case 'cekvote': {
if (isBan) return ads(mess.ban)
if (!m.isGroup) return ads(mess.group)
if (!(m.chat in vote)) return ads(`_*tidak ada voting digrup ini!*_\n\n*${prefix}vote* - untuk memulai vote`)
teks_vote = `*「 VOTE 」*

*Alasan:* ${vote[m.chat][0]}

┌〔 UPVOTE 〕
│ 
├ Total: ${upvote.length}
${vote[m.chat][1].map((v, i) => `├ ${i + 1}. @${v.split`@`[0]}`).join('\n')}
│ 
└────

┌〔 DEVOTE 〕
│ 
├ Total: ${devote.length}
${vote[m.chat][2].map((v, i) => `├ ${i + 1}. @${v.split`@`[0]}`).join('\n')}
│ 
└────

*${prefix}hapusvote* - untuk menghapus vote


©${neoxy.user.id}
`
neoxy.sendTextWithMentions(m.chat, teks_vote, m)
}
addCmd(command.slice(1), 1, commund)
break
case 'deletevote': case'delvote': case 'hapusvote': {
if (isBan) return ads(mess.ban)
if (!m.isGroup) return ads(mess.group)
if (!(m.chat in vote)) return ads(`_*tidak ada voting digrup ini!*_\n\n*${prefix}vote* - untuk memulai vote`)
delete vote[m.chat]
ads('Berhasil Menghapus Sesi Vote Di Grup Ini')
}
addCmd(command.slice(1), 1, commund)
break
case 'listpc': {
if (isBan) return ads(mess.ban)
let anu = await store.chats.all().filter(v => v.id.endsWith('.net')).map(v => v)
let teks = `     「 List Personal Chat 」\n\nThere are ${anu.length} users using bot in personal chat`
for (let i of anu) {
 teks += `\n\nProfile : @${i.id.split('@')[0]}\nChat : ${i.unreadCount}\nLastchat : ${moment(i.conversationTimestamp * 1000).tz("Asia/Jakarta").format("DD/MM/YYYY HH:mm:ss")}`
}
neoxy.sendTextWithMentions(m.chat, teks, m)
}
addCmd(command.slice(1), 1, commund)
break
case 'listgc': {
if (isBan) return ads(mess.ban)
let anu = await store.chats.all().filter(v => v.id.endsWith('@g.us')).map(v => v.id)
let teks = `     「 List Group Chat 」\n\nThere are ${anu.length} users using bot in group chat`
for (let i of anu) {
 let metadata = await neoxy.groupMetadata(i)
 if (metadata.owner === "undefined") {
 loldd = false
 } else {
 loldd = metadata.owner
 }
 teks += `\n\nName : ${metadata.subject ? metadata.subject : "undefined"}\nOwner : ${loldd ? '@' + loldd.split("@")[0] : "undefined"}\nID : ${metadata.id ? metadata.id : "undefined"}\nDibuat : ${metadata.creation ? moment(metadata.creation * 1000).tz('Asia/Jakarta').format('DD/MM/YYYY HH:mm:ss') : "undefined"}\nMember : ${metadata.participants.length ? metadata.participants.length : "undefined"}`
}
neoxy.sendTextWithMentions(m.chat, teks, m)
}
addCmd(command.slice(1), 1, commund)
break
case 'afk': {
if (isBan) return ads(mess.ban)
let user = global.db.users[m.sender]
user.afkTime = + new Date
user.afkReason = args.join(" ")
ads(`${m.pushName} sekarang afk\nAlasan : ${args.join(" ") ? args.join(" ") : ''}`)
}
addCmd(command.slice(1), 1, commund)
break
case 'setcmd': {
if (isBan) return ads(mess.ban)
if (!m.quoted) return ads('Reply Pesan!')
if (!m.quoted.fileSha256) return ads('SHA256 Hash Missing')
if (!args.join(" ")) return ads(`Untuk Command Apa?`)
let hash = m.quoted.fileSha256.toString('base64')
if (global.db.sticker[hash] && global.db.sticker[hash].locked) return ads('You have no permission to change this sticker command')
global.db.sticker[hash] = {
text,
mentionedJid: m.mentionedJid,
creator: m.sender,
at: + new Date,
locked: false,
}
ads(`Done!`)
}
addCmd(command.slice(1), 1, commund)
break
case 'delcmd': {
if (isBan) return ads(mess.ban)
let hash = m.quoted.fileSha256.toString('base64')
if (!hash) return ads(`Tidak ada hash`)
if (global.db.sticker[hash] && global.db.sticker[hash].locked) return ads('You have no permission to delete this sticker command')
delete global.db.sticker[hash]
ads(`Done!`)
}
addCmd(command.slice(1), 1, commund)
break
case 'listcmd': {
if (isBan) return ads(mess.ban)
let teks = `
*List Hash*
Info: *bold* hash is Locked
${Object.entries(global.db.sticker).map(([key, value], index) => `${index + 1}. ${value.locked ? `*${key}*` : key} : ${value.text}`).join('\n')}
`.trim()
neoxy.sendText(m.chat, teks, m, { mentions: Object.values(global.db.sticker).map(x => x.mentionedJid).reduce((a,b) => [...a, ...b], []) })
}
addCmd(command.slice(1), 1, commund)
break
case 'lockcmd': {
if (isBan) return ads(mess.ban)
if (!isCreator) return ads(mess.owner)
if (!m.quoted) return ads('Reply Pesan!')
if (!m.quoted.fileSha256) return ads('SHA256 Hash Missing')
let hash = m.quoted.fileSha256.toString('base64')
if (!(hash in global.db.sticker)) return ads('Hash not found in database')
global.db.sticker[hash].locked = !/^un/i.test(command)
ads('Done!')
}
addCmd(command.slice(1), 1, commund)
break
case 'addmsg': {
if (isBan) return ads(mess.ban)
if (!m.quoted) return ads('Reply Message Yang Ingin Disave Di Database')
if (!args.join(" ")) return ads(`Example : ${prefix + command} nama file`)
let msgs = global.db.database
if (text.toLowerCase() in msgs) return ads(`'${args.join(" ")}' telah terdaftar di list pesan`)
msgs[text.toLowerCase()] = quoted.fakeObj
ads(`Berhasil menambahkan pesan di list pesan sebagai '${args.join(" ")}'
    
Akses dengan ${prefix}getmsg ${args.join(" ")}

Lihat list Pesan Dengan ${prefix}listmsg`)
}
addCmd(command.slice(1), 1, commund)
break
case 'getmsg': {
if (isBan) return ads(mess.ban)
if (!args.join(" ")) return ads(`Example : ${prefix + command} file name\n\nLihat list pesan dengan ${prefix}listmsg`)
let msgs = global.db.database
if (!(text.toLowerCase() in msgs)) return ads(`'${args.join(" ")}' tidak terdaftar di list pesan`)
neoxy.copyNForward(m.chat, msgs[text.toLowerCase()], true)
}
addCmd(command.slice(1), 1, commund)
break
case 'listmsg': {
if (isBan) return ads(mess.ban)
let msgs = JSON.parse(fs.readFileSync('./plugins/src/database.json'))
let seplit = Object.entries(global.db.database).map(([nama, isi]) => { return { nama, ...isi } })
let teks = '「 LIST DATABASE 」\n\n'
for (let i of seplit) {
teks += `⬡ *Name :* ${i.nama}\n⬡ *Type :* ${getContentType(i.message).replace(/Message/i, '')}\n────────────────────────\n\n`
}
ads(teks)
}
addCmd(command.slice(1), 1, commund)
break
case 'fliptext': {
if (isBan) return ads(mess.ban)
if (args.length < 1) return ads(`Example:\n${prefix}fliptext MyMans`)
quere = args.join(" ")
flipe = quere.split('').reverse().join('')
ads(`\`\`\`「 FLIP TEXT 」\`\`\`\n*•> Normal :*\n${quere}\n*•> Flip :*\n${flipe}`)
}
addCmd(command.slice(1), 1, commund)
break
case 'tohuruf': {
if (isBan) return ads(mess.ban)
if (!Number(args[0])) return ads(`Example:\n${prefix}tohuruf 456`)
try {
quere = args.join(" ")
convertes = await toHur(quere)
ads(`\`\`\`「 ALPHABET 」\`\`\`\n*•> Number :*\n${quere}\n*•> Alphabet :*\n${convertes}`)
} catch {
ads("Error")
}
}
addCmd(command.slice(1), 1, commund)
break
case 'welcome': {
if (isBan) return ads(mess.ban)
if (!m.isGroup) return ads(mess.group)
if (!isBotAdmins) return ads(mess.botAdmin)
if (!isAdmins && !isCreator) return ads(mess.admin)
if (args.length < 1) return ads('ketik on untuk mengaktifkan\nketik off untuk menonaktifkan')
if (args[0] === "on") {
if (welcm) return ads('Sudah Aktif')
wlcm.push(from)
ads('Succes menyalakan welcome di group ini')
} else if (args[0] === "off") {
if (!welcm) return ads('Sudah Mati')
let off = wlcm.indexOf(from)
wlcm.splice(off, 1)
ads('Succes mematikan welcome di group ini')
} else {
ads('on untuk mengaktifkan, off untuk menonaktifkan')
}
}
addCmd(command.slice(1), 1, commund)
break
case 'autorevoke': {
if (isBan) return ads(mess.ban)
if (!m.isGroup) return ads(mess.group)
if (!isBotAdmins) return ads(mess.botAdmin)
if (!isAdmins && !isCreator) return ads(mess.admin)
if (args.length < 1) return ads('ketik on untuk mengaktifkan\nketik off untuk menonaktifkan')
if (args[0] === "on") {
if (GcRvk) return ads('Sudah Aktif')
gcrevoke.push(from)
ads('Succes menyalakan autorevoke di group ini')
} else if (args[0] === "off") {
if (!GcRvk) return ads('Sudah Mati')
let off = wlcm.indexOf(from)
gcrevoke.splice(off, 1)
ads('Succes mematikan autorevoke di group ini')
} else {
ads('on untuk mengaktifkan, off untuk menonaktifkan')
}
}
addCmd(command.slice(1), 1, commund)
break
case 'antilink': {
if (isBan) return ads(mess.ban)
if (!m.isGroup) return ads(mess.group)
if (!isBotAdmins) return ads(mess.botAdmin)
if (!isAdmins && !isCreator) return ads(mess.admin)
if (args.length < 1) return ads('ketik on untuk mengaktifkan\nketik off untuk menonaktifkan')
if (args[0] === "on") {
if (AntiLink) return ads('Sudah Aktif')
ntilink.push(from)
ads('Succes menyalakan antilink di group ini')
var groupe = await neoxy.groupMetadata(from)
var members = groupe['participants']
var mems = []
members.map(async adm => {
mems.push(adm.id.replace('c.us', 's.whatsapp.net'))
})
neoxy.sendMessage(from, {text: `PERINGATAN!!! jika bukan admin jangan send link di group ini`, contextInfo: { mentionedJid : mems }}, {quoted:m})
} else if (args[0] === "off") {
if (!AntiLink) return ads('Sudah Mati')
let off = ntilink.indexOf(from)
ntilink.splice(off, 1)
ads('Succes mematikan antilink di group ini')
} else {
ads('on untuk mengaktifkan, off untuk menonaktifkan')
}
}
addCmd(command.slice(1), 1, commund)
break
case 'listonline': case 'listaktif': {
if (isBan) return ads(mess.ban)
if (!m.isGroup) return ads(mess.group)
let id = args && /\d+\-\d+@g.us/.test(args[0]) ? args[0] : m.chat
let online = [...Object.keys(store.presences[id]), botNumber]
let liston = 1
neoxy.sendText(m.chat, '     「 List Online 」\n\n' + online.map(v => `${liston++} . @` + v.replace(/@.+/, '')).join`\n`, m, { mentions: online })
}
addCmd(command.slice(1), 1, commund)
break
case 'chat': {
if (!isCreator) return ads(mess.owner)
if (!args.join(" ")) return ads(`Example :\n${prefix + command} 62813xxxx|Woi`)
const cpes = args.join(" ")
const nony = cpes.split("|")[0];
const pesny = cpes.split("|")[1];
lolh = `*| CHAT FITUR |*

Pesan dari admin bot
Nomor : @${m.sender.split("@")[0]}
Pesan : ${pesny}`
neoxy.sendMessage(nony + "@s.whatsapp.net", {text:lolh, mentions:[m.sender]}, {quoted:m})
}
await ads("Succes")
addCmd(command.slice(1), 1, commund)
break
case 'nulis': case 'nuliskanan':{
if (args.length < 1) return m.reply(`Kirim perintah *${prefix}nuliskanan* teks`)
ads(mess.wait)
                var tulisan = q
                var splitText = tulisan.replace(/(\S+\s*){1,9}/g, '$&\n')
                var fixHeight = splitText.split('\n').slice(0, 31).join('\n')
                spawn('convert', ['./plugins/nulis/buku/sebelumkanan.jpg','-font','./plugins/nulis/font/Indie-Flower.ttf','-size','960x1280','-pointsize','23','-interline-spacing','2','-annotate','+128+129',fixHeight,'./plugins/nulis/buku/setelahkanan.jpg'])
                .on('error', () => m.reply('error'))
                .on('exit', () => {
               neoxy.sendMessage(m.chat, { image: fs.readFileSync('./plugins/nulis/buku/setelahkanan.jpg')}, {quoted: m, caption: `Jangan Malas Kak...`})
                })
            }
                break
case 'nuliskiri':{
if (args.length < 1) return m.reply(`Kirim perintah *${prefix}nuliskiri* teks`)
ads(mess.wait)
var tulisan = body.slice(11)
var splitText = tulisan.replace(/(\S+\s*){1,9}/g, '$&\n')
var fixHeight = splitText.split('\n').slice(0, 31).join('\n')
spawn('convert', ['./plugins/nulis/buku/sebelumkiri.jpg','-font','./plugins/nulis/font/Indie-Flower.ttf','-size','960x1280','-pointsize','22','-interline-spacing','2','-annotate','+140+153',fixHeight,'./plugins/nulis/buku/setelahkiri.jpg'])
.on('error', () => m.reply('error'))
.on('exit', () => {
neoxy.sendMessage(m.chat, { image: fs.readFileSync('./plugins/nulis/buku/setelahkiri.jpg')}, {quoted: m, caption: `Jangan Malas Kak...`})
})
}
break
case 'foliokiri':{
 if (args.length < 1) return m.reply(`Kirim perintah *${prefix}foliokiri* teks`)
ads(mess.wait)
                var tulisan = body.slice(11)
                var splitText = tulisan.replace(/(\S+\s*){1,13}/g, '$&\n')
                var fixHeight = splitText.split('\n').slice(0, 38).join('\n')
                spawn('convert', ['./plugins/nulis/buku/folio/sebelumkiri.jpg','-font','./plugins/nulis/font/Indie-Flower.ttf','-size','1720x1280','-pointsize','23','-interline-spacing','4','-annotate','+48+185',fixHeight,'./plugins/nulis/buku/folio/setelahkiri.jpg'])
                .on('error', () => m.reply('error'))
                .on('exit', () => {
                neoxy.sendMessage(m.chat, { image: fs.readFileSync('./plugins/nulis/buku/folio/setelahkiri.jpg')}, {quoted: m, caption: `Jangan Malas Kak...`})
                })
            }
            
                break
case 'foliokanan':{
if (args.length < 1) return m.reply(`Kirim perintah *${prefix}foliokanan* teks`)
ads(mess.wait)
                var tulisan = body.slice(12)
                var splitText = tulisan.replace(/(\S+\s*){1,13}/g, '$&\n')
                var fixHeight = splitText.split('\n').slice(0, 38).join('\n')
                spawn('convert', ['./plugins/nulis/buku/folio/sebelumkanan.jpg','-font','./plugins/nulis/font/Indie-Flower.ttf','-size','960x1280','-pointsize','23','-interline-spacing','3','-annotate','+89+190',fixHeight,'./plugins/nulis/buku/folio/setelahkanan.jpg'])
                .on('error', () => m.reply('error'))
                .on('exit', () => {
                neoxy.sendMessage(m.chat, { image: fs.readFileSync('./plugins/nulis/buku/folio/setelahkanan.jpg')}, {quoted: m, caption: `Jangan Malas Kak...`})
                })
            }
                break
case 'cowner': {
if (isBan) return ads(mess.ban)
if (!isCreator) return ads(mess.owner)
if (!args[0]) return ads(`Pilih add atau del`)
if (args[1]) {
orgnye = args[1]
} else if (m.quoted) {
orgnye = m.quoted.sender.split("@")[0]
}
const isCwner = owner.includes(orgnye)
if (args[0] === "add") {
if (isCwner) return ads('User sudah menjadi owner')
owner.push(orgnye)
ads(`Succes add friends`)
} else if (args[0] === "del") {
if (!isCwner) return ads('User bukan owner')
let delcwner = owner.indexOf(orgnye)
owner.splice(delcwner, 1)
ads(`Succes del friends`)
} else {
ads("Error")
}
}
addCmd(command.slice(1), 1, commund)
break
case 'ban': {
if (!isCreator) return ads(mess.owner)
if (!args[0]) return ads(`Pilih add atau del`)
if (args[1]) {
orgnye = args[1] + "@s.whatsapp.net"
} else if (m.quoted) {
orgnye = m.quoted.sender
}
const isBane = banUser.includes(orgnye)
if (args[0] === "add") {
if (isBane) return ads('User sudah dibanned')
banUser.push(orgnye)
ads(`Succes ban`)
} else if (args[0] === "del") {
if (!isBane) return ads('User tidak dibanned')
let delbans = banUser.indexOf(orgnye)
banUser.splice(delbans, 1)
ads(`Succes delban`)
} else {
ads("Error")
}
}
addCmd(command.slice(1), 1, commund)
break
case 'request': {
if (isBan) return ads(mess.ban)
if (!args.join(" ")) return ads(`Example : ${prefix + command} min tambahin fitur downloader`)
teks = `*| REQUEST FITUR |*`
teks1 = `\n\nNomor : @${m.sender.split("@")[0]}\nRequest : ${args.join(" ")}`
teks2 = `\n\nSucces send to owner`
for (let i of owner) {
neoxy.sendMessage(i + "@s.whatsapp.net", {text: teks + teks1, mentions:[m.sender]}, {quoted:m})
}
neoxy.sendMessage(m.chat, {text: teks + teks2 + teks1, mentions:[m.sender]}, {quoted:m})
}
addCmd(command.slice(1), 1, commund)
break
case 'report': {
if (isBan) return ads(mess.ban)
if (!args.join(" ")) return ads(`Example : \n- ${prefix + command} fitur ig error min\n- ${prefix + command} user ini nyepam min`)
teks = `*| REPORT FITUR |*`
teks1 = `\n\nNomor : @${m.sender.split("@")[0]}\nReport : ${args.join(" ")}`
teks2 = `\n\nSucces send to owner`
for (let i of owner) {
neoxy.sendMessage(i + "@s.whatsapp.net", {text: teks + teks1, mentions:[m.sender]}, {quoted:m})
}
neoxy.sendMessage(m.chat, {text: teks + teks2 + teks1, mentions:[m.sender]}, {quoted:m})
}
addCmd(command.slice(1), 1, commund)
break
case 'mcserver': case 'mcquery': {
if (isBan) return ads(mess.ban)
if (!args.join(" ")) return ads(`Example : \n${prefix + command} ip|port\nUses : \n${prefix + command} play.zackneoxy.com|19132`)
const Query = require("minecraft-query");

const qury = args.join(" ")
const iphost = qury.split("|")[0];
const portnya = qury.split("|")[1];

if (!iphost) return ads("ipnya mana kak?")
if (!portnya) return ads("portnya mana kak?")

const q = new Query({host: iphost, port: portnya, timeout: 7500});

q.fullStat()
.then(success => {
ads(jsonformat(success));
return q.basicStat()
})
.then(success => {
ads(jsonformat(success));
q.close();
})
}
addCmd(command.slice(1), 1, commund)
break
case 'mcpedl': {
if (isBan) return ads(mess.ban)
if (!args.join(" ")) return ads(`Example : ${prefix + command} shader`)
yogipw.mcpedl(args.join(" ")).then(async(res) => {
teks = `*| MCPEDL SEARCH |*`
for (let i of res) {
teks += `\n\nName : ${i.name}\nCategory : ${i.category}\nDate : ${i.date}\nDesc : ${i.desc}\nLink : ${i.link}`
}
let buttons = [
{buttonId: `menu`, buttonText: {displayText: 'Menu'}, type: 1}
]
let buttonMessage = {
image: log0,
jpegThumbnail: thum,
caption: teks,
footer: "© Created By Lexxy Official",
buttons: buttons,
headerType: 4
}
neoxy.sendMessage(m.chat, buttonMessage, { quoted: m })
})
}
addCmd(command.slice(1), 1, commund)
break
case 'happymod': {
if (isBan) return ads(mess.ban)
if (!args.join(" ")) return ads(`Example : ${prefix + command} mobile legend`)
yogipw.happymod(args.join(" ")).then(async(res) => {
teks = '```「 HappyMod Search 」```'
for (let i of res) {
teks += `\n\n${i.name}\n`
teks += `${i.link}`
}
let buttons = [
{buttonId: `${prefix}menu`, buttonText: {displayText: 'Menu'}, type: 1}
]
let buttonMessage = {
image: {url:res[0].icon},
jpegThumbnail: thum,
caption: teks,
footer: "© Created By Lexxy Official",
buttons: buttons,
headerType: 4
}
neoxy.sendMessage(m.chat, buttonMessage, { quoted: m })
})
}
addCmd(command.slice(1), 1, commund)
break
case 'searchgc': {
if (isBan) return ads(mess.ban)
if (args.length < 1) return ads(`Example :\n${prefix}searchgc Editor Berkelas`)
nae = args.join(" ")
hx.linkwa(nae).then(res => {
teks = '```「 Search Group 」```'
for (let i of res) {
teks += `\n\n•> Group Whatsapp :\n`
teks += `${i.link}\n`
teks += `${i.nama}`
}
let buttons = [
{buttonId: `${prefix}menu`, buttonText: {displayText: 'Menu'}, type: 1}
]
let buttonMessage = {
image: log0,
jpegThumbnail: thum,
caption: teks,
footer: "© Created By Lexxy Official",
buttons: buttons,
headerType: 4
}
neoxy.sendMessage(m.chat, buttonMessage, { quoted: m })
})
}
addCmd(command.slice(1), 1, commund)
break
case 'servermc': {
if (isBan) return ads(mess.ban)
yogipw.servermc().then(async(res) => {
let teks = '*| SERVER MC INDONESIA |*\n\nhttps://minecraftpocket-servers.com/country/indonesia/\n\n'
let no = 1
for (let i of res) {
teks += `▸ Server Ke ${no++}\nip : ${i.ip}\nport : ${i.port}\nversi : ${i.versi}\nplayer : ${i.player}\n\n`
}
let buttons = [
{buttonId: `${prefix}menu`, buttonText: {displayText: 'Menu'}, type: 1}
]
let buttonMessage = {
image: log0,
jpegThumbnail: thum,
caption: teks,
footer: "© Created By Lexxy Official",
buttons: buttons,
headerType: 4
}
neoxy.sendMessage(m.chat, buttonMessage, { quoted: m })
})
}
addCmd(command.slice(1), 1, commund)
break
case 'antitag': {
if (isBan) return ads(mess.ban)
if (!isCreator) return
if (args.length < 1) return ads(`Ketik on untuk mengaktifkan\nKetik off untuk menonaktifkan`)
if (args[0] === 'on') {
if (antitags === true) return
global.antitags = true
ads(`Berhasil mengaktifkan antitag!`)
} else if (args[0] === 'off') {
if (antitags === false) return
global.antitags = false
ads(`Berhasil menonaktifkan antitag!`)
} else {
ads('Pilih on atau off')
}
}
addCmd(command.slice(1), 1, commund)
break
case 'tiktoknowm': case 'tiktok':{
let { TiktokDownloader } = require('./message/tiktokdl')
if (args.length < 1) return m.reply(`*Contoh* :\n#tiktok https://vt.tiktok.com/ZSdGcA6MK/?k=1`)
if (!args[0].includes('tiktok')) return m.reply(`Link is not valid`)
  ads(mess.wait)
   const musim_rambutan = await TiktokDownloader(`${q}`).catch(e => {
 m.reply('err') 
} )
   console.log(musim_rambutan)
   const musim_duren_v = musim_rambutan.result.nowatermark
   neoxy.sendMessage(m.chat, { video: { url: musim_duren_v }, caption: "Done!" }, { quoted: m })
   }
  break
case 'tiktokaudio': case 'tiktokmp3':{
let { TiktokDownloader } = require('./message/tiktokdl')
if (args.length < 1) return m.reply(`*Contoh* :\n#tiktok https://vt.tiktok.com/ZSdGcA6MK/?k=1`)
if (!args[0].includes('tiktok')) return m.reply(`Link is not valid`)
  ads(mess.wait)
   const musim_rambutan = await TiktokDownloader(`${q}`).catch(e => {
 m.reply('err') 
} )
   console.log(musim_rambutan)
   const musim_duren_a = musim_rambutan.result.nowatermark
    neoxy.sendMessage(m.chat, { audio: { url: musim_duren_a }, mimetype: 'audio/mp4' }, { quoted: m })
   }
 break
case 'yts': case 'ytsearch': {
if (isBan) return ads(mess.ban)
if (!args.join(" ")) return ads(`Example : ${prefix + command} dj 30 detik`)
let yts = require("yt-search")
let search = await yts(args.join(" "))
let teks = '*| YOUTUBE SEARCH |*\n\n Result From '+text+'\n\n'
let no = 1
for (let i of search.all) {
teks += `⭔ No : ${no++}\n⭔ Type : ${i.type}\n⭔ Video ID : ${i.videoId}\n⭔ Title : ${i.title}\n⭔ Views : ${i.views}\n⭔ Duration : ${i.timestamp}\n⭔ Upload At : ${i.ago}\n⭔ Author : ${i.author.name}\n⭔ Url : ${i.url}\n\n─────────────────\n\n`
}
neoxy.sendMessage(m.chat, { image: { url: search.all[0].thumbnail },  caption: teks }, { quoted: m })
}
addCmd(command.slice(1), 1, commund)
break
case 'infochat': {
if (isBan) return ads(mess.ban)
if (!m.quoted) ads('Reply Pesan')
let msg = await m.getQuotedObj()
if (!m.quoted.isBaileys) return ads('Pesan tersebut bukan dikirim oleh bot!')
let teks = ''
for (let i of msg.userReceipt) {
let read = i.readTimestamp
let unread = i.receiptTimestamp
let waktu = read ? read : unread
teks += `⭔ @${i.userJid.split('@')[0]}\n`
teks += ` ┗━⭔ *Waktu :* ${moment(waktu * 1000).format('DD/MM/YY HH:mm:ss')} ⭔ *Status :* ${read ? 'Dibaca' : 'Terkirim'}\n\n`
}
neoxy.sendTextWithMentions(m.chat, teks, m)
}
addCmd(command.slice(1), 1, commund)
break
case 'setname': case 'setsubject': {
if (isBan) return ads(mess.ban)
if (!m.isGroup) return ads(mess.group)
if (!isBotAdmins) return ads(mess.botAdmin)
if (!isAdmins && !isCreator) return ads(mess.admin)
if (!text) return ads('Text ?')
await neoxy.groupUpdateSubject(m.chat, text).then((res) => ads(mess.success)).catch((err) => ads(jsonformat(err)))
}
addCmd(command.slice(1), 1, commund)
break
case 'setdesc': case 'setdesk': {
if (isBan) return ads(mess.ban)
if (!m.isGroup) return ads(mess.group)
if (!isBotAdmins) return ads(mess.botAdmin)
if (!isAdmins && !isCreator) return ads(mess.admin)
if (!text) return ads('Text ?')
await neoxy.groupUpdateDescription(m.chat, text).then((res) => ads(mess.success)).catch((err) => ads(jsonformat(err)))
}
addCmd(command.slice(1), 1, commund)
break
case 'setppbot': {
if (isBan) return ads(mess.ban)
if (!isCreator) return ads(mess.owner)
if (!quoted) return ads(`Kirim/Reply Image Dengan Caption ${prefix + command}`)
if (!/image/.test(mime)) return ads(`Kirim/Reply Image Dengan Caption ${prefix + command}`)
if (/webp/.test(mime)) return ads(`Kirim/Reply Image Dengan Caption ${prefix + command}`)
let media = await neoxy.downloadAndSaveMediaMessage(quoted)
await neoxy.updateProfilePicture(botNumber, { url: media }).catch((err) => fs.unlinkSync(media))
ads(mess.success)
}
addCmd(command.slice(1), 1, commund)
break
case 'setppgroup': case 'setppgrup': case 'setppgc': {
if (isBan) return ads(mess.ban)
if (!m.isGroup) return ads(mess.group)
if (!isAdmins && !isCreator) return ads(mess.admin)
if (!quoted) return ads(`Kirim/Reply Image Dengan Caption ${prefix + command}`)
if (!/image/.test(mime)) return ads(`Kirim/Reply Image Dengan Caption ${prefix + command}`)
if (/webp/.test(mime)) return ads(`Kirim/Reply Image Dengan Caption ${prefix + command}`)
let media = await neoxy.downloadAndSaveMediaMessage(quoted)
await neoxy.updateProfilePicture(m.chat, { url: media }).catch((err) => fs.unlinkSync(media))
ads(mess.success)
}
addCmd(command.slice(1), 1, commund)
break
case 'tagall': {
if (isBan) return ads(mess.ban)
if (!m.isGroup) return ads(mess.group)
if (!isAdmins && !isCreator) return ads(mess.admin)
let teks = `══✪〘 *👥 Tag All* 〙✪══
 
 ➲ *Pesan : ${args.join(" ") ? args.join(" ") : 'kosong'}*\n\n`
for (let mem of participants) {
teks += `⭔ @${mem.id.split('@')[0]}\n`
}
neoxy.sendMessage(m.chat, { text: teks, mentions: participants.map(a => a.id) }, { quoted: m })
}
addCmd(command.slice(1), 1, commund)
break
case 'hidetag': {
if (isBan) return ads(mess.ban)
if (!m.isGroup) return ads(mess.group)
if (!isAdmins && !isCreator) return ads(mess.admin)
neoxy.sendMessage(m.chat, { text : args.join(" ") ? args.join(" ") : '' , mentions: participants.map(a => a.id)}, { quoted: m })
}
addCmd(command.slice(1), 1, commund)
break
case 'linkgrup': case 'linkgroup': case 'linkgc': {
if (!m.isGroup) return ads(mess.group)
let response = await neoxy.groupInviteCode(m.chat)
neoxy.sendText(m.chat, `https://chat.whatsapp.com/${response}\n\nLink Group : ${groupMetadata.subject}`, m, { detectLink: true })
}
break
case 'revoke': {
if (isBan) return ads(mess.ban)
if (!m.isGroup) return ads(mess.group)
if (!isBotAdmins) return ads(mess.botAdmin)
if (!isAdmins && !isCreator) return ads(mess.admin)
neoxy.groupRevokeInvite(m.chat)
}
addCmd(command.slice(1), 1, commund)
break
case 'ephemeral': {
if (isBan) return ads(mess.ban)
if (!m.isGroup) return ads(mess.group)
if (!isBotAdmins) return ads(mess.botAdmin)
if (!isAdmins && !isCreator) return ads(mess.admin)
if (!args[0]) return ads('Masukkan value enable/disable')
if (args[0] === 'enable') {
await neoxy.sendMessage(m.chat, { disappearingMessagesInChat: WA_DEFAULT_EPHEMERAL }).then((res) => ads(jsonformat(res))).catch((err) => ads(jsonformat(err)))
} else if (args[0] === 'disable') {
await neoxy.sendMessage(m.chat, { disappearingMessagesInChat: false }).then((res) => ads(jsonformat(res))).catch((err) => ads(jsonformat(err)))
}
}
addCmd(command.slice(1), 1, commund)
break
case 'editinfo': {
if (isBan) return ads(mess.ban)
if (!m.isGroup) return ads(mess.group)
if (!isBotAdmins) return ads(mess.botAdmin)
if (!isAdmins && !isCreator) return ads(mess.admin)
if (args[0] === 'open'){
await neoxy.groupSettingUpdate(m.chat, 'unlocked').then((res) => ads(`Sukses Membuka Edit Info Group`)).catch((err) => ads(jsonformat(err)))
} else if (args[0] === 'close'){
await neoxy.groupSettingUpdate(m.chat, 'locked').then((res) => ads(`Sukses Menutup Edit Info Group`)).catch((err) => ads(jsonformat(err)))
} else {
let buttons = [
{ buttonid: '##editinfo open', buttonText: { displayText: 'Open' }, type: 1 },
{ buttonid: '##editinfo close', buttonText: { displayText: 'Close' }, type: 1 }
]
let buttonMessage = {
image: log0,
jpegThumbnail: thum,
caption: `*「 NEOXY ~ MD」*\n\nChange Info, Select Open Or Close`,
footer: "© Created By Lexxy Official",
buttons: buttons,
headerType: 4
}
neoxy.sendMessage(m.chat, buttonMessage, { quoted: m })
}
}
addCmd(command.slice(1), 1, commund)
break
case 'group': case 'grup': {
if (isBan) return ads(mess.ban)
if (!m.isGroup) return ads(mess.group)
if (!isBotAdmins) return ads(mess.botAdmin)
if (!isAdmins && !isCreator) return ads(mess.admin)
if (args[0] === 'close'){
await neoxy.groupSettingUpdate(m.chat, 'announcement').then((res) => ads(`Sukses Menutup Group`)).catch((err) => ads(jsonformat(err)))
} else if (args[0] === 'open'){
await neoxy.groupSettingUpdate(m.chat, 'not_announcement').then((res) => ads(`Sukses Membuka Group`)).catch((err) => ads(jsonformat(err)))
} else {
let buttons = [
{ buttonid: '##group open', buttonText: { displayText: 'Open' }, type: 1 },
{ buttonid: '##group close', buttonText: { displayText: 'Close' }, type: 1 }
]
let buttonMessage = {
image: log0,
jpegThumbnail: thum,
caption: `*「 NEOXY ~ MD」*\n\nChange Group Setting, Select Open Or Close`,
footer: "© Created By Lexxy Official",
buttons: buttons,
headerType: 4
}
neoxy.sendMessage(m.chat, buttonMessage, { quoted: m })
}
}
addCmd(command.slice(1), 1, commund)
break
case 'promote': {
if (isBan) return ads(mess.ban)
if (!m.isGroup) return ads(mess.group)
if (!isBotAdmins) return ads(mess.botAdmin)
if (!isAdmins && !isCreator) return ads(mess.admin)
let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
await neoxy.groupParticipantsUpdate(m.chat, [users], 'promote').then((res) => ads(jsonformat(res))).catch((err) => ads(jsonformat(err)))
}
addCmd(command.slice(1), 1, commund)
break
case 'demote': {
if (isBan) return ads(mess.ban)
if (!m.isGroup) return ads(mess.group)
if (!isBotAdmins) return ads(mess.botAdmin)
if (!isAdmins && !isCreator) return ads(mess.admin)
let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
await neoxy.groupParticipantsUpdate(m.chat, [users], 'demote').then((res) => ads(jsonformat(res))).catch((err) => ads(jsonformat(err)))
}
addCmd(command.slice(1), 1, commund)
break
case 'kick': {
if (isBan) return ads(mess.ban)
if (!m.isGroup) return ads(mess.group)
if (!isBotAdmins) return ads(mess.botAdmin)
if (!isAdmins && !isCreator) return ads(mess.admin)
let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
await neoxy.groupParticipantsUpdate(m.chat, [users], 'remove').then((res) => ads(jsonformat(res))).catch((err) => ads(jsonformat(err)))
}
addCmd(command.slice(1), 1, commund)
break
case 'add': {
if (isBan) return ads(mess.ban)
if (!m.isGroup) return ads(mess.group)
if (!isBotAdmins) return ads(mess.botAdmin)
if (!isAdmins && !isCreator) return ads(mess.admin)
let users = m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
await neoxy.groupParticipantsUpdate(m.chat, [users], 'add').then((res) => ads(jsonformat(res))).catch((err) => ads(jsonformat(err)))
}
addCmd(command.slice(1), 1, commund)
break
case 'bcgc': case 'bcgroup': {
if (isBan) return ads(mess.ban)
if (!isCreator) return ads(mess.owner)
if (!args.join(" ")) return ads(`Text mana?\n\nExample : ${prefix + command} ZackMans Official`)
let getGroups = await neoxy.groupFetchAllParticipating()
let groups = Object.entries(getGroups).slice(0).map(entry => entry[1])
let anu = groups.map(v => v.id)
ads(`Mengirim Broadcast Ke ${anu.length} Group Chat, Waktu Selesai ${anu.length * 1.5} detik`)
for (let i of anu) {
await sleep(1500)
let btn = [{
urlButton: {
displayText: 'Source Code',
url: 'https://github.com/Lexxy24/'
}
}, {
urlButton: {
displayText: 'Group Whatsapp',
url: linkgrupss
}
}, {
quickReplyButton: {
displayText: 'Status Bot',
id: '#ping'
}
}, {
quickReplyButton: {
displayText: 'Contact Owner',
id: '#owner'
}  
}, {
quickReplyButton: {
displayText: 'Script',
id: '#sc'
}
}]
let txt = `*「 Broadcast」*\n\n${text}`
neoxy.send5ButImg(i, txt, "© Created By Lexxy Official", log0, btn, thum)
}
ads(`Sukses Mengirim Broadcast Ke ${anu.length} Group`)
}
addCmd(command.slice(1), 1, commund)
break
case 'bc': case 'broadcast': case 'bcall': {
if (isBan) return ads(mess.ban)
if (!isCreator) return ads(mess.owner)
if (!args.join(" ")) return ads(`Text mana?\n\nExample : ${prefix + command} ZackMans Official`)
let anu = await store.chats.all().map(v => v.id)
ads(`Mengirim Broadcast Ke ${anu.length} Chat\nWaktu Selesai ${anu.length * 1.5} detik`)
for (let yoi of anu) {
await sleep(1500)
let btn = [{
urlButton: {
displayText: 'Source Code',
url: 'https://github.com/Lexxy24'
}
}, {
urlButton: {
displayText: 'Group Whatsapp',
url: linkgrupss
}
}, {
quickReplyButton: {
displayText: 'Status Bot',
id: '#ping'
}
}, {
quickReplyButton: {
displayText: 'Contact Owner',
id: '#owner'
}  
}, {
quickReplyButton: {
displayText: 'Script',
id: '#sc'
}
}]
let txt = `*「 Broadcast」*\n\n${text}`
neoxy.send5ButImg(yoi, txt, "© Created By Lexxy Official", log0, btn, thum)
}
ads('Sukses Broadcast')
}
addCmd(command.slice(1), 1, commund)
break
case 'sc': case 'script': case 'donate': case 'donasi': case 'cekupdate': case 'updatebot': case 'cekbot': case 'sourcecode': {
teks = `「 *${global.packname}* 」\n\n*Source Code* :\nhttps://github.com/Lexxy24/Neoxy-Base\nScript NeoxyBot.v1 :\nhttps://youtu.be/Pxman4zgIC4\n`
teks += `Donasi Bot, Agar Bot Selalu Update Dan Online 24 Jam, Terima Kasih`
let buttons = [
{buttonId: `${prefix}menu`, buttonText: {displayText: 'Menu'}, type: 1}
]
let buttonMessage = {
image: thum,
jpegThumbnail: log0,
caption: teks,
footer: "©NEOXY",
buttons: buttons,
headerType: 4,
contextInfo:{externalAdReply:{
title:"NEOXY ~ MD Qris ( Donate )",
body: "©NEOXY", 
thumbnail: fs.readFileSync("plugins/media/image/thumb.jpg"),
mediaType:1,
mediaUrl: 'https://telegra.ph/file/45632b48d3c2476d1ff8a.jpg',
sourceUrl: "https://telegra.ph/file/45632b48d3c2476d1ff8a.jpg"
}}
}
neoxy.sendMessage(m.chat, buttonMessage, { quoted: m })
}
addCmd(command.slice(1), 1, commund)
break
case 'inspect': {
if (!args[0]) return ads("Linknya?")
let linkRegex = args.join(" ")
let coded = linkRegex.split("https://chat.whatsapp.com/")[1]
if (!coded) return ads("Link Invalid")
neoxy.query({
tag: "iq",
attrs: {
type: "get",
xmlns: "w:g2",
to: "@g.us"
},
content: [{ tag: "invite", attrs: { code: coded } }]
}).then(async(res) => { 
tekse = `     「 Group Link Inspector 」
▸ ID : ${res.content[0].attrs.id ? res.content[0].attrs.id : "undefined"}
▸ Subject : ${res.content[0].attrs.subject ? res.content[0].attrs.subject : "undefined"}
▸ Subject update by : ${res.content[0].attrs.s_o.split("@")[0] ? "@" + res.content[0].attrs.s_o.split("@")[0] : "undefined"}
▸ Subject update at : ${res.content[0].attrs.s_t ? moment(res.content[0].attrs.s_t *1000).tz("Asia/Jakarta").format("DD-MM-YYYY, HH:mm:ss") : "undefined"}
▸ Create by : ${res.content[0].attrs.creator ? "@" + res.content[0].attrs.creator.split("@")[0] : "undefined"}
▸ Create at : ${res.content[0].attrs.creation ? moment(res.content[0].attrs.creation * 1000).tz("Asia/Jakarta").format("DD-MM-YYYY, HH:mm:ss") : "undefined"}
▸ Total Members : ${res.content[0].attrs.size ? res.content[0].attrs.size : "undefined"} Members
▸ Desc update by : ${res.content[0].content[0].attrs.participant ? "@" + res.content[0].content[0].attrs.participant.split("@")[0] : "undefined"}
▸ Desc update at : ${res.content[0].content[0].attrs.t ? moment(res.content[0].content[0].attrs.t * 1000).tz("Asia/Jakarta").format("DD-MM-YYYY, HH:mm:ss") : "undefined"}
▸ Desc id : ${res.content[0].content[0].attrs.id ? res.content[0].content[0].attrs.id : "undefined"}
▸ Description : ${res.content[0].content[0].content[0].content ? res.content[0].content[0].content[0].content.toString() : "No Description"}
`
try {
pp = await neoxy.profilePictureUrl(res.content[0].attrs.id + "@g.us", "image")
} catch {
pp = "https://tse2.mm.bing.net/th?id=OIP.n1C1oxOvYLLyDIavrBFoNQHaHa&pid=Api&P=0&w=153&h=153"
}
neoxy.sendFile(m.chat, pp, "", m, { caption: tekse, mentions: await neoxy.parseMention(tekse) })
})
}
addCmd(command.slice(1), 1, commund)
break
case 'join': {
if (isBan) return ads(mess.ban)
if (!args[0]) return ads("Linknya mana kak?")
vdd = args[0]
let vcc = vdd.split("https://chat.whatsapp.com/")[1]
if (!vcc) return ads("Link invalid!")
if (isCreator) {
await neoxy.groupAcceptInvite(vcc).then(async(res) => ads(jsonformat(res))).catch(_ => _)
ads("Succes")
} else {
neoxy.query({
tag: "iq",
attrs: {
type: "get",
xmlns: "w:g2",
to: "@g.us"
},
content: [{ tag: "invite", attrs: { code: vcc } }]
}).then(async(res) => {
sizny = res.content[0].attrs.size
if (sizny < 50) {
teks = `Maaf anggota group anda kurang dari 50, minimal agar bot join harus mempunyai lebih dari 50 anggota`
sendOrder(m.chat, teks, "667140254502463", fs.readFileSync('./plugins/media/image/thumb.jpg'), 2022, "NEOXY~MD", "6289501060783@s.whatsapp.net", "AR6NCY8euY5cbS8Ybg5Ca55R8HFSuLO3qZqrIYCT7hQp0g==", "99999999999999999999")
} else if (sizny > 50) {
await neoxy.groupAcceptInvite(vcc).then(async(res) => ads(jsonformat(res))).catch(_ => _)
ads("Succes")
} else {
ads("Error")
}
}).catch(_ => _)
}
}
addCmd(command.slice(1), 1, commund)
break
case 'bass': case 'blown': case 'deep': case 'earrape': case 'fast': case 'fat': case 'nightcore': case 'reverse': case 'robot': case 'slow': case 'smooth': case 'tupai':
                try {
                let set
                if (/bass/.test(command)) set = '-af equalizer=f=54:width_type=o:width=2:g=20'
                if (/blown/.test(command)) set = '-af acrusher=.1:1:64:0:log'
                if (/deep/.test(command)) set = '-af atempo=4/4,asetrate=44500*2/3'
                if (/earrape/.test(command)) set = '-af volume=12'
                if (/fast/.test(command)) set = '-filter:a "atempo=1.63,asetrate=44100"'
                if (/fat/.test(command)) set = '-filter:a "atempo=1.6,asetrate=22100"'
                if (/nightcore/.test(command)) set = '-filter:a atempo=1.06,asetrate=44100*1.25'
                if (/reverse/.test(command)) set = '-filter_complex "areverse"'
                if (/robot/.test(command)) set = '-filter_complex "afftfilt=real=\'hypot(re,im)*sin(0)\':imag=\'hypot(re,im)*cos(0)\':win_size=512:overlap=0.75"'
                if (/slow/.test(command)) set = '-filter:a "atempo=0.7,asetrate=44100"'
                if (/smooth/.test(command)) set = '-filter:v "minterpolate=\'mi_mode=mci:mc_mode=aobmc:vsbmc=1:fps=120\'"'
                if (/tupai/.test(command)) set = '-filter:a "atempo=0.5,asetrate=65100"'
                if (/audio/.test(mime)) {
                ads(mess.wait)
                let media = await neoxy.downloadAndSaveMediaMessage(quoted)
                let ran = getRandom('.mp3')
                exec(`ffmpeg -i ${media} ${set} ${ran}`, (err, stderr, stdout) => {
                fs.unlinkSync(media)
                if (err) return ads(err)
                let buff = fs.readFileSync(ran)
                neoxy.sendMessage(m.chat, { audio: buff, mimetype: 'audio/mpeg' }, { quoted : m })
                fs.unlinkSync(ran)
                })
                } else ads(`Balas audio yang ingin diubah dengan caption *${prefix + command}*`)
                } catch (e) {
                ads(e)
                }
                addCmd(command.slice(1), 1, commund)
break
case 'nulis': {
if (isBan) return ads(mess.ban)
if (args.length < 1) return ads(`Example :\n${prefix}nulis MyMainas|91|#ff020a|Manusia terganteng adalah salman alfarizi`)
const nls = args.join(" ")
const nams = "Nama : " + nls.split("|")[0];
const kels = "Kelas : " + nls.split("|")[1];
const menlise = nls.split("|")[3];
const codewarn = nls.split("|")[2];
await ads('Sedang menulis')
const jangkale = menlise.replace(/(\S+\s*){1,10}/g, '$&\n')
const jangbare = jangkale.split('\n').slice(0, 30).join('\n')
const jangnam = nams.replace(/(\S+\s*){1,10}/g, '$&\n')
const jangkel = kels.replace(/(\S+\s*){1,10}/g, '$&\n')
if (kels.length > 12) return ads("Jumlah teks kelas maximal 4")
if (nams.length > 34) return ads("Jumlah teks nama maximal 27")
if (codewarn.length > 7) return ads("Jumlah teks warna maximal 7")
console.log('「 MENULIS 」Sedang dalam prosses')
spawn('convert', [
'./media/image/magernulis.jpg',
'-fill',
codewarn,
'-font',
'./media/font/nulis.ttf',
'-size',
'1024x784',
'-pointsize',
'20',
'-interline-spacing',
'1',
'-annotate',
'+806+78',
janghar,
'-size',
'1024x784',
'-pointsize',
'18',
'-interline-spacing',
'1',
'-annotate',
'+806+102',
jangwak,
'-size',
'1024x784',
'-pointsize',
'21',
'-interline-spacing',
'1',
'-annotate',
'+285+90',
jangnam,
'-size',
'1024x784',
'-pointsize',
'21',
'-interline-spacing',
'1',
'-annotate',
'+285+110',
jangkel,
'-size',
'1024x784',
'-pointsize',
'20',
'-interline-spacing',
'-7.5',
'-annotate',
'+344+146',
jangbare,
'./storage/hasilnulis.jpg'
])
.on('error', () => ads('Error') )
.on('exit', () => {
neoxy.sendMessage(from, {image:fs.readFileSync('./plugins/storage/hasilnulis.jpg'), caption:'Succes'}, {quoted:m}).catch(() => ads('```「 GAGAL 」Terjadi kesalahan dalam mengirim file```'))
})
exec(`npm i marker`)
}
addCmd(command.slice(1), 1, commund)
break
case 'kalkulator': case 'kal': {
if (isBan) return ads(mess.ban)
if (args.length < 1) return ads(`*Example :*\n${prefix}kalkulator 2 * 5\n\n*List Bilangan :*\n•> Kali : *\n•> Bagi : /\n•> Tambah : +\n•> Kurang : -`)
let qsd = args.join(" ")
if (typeof mathjs.evaluate(qsd) !== 'number') {
ads('Error')
} else {
ads(`\`\`\`「 Kalkulator 」\`\`\`\n\n*•> Hitung :* ${qsd}\n*•> Hasil :* ${mathjs.evaluate(qsd.replace(/×/g, "*").replace(/x/g, "*").replace(/÷/g, "/"))}`)
}
}
addCmd(command.slice(1), 1, commund)
break
case 'public': {
if (isBan) return ads(mess.ban)
if (!isCreator) return ads(mess.owner)
neoxy.public = true
ads('Sukse Change To Public Usage')
neoxy.setStatus(`Mode : Public`)
}
addCmd(command.slice(1), 1, commund)
break
case 'self': {
if (isBan) return ads(mess.ban)
if (!isCreator) return ads(mess.owner)
neoxy.public = false
ads('Sukses Change To Self Usage')
neoxy.setStatus(`Mode : Self`)
}
addCmd(command.slice(1), 1, commund)
break
case 'ping': case 'speed': case 'tes':
let timestamp = speed()
let latensi = speed() - timestamp
m.reply(`*Status Bot Online*\nSpeed : ${latensi.toFixed(4)} _Second_`)
break
case 'runtime':
m.reply(`*Runtime : ${runtime(process.uptime())}*`)
break
case 'ping': case 'botstatus': case 'statusbot': {
if (isBan) return ads(mess.ban)
const used = process.memoryUsage()
const cpus = os.cpus().map(cpu => {
cpu.total = Object.keys(cpu.times).reduce((last, type) => last + cpu.times[type], 0)
return cpu
})
const cpu = cpus.reduce((last, cpu, _, { length }) => {
last.total += cpu.total
last.speed += cpu.speed / length
last.times.user += cpu.times.user
last.times.nice += cpu.times.nice
last.times.sys += cpu.times.sys
last.times.idle += cpu.times.idle
last.times.irq += cpu.times.irq
return last
}, {
speed: 0,
total: 0,
times: {
user: 0,
nice: 0,
sys: 0,
idle: 0,
irq: 0
}
})
let timestamp = speed()
let latensi = speed() - timestamp
neww = performance.now()
oldd = performance.now()
respon = `
Kecepatan Respon ${latensi.toFixed(4)} _Second_ \n ${oldd - neww} _miliseconds_\n\nRuntime : ${runtime(process.uptime())}

💻 Info Server
RAM: ${formatp(os.totalmem() - os.freemem())} / ${formatp(os.totalmem())}

_NodeJS Memory Usaage_
${Object.keys(used).map((key, _, arr) => `${key.padEnd(Math.max(...arr.map(v=>v.length)),' ')}: ${formatp(used[key])}`).join('\n')}

${cpus[0] ? `_Total CPU Usage_
${cpus[0].model.trim()} (${cpu.speed} MHZ)\n${Object.keys(cpu.times).map(type => `- *${(type + '*').padEnd(6)}: ${(100 * cpu.times[type] / cpu.total).toFixed(2)}%`).join('\n')}
_CPU Core(s) Usage (${cpus.length} Core CPU)_
${cpus.map((cpu, i) => `${i + 1}. ${cpu.model.trim()} (${cpu.speed} MHZ)\n${Object.keys(cpu.times).map(type => `- *${(type + '*').padEnd(6)}: ${(100 * cpu.times[type] / cpu.total).toFixed(2)}%`).join('\n')}`).join('\n\n')}` : ''}
`.trim()
ads(respon)
}
addCmd(command.slice(1), 1, commund)
break
case 'toimage': case 'toimg': {
if (isBan) return ads(mess.ban)
if (!m.quoted) return ads('Reply Image')
if (!/webp/.test(mime)) return ads(`balas stiker dengan caption *${prefix + command}*`)
ads(mess.wait)
let media = await neoxy.downloadAndSaveMediaMessage(quoted)
let ran = await getRandom('.png')
exec(`ffmpeg -i ${media} ${ran}`, (err) => {
fs.unlinkSync(media)
if (err) throw err
let buffer = fs.readFileSync(ran)
neoxy.sendMessage(m.chat, { image: buffer }, { quoted: m })
fs.unlinkSync(ran)
})
}
addCmd(command.slice(1), 1, commund)
break
case 'tomp4': case 'tovideo': {
if (isBan) return ads(mess.ban)
if (!m.quoted) return ads('Reply Image')
if (!/webp/.test(mime)) return ads(`balas stiker dengan caption *${prefix + command}*`)
ads(mess.wait)
let { webp2mp4File } = require('./message/uploader')
let media = await neoxy.downloadAndSaveMediaMessage(quoted)
let webpToMp4 = await webp2mp4File(media)
await neoxy.sendMessage(m.chat, { video: { url: webpToMp4.result, caption: 'Convert Webp To Video' } }, { quoted: m })
await fs.unlinkSync(media)
}
addCmd(command.slice(1), 1, commund)
break
case 'toaud': case 'toaudio': {
if (isBan) return ads(mess.ban)
if (!/video/.test(mime) && !/audio/.test(mime)) return ads(`Kirim/Reply Video/Audio Yang Ingin Dijadikan Audio Dengan Caption ${prefix + command}`)
if (!m.quoted) return ads(`Kirim/Reply Video/Audio Yang Ingin Dijadikan Audio Dengan Caption ${prefix + command}`)
ads(mess.wait)
let media = await quoted.download()
let { toAudio } = require('./message/converter')
let audio = await toAudio(media, 'mp4')
neoxy.sendMessage(m.chat, {audio: audio, mimetype: 'audio/mpeg'}, { quoted : m })
}
addCmd(command.slice(1), 1, commund)
break
case 'tomp3': {
if (isBan) return ads(mess.ban)
if (/document/.test(mime)) return ads(`Kirim/Reply Video/Audio Yang Ingin Dijadikan MP3 Dengan Caption ${prefix + command}`)
if (!/video/.test(mime) && !/audio/.test(mime)) return ads(`Kirim/Reply Video/Audio Yang Ingin Dijadikan MP3 Dengan Caption ${prefix + command}`)
if (!m.quoted) return ads(`Kirim/Reply Video/Audio Yang Ingin Dijadikan MP3 Dengan Caption ${prefix + command}`)
ads(mess.wait)
let media = await quoted.download()
let { toAudio } = require('./message/converter')
let audio = await toAudio(media, 'mp4')
neoxy.sendMessage(m.chat, {document: audio, mimetype: 'audio/mpeg', fileName: `Convert By ${neoxy.user.name} (${m.id}).mp3`}, { quoted : m })
}
addCmd(command.slice(1), 1, commund)
break
case 'tovn': case 'toptt': {
if (isBan) return ads(mess.ban)
if (!/video/.test(mime) && !/audio/.test(mime)) return ads(`Reply Video/Audio Yang Ingin Dijadikan VN Dengan Caption ${prefix + command}`)
if (!m.quoted) return ads(`Reply Video/Audio Yang Ingin Dijadikan VN Dengan Caption ${prefix + command}`)
ads(mess.wait)
let media = await quoted.download()
let { toPTT } = require('./message/converter')
let audio = await toPTT(media, 'mp4')
neoxy.sendMessage(m.chat, {audio: audio, mimetype:'audio/mpeg', ptt:true }, {quoted:m})
}
addCmd(command.slice(1), 1, commund)
break
case 'togif': {
if (isBan) return ads(mess.ban)
if (!m.quoted) return ads('Reply Image')
if (!/webp/.test(mime)) return ads(`balas stiker dengan caption *${prefix + command}*`)
ads(mess.wait)
let { webp2mp4File } = require('./message/uploader')
let media = await neoxy.downloadAndSaveMediaMessage(quoted)
let webpToMp4 = await webp2mp4File(media)
await neoxy.sendMessage(m.chat, { video: { url: webpToMp4.result, caption: 'Convert Webp To Video' }, gifPlayback: true }, { quoted: m })
await fs.unlinkSync(media)
}
addCmd(command.slice(1), 1, commund)
break
case 'tourl': {
if (isBan) return ads(mess.ban)
ads(mess.wait)
let { UploadFileUgu, webp2mp4File, TelegraPh } = require('./message/uploader')
let media = await neoxy.downloadAndSaveMediaMessage(quoted)
if (/image/.test(mime)) {
let anu = await TelegraPh(media)
ads(util.format(anu))
} else if (!/image/.test(mime)) {
let anu = await TelegraPh(media)
ads(util.format(anu))
}
await fs.unlinkSync(media)
}
addCmd(command.slice(1), 1, commund)
break
case 'q': case 'quoted': {
if (isBan) return ads(mess.ban)
if (!m.quoted) return ads('Reply Pesannya!!')
let wokwol = await neoxy.serializeM(await m.getQuotedObj())
if (!wokwol.quoted) return ads('Pesan Yang anda reply tidak mengandung reply')
await wokwol.quoted.copyNForward(m.chat, true)
}
addCmd(command.slice(1), 1, commund)
break
case 'getname': {
if (isBan) return ads(mess.ban)
if (qtod === "true") {
namenye = await neoxy.getName(m.quoted.sender)
ads(namenye)
} else if (qtod === "false") {
neoxy.sendMessage(from, {text:"Reply orangnya"}, {quoted:m})
}
}
addCmd(command.slice(1), 1, commund)
break
case 'getpic': {
if (isBan) return ads(mess.ban)
if (qtod === "true") {
try {
pporg = await neoxy.profilePictureUrl(m.quoted.sender, 'image')
} catch {
pporg = 'https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg'
}
neoxy.sendMessage(m.chat, { image : { url : pporg }, caption:`Done` }, { quoted : m })
} else if (qtod === "false") {
try {
pporgs = await neoxy.profilePictureUrl(from, 'image')
} catch {
pporgs = 'https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg'
}
neoxy.sendMessage(m.chat, { image : { url : pporgs }, caption:`Done` }, { quoted : m })
}
}
addCmd(command.slice(1), 1, commund)
break
case 'owner': case 'creator': {
neoxy.sendContact(m.chat, global.owner, m)
}
addCmd(command.slice(1), 1, commund)
break
case 'translate': case 'terjemahan': {
if (isBan) return ads(mess.ban)
if (!args.join(" ")) return ads("Textnya?")
tes = await fetchJson (`https://megayaa.herokuapp.com/api/translate?to=id&kata=${args.join(" ")}`)
Infoo = tes.info
Detek = tes.translate
ads(`🌐Translate : ${Detek}\n📘Hasil : ${Infoo}`)
}
addCmd(command.slice(1), 1, commund)
break
case 'gimage': case 'gig': {
if (isBan) return ads(mess.ban)
if (!args[0]) return ads("Mau cari gambar apa kak?")
let gis = require('g-i-s')
gis(args.join(" "), async (error, result) => {
n = result
images = n[Math.floor(Math.random() * n.length)].url
let buttons = [
{buttonId: `${prefix}gimage ${args.join(" ")}`, buttonText: {displayText: 'Next Image'}, type: 1}
]
let buttonMessage = {
image: { url: images },
caption: `*| GOOGLE IMAGE |*

🤠 Query : ${text}
🔗 Media Url : ${images}`,
footer: "© Created By Lexxy Official",
buttons: buttons,
headerType: 4,
contextInfo:{externalAdReply:{
title:"NEOXYBOTZ - By NEOXY",
body:"© Created By Lexxy Official",
thumbnail: log0,
mediaType:2,
mediaUrl: "https://youtu.be/TmX43Io_v8s",
sourceUrl: "https://youtu.be/TmX43Io_v8s"
}}
}
neoxy.sendMessage(m.chat, buttonMessage, { quoted: m })
})
}
addCmd(command.slice(1), 1, commund)
break
case 'google': {
if (isBan) return ads(mess.ban)
if (!args[0]) return ads(`Example: ${prefix + command} <query>\nUses : ${prefix + command} apa arti cinta`)
let google = require('google-it')
google({'query': args.join(" ")}).then(res => {
let teks = `Google Search From : ${text}\n\n`
for (let g of res) {
teks += `⭔ *Title* : ${g.title}\n`
teks += `⭔ *Description* : ${g.snippet}\n`
teks += `⭔ *Link* : ${g.link}\n\n────────────────────────\n\n`
} 
ads(teks)
})
}
addCmd(command.slice(1), 1, commund)
break
case 'pinterest': case 'image': {
if (isBan) return ads(mess.ban)
if (!args.join(" ")) return ads("Mau cari gambar apa kak?")
try {
hx.pinterest(args.join(" ")).then(async(res) => {
imgnyee = res[Math.floor(Math.random() * res.length)]
let buttons = [
{buttonId: `${prefix}pinterest ${args.join(" ")}`, buttonText: {displayText: 'Next Image'}, type: 1}
]
let buttonMessage = {
image: { url: imgnyee },
caption:  '⭔ Title : ' + args.join(" ") + '\n⭔ Media Url : '+imgnyee,
footer: "© Created By Lexxy Official",
buttons: buttons,
headerType: 4,
contextInfo:{externalAdReply:{
title:"NEOXYBOTZ - By NEOXY",
body:"© Created By Lexxy Official",
thumbnail: log0,
mediaType:2,
mediaUrl: "https://youtu.be/TmX43Io_v8s",
sourceUrl: "https://youtu.be/TmX43Io_v8s"
}}
}
neoxy.sendMessage(m.chat, buttonMessage, { quoted: m })
}).catch(_ => _)
} catch {
ads("Error")
}
}
addCmd(command.slice(1), 1, commund)
break
case 'igstory': case 'instagramstory': {
if (isBan) return ads(mess.ban)
if (!args[0]) return ads(`Example :\n${prefix + command} NEOXY.xyz`)
try {
hx.igstory(args[0]).then(async(resed) => {
ini_anu = []
anu_list = []
textbv = `*| INSTAGRAM STORY |*\n\n⭔ Username : ${resed.user.username ? resed.user.name : "undefined"}\n⭔ Followers : ${resed.user.followers}`
urut = 1
for (let i = 0; i < resed.medias.length; i++) {
ini_anu.push({
 "type": resed.medias[i].fileType,
 "url": resed.medias[i].url
})
}
ilod = 1
for (let i of ini_anu) {
anu_list.push({buttonId: `${prefix}ig ${i.type} ${i.url}`, buttonText: {displayText: `Media ${ilod++}`}, type: 1})
}
textbv += `\n\n_Pilih media dibawah untuk mendownload_`
let buttons = anu_list
let buttonMessage = {
image:log0,
jpegThumbnail:thum,
caption: textbv,
footer: "© Created By Lexxy Official",
buttons: buttons,
headerType: 4
}
neoxy.sendMessage(from, buttonMessage, {quoted:m})
})
} catch (err) {
ads(String(err))
}
}
addCmd(command.slice(1), 1, commund)
break
case 'igdl': case 'instagram': {
if (isBan) return ads(mess.ban)
if (!args[0]) return ads(`Example :\n${prefix + command} https://www.instagram.com/p/CcvJGuxh9VI/?igshid=YmMyMTA2M2Y=`)
try {
hx.igdl(args[0]).then(async(resed) => {
ini_anu = []
anu_list = []
textbv = `*| INSTAGRAM DOWNLOADER |*\n\n⭔ Username : ${resed.user.username ? resed.user.name : "undefined"}\n⭔ Followers : ${resed.user.followers}`
urut = 1
for (let i = 0; i < resed.medias.length; i++) {
ini_anu.push({
 "type": resed.medias[i].fileType,
 "url": resed.medias[i].url
})
}
ilod = 1
for (let i of ini_anu) {
anu_list.push({buttonId: `${prefix}ig ${i.type} ${i.url}`, buttonText: {displayText: `Media ${ilod++}`}, type: 1})
}
textbv += `\n\n_Pilih media dibawah untuk mendownload_`
let buttons = anu_list
let buttonMessage = {
image:log0,
jpegThumbnail:thum,
caption: textbv,
footer: "© Created By Lexxy Official",
buttons: buttons,
headerType: 4
}
neoxy.sendMessage(from, buttonMessage, {quoted:m})
})
} catch (err) {
ads(String(err))
}
}
addCmd(command.slice(1), 1, commund)
break
case 'ig': {
if (args[0] === "mp4") {
neoxy.sendMessage(from, {video:{url:args[1]}, caption:'Done!', mimetype:'video/mp4'}, {quoted:m})
} else if (args[0] === "jpg") {
neoxy.sendMessage(from, {image:{url:args[1]}, caption:'Done!'}, {quoted:m})
} else {
ads(" Error! ")
}
}
addCmd(command.slice(1), 1, commund)
break
case 'mp4' : {
if (isBan) return ads(mess.ban)
if (!args[0]) return ads("Linknya mana kak?")
try {
neoxy.sendMessage(from, {video:{url:args[0]}, caption:"Succes", contextInfo:{externalAdReply:{
title:"NEOXYBOTZ - By NEOXY",
body:"© Created By Lexxy Official",
thumbnail: log0,
mediaType:2,
mediaUrl: "https://youtu.be/TmX43Io_v8s",
sourceUrl: "https://youtu.be/TmX43Io_v8s"
}}}, {quoted:m})
} catch {
ads("Linknya Error")
}
}
addCmd(command.slice(1), 1, commund)
break
case 'jpeg': {
if (isBan) return ads(mess.ban)
if (!args[0]) return ads("Linknya mana kak?")
try {
neoxy.sendMessage(from, {image:{url:args[0]}, caption:"Succes", contextInfo:{externalAdReply:{
title:"NEOXYBOTZ - By NEOXY",
body:"© Created By Lexxy Official",
thumbnail: log0,
mediaType:2,
mediaUrl: "https://youtu.be/TmX43Io_v8s",
sourceUrl: "https://youtu.be/TmX43Io_v8s"
}}}, {quoted:m})
} catch {
ads("Linknya Error")
}
}
addCmd(command.slice(1), 1, commund)
break
case 'twitter': case 'twdl': case 'twmp4': {
if (isBan) return ads(mess.ban)
if (!args[0]) return ads(`Example :\n${prefix + command} https://twitter.com/cinema21/status/1517754155644821504?t=rUnbyqwh4vAE1QXMXlsVeQ&s=19`)
try {
let lotwit = await aiovideodl(args[0])
teks = `*| TWITTER DOWNLOADER |*

Caption : ${lotwit.title ? lotwit.title : "undefined"}
Type : ${lotwit.medias[1].extension}
Size : ${lotwit.medias[1].formattedSize}
Link : ${lotwit.medias[1].url}

_Pilih kualitas video dibawah dengan cara mengklik tombolnya_`
let buttons = [
{buttonId: `${prefix}twddl ${lotwit.medias[0].url}`, buttonText: {displayText: `Quality ${lotwit.medias[0].quality}`}, type: 1},
{buttonId: `${prefix}twddl ${lotwit.medias[2].url}`, buttonText: {displayText: `Quality ${lotwit.medias[2].quality}`}, type: 1}
]
let buttonMessage = {
video: {url:lotwit.medias[1].url},
caption: teks,
footer: "© Created By Lexxy Official",
buttons: buttons,
headerType: 4,
contextInfo:{externalAdReply:{
title:"NEOXY Official ~ Twitter Downloader",
body:lotwit.title ? lotwit.title : "Twitter Downloader",
thumbnail: log0,
mediaType:1,
mediaUrl: args[0],
sourceUrl: args[0]
}}
}
neoxy.sendMessage(from, buttonMessage, {quoted:m})
} catch {
ads(" Link Error!")
}
}
addCmd(command.slice(1), 1, commund)
break
case 'twddl': {
if (isBan) return ads(mess.ban)
let buttons = [
{buttonId: `${prefix}menu`, buttonText: {displayText: 'Menu'}, type: 1}
]
let buttonMessage = {
video: {url:args[0]},
caption: "Done!",
footer: "© Created By Lexxy Official",
buttons: buttons,
headerType: 4,
contextInfo:{externalAdReply:{
title:"NEOXY Official ~ Twitter Downloader",
body: "Twitter Downloader",
thumbnail: log0,
mediaType:1,
mediaUrl: args[0],
sourceUrl: args[0]
}}
}
neoxy.sendMessage(from, buttonMessage, {quoted:m})
}
addCmd(command.slice(1), 1, commund)
break
case 'facebook': case 'fbdl': case 'fbmp4': case 'fb': {
if (isBan) return ads(mess.ban)
if (!args[0]) return ads(`Example :\n${prefix + command} https://fb.watch/cAX2dep-BZ/`)
try {
let resd = await aiovideodl(args[0])
teks = `*| FACEBOOK DOWNLOADER |*

Type : video/${resd.medias[0].extension}
Quality : ${resd.medias[0].quality}
Size : ${resd.medias[0].formattedSize}

_Untuk kualitas hd anda bisa klik tombol dibawah_`
let buttons = [
{buttonId: `${prefix}fbddl ${resd.medias[1].url}`, buttonText: {displayText: 'QualityHD'}, type: 1}
]
let buttonMessage = {
video: {url:resd.medias[0].url},
caption: teks,
footer: "© Created By Lexxy Official",
buttons: buttons,
headerType: 4,
contextInfo:{externalAdReply:{
title:"NEOXY Official ~ Facebook Downloader",
body:"facebook downloader",
thumbnail: log0,
mediaType:1,
mediaUrl: args[0],
sourceUrl: args[0]
}}
}
neoxy.sendMessage(from, buttonMessage, {quoted:m})
} catch {
ads("Link invalid!")
}
}
addCmd(command.slice(1), 1, commund)
break
case 'fbddl': {
if (isBan) return ads(mess.ban)
let buttons = [
{buttonId: `${prefix}menu`, buttonText: {displayText: 'Menu'}, type: 1}
]
let buttonMessage = {
video: {url:args[0]},
caption: "Done!",
footer: "© Created By Lexxy Official",
buttons: buttons,
headerType: 4,
contextInfo:{externalAdReply:{
title:"NEOXY Official ~ Facebook Downloader",
body: " Facebook Downloader",
thumbnail: log0,
mediaType:1,
mediaUrl: args[0],
sourceUrl: args[0]
}}
}
neoxy.sendMessage(from, buttonMessage, {quoted:m})
}
addCmd(command.slice(1), 1, commund)
break
case 'ttdl': case 'tiktok': case 'ttmp4': case 'ttmp3': case 'tiktoknowm': {
if (isBan) return ads(mess.ban)
if (!isUrl(args[0])) return ads(`Example :\n${prefix + command} <url>\nUses :\n${prefix + command} https://vt.tiktok.com/ZSdDo97dC/`)
let res = await aiovideodl(args[0])
if (isUrl(args[0])) {
texttk = `*| TIKTOK DOWNLOADER |*

Caption : ${res.title}
Size : ${res.medias[1].formattedSize}
Type : ${res.medias[1].extension ? "video/" + res.medias[1].extension : "undefined"}

_Pilih watermak atau audio dan tunggu beberapa saat_`
let buttons = [
{buttonId: `${prefix}ttvd ${args[0]}}`, buttonText: {displayText: '× Watermak'}, type: 1},
{buttonId: `${prefix}ttad ${args[0]}`, buttonText: {displayText: '♫ Audio'}, type: 1}
]
let buttonMessage = {
video: {url:res.medias[1].url},
caption: texttk,
footer: "© Created By Lexxy Official",
buttons: buttons,
headerType: 4,
contextInfo:{externalAdReply:{
title:"NEOXY Official ~ Tiktok Downloader",
body:res.title,
thumbnail: log0,
mediaType:1,
mediaUrl: args[0],
sourceUrl: args[0]
}}
}
neoxy.sendMessage(from, buttonMessage, {quoted:m})
} else {
ads("Link Error!")
}
}
addCmd(command.slice(1), 1, commund)
break
case 'ttad': {
if (isBan) return ads(mess.ban)
let res = await aiovideodl(args[0])
neoxy.sendMessage(from, {audio:{url:res.medias[2].url}, mimetype:"audio/mp4", ptt:true, contextInfo:{externalAdReply:{
title:"NEOXY Official ~ Tiktok Downloader",
body:res.title,
thumbnail: log0,
mediaType:1,
mediaUrl: args[0],
sourceUrl: args[0]
}}}, {quoted:m})
}
addCmd(command.slice(1), 1, commund)
break
case 'ttvd': {
if (isBan) return ads(mess.ban)
let res = await aiovideodl(args[0])
texttk = `*| TIKTOK DOWNLOADER |*

Caption : ${res.title}
Size : ${res.medias[0].formattedSize}
Type : ${res.medias[0].extension ? "video/" + res.medias[0].extension : "undefined"}

_untuk melihat list menu pencet tombol dibawah atau ketik menu_`
let buttons = [
{buttonId: `${prefix}menu`, buttonText: {displayText: 'Menu'}, type: 1}
]
let buttonMessage = {
video: {url:res.medias[0].url},
caption: texttk,
footer: "© Created By Lexxy Official",
buttons: buttons,
headerType: 4,
contextInfo:{externalAdReply:{
title:"NEOXY Official ~ Tiktok Downloader",
body:res.title,
thumbnail: log0,
mediaType:1,
mediaUrl: args[0],
sourceUrl: args[0]
}}
}
neoxy.sendMessage(from, buttonMessage, {quoted:m})
}
addCmd(command.slice(1), 1, commund)
break
case 'play': case 'ytplay': {
                if (!q) m.reply(`Example :\n${prefix + command} dj angel baby`)
                let yts = require("yt-search")
                let search = await yts(text)
                let anu = search.videos[Math.floor(Math.random() * search.videos.length)]
                let buttons = [
                    {buttonId: `ytaudio ${anu.url}`, buttonText: {displayText: '♫ Audio'}, type: 1},
                    {buttonId: `ytvideo ${anu.url}`, buttonText: {displayText: '► Video'}, type: 1}
                ]
                let buttonMessage = {
                    image: { url: anu.thumbnail },
                    caption: `
⭔ Title : ${anu.title}
⭔ Ext : Search
⭔ ID : ${anu.videoId}
⭔ Duration : ${anu.timestamp}
⭔ Viewers : ${anu.views}
⭔ Upload At : ${anu.ago}
⭔ Author : ${anu.author.name}
⭔ Channel : ${anu.author.url}
⭔ Description : ${anu.description}
⭔ Url : ${anu.url}`,
                    footer: creator,
                    buttons: buttons,
                    headerType: 4
                }
             neoxy.sendMessage(m.chat, buttonMessage, { quoted: m })
            }
            break
case 'mediafire':
if (args.length < 1) return m.reply('Link nya? ')
let { mediafireDl } = require('./message/mediafireDl')
if (!args[0].includes('mediafire')) return m.reply(`Link is not valid`)
const teks1 = args.join(' ')
const baby1 = await mediafireDl(teks1)
const result4 = `*DATA DITEMUKAN*	
Judul : ${baby1[0].nama}
 Link : ${baby1[0].link}
 Size : ${baby1[0].size}				
_Mengirim file..._`
m.reply(result4)
neoxy.sendMessage(m.chat, { document : { url : baby1[0].link}, fileName : baby1[0].nama, mimetype: baby1[0].mime }, { quoted : m }) 
break
case 'ytmp3': case 'ytaudio': {
                let { yta } = require('./message/y2mate')
if (args.length < 1) return m.reply(`Example : ${prefix + command} https://youtube.com/watch?v=ag1hfHA967k`)
                let quality = args[1] ? args[1] : '128kbps'
                let media = await yta(text, quality)
                if (media.filesize >= 100000) return m.reply('File Melebihi Batas '+util.format(media))
                neoxy.sendMessage(m.chat, { audio: { url: media.dl_link }, mimetype: 'audio/mpeg', fileName: `${media.title}.mp3` }, { quoted: m })
            }
break
case 'ytmp4': case 'ytvideo':{
let { ytv } = require('./message/y2mate')
if (args.length < 1) return m.reply(`Example : ${prefix + command} https://youtube.com/watch?v=ag1hfHA967k`)
let quality = args[1] ? args[1] : '360p'
let media = await ytv(text, quality)
if (media.filesize >= 100000) return m.reply('File Melebihi Batas '+util.format(media))
neoxy.sendMessage(m.chat, { video: { url: media.dl_link }, mimetype: 'video/mp4', fileName: `${media.title}.mp4`, caption: `> Title : ${media.title}\n> File Size : ${media.filesizeF}\n> Url : ${isUrl(text)}\n> Ext : MP4\n> Resolusi : ${args[1] || '360p'}` }, { quoted: m })
}
break
case 'ytdl': case 'yt': case 'youtube':{
if (isBan) return ads(mess.ban)
if (!args[0]) return ads(mess.linkm)
try {
hx.youtube(args[0]).then(async(res) => {
textyt = `*| YOUTUBE DOWNLOADER |*

⭔ Title : ${res.title}
⭔ Size : ${res.size}
⭔ Quality : ${res.quality}

_Pilih video atau audio dan tunggu beberapa saat_`
let buttons = [
{buttonId: `${prefix}ytvd ${res.link}`, buttonText: {displayText: '► Video'}, type: 1},
{buttonId: `${prefix}ytad ${res.mp3}`, buttonText: {displayText: '♫ Audio'}, type: 1}
]
let buttonMessage = {
image: {url:res.thumb},
caption: textyt,
footer: "© Created By Lexxy Official",
buttons: buttons,
headerType: 4,
contextInfo:{externalAdReply:{
title: res.title,
body: "© Created By Lexxy Official",
thumbnail: {url:res.thumb},
mediaType:2,
mediaUrl: args[0],
sourceUrl: args[0]
}}
}
neoxy.sendMessage(from, buttonMessage, {quoted:m})
}).catch(_ => _)
} catch {
ads("Linknya Error!")
}
}
addCmd(command.slice(1), 1, commund)
break
case 'ytvd': {
if (isBan) return ads(mess.ban)
neoxy.sendMessage(from, {video:{url:args[0]}, mimetype:"video/mp4", caption:"Success", contextInfo:{externalAdReply:{
title:"NEOXYBOTZ - By NEOXY",
body:"© Created By Lexxy Official",
thumbnail: log0,
mediaType:2,
mediaUrl: "https://youtu.be/TmX43Io_v8s",
sourceUrl: "https://youtu.be/TmX43Io_v8s"
}}}, {quoted:m})
}
addCmd(command.slice(1), 1, commund)
break
case 'ytad': {
if (isBan) return ads(mess.ban)
neoxy.sendMessage(from, {audio:{url:args[0]}, mimetype:"audio/mp4", ptt:true, contextInfo:{externalAdReply:{
title:"NEOXYBOTZ - By NEOXY",
body:"© Created By Lexxy Official",
thumbnail: log0,
mediaType:2,
mediaUrl: "https://youtu.be/TmX43Io_v8s",
sourceUrl: "https://youtu.be/TmX43Io_v8s"
}}}, {quoted:m})
}
addCmd(command.slice(1), 1, commund)
break
case 'swm': case 'stickerwm': {
if (isBan) return ads(mess.ban)
if (!args.join(" ")) return ads(`Example :\nswm MyMans APIs | MyMainas`)
const swn = args.join(" ")
const pcknm = swn.split("|")[0];
const atnm = swn.split("|")[1];
if (m.quoted.isAnimated === true) {
neoxy.downloadAndSaveMediaMessage(quoted, "gifee")
neoxy.sendMessage(from, {sticker:fs.readFileSync("gifee.webp")},{quoted:m})
} else if (/image/.test(mime)) {
let media = await quoted.download()
let encmedia = await neoxy.sendImageAsSticker(m.chat, media, m, { packname: pcknm, author: atnm })
await fs.unlinkSync(encmedia)
} else if (/video/.test(mime)) {
if ((quoted.msg || quoted).seconds > 11) return ads('Maksimal 10 detik!')
let media = await quoted.download()
let encmedia = await neoxy.sendVideoAsSticker(m.chat, media, m, { packname: pcknm, author: atnm })
await fs.unlinkSync(encmedia)
} else {
ads(`Kirim Gambar/Video Dengan Caption ${prefix + command}\nDurasi Video 1-9 Detik`)
}
}
addCmd(command.slice(1), 1, commund)
break
case 'sticker': case 's': {
if (isBan) return ads(mess.ban)
if (/image/.test(mime)) {
let media = await quoted.download()
let encmedia = await neoxy.sendImageAsSticker(m.chat, media, m, { packname: global.packname, author: global.author })
await fs.unlinkSync(encmedia)
} else if (/video/.test(mime)) {
if ((quoted.msg || quoted).seconds > 11) return ads('Maksimal 10 detik!')
let media = await quoted.download()
let encmedia = await neoxy.sendVideoAsSticker(m.chat, media, m, { packname: global.packname, author: global.author })
await fs.unlinkSync(encmedia)
} else {
ads(`Kirim Gambar/Video Dengan Caption ${prefix + command}\nDurasi Video 1-9 Detik`)
}
}
addCmd(command.slice(1), 1, commund)
break
// Eval Ada Disini
default:
if (budy.startsWith('=>')) {
if (!isCreator) return ads(mess.owner)
function Return(sul) {
sat = JSON.stringify(sul, null, 2)
bang = util.format(sat)
if (sat == undefined) {
bang = util.format(sul)
}
return ads(bang)
}
try {
ads(util.format(eval(`(async () => { ${budy.slice(3)} })()`)))
} catch (e) {
ads(String(e))
}
}
if (budy.startsWith('>')) {
if (!isCreator) return ads(mess.owner)
try {
let evaled = await eval(budy.slice(2))
if (typeof evaled !== 'string') evaled = require('util').inspect(evaled)
await ads(evaled)
} catch (err) {
ads(String(err))
}
}

if (budy.startsWith('$')) {
if (!isCreator) return ads(mess.owner)
exec(budy.slice(2), (err, stdout) => {
if(err) return neoxy.sendMessage(from, {image:err4r, caption:String(err)}, {quoted:m})
if (stdout) return ads(stdout)
})
}
// Anti Tag ( BY MyMans APIs )
const listTag = ["6289501060783@s.whatsapp.net"]
const partiNum = (m.mtype === 'extendedTextMessage') ? m.message.extendedTextMessage.contextInfo.participant : ''
// Antitag Via ads( BY MyMans APIs )
if (listTag.includes(partiNum)) {
if (antitags === false) return
if (!m.isGroup) return
if (m.key.fromMe) return
sendNye = fs.readFileSync('./plugins/media/sticker/jantag.webp')
neoxy.sendReadReceipt(m.chat, m.sender, [m.key.id])
neoxy.sendMessage(from, {sticker:sendNye, contextInfo:{forwardingScore: 800, isForwarded: true}}, {quoted:m})
}
// Antitag Via Tag ( BY MyMans APIs )
if (budy.includes("@6289501060783")) {
if (antitags === false) return
if (!m.isGroup) return
if (m.key.fromMe) return
sendNye = fs.readFileSync('./plugins/media/sticker/jantag.webp')
neoxy.sendReadReceipt(m.chat, m.sender, [m.key.id])
neoxy.sendMessage(from, {sticker:sendNye, contextInfo:{forwardingScore: 800, isForwarded: true}}, {quoted:m})
}
if (isCmd && budy.toLowerCase() != undefined) {
if (m.chat.endsWith('broadcast')) return
if (m.isBaileys) return
let msgs = global.db.database
if (!(budy.toLowerCase() in msgs)) return
neoxy.copyNForward(m.chat, msgs[budy.toLowerCase()], true)
}
}
} catch (err) {
neoxy.sendMessage("6289501060783@s.whatsapp.net", util.format(err), {quoted:m})
console.log(err)
}
}


let file = require.resolve(__filename)
fs.watchFile(file, () => {
fs.unwatchFile(file)
console.log(chalk.redBright(`Update ${__filename}`))
delete require.cache[file]
require(file)
})