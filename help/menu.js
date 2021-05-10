// penghitung aktif bot
function kyun(seconds){
  function pad(s){
    return (s < 10 ? '0' : '') + s;
  }
  var hours = Math.floor(seconds / (60*60));
  var minutes = Math.floor(seconds % (60*60) / 60);
  var seconds = Math.floor(seconds % 60);
  return `${pad(hours)}:${pad(minutes)}:${pad(seconds)}`
}

const menu = (tanggal, jam, pushname, sender, prem_, Lxa, prefix, user, uptime, isGroupAdmins, groupMetadata, groupAdmins, Welcome_, AntiLink_, isGroup, process) => { 
  if (isGroupAdmins){
    admin = "Admin Group"
  } else if (!isGroupAdmins){
    admin = "Member Group"
  }
		if (isGroup) return `▢ ${tanggal()}
▢ Jam ${jam} (Asia/Jakarta)

  ≡ *INFORMASI*
┌───⊷ *USER* ⊶
├╼ Nama : *${pushname}*
├╼ Nomer : *${sender.split("@")[0]}*
├╼ Premium : ${prem_}
└──────────────
┌───⊷ *GROUP* ⊶
├╼ ${groupMetadata.subject}
├╼ Status User : *${admin}*
├╼ ${groupMetadata.participants.length} Member Group
├╼ ${groupAdmins.length} Admin Group
├╼ Welcome : *${Welcome_}*
├╼ Antilink : *${AntiLink_}*
└──────────────
  ≡ *LET'S BEGIN MENU*
┌───⊷ *LIST* ⊶
├╼ *${prefix}menu 1*
├╼ *${prefix}menu 2*
├╼ *${prefix}menu group*
├╼ *${prefix}menu premium*
├╼ *${prefix}menu owner*
└──────────────
┌───⊷ *ABOUT LEXA* ⊶
├╼ *${prefix}Simi*
├╼ *${prefix}Info*
├╼ *${prefix}Owner*
├╼ *${prefix}Ping*
├╼ *${prefix}Report*
├╼ *${prefix}Banlist*
├╼ *${prefix}Blocklist*
├╼ *${prefix}Install*
└──────────────
  ≡ *Credits by*
▢ MrfZvx12 (Ma'ruf)
▢ Moo-d (NazwaS)
  ≡ *Thanks To*
▢ Mhankbarbar
▢ All Owners Bot
──────────────────────
Made With ❤️
© *Dev & Owner*`

else if (!isGroup) return`▢ ${tanggal()}
▢ Jam ${jam} (Asia/Jakarta)

  ≡ *INFORMASI*
┌───⊷ *USER* ⊶
├╼ Nama : *${pushname}*
├╼ Nomer : *${sender.split("@")[0]}*
├╼ Premium : ${prem_}
└──────────────
┌───⊷ *BOT* ⊶
├╼ Nama : *${Lxa.user.name}*
├╼ Versi Bot : 0.2.6
├╼ WAConnection : *${Lxa.browserDescription[0]}*
├╼ Speed : ${process.uptime()}
├╼ Runtime : *${kyun(uptime)}*
└──────────────
  ≡ *LET'S BEGIN MENU*
┌───⊷ *LIST* ⊶
├╼ *${prefix}menu 1*
├╼ *${prefix}menu 2*
├╼ *${prefix}menu 3*
├╼ *${prefix}menu group*
├╼ *${prefix}menu premium*
├╼ *${prefix}menu owner*
└──────────────
┌───⊷ *ABOUT LEXA* ⊶
├╼ *${prefix}Simi*
├╼ *${prefix}Info*
├╼ *${prefix}Owner*
├╼ *${prefix}Ping*
├╼ *${prefix}Report*
├╼ *${prefix}Banlist*
├╼ *${prefix}Blocklist*
├╼ *${prefix}Install*
└──────────────
  ≡ *Credits by*
▢ MrfZvx12 (Ma'ruf)
▢ Moo-d (NazwaS)
  ≡ *Thanks To*
▢ Mhankbarbar
▢ All Owners Bot
──────────────────────
Made With ❤️
© *Dev & Owner*`
}

//---
const menu1 = (prefix, tanggal, jam) => {
  return `▢ ${tanggal()}
▢ Jam ${jam} (Asia/Jakarta)

  ≡ *MENU GROUP*
┌───⊷ *FUN* ⊶
├╼ *${prefix}Ilham*
├╼ *${prefix}Dilan*
├╼ *${prefix}Hacker*
├╼ *${prefix}Gombal*
├╼ *${prefix}Senja*
├╼ *${prefix}Quotesislam*
├╼ *${prefix}Fakta*
├╼ *${prefix}Ciee*
├╼ *${prefix}Ganteng*
├╼ *${prefix}Cantik*
├╼ *${prefix}Jelek*
├╼ *${prefix}Sadboy*
├╼ *${prefix}Sadgirl*
├╼ *${prefix}Wibu*
├╼ *${prefix}Kutuk (Tag target)*
└──────────────
┌───⊷ *GAME* ⊶
├╼ *${prefix}Truth*
├╼ *${prefix}Dare*
├╼ *${prefix}Gantengcek (Target)*
├╼ *${prefix}Cantikcek (Target)*
├╼ *${prefix}Apakah (Teks)*
├╼ *${prefix}Kapankah (Teks)*
├╼ *${prefix}Bisakah (Teks)*
├╼ *${prefix}Rate (Teks)*
├╼ *${prefix}Suit (Gunting/Batu/Kertas)*
└──────────────`
}

