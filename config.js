const fs = require('fs-extra')
if (fs.existsSync('config.env')) require('dotenv').config({ path: __dirname+'/config.env' })


//═══════[Required Variables]════════\\
global.owner = process.env.OWNER_NUMBER.split(",")
global.mongodb = process.env.MONGODB_URI || "mongodb+srv://sam:sam@cluster0.u1smxsv.mongodb.net/?retryWrites=true&w=majority"
global.port= process.env.PORT || 5000
global.email = 'sam@secktor.live'
global.github = 'https://github.com/excelottah6/IZUKU-MD'
global.location = 'Sultanpur IN'
global.gurl = 'https://instagram.com/' // add your username
global.sudo = process.env.SUDO || '2347039570336,923466319114'
global.devs = '2347039570336';
global.website = 'https://github.com/excelottah6/IZUKU-Md' //wa.me/+91000000000000
global.THUMB_IMAGE = process.env.THUMB_IMAGE || 'https://raw.githubusercontent.com/SecktorBot/Brandimages/main/logos/SocialLogo%201.png'
module.exports = {
  botname:   process.env.BOT_NAME === undefined ? 'IZUKU 𝐁𝐨𝐭' : process.env.BOT_NAME,
  ownername: process.env.OWNER_NAME === undefined ? 'excel' : process.env.OWNER_NAME,
  sessionName:  process.env.SESSION_ID === undefined ? 'eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiV1A2cDBUNzNGY0ZvVWpNaG9lRVBscTliZU9KTFE4dlZ5am1mNkZaaEExMD0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiWVU3dzl0UHYxbnRpYlNzdzFMYkhIRnFWWGpBeXc3MTh2ai9odVlFZi9ucz0ifX0sInNpZ25lZElkZW50aXR5S2V5Ijp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJpT0UyN29tVi9VWUtaT1ptUWtoRXF6a1Z6Y1psK1A4SzN4bTNCdWNXblZ3PSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJhd2RMUHBiVnZ5OWtya0JNdGpjRnExeTcvZ0tVZGxoL0RBdE1CKzhCdURJPSJ9fSwic2lnbmVkUHJlS2V5Ijp7ImtleVBhaXIiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkNNZENqSTB6RUxibll6czRVTkdROWFuaXBqNjBzWEdnSVgvQkVqZ3J5Rnc9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IngxY2Nac3JMQStYR0ZhQ2s0bGw2VFM3NmhDcHV3YnlEYkdzVk1rYlRxaUE9In19LCJzaWduYXR1cmUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJJUStycldQK2JBcmUvZVNkZG5tVUZIQWN3TzNjbEg0eUdUN3EzYjB1NEpVN3JyN0VZSERpMlRhanVjZWhGLzQ3ckdGTU1qblgvaXgrOW9ueXVPY1REUT09In0sImtleUlkIjoxfSwicmVnaXN0cmF0aW9uSWQiOjE4MiwiYWR2U2VjcmV0S2V5IjoiUDhWZHZZWlBPMVFDVkNBaEhyanZ2S2ZURlVPSyszeHp0cjQ0Ujl1bHZZND0iLCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXMiOltdLCJuZXh0UHJlS2V5SWQiOjMxLCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZCI6MzEsImFjY291bnRTeW5jQ291bnRlciI6MCwiYWNjb3VudFNldHRpbmdzIjp7InVuYXJjaGl2ZUNoYXRzIjpmYWxzZX0sImRldmljZUlkIjoiVWtLOW16c0NTUFdmYjU0WF9NWjRnQSIsInBob25lSWQiOiJiYjkwNWEzOS1jOTIyLTQ0MTQtYTk0Yi1lYWU4YzIzN2JlN2YiLCJpZGVudGl0eUlkIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQUluVlAzOE1ZNW9QY1A3OExtRFFZZndQSkxjPSJ9LCJyZWdpc3RlcmVkIjpmYWxzZSwiYmFja3VwVG9rZW4iOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiI1QWpyeGlsZ2RkU0FjWStYUVFEY0wvNENmMlk9In0sInJlZ2lzdHJhdGlvbiI6e30sImFjY291bnQiOnsiZGV0YWlscyI6IkNJZUkxUGtFRUluOXJxb0dHQUVnQUNnQSIsImFjY291bnRTaWduYXR1cmVLZXkiOiJFTHJML2JNN2daUEF2ZjM2YWJaUnlsUjI1aE9SL0lwT0oyclFIcWFPYnpzPSIsImFjY291bnRTaWduYXR1cmUiOiJ3YXBvMi8xbzN6RTVGVTVsaWdWcXIvVUFNMFhWTDZ1YlJ1dVZxSHVYYWVhdk14eE5RYWVwOGZvVWZaR3FEOWZoOUgwNm83cGtLb0ZUdmY5ZmFrYVpEdz09IiwiZGV2aWNlU2lnbmF0dXJlIjoiZkxwQ0dFSlFJVFY4bG4weFkraDZLRExqU3NQY1ltWjJMangzRlRyWlZkeFRMbVljc0pxVkxMS1BnUE94QVNMMUZmTWJpN0U5MlFhT1hIMmhBZTdRQ0E9PSJ9LCJtZSI6eyJpZCI6IjEyMTAzNDgzMDQ3OjhAcy53aGF0c2FwcC5uZXQifSwic2lnbmFsSWRlbnRpdGllcyI6W3siaWRlbnRpZmllciI6eyJuYW1lIjoiMTIxMDM0ODMwNDc6OEBzLndoYXRzYXBwLm5ldCIsImRldmljZUlkIjowfSwiaWRlbnRpZmllcktleSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkJSQzZ5LzJ6TzRHVHdMMzkrbW0yVWNwVWR1WVRrZnlLVGlkcTBCNm1qbTg3In19XSwicGxhdGZvcm0iOiJpcGhvbmUiLCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXAiOjE2OTk0NjI3OTV9' : process.env.SESSION_ID,
  author:  process.env.PACK_INFO.split(";")[0] === undefined ? 'excel' : process.env.PACK_INFO.split(";")[0],
  auto_read_status :  process.env.AUTO_READ_STATUS === undefined ? false : process.env.AUTO_READ_STATUS,
  packname:  process.env.PACK_INFO.split(";")[1] === undefined ? 'IZUKU-Md' : process.env.PACK_INFO.split(";")[1],
  autoreaction:  process.env.AUTO_REACTION  === undefined ? false : process.env.AUTO_REACTION ,
  antibadword :  process.env.ANTI_BAD_WORD === undefined ? 'nbwoed' : process.env.ANTI_BAD_WORD,
  alwaysonline:  process.env.ALWAYS_ONLINE === undefined ? false : process.env.ALWAYS_ONLINE,
  antifake : process.env.FAKE_COUNTRY_CODE === undefined ? '971' : process.env.FAKE_COUNTRY_CODE,
  readmessage:  process.env.READ_MESSAGE === undefined ? false : process.env.READ_MESSAGE,
  auto_status_saver: process.env.AUTO_STATUS_SAVER === undefined ? false : process.env.AUTO_STATUS_SAVER,
  HANDLERS:  process.env.PREFIX === undefined ? ['.'] : process.env.PREFIX,
  warncount : process.env.WARN_COUNT === undefined ? 3 : process.env.WARN_COUNT,
  disablepm:  process.env.DISABLE_PM === undefined ? false : process.env.DISABLE_PM,
  levelupmessage:  process.env.LEVEL_UP_MESSAGE === undefined ? true : process.env.LEVEL_UP_MESSAGE,
  antilink:  process.env.ANTILINK_VALUES === undefined ? 'chat.whatsapp.com' : process.env.ANTILINK_VALUES,
  antilinkaction: process.env.ANTILINK_ACTION === undefined ? 'remove' : process.env.ANTILINK_ACTION,
  BRANCH: 'main', 
  ALIVE_MESSAGE:  process.env.ALIVE_MESSAGE === undefined ? '' : process.env.ALIVE_MESSAGE,
  autobio:  process.env.AUTO_BIO === undefined ? '' : process.env.AUTO_BIO,
  OPENAI_API_KEY:  process.env.OPENAI_API_KEY === undefined ? false : process.env.OPENAI_API_KEY,
  heroku:  process.env.heroku === undefined ? false : process.env.heroku,
  HEROKU: {
    HEROKU: process.env.HEROKU ||false,
    API_KEY: process.env.HEROKU_API_KEY === undefined ? '' : process.env.HEROKU_API_KEY,
    APP_NAME: process.env.HEROKU_APP_NAME === undefined ? '' : process.env.HEROKU_APP_NAME
},
  VERSION: process.env.VERSION === undefined ? 'v.0.0.3' : process.env.VERSION,
  LANG: process.env.THEME|| 'IZUKU',
  WORKTYPE: process.env.WORKTYPE === undefined ? 'private' : process.env.WORKTYPE
};


let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(`Update'${__filename}'`)
    delete require.cache[file]
	require(file)
})
