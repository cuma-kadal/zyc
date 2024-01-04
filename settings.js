const fs = require("fs")
const chalk = require("chalk")
/*============== SOCIAL ==============*/
global.sig = 'https://instagram.com/zzyko_04'
global.sgh = 'https://github.com/ZykoMD'
global.sgc = 'https://chat.whatsapp.com/HQy6bLpnrYs2OnPY3r6Bq4'
global.sdc = 'https://www.discord.com'
global.snh = 'https://youtu.be/0I8MBnCuuzs'
global.sfb = 'https://www.facebook.com/ZykoBotz'
global.syt = 'https://youtube.com/@zykobotz'
/*============== NOMOR ==============*/
global.owner = ['62'] //isi nomer owner nya 
global.nomerown = '62'
global.premium = ['62']
global.nomorbot = ""
global.develover = "62@s.whatsapp.net";
/*============== OWNER X NAMABOT ==============*/
global.namaowner = "ZYKO MD"
global.namebot = "Zykobotz"
global.namabot = "zykobotz"
/*============== PAYMENT ==============*/
global.pdana = '0838-5668-7521'
global.povo = '0838-5668-7521'
global.pgopay = '0838-5668-7521'
global.plinkaja = '0838-5668-7521'
global.ppulsa = '0838-5668-7521' 
global.ppulsa2 = '0852-1264-9276'
/*============== STICKER ==============*/
global.packname = ""
global.author = "Sticker By zykomd"
/*============== HIASAN =============*/
global.htki = '––––––『' // Hiasan Titile (KIRI)
global.htka = '』––––––' // Hiasan Title  (KANAN)
global.htjava = pickRandom(["⛶", "❏", "⫹⫺", "☰", "⎔", "✦", "⭔", "⬟", "⛊", "⚝"])    //hiasan Doang :v
/*============== WATERMARK ==============*/
global.v = 'YT: ZYKO MD OFFICIAL '
global.wm = '© 𝑍𝑌𝐾𝑂𝐵𝑂𝑇𝑍-𝑀𝐷'
global.footer = 'ꜱɪᴍᴘʟᴇ ᴡʜᴀᴛꜱᴀᴘᴘ ʙᴏᴛ ᴍᴀᴅᴇ ʙʏ ᴢʏᴋᴏ ᴍᴅ ッ'
/*============== IMAGE X LINK ==============*/
global.zykomd = 'https://telegra.ph/file/9df3a76790e5ebda9dd05.jpg'
global.menu = 'https://telegra.ph/file/2ab02336764d7c384a6c9.jpg'
global.fla = 'https://telegra.ph/file/9cc48b21c6eda65133682.jpg'
global.brocas = "https://telegra.ph/file/cc1cca5db80d023cd470b.jpg"
global.flaaa2 = ImgLogo()
global.flaaa = ImgLogo() 
global.thumb = fs.readFileSync("./media/img/zyko.png")
/*============== RANDOM ==============*/
global.welcom = []
global.anticall = true
global.prefa = ['', '.']
global.sp = '•'
global.sessionName = 'sessions'
/*============== CREATE PANEL ==============*/
global.domain = '' // ISI LINK DOMAIN
global.apikey = '' // ISI APIKEY PTLA
global.c_apikey = '' // ISI APIKEY PTLC
/*============== MESS ==============*/
global.mess = {
    success: 'Success ✓',
    done: 'Success ✓',
    admin: 'Fitur Khusus Admin Group!',
    botAdmin: 'botz Harus Menjadi Admin Terlebih Dahulu!',
    owner: 'Fitur Khusus Owner',
    group: 'Fitur Khusus Group Chat',
    private: 'Fitur Khusus Private Chat!',
    bot: 'Fitur Khusus Nomor Owner',
    wait: 'Sabar ya sedang proses',
    band: 'kamu telah di banned oleh owner\nminta unbanned ke owner agar bisa menggunakan fitur bot lagi',
    notregist: 'Kamu belum terdaftar di database bot silahkan daftar terlebih dahulu',
    premium: 'Kamu Bukan User Premium, Beli Sana Ke Owner Bot',
    error: "*Maaf fitur sedang Error*",
    endLimit: 'Limit Harian Anda Telah Habis, Limit Akan Direset Setiap Pukul 00:00 WIB.',
}
/*global.limitawal = {
	free: "100",
        premium: "unlimited"
}
//Thum
*/


