// >>> Installation du serveur
const express = require("express"); // Installation du serveur
const mongoose = require("mongoose");

const models = require("./models");
console.log(models);
//mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/sportCenters", { 
mongoose.connect("mongodb://localhost/sportCenters", { 
  useNewUrlParser: true, 
  useUnifiedTopology: true,
  useCreateIndex: true,
});

const app = express(); // Installation du serveur

app.set("models",models);

const userRoute = require("./routes/user");

app.use(express.json()); // Installation du serveur

userRoute(app);

app.listen(3000, () => {
  console.log("Serveur lancé avec succès.");
})

// <<< Fin installation du serveur