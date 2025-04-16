/**


 Copyright (C) 2025.
 Licensed under the  GPL-3.0 License;
 You may not sell this script.
 It is supplied in the hope that it may be useful.
 * @project_name : Free Bot script
 * @author : Malvin King <https://github.com/kingmalvn>
 * @description : A Multi-functional whatsapp bot script.
 * @version 3.0.0
 **/


const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
SESSION_ID: process.env.SESSION_ID || "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiS0NGSkdGZWl1T0VyTVpWdEVmaW4ydUtoWkVIOFZpbkF6dGZnakFvTTkwOD0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiRDVyUFhGQzEwL3IvaEFmdzVKNmJKQ0FxTWZxYzk3K01SMElIZUx6RnVrQT0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJDT0Q0c0tZK01ySTlwOEhVSVFjdnFmVWdJL3RXdmp0T1JHaUo1akkyY0dnPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiI2OWFrN2M5N3J2ekwvRUgwMk1EYmNHdm51R2g0aGdpak1yNGVaQWRIYlVZPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlFNY0tqVnBiQjNlRU1ESTYrME90eUc4QlVjOWU2VXlWb3hRLzNnWDg1bVU9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlBiUmxkaVpuNWpSQ0lFTkIwc3lwV0cwRm5oRzFUNHFGSHBkZVp3T1NyV3M9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoicUpuOU0vZGJHalhyRDRvY2RlNW9SeHZPOWo4QjJNN2pDNEp4a1VXcS9GQT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoidVphRGR4OTBhaTdFcHRmb1liYVp2YWpNa1djU1NuVkFGSjEvMGhYTndoRT0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImxoMWltZGNHeFVwK2xsNW5rYitQbFYwVFBmV3pnK0FMSGljRTNacXF0cHNMS3hJZ2NKeFAreWRqbzJtdEhqUjV0emttWXlzZElzMGUyWEZGalZCSkNnPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTA1LCJhZHZTZWNyZXRLZXkiOiJzR0N5L3BkUVV1aklkNlRnTzA1VVJPUkZNdzR6UVh2M1FvTWlKbVdid1hRPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W3sia2V5Ijp7InJlbW90ZUppZCI6IjkyMzI5NTY5ODk3MEBzLndoYXRzYXBwLm5ldCIsImZyb21NZSI6dHJ1ZSwiaWQiOiJERUNCNDI1NkQxNDBDQ0I4QjdERDE2RUU0RUVDRjQ4NSJ9LCJtZXNzYWdlVGltZXN0YW1wIjoxNzQ0NzY5MzM1fV0sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjoxLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiJXWXd4SVlqY1Q0MlhqWTNReGs2YlJBIiwicGhvbmVJZCI6ImI2YTg1OTFjLTZmM2YtNGZiYi1iNWY0LTFhM2IwODQwZmNiOCIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJwVVRaSmYvVTJQZmlRTWlJeC8rZUZscTBEYzg9In0sInJlZ2lzdGVyZWQiOnRydWUsImJhY2t1cFRva2VuIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoicXZWY0R0QVQ1dGFiNW9pSGhCbGIxT3NzL0dFPSJ9LCJyZWdpc3RyYXRpb24iOnt9LCJwYWlyaW5nQ29kZSI6Ijk1NVpFV1FUIiwibWUiOnsiaWQiOiI5MjMyOTU2OTg5NzA6OUBzLndoYXRzYXBwLm5ldCIsIm5hbWUiOiJNb2hzaW4ifSwiYWNjb3VudCI6eyJkZXRhaWxzIjoiQ0kyZzBya0ZFS2FpL0w4R0dBRWdBQ2dBIiwiYWNjb3VudFNpZ25hdHVyZUtleSI6IjJ1am8zQVhoODBJODM5a2Z6VUEvUmhxdmcyMXI1RERVTkRwUVhBTWxaRms9IiwiYWNjb3VudFNpZ25hdHVyZSI6IjU0cVB6T3RMU0wwbTNYaERNdHRlWXFvR3NiOVpHTU9tUnVHaDYvSFFITWQrTEhzZGxIcDBoYVVYcVlhS1JzcDlaY3JtQ1Z5ZGlLRXdZcExkUFNKRUFBPT0iLCJkZXZpY2VTaWduYXR1cmUiOiJ1OENzSWdRQ2h4WGt4MlVTT1M4bTVrWHlueW9VekdpeHRUUFhHY2pNZE8zQkxycUsrbVBGS0Rsd0dsN1djSTNzcFZuTUdzU3JVdXVzclM3M3ZSN3FDdz09In0sInNpZ25hbElkZW50aXRpZXMiOlt7ImlkZW50aWZpZXIiOnsibmFtZSI6IjkyMzI5NTY5ODk3MDo5QHMud2hhdHNhcHAubmV0IiwiZGV2aWNlSWQiOjB9LCJpZGVudGlmaWVyS2V5Ijp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQmRybzZOd0Y0Zk5DUE4vWkg4MUFQMFlhcjROdGErUXcxRFE2VUZ3REpXUloifX1dLCJwbGF0Zm9ybSI6InNtYmEiLCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXAiOjE3NDQ3NjkzMzEsIm15QXBwU3RhdGVLZXlJZCI6IkFBQUFBRGxTIn0=",
AUTO_READ_STATUS: process.env.AUTO_READ_STATUS || "true",
MODE: process.env.MODE || "private",
AUTO_VOICE: process.env.AUTO_VOICE || "false",
AUTO_STICKER: process.env.AUTO_STICKER || "false",
AUTO_REPLY: process.env.AUTO_REPLY || "false",
ALIVE_IMG: process.env.ALIVE_IMG || "your alive image url",
MENU_IMG: process.env.MENU_IMG || "your menu pic url",
ALIVE_MSG: process.env.ALIVE_MSG || "_Hi 💁🏽 How Can I Assist You. Am alive Now._",
ANTI_LINK: process.env.ANTI_LINK || "true",
ANTI_BAD: process.env.ANTI_BAD || "true",
PREFIX: process.env.PREFIX || ".",
FAKE_RECORDING: process.env.FAKE_RECORDING || "false",
FAKE_TYPING: process.env.FAKE_TYPING || "false",
ALWAYS_ONLINE: process.env.ALWAYS_ONLINE || "true",
CURRENT_STATUS: process.env.CURRENT_STATUS || "true",
AUTO_REACT: process.env.AUTO_REACT || "false",
HEART_REACT: process.env.HEART_REACT || "false",
OWNER_REACT: process.env.OWNER_REACT || "false",
BOT_NAME: process.env.BOT_NAME || "『YOUR BOTNAME 』",
OMDB_API_KEY: process.env.OMDB_API_KEY || "76cb7f39", // omdbapi.com
};
