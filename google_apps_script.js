function sendDailySMS() {
  // Define the recipient's email (a phone number @ a cell phone carrier's SMS gateway address)
  // Format: "{recipient's phone number}@{SMS gateway address}";
  // Example: "1234567890@tmomail.net"
  var emailAddress = "";

  // Array of quotes (add as many as you like!)
  var quotesArray = [
    "'Short words are best and the old words when short are best of all'. – Winston Churchill",
    "'However little television you watch, watch less.' – David McCullough",
    "'Make a sense of humour your default emotion.' - Matthew McConaughey",
    "'The work you choose needs to have three qualities: it has to be something you have a natural aptitude for, that you have a deep interest in, and that offers scope to do great work.' - Paul Graham"
  ];

  // Generate a random index
  var randomInteger = Math.floor(Math.random() * quotesArray.length);

  // Define the subject and body of the text message
  var subject = "Quote of the day";
  var message = quotesArray[randomInteger];

  try {
      GmailApp.sendEmail(emailAddress, subject, message);
      Logger.log("Message sent successfully: " + message);
    } catch (e) {
      Logger.log("Error sending message: " + e.message);
    }
}
