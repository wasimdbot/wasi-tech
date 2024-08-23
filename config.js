const fs = require('fs-extra')
if (fs.existsSync('config.env')) require('dotenv').config({ path: __dirname+'/config.env' })


//═══════[Required Variables]════════\\
global.owner = process.env.OWNER_NUMBER.split("923346690239")
global.mongodb = process.env.MONGODB_URI || "mongodb+srv://Maher:Zubair@sigma-male.ggwx4gc.mongodb.net/?retryWrites=true&w=majority"
global.port= process.env.PORT || 5000
global.email = 'wasitec@gmail.com'
global.github = 'https://github.com/itxxwasi/wasi-tech'
global.location = 'pakistan'
global.gurl = 'https://instagram.com/chwaseem565_' // add your username
global.sudo = process.env.SUDO || '923135673658'
global.devs = '923192173398';
global.website = 'https://github.com/itxxwasi/wasi-tech' // Hello world
global.THUMB_IMAGE = process.env.THUMB_IMAGE || 'https://telegra.ph/file/0e3ceca721a6e277dbb61.jpg'
module.exports = {
  botname:   process.env.BOT_NAME === undefined ? 'WASI-TECH' : process.env.BOT_NAME,
  ownername: process.env.OWNER_NAME === undefined ? 'WASITECH' : process.env.OWNER_NAME,
  sessionName:  process.env.SESSION_ID === undefined ? false : process.env.SESSION_ID,KING-MD;;;eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoidUpXVy9uNklkZ05BdVlSbm9ML05HcDNVK3JzcVY2Mks1Mm9VSzZKdnFWZz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiaklNTUd5TlhQVldFNGw0aHpLeWw0dDdJSCtaNVFVak5jdjQ0akVoOXIxQT0ifX0sInNpZ25lZElkZW50aXR5S2V5Ijp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJnQ2YzdFdNTmJnd2FpV3N3cis5bmY5dm53VmhjVkdaSUY4Y3BINDFxNlZJPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJtYm1jWEhnY2lWci8zMjRDck5BK2ZDcTFtY1FCTlVjOEg4NzNKMnlCalc0PSJ9fSwic2lnbmVkUHJlS2V5Ijp7ImtleVBhaXIiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjhQSUlRVlI0UzZ3UytKUE1FZWhSdEFCTW45Q08wcWNteHZpU05EL1pxMHc9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IldQUmp1QnZiZ1VLUTJzK1l0cHowb2xWRDFBQ2dJMUFpSVV5VGh6TlBDajA9In19LCJzaWduYXR1cmUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJ6TVM5NERwRE9welJwbExrNGFkeGJlVFJzRGdpaG95SmVsQmxXVnlFVGRqWmh6c2xTajFLZjVUVjdFQzhLdWxqbDdnNm5QR3Zlek80ejd2cWRDamJCdz09In0sImtleUlkIjoxfSwicmVnaXN0cmF0aW9uSWQiOjksImFkdlNlY3JldEtleSI6IkZnTWl2Q2I0OFBRUzFLSXVxOHBoa3ZTdzV4TTkyWnJpMjFOanNwaXZOeFU9IiwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzIjpbXSwibmV4dFByZUtleUlkIjozMSwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWQiOjMxLCJhY2NvdW50U3luY0NvdW50ZXIiOjAsImFjY291bnRTZXR0aW5ncyI6eyJ1bmFyY2hpdmVDaGF0cyI6ZmFsc2V9LCJkZXZpY2VJZCI6ImluV1VyazFpUlhLampiQmJLalFYV2ciLCJwaG9uZUlkIjoiZGQyNzI5ZjYtYWYyZC00YzI3LTgzNmUtOTYxZjQ2YTBhNzVlIiwiaWRlbnRpdHlJZCI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjB4ZEtBZzlxQW9kaktJZmZ2Q2UyKzRCTEFkYz0ifSwicmVnaXN0ZXJlZCI6ZmFsc2UsImJhY2t1cFRva2VuIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiSHJJS1djZUp3ZU5SSTFoblFnQzluVGNCc09RPSJ9LCJyZWdpc3RyYXRpb24iOnt9LCJhY2NvdW50Ijp7ImRldGFpbHMiOiJDTVMvcVpJQ0VMM2FvTFlHR0FFZ0FDZ0EiLCJhY2NvdW50U2lnbmF0dXJlS2V5IjoiWHllQ2ZNekM2L0hZTVZDTmhwVnJPQWJnYlFWcFFVbVREYnJ2ZmFGcTZVQT0iLCJhY2NvdW50U2lnbmF0dXJlIjoiSS9LNTJWejVBUnRuR0tIeHN4VUFaYW9Nd1ZsVEN3T3lNaFdqSlJHSTZISVhqOGRndVJZQkxXeGJxWTAyWjZHZS9IQlpHVGpCMjVKVlhBT2RndkZMQ1E9PSIsImRldmljZVNpZ25hdHVyZSI6Ik82ZmtJUkYzWHN0WmV1YU5kY1dyNWdaeXRrdDBmV05ndjV1S1RWMDUySE50SkZWU1d2eGVjVU5xM1RLRXpQRGJWcmk1b2NNOHNpbXM3RXp3TndGcUN3PT0ifSwibWUiOnsiaWQiOiI5MjMzNDY2OTAyMzk6MTFAcy53aGF0c2FwcC5uZXQiLCJuYW1lIjoiTXVza2FuIn0sInNpZ25hbElkZW50aXRpZXMiOlt7ImlkZW50aWZpZXIiOnsibmFtZSI6IjkyMzM0NjY5MDIzOToxMUBzLndoYXRzYXBwLm5ldCIsImRldmljZUlkIjowfSwiaWRlbnRpZmllcktleSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkJWOG5nbnpNd3V2eDJERlFqWWFWYXpnRzRHMEZhVUZKa3cyNjczMmhhdWxBIn19XSwicGxhdGZvcm0iOiJzbWJhIiwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wIjoxNzI0Mzk0ODE2fQ==
  author:  process.env.PACK_AUTHER.split(";")[0] === undefined ? 'wasi-tech' : process.env.PACK_AUTHER.split(";")[0],
  auto_read_status :  process.env.AUTO_READ_STATUS  || 'true' ,
  packname:  process.env.PACK_NAME.split(";")[1] === undefined ? 'wasi-tech' : process.env.PACK_NAME.split(";")[1],
  autoreaction:  process.env.AUTO_REACTION ||  'true' ,
  antibadword :  process.env.ANTI_BAD_WORD === undefined ? 'nigga' : process.env.ANTI_BAD_WORD,
  alwaysonline:  process.env.ALWAYS_ONLINE === undefined ? false : process.env.ALWAYS_ONLINE,
  antifake : process.env.FAKE_COUNTRY_CODE === undefined ? '1' : process.env.FAKE_COUNTRY_CODE,
  readmessage:  process.env.READ_MESSAGE === undefined ? false : process.env.READ_MESSAGE,
  auto_status_saver: process.env.AUTO_STATUS_SAVER === undefined ? false : process.env.AUTO_STATUS_SAVER,
  HANDLERS:  process.env.PREFIX === undefined ? '.' : process.env.PREFIX,
  warncount : process.env.WARN_COUNT === undefined ? 3 : process.env.WARN_COUNT,
  disablepm:  process.env.DISABLE_PM === undefined ? false : process.env.DISABLE_PM,
  levelupmessage:  process.env.LEVEL_UP_MESSAGE === undefined ? false : process.env.LEVEL_UP_MESSAGE,
  antilink:  process.env.ANTILINK_VALUES === undefined ? 'chat.whatsapp.com' : process.env.ANTILINK_VALUES,
  antilinkaction: process.env.ANTILINK_ACTION === undefined ? 'remove' : process.env.ANTILINK_ACTION,
  BRANCH: 'main', 
  ALIVE_MESSAGE:  process.env.ALIVE_MESSAGE === undefined ? '' : process.env.ALIVE_MESSAGE,
  autobio:  process.env.AUTO_BIO === undefined ? false : process.env.AUTO_BIO,
  OPENAI_API_KEY:  process.env.OPENAI_API_KEY === undefined ? false : process.env.OPENAI_API_KEY,
  heroku:  process.env.heroku === undefined ? false : process.env.heroku,
  HEROKU: {
    HEROKU: process.env.HEROKU ||false,
    API_KEY: process.env.HEROKU_API_KEY === undefined ? '' : process.env.HEROKU_API_KEY,
    APP_NAME: process.env.HEROKU_APP_NAME === undefined ? '' : process.env.HEROKU_APP_NAME
},
  VERSION: process.env.VERSION === undefined ? 'Ｖ-1.０.１' : process.env.VERSION,
  LANG: process.env.THEME|| 'SECKTOR-2.0',
  WORKTYPE: process.env.WORKTYPE === undefined ? 'public' : process.env.WORKTYPE
};


let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(`Update'${__filename}'`)
    delete require.cache[file]
	require(file)
})
