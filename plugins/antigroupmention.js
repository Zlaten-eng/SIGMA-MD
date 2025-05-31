const { cmd } = require('../command');
const { sleep } = require('../lib/functions');

// Plugin configuration
const CONFIG = {
  action: 'warn', // Options: 'warn', 'kick', 'delete'
  message: '🚫 Please do not mention this group in your status.',
  adminOnly: true // Only allow this plugin to be active for group admins
};

cmd({
  pattern: 'protectstatus',
  desc: 'Monitors for users who mention the group in their status and takes action.',
  category: 'group',
  filename: __filename
}, async (client, m, _, { groupMetadata }) => {
  try {
    const groupId = m.chat;
    const participants = groupMetadata.participants;
    const groupSubject = groupMetadata.subject.toLowerCase();

    for (const participant of participants) {
      const id = participant.id;
      try {
        const status = await client.fetchStatus(id);
        if (status && status.status && status.status.toLowerCase().includes(groupSubject)) {
          switch (CONFIG.action) {
            case 'warn':
              await client.sendMessage(groupId, { text: `⚠️ @${id.split('@')[0]}, ${CONFIG.message}` }, { mentions: [id] });
              break;
            case 'kick':
              await client.groupParticipantsUpdate(groupId, [id], 'remove');
              break;
            case 'delete':
              await client.sendMessage(groupId, { delete: m.key });
              break;
          }
          await sleep(1000);
        }
      } catch (err) {
        console.log(`❌ Failed to fetch status or act on ${id}:`, err.message);
      }
    }
  } catch (err) {
    console.error('❌ Plugin error:', err);
  }
});
