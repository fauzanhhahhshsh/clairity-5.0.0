require('../../media/settings/config');
const axios = require('axios');
const fs = require('fs');

module.exports = {
    command: ['sbrat', 'brat'],
    exec: async (m, from, { q, fuzzy, args, command, prefix, reply })>
        if (!q) return reply(`Masukan Teks\n\nContoh: ${global.prefix>
        const commandText = m?.text?.trim();
        if (commandText.startsWith('. brat') || commandText.startsWit>
            return reply('Jangan ada spasi antara titik dan brat!!');
        }

        const clairityApi = `https://clairity.us.kg/api/brat?text=${e>
        const siputApi = `https://siputzx-bart.hf.space/?q=${encodeUR>

       reply('_Tunggu sebentar, sedang memproses..._')

        try {
            // Coba akses API Clairity
            const response = await axios.get(clairityApi, { responseT>
            await fuzzy.sendImageAsSticker(m.chat, response.data, m, {
                packname: "Yare-Yare Bot",
                author: "dibuat oleh F"
            });
        } catch (error) {
            console.error('API Clairity error, mencoba API Siput:', e>
            try {
                // Jika Clairity gagal, coba akses API Siput
                const response = await axios.get(siputApi, { response>
                await fuzzy.sendImageAsSticker(m.chat, response.data,>
                    packname: global.packname,
                    author: global.author                                             });
            } catch (error) {
                console.error('API Siput juga error:', error.message);
                return reply('Kedua API error, mohon coba lagi nanti.>
            }
        }

    }, // END
};

const file = __filename;
fs.watchFile(file, () => {
  fs.unwatchFile(file);
  console.log(`[  UPDATE ] ${file}`);
  delete require.cache[require.resolve(file)];
  require(file);
});
