const config = require('../config');
const { runtime } = require('../lib/functions');

// Common footer used in all menus
const footer = '© SIGMA-MD';

// Fun Menu
exports.funMenu = () => `
*Fun Menu*
┏━━⊰
┣✦ .joke
┣✦ .memes
┣✦ .darkjoke
┣✦ .quote
┣✦ .truth
┣✦ .dare
┣✦ .fact
┣✦ .say
┗━━⊰
${footer}
`;

// Download Menu
exports.downloadMenu = () => `
*Download Menu*
┏━━⊰
┣✦ .ytmp3
┣✦ .ytmp4
┣✦ .tiktok
┣✦ .ig
┣✦ .mediafire
┣✦ .fb
┣✦ .tw
┣✦ .pinterestdl
┗━━⊰
${footer}
`;

// Anime Menu
exports.animeMenu = () => `
*Anime Menu*
┏━━⊰
┣✦ .anime
┣✦ .waifu
┣✦ .neko
┣✦ .husbu
┣✦ .loli
┣✦ .wallpaperanime
┗━━⊰
${footer}
`;

// Owner Menu
exports.ownerMenu = () => `
*Owner Menu*
┏━━⊰
┣✦ .setprefix
┣✦ .setnamebot
┣✦ .setbio
┣✦ .block
┣✦ .unblock
┣✦ .shutdown
┣✦ .join
┗━━⊰
${footer}
`;

// Reaction Menu
exports.reactionMenu = () => `
*Reaction Menu*
┏━━⊰
┣✦ .bonk
┣✦ .blush
┣✦ .cry
┣✦ .cuddle
┣✦ .hug
┣✦ .kiss
┣✦ .pat
┣✦ .slap
┣✦ .smile
┗━━⊰
${footer}
`;

// Group Menu
exports.groupMenu = () => `
*Group Menu*
┏━━⊰
┣✦ .add
┣✦ .kick
┣✦ .promote
┣✦ .demote
┣✦ .setsubject
┣✦ .setdesc
┣✦ .tagall
┣✦ .hidetag
┗━━⊰
${footer}
`;

// Converter Menu
exports.converterMenu = () => `
*Converter Menu*
┏━━⊰
┣✦ .sticker
┣✦ .toimg
┣✦ .tomp3
┣✦ .tovn
┣✦ .tovideo
┣✦ .emojimix
┗━━⊰
${footer}
`;

// Adult Menu (NSFW)
exports.adultMenu = () => `
*Adult Menu*
┏━━⊰
┣✦ .xxx
┣✦ .hentai
┣✦ .nsfwneko
┣✦ .blowjob
┗━━⊰
${footer}
`;

// Main Menu
exports.mainMenu = (prefix, pushName, sender, runtimeUptime) => `
*Hello ${pushName}! 👋*
🤖 I'm *SIGMA-MD*, your WhatsApp Assistant from CONWAY.
 
💡 *Prefix:* ${prefix}
🧑‍💻 *User:* @${sender.split('@')[0]}
⏱️ *Uptime:* ${runtimeUptime || runtime()}
 
📖 *Menu Commands:*
┣✦ ${prefix}funmenu
┣✦ ${prefix}dlmenu
┣✦ ${prefix}animemenu
┣✦ ${prefix}ownermenu
┣✦ ${prefix}reactionmenu
┣✦ ${prefix}groupmenu
┣✦ ${prefix}convertmenu
┣✦ ${prefix}adultmenu

Type a command like: *${prefix}funmenu*

${footer}
`;
