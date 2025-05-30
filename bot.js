const { default: makeWASocket, useSingleFileAuthState, DisconnectReason } = require("@whiskeysockets/baileys");
const { Boom } = require("@hapi/boom");
const fs = require("fs");
const path = require("path");

const { state, saveState } = useSingleFileAuthState('./auth_info.json');

async function startBot() {
    const sock = makeWASocket({
        auth: state,
        printQRInTerminal: true
    });

    sock.ev.on("creds.update", saveState);

    sock.ev.on("messages.upsert", async ({ messages }) => {
        const msg = messages[0];
        if (!msg.message) return;

        const messageType = Object.keys(msg.message)[0];
        const text = msg.message.conversation || msg.message[messageType]?.text || "";

        if (text.toLowerCase() === "hi") {
            await sock.sendMessage(msg.key.remoteJid, { text: "Hello! I am your bot." });
        }

        // Add more commands below
    });

    sock.ev.on("connection.update", (update) => {
        const { connection, lastDisconnect } = update;
        if (connection === "close") {
            const shouldReconnect = lastDisconnect.error?.output?.statusCode !== DisconnectReason.loggedOut;
            if (shouldReconnect) {
                startBot();
            } else {
                console.log("Connection closed. You are logged out.");
            }
        } else if (connection === "open") {
            console.log("Connected!");
        }
    });
}

startBot();