/*============== RPG ==============*/
global.rpg = {
  emoticon(string) {
      string = string.toLowerCase()
      let emot = {
          Fox: "🦊",
          agility: "🤸‍♂️",
          anggur: "🍇",
          apel: "🍎",
          aqua: "🥤",
          arc: "🏹",
          armor: "🥼",
          bank: "🏦",
          batu: "🧱",
          berlian: "💎",
          bibitanggur: "🍇",
          bibitapel: "🍎",
          bibitjeruk: "🍊",
          bibitmangga: "🥭",
          bibitpisang: "🍌",
          botol: "🍾",
          bow: "🏹",
          bull: "🐃",
          cat: "🐈",
          centaur: "🎠",
          chicken: "🐓",
          coal: "⚱️",
          common: "📦",
          cow: "🐄",
          crystal: "🔮",
          darkcrystal: "♠️",
          diamond: "💎",
          dog: "🐕",
          dragon: "🐉",
          eleksirb: "🧪",
          elephant: "🐘",
          emasbatang: "🪙",
          emasbiasa: "🥇",
          emerald: "💚",
          exp: "✉️",
          fishingrod: "🎣",
          foodpet: "🍱",
          fox: "🦊",
          gardenboc: "🗳️",
          gardenboxs: "📦",
          gems: "🍀",
          giraffe: "🦒",
          gold: "👑",
          griffin: "🦒",
          health: "❤️",
          healtmonster: "❤‍🔥",
          horse: "🐎",
          intelligence: "🧠",
          iron: "⛓️",
          jeruk: "🍊",
          kaleng: "🥫",
          kardus: "📦",
          kayu: "🪵",
          ketake: "💿",
          keygold: "🔑",
          keyiron: "🗝️",
          knife: "🔪",
          koinexpg: "👛",
          kucing: "🐈",
          kuda: "🐎",
          kyubi: "🦊",
          legendary: "🗃️",
          level: "🧬",
          limit: "🌌",
          lion: "🦁",
          magicwand: "⚕️",
          makanancentaur: "🥗",
          makanangriffin: "🥙",
          makanankyubi: "🍗",
          makanannaga: "🍖",
          makananpet: "🥩",
          makananphonix: "🧀",
          mana: "🪄",
          mangga: "🥭",
          money: "💵",
          mythic: "🗳️",
          mythic: "🪄",
          naga: "🐉",
          pancingan: "🎣",
          pet: "🎁",
          petFood: "🍖",
          phonix: "🦅",
          pickaxe: "⛏️",
          pisang: "🍌",
          pointxp: "📧",
          potion: "🥤",
          rock: "🪨",
          rubah: "🦊",
          sampah: "🗑️",
          serigala: "🐺",
          snake: "🐍",
          stamina: "⚡",
          strength: "🦹‍♀️",
          string: "🕸️",
          superior: "💼",
          sword: "⚔️",
          tiger: "🐅",
          tiketcoin: "🎟️",
          trash: "🗑",
          umpan: "🪱",
          uncommon: "🎁",
          upgrader: "🧰",
          wood: "🪵"
      }
      let results = Object.keys(emot).map(v => [v, new RegExp(v, "gi")]).filter(v => v[1].test(string))
      if (!results.length) return ""
      else return emot[results[0][0]]
  }
}

let file = require.resolve(__filename) 
fs.watchFile(file, () => {
fs.unwatchFile(file)
console.log(chalk.redBright(`Update ${__filename}`))
delete require.cache[file]
require(file)
})



function pickRandom(list) {
  return list[Math.floor(list.length * Math.random())]
}

