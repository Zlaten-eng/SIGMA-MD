

/*
const config = require('../config')
const {cmd , commands} = require('../command')
cmd({
    pattern: "script",
    alias: ["sc","repo","info"],
    desc: "bot repo",
    react: "🤖",
    category: "main",
    filename: __filename
},
async(conn, mek, m,{from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{
let repo =`
*╭──────────────●●►*
> *BOT OWNER:*
*|* *Conway*

> *CASEYWEB REPO:*
*|* https://github.com/YAMAL-YENG/SIGMA-MD

> *SUPPORT GROUP:*
*|* https://chat.whatsapp.com/E9mVfukNRX13eF45Wbmk7t
*╰──────────────●●►*

> *CREATED BY HACKLINK TECH*
`
await conn.sendMessage(from, { text: repo ,
  contextInfo: {
    mentionedJid: [ '' ],
    groupMentions: [],
    forwardingScore: 999,
    isForwarded: false,
    forwardedNewsletterMessageInfo: {
      newsletterJid: '120363400583993139@newsletter',
      newsletterName: "SIGMA-MD",
      serverMessageId: 999
    },
externalAdReply: { 
title: '𝐀ɭι̇ι̇ 𝐌Ɗ 🍁',
body: `${pushname}`,
mediaType: 1,
sourceUrl: "https://github.com/itx-alii-raza/ALI-MD" ,
thumbnailUrl: "https://i.ibb.co/8Dzbtwj2/mrfrankofc.jpg" ,
renderLargerThumbnail: true,
showAdAttribution: true
}
}}, { quoted: mek})}catch(e){
console.log(e)
reply(`${e}`)
}
});
*/

const more = String.fromCharCode(8206)
const readMore = more.repeat(4001)

const fetch = require('node-fetch');
const config = require('../config');    
const { cmd } = require('../command');

cmd({
    pattern: "script",
    alias: ["repo", "sc", "info"],
    desc: "Fetch information about a GitHub repository.",
    react: "🎗️",
    category: "info",
    filename: __filename,
},
async (conn, mek, m, { from, reply }) => {
    const githubRepoURL = 'https://github.com/YAMAL-YENG/SIGMA-MD';

    try {
        // Extract username and repo name from the URL
        const [, username, repoName] = githubRepoURL.match(/github\.com\/([^/]+)\/([^/]+)/);

        // Fetch repository details using GitHub API
        const response = await fetch(`https://api.github.com/repos/${username}/${repoName}`);
        
        if (!response.ok) {
            throw new Error(`GitHub API request failed with status ${response.status}`);
        }

        const repoData = await response.json();

        // Format the repository information
        const formattedInfo = `*HELLO I'M SIGMA-MD DEVELOPED BY HACKLINK TECH !😇👑* 

> *sɪᴍᴘʟᴇ, ɪᴄʏ, ᴄᴏʟᴅ  & ʀɪᴄʜ ʟᴏᴀᴅᴇᴅ ʙᴏᴛ ᴡɪᴛʜ ᴀᴍᴀᴢɪɴɢ ғᴇᴀᴛᴜʀᴇs, ᴄᴀsᴇʏʀʜᴏᴅᴇs ᴡʜᴀᴛsᴀᴘᴘ ʙᴏᴛ.*❄️

*THANKS FOR DEPLOYING ME🫶* 

> *ᴅᴏɴ'ᴛ ғᴏʀɢᴇᴛ ᴛᴏ sᴛᴀʀ & ғᴏʀᴋ ᴛʜᴇ ʀᴇᴘᴏ🌟🍴*

https://github.com/YAMAL-YENG/SIGMA-MD
──────────────────
${readMore}
\`BOT NAME:\`❄️
> ${repoData.name}

\`OWNER NAME:\`👨‍💻
> ${repoData.owner.login}

\`STARS:\`🌟
> ${repoData.stargazers_count}

\`FORKS:\`🍴
> ${repoData.forks_count}

\`DESCRIPTION:\`📃
> ${repoData.description || 'No description'}\n
──────────────────
\n> *© ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴄᴀsᴇʏʀʜᴏᴅᴇs ᴛᴇᴄʜ* 🎐`;

        // Send an image with the formatted info as a caption and context info
        await conn.sendMessage(from, {
            image: { url: `https://files.catbox.moe/7y24v8.jpg` },
            caption: formattedInfo,
            contextInfo: { 
                mentionedJid: [m.sender],
                forwardingScore: 999,
                isForwarded: true,
                forwardedNewsletterMessageInfo: {
                    newsletterJid: '120363400583993139@newsletter',
                    newsletterName: '☇ cαsєчrhσdєs suppσrt  ⃪🤖͎᪳᪳𝆺𝅥',
                    serverMessageId: 143
                }
            }
        }, { quoted: mek });

        // Send the audio file with context info
        await conn.sendMessage(from, {
            audio: { url: 'https://files.catbox.moe/u66h53.mp3' },
            mimetype: 'audio/mp3',
            ptt: true,
            contextInfo: { 
                mentionedJid: [m.sender],
                forwardingScore: 999,
                isForwarded: true,
                forwardedNewsletterMessageInfo: {
                    newsletterJid: '120363400583993139@newsletter',
                    newsletterName: '☇ SIGMA-MD SUPPORT CHANNEL ',
                    serverMessageId: 143
                }
            }
        }, { quoted: mek });

    } catch (error) {
        console.error("Error in repo command:", error);
        reply("Sorry, something went wrong while fetching the repository information. Please try again later.");
    }
});
