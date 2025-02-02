

module.exports = {
  TOKEN: "",
  language: "en",
  ownerID: ["985823522326728704", ""], 
  mongodbUri : "mongodb+srv://shiva:shiva@musicbotyt.ouljywv.mongodb.net/?retryWrites=true&w=majority",
  setupFilePath: './commands/setup.json',
  commandsDir: './commands',  
  embedColor: "#7b5355",
  activityName: "유튜브", 
  activityType: "LISTENING",  // Available activity types : LISTENING , PLAYING
  SupportServer: "https://youtu.be/48pLlMQWg4w?si=9QOj6CMT3AnOHIKB",
  embedTimeout: 5, 
  errorLog: "", 
  nodes: [
     {
      name: "Koi Node V4",
      password: "prplmoe.me",
      host: "lavav4.prplmoe.me",
      port: 1118,
      secure: false
    },
    {
      name: "ChalresNaig Node",
      password: "NAIGLAVA-dash.techbyte.host",
      host: "lavahatry4.techbyte.host",
      port: 3000,
      secure: false
    }
  ]
}
