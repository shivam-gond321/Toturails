const express = require("express");
const app = express();
const mongoose = require("mongoose");
let bodyParser = require("body-parser");

// main()
//   .then(() => {
//     console.log("This is connected");
//   })
//   .catch(() => {
//     console.log("this is not connected");
//   });

// async function main() {
//   await mongoose.connect("mongodb://127.0.0.1:27017/youtubewe");

//   // use `await mongoose.connect('mongodb://user:password@127.0.0.1:27017/test');` if your database has auth enabled
// }
const DB =
  "mongodb+srv://ecommers4355:Xip8Yx4JfjfmUv0i@shivamcluste.ig2oif8.mongodb.net/?retryWrites=true&w=majority";

mongoose
  .connect(DB)
  .then(() => {
    console.log("You'r connected");
  })
  .catch(() => {
    console.log("you age not connected");
  });

const User = require("./models/rejester");

// hbs

let hbs = require("hbs");
const path = require("path");

app.use(express.urlencoded({ extended: true }));
//this is the path of hbs files

app.set("views", path.join(__dirname, "../templetes/views"));
app.set("view engine", "hbs");
//img path define
app.use(express.static(path.join(__dirname, "../public")));
app.use(express.static(path.join(__dirname, "public")));

//this is path for our partials path
hbs.registerPartials(path.join(__dirname, "../templetes/partials"));

//here we render these files
app.get("/", (req, res) => {
  res.render("index");
});
// for restration
app.get("/rejes.hbs", (req, res) => {
  res.render("rejes");
});

app.post("/rejes.hbs", async (req, res) => {
  // const user = res.body;
  // console.log(res.body);
  const user = new User(req.body);
  await user
    .save()
    .then(() => {
      res.render("welcome");
    })
    .catch(() => {
      res.send("you data is not save");
    });
});
// for my about page randering

app.get("/about", (req, res) => {
  res.render("about");
});
app.get("/services.hbs", (req, res) => {
  res.render("services");
});
app.listen(3000, () => {
  console.log("Hi i am port 3000");
});