function ImgLogo() {
  let LoGo = [
"https://dynamic.brandcrowd.com/asset/logo/04ca85c5-a4c1-4582-8296-7fb8cbdf7df1/logo?v=4&text=",
"https://dynamic.brandcrowd.com/asset/logo/063a3d53-d7bb-4abb-8b20-3e45ae7c61ac/logo?v=4&text=",
"https://dynamic.brandcrowd.com/asset/logo/065b4535-d123-4261-accb-2f21e3eac3cf/logo?v=4&text=",
"https://dynamic.brandcrowd.com/asset/logo/09699c93-f687-4c58-b6dc-cb8010de7df9/logo?v=4&text=",
"https://dynamic.brandcrowd.com/asset/logo/097b9969-5019-433a-9a3f-d2e097b50e99/logo?v=4&text=",
"https://dynamic.brandcrowd.com/asset/logo/0c963355-e735-4cdd-bec8-1373ba2a222e/logo?v=4&text=",
"https://dynamic.brandcrowd.com/asset/logo/0cd45dda-e1e6-46bc-9f0d-b49a5d3c3667/logo?v=4&text=",
"https://dynamic.brandcrowd.com/asset/logo/10cd8160-2b8d-41c5-87cc-f683a853d5d9/logo?v=4&text=",
"https://dynamic.brandcrowd.com/asset/logo/163db786-9e2a-494a-a996-de565ae52f83/logo?v=4&text=",
"https://dynamic.brandcrowd.com/asset/logo/1e47fc81-0c56-45d5-aa5e-07006260dfbc/logo?v=4&text=",
"https://dynamic.brandcrowd.com/asset/logo/1fd728fb-fdb3-4407-a7da-fe55bfcb5fb0/logo?v=4&text=",
"https://dynamic.brandcrowd.com/asset/logo/236a12ee-2b79-4b58-b9e4-5536f5e93db7/logo?v=4&text=",
"https://dynamic.brandcrowd.com/asset/logo/2648d66c-fec5-488f-9626-06991ca917e0/logo?v=4&text=",
"https://dynamic.brandcrowd.com/asset/logo/362270db-6933-4ccc-8c11-25b2fe97f023/logo?v=4&text=",
"https://dynamic.brandcrowd.com/asset/logo/4a0312ef-6f47-421d-9d10-354c27de8e0f/logo?v=4&text=",
"https://dynamic.brandcrowd.com/asset/logo/50dd554f-ffed-4496-b770-870fef2aefe5/logo?v=4&text=",
"https://dynamic.brandcrowd.com/asset/logo/5ed1f95d-736f-4fe3-9aec-d0a8875dee17/logo?v=4&text=",
"https://dynamic.brandcrowd.com/asset/logo/6458e177-55ec-4b2d-8be7-4094431378ad/logo?v=4&text=",
"https://dynamic.brandcrowd.com/asset/logo/672fc6e7-e445-47e3-9391-2e1d1452960a/logo?v=4&text=",
"https://dynamic.brandcrowd.com/asset/logo/7229c0d6-cc4f-4e47-87b2-3b01285f502d/logo?v=4&text=",
"https://dynamic.brandcrowd.com/asset/logo/73113e56-8ac2-484e-9272-06759b7d51e2/logo?v=4&text=",
"https://dynamic.brandcrowd.com/asset/logo/7429f9b9-562f-439b-86cd-81f04d76d883/logo?v=4&text=",
"https://dynamic.brandcrowd.com/asset/logo/746604d3-8da9-4488-8fa9-bf301d62ea0e/logo?v=4&text=",
"https://dynamic.brandcrowd.com/asset/logo/867bea51-793c-4b09-b13f-44c9053b6754/logo?v=4&text=",
"https://dynamic.brandcrowd.com/asset/logo/882f41c2-98ee-43f2-bf07-f033cf1c3320/logo?v=4&text=",
"https://dynamic.brandcrowd.com/asset/logo/8a2d089b-7b87-4979-906e-7731b594bd4b/logo?v=4&text=",
"https://dynamic.brandcrowd.com/asset/logo/8bb23d1a-7fb2-4f5d-ba6c-2a9bd13cc673/logo?v=4&text=",
"https://dynamic.brandcrowd.com/asset/logo/8dcc7e92-c12c-40df-8c8b-9f9db93b11a0/logo?v=4&text=",
"https://dynamic.brandcrowd.com/asset/logo/8f825f13-dadf-442c-b9e5-a1daa03611c4/logo?v=4&text=",
"https://dynamic.brandcrowd.com/asset/logo/8ffdc28c-ea27-4b0c-89c3-3f9a9b40e5fd/logo?v=4&text=",
"https://dynamic.brandcrowd.com/asset/logo/912b6462-49d3-435a-959e-5c5f3254d6c4/logo?v=4&text=",
"https://dynamic.brandcrowd.com/asset/logo/924d12da-4a2b-46b3-82cd-bc9b38a519d0/logo?v=4&text=",
"https://dynamic.brandcrowd.com/asset/logo/9459965a-f378-430a-8cb9-62778fec5713/logo?v=4&text=",
"https://dynamic.brandcrowd.com/asset/logo/9608708e-7907-4bae-892c-87964aee0454/logo?v=4&text=",
"https://dynamic.brandcrowd.com/asset/logo/963fcb8b-1ba3-46f1-82bd-8e92a5a024d1/logo?v=4&text=",
"https://dynamic.brandcrowd.com/asset/logo/99c6feef-cee4-47b3-afc7-1f192e7f48f4/logo?v=4&text=",
"https://dynamic.brandcrowd.com/asset/logo/a075034f-0363-4af4-877f-aba47a7c059d/logo?v=4&text=",
"https://dynamic.brandcrowd.com/asset/logo/a428ed89-5ed1-4b1d-b095-2ee98ae54b40/logo?v=4&text=",
"https://dynamic.brandcrowd.com/asset/logo/afa0be93-d4ae-46d5-b741-64bd3b4b6148/logo?v=4&text=",
"https://dynamic.brandcrowd.com/asset/logo/b0fb81f5-59a4-4197-947f-26037441ea2f/logo?v=4&text=",
"https://dynamic.brandcrowd.com/asset/logo/b1826077-0a6f-403d-939e-b445c334c470/logo?v=4&text=",
"https://dynamic.brandcrowd.com/asset/logo/b3581ffd-a127-465b-b880-bd3770b85aad/logo?v=4&text=",
"https://dynamic.brandcrowd.com/asset/logo/b5be66f6-a6a6-42dc-ab67-de8f80e96291/logo?v=4&text=",
"https://dynamic.brandcrowd.com/asset/logo/b5e150af-101d-4e96-9518-dff66548dc31/logo?v=4&text=",
"https://dynamic.brandcrowd.com/asset/logo/b8b4fc21-d1b6-4ee1-a6f3-4410a49e123a/logo?v=4&text=",
"https://dynamic.brandcrowd.com/asset/logo/b95516e4-645d-4249-b81b-b9ca65bd2087/logo?v=4&text=",
"https://dynamic.brandcrowd.com/asset/logo/b97103b8-3b7c-4f1d-8c91-451c11e8cde3/logo?v=4&text=",
"https://dynamic.brandcrowd.com/asset/logo/bbf8e7fe-13c2-420c-bb2c-9c059744d599/logo?v=4&text=",
"https://dynamic.brandcrowd.com/asset/logo/bd9069cc-408d-4f00-90b4-9d6c96bc0b3d/logo?v=4&text=",
"https://dynamic.brandcrowd.com/asset/logo/be638691-3065-45cb-b90c-263945cd0177/logo?v=4&text=",
"https://dynamic.brandcrowd.com/asset/logo/c054d202-df4b-466d-8477-2b8690030ce5/logo?v=4&text=",
"https://dynamic.brandcrowd.com/asset/logo/c1e008df-5207-463e-a6a7-a823174d0bda/logo?v=4&text=",
"https://dynamic.brandcrowd.com/asset/logo/cc9a22ce-f65c-40ff-9eac-43c26817f44a/logo?v=4&text=",
"https://dynamic.brandcrowd.com/asset/logo/d588330f-b11c-4482-baff-49323323a8c0/logo?v=4&text=",
"https://dynamic.brandcrowd.com/asset/logo/e32a0e7e-df48-4b33-bccf-1f74d395d322/logo?v=4&text=",
"https://dynamic.brandcrowd.com/asset/logo/ee1930f1-09a8-4d5e-bbe9-e43547bb7f64/logo?v=4&text=",
"https://dynamic.brandcrowd.com/asset/logo/fde5293a-c69b-4d77-9ec8-f3d6797d2b15/logo?v=4&text=",
"https://flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=amped-logo&doScale=true&scaleWidth=800&scaleHeight=500&text=",
"https://flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=crafts-logo&fontsize=90&doScale=true&scaleWidth=800&scaleHeight=500&text=",
"https://flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=sketch-name&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&fillTextType=1&fillTextPattern=Warning!&fillColor1Color=%23f2aa4c&fillColor2Color=%23f2aa4c&fillColor3Color=%23f2aa4c&fillColor4Color=%23f2aa4c&fillColor5Color=%23f2aa4c&fillColor6Color=%23f2aa4c&fillColor7Color=%23f2aa4c&fillColor8Color=%23f2aa4c&fillColor9Color=%23f2aa4c&fillColor10Color=%23f2aa4c&fillOutlineColor=%23f2aa4c&fillOutline2Color=%23f2aa4c&backgroundColor=%23101820&text=",
"https://flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=sketch-name&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&fillTextType=1&fillTextPattern=Warning!&text=",
"https://flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=water-logo&script=water-logo&fontsize=90&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&fillTextColor=%23000&shadowGlowColor=%23000&backgroundColor=%23000&text=",
"https://flamingtext.com/net-fu/proxy_form.cgi?imageoutput=true&script=arcade-logo&text=",
"https://flamingtext.com/net-fu/proxy_form.cgi?imageoutput=true&script=dance-logo&text=",
"https://flamingtext.com/net-fu/proxy_form.cgi?imageoutput=true&script=emperor-logo&text=",
"https://flamingtext.com/net-fu/proxy_form.cgi?imageoutput=true&script=flame-logo&text=",
"https://flamingtext.com/net-fu/proxy_form.cgi?imageoutput=true&script=matrix-logo&text=",
"https://flamingtext.com/net-fu/proxy_form.cgi?imageoutput=true&script=robot-logo&text=",
"https://flamingtext.com/net-fu/proxy_form.cgi?imageoutput=true&script=skate-logo&text=",
"https://flamingtext.com/net-fu/proxy_form.cgi?imageoutput=true&script=spaceships-logo&text=",
"https://flamingtext.com/net-fu/proxy_form.cgi?imageoutput=true&script=spider-men-logo&text=",
"https://flamingtext.com/net-fu/proxy_form.cgi?imageoutput=true&script=wrestler-logo&text="
]
  return LoGo
}