const menu2 = (prefix, tanggal, jam) => {
  return `▢ ${tanggal()}
▢ Jam ${jam} (Asia/Jakarta)

  ≡ *MENU*
┌───⊷ *STICKER* ⊶
├╼ *${prefix}Sticker (Foto/video)*
├╼ *${prefix}Toimg (Reply Sticker)*
└──────────────
┌───⊷ *TOOLS* ⊶
├╼ *${prefix}Ocr (Foto)*
├╼ *${prefix}Tomp3 (Video)*
├╼ *${prefix}Tovn (Audio)*
├╼ *${prefix}Wait (Foto)*
├╼ *${prefix}Tts (Kode bahasa + Teks)*
├╼ *${prefix}Kodebahasa*
├╼ *${prefix}Kodenegara*
└──────────────
┌───⊷ *MEDIA* ⊶
├╼ *${prefix}Nightcore (Reply audio)*
├╼ *${prefix}Slow (Reply audio)*
├╼ *${prefix}Bass (Reply audio)*
├╼ *${prefix}Tupai (Reply audio)*
├╼ *${prefix}Gemuk (Reply audio)*
├╼ *${prefix}Listvn*
├╼ *${prefix}Listimg*
├╼ *${prefix}Listvid*
├╼ *${prefix}Liststik*
├╼ *${prefix}Getvn (Nama pack)*
├╼ *${prefix}Getimg (Nama pack)*
├╼ *${prefix}Getvid (Nama pack)*
├╼ *${prefix}Getstik (Nama pack)*
└──────────────
`

}

/*onstt menu3 = (prefix, tanggal, jam) => {
  return `▢ ${tanggal()}
▢ Jam ${jam} (Asia/Jakarta)

  ≡ *MENU*
┌───⊷ *GAME* ⊶
├╼
└──────────────`
}

const menuPrem = (prefix, tanggal, jam) => {
  return ` ▢ ${tanggal()}
▢ Jam ${jam} (Asia/Jakarta)

  ≡ *MENU PREMIUM*
┌───⊷ *PREMIUM* ⊶
├╼ 
└──────────────`
}
*/

const menuOwner = (prefix, tanggal, jam) => {
  return `▢ ${tanggal()}
▢ Jam ${jam} (Asia/Jakarta)

  ≡ *MENU OWNER*
┌───⊷ *OWNER* ⊶
├╼ *${prefix}Clone (Tag target)*
├╼ *${prefix}Clearchat*
├╼ *${prefix}Totaluser*
├╼ *${prefix}Listrequest*
├╼ *${prefix}Listlapor*
├╼ *${prefix}Addstik (Reply stiker)*
├╼ *${prefix}Addvn (Reply audio)*
├╼ *${prefix}Addimg (Reply foto)*
├╼ *${prefix}Addvid (Reply video)*
├╼ *${prefix}Addtruth (Teks)*
├╼ *${prefix}Adddare (Teks)*
├╼ *${prefix}Addfakta (Teks)*
├╼ *${prefix}Addilham (Teks)*
├╼ *${prefix}Adddilan (Teks)*
├╼ *${prefix}Addgombal (Teks)*
├╼ *${prefix}Addhacker (Teks)*
├╼ *${prefix}Bc (Teks)*
├╼ *${prefix}Leave*
├╼ *${prefix}Term*
├╼ *${prefix}Return*
├╼ *${prefix}View (url)*
└──────────────`
}

const menuGrup = (prefix, tanggal, jam) => {
  return `▢ ${tanggal()}
▢ Jam ${jam} (Asia/Jakarta)

  ≡ *MENU GROUP*
┌───⊷ *GROUP* ⊶
├╼ *${prefix}Listadmin*
├╼ *${prefix}Listonline*
├╼ *${prefix}Promote (Tag target)*
├╼ *${prefix}Demote (Tag target)*
├╼ *${prefix}Setppgc (Foto)*
├╼ *${prefix}Tagall*
├╼ *${prefix}Linkgc*
├╼ *${prefix}Notif (Teks)*
├╼ *${prefix}Kick (Tag Target)*
├╼ *${prefix}Add (Nomor)*
├╼ *${prefix}Delete (Reply pesan)*
├╼ *${prefix}Grup (Open/Close)*
├╼ *${prefix}Welcome (on/off)*
├╼ *${prefix}Antilink (on/off)*
└──────────────`
}

module.exports = { menu, menu1, menu2, menuOwner, menuGrup}