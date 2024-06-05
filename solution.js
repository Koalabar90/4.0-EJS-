import express from "express";
import path from 'path';


const app = express();
const port = 3000;

app.get("/", (req, res) => {
  const today = new Date();
  const day = today.getDay();

  let type = "a weekday";  // Default-Wert
  let adv = "it's time to work hard";  // Default-Wert

  if (day === 0 || day === 6) {
    type = "the weekend";
    adv = "it's time to have some fun";
  }

  // Konsolenausgaben zur Überprüfung der Variablenwerte
  console.log("Day Type:", type);
  console.log("Advice:", adv);

  // Daten an das EJS-Template senden
  res.render("solution", {  // Stelle sicher, dass 'solution' der Name deiner EJS-Datei ist (ohne '.ejs')
    dayType: type,
    advice: adv,
  });
});


app.listen(port, () => {
  console.log(`Server running on port ${port}.`);
});
