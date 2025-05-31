const { cmd } = require('../command');
const yts = require('yt-search');
const axios = require('axios');

// 🎬 YouTube Video Downloader
cmd({
  pattern: 'ytvid2',
  alias: ['ytv2', 'ytvideo2', 'video2'],
  react: '⏳',
  desc: 'Download videos from YouTube by searching for keywords.',
  category: 'video',
  use: '.vidx <keywords>',
  filename: __filename
}, async (message, quotedMsg, match, { from, args, reply }) => {
  try {
    const searchQuery = args.join(' ');
    if (!searchQuery) return reply('*Please provide a video title or URL*');

    reply('>© SIGMA-MD generating video, please wait...');

    const searchResults = await yts(searchQuery);
    if (!searchResults.videos || searchResults.videos.length === 0)
      return reply(`❌ No results found for "${searchQuery}".`);

    const video = searchResults.videos[0];
    const videoUrl = video.url;
    const apiUrl = `https://api.giftedtech.web.id/api/download/dlmp4?apikey=gifted&url=${videoUrl}`;
    const response = await axios.get(apiUrl);

    if (!response.data.success)
      return reply(`❌ Failed to fetch video for "${searchQuery}".`);

    const { download_url } = response.data.result;

    await message.sendMessage(from, {
      video: { url: download_url },
      mimetype: 'video/mp4'
    }, { quoted: quotedMsg });

  } catch (error) {
    console.error(error);
    reply('❌ An error occurred while processing your request.');
  }
});

const { cmd } = require('../command');
const yts = require('yt-search');
const axios = require('axios');

// 🎵 YouTube Audio Downloader
cmd({
  pattern: 'ytplay2',
  alias: ['play2', 'yta2'],
  react: '⏳',
  desc: 'Download audio from YouTube by searching for keywords.',
  category: 'music',
  use: '.playx <keywords>',
  filename: __filename
}, async (message, quotedMsg, match, { from, args, reply }) => {
  try {
    const searchQuery = args.join(' ');
    if (!searchQuery) return reply('*Please provide an audio title or URL*');

    reply('> © SIGMA-MD generating song, please wait...');

    const searchResults = await yts(searchQuery);
    if (!searchResults.videos || searchResults.videos.length === 0)
      return reply(`❌ No results found for "${searchQuery}".`);

    const video = searchResults.videos[0];
    const videoUrl = video.url;
    const apiUrl = `https://api.giftedtech.web.id/api/download/dlmp3?apikey=gifted&url=${videoUrl}`;
    const response = await axios.get(apiUrl);

    if (!response.data.success)
      return reply(`❌ Failed to fetch audio for "${searchQuery}".`);

    const { download_url } = response.data.result;

    await message.sendMessage(from, {
      audio: { url: download_url },
      mimetype: 'audio/mp4',
      ptt: false
    }, { quoted: quotedMsg });

  } catch (error) {
    console.error(error);
    reply('❌ An error occurred while processing your request.');
  }
});
