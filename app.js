const express = require("express");
const app = express();

const userModel = require("./usermodel");

app.get("/", (req, res) => {
  res.send("hey");
});

app.get("/create", async (req, res) => {
  let createduser = await userModel.create({
    name: "Tushar",
    email: "Tushar@gmail.com",
    username: "tushar",
  });

  res.send(createduser);
});

app.get("/update", async (req, res) => {
 let updateUser = await userModel.findOneAndUpdate({username:"tushar"},{name:"Tushar Sawant"},{new:true})
  res.send(updateUser);
});

app.get("/read", async (req, res) => {
 let users = await userModel.find({username:'tushar'});
  res.send(users);
});

app.get("/delete", async (req, res) => {
 let users = await userModel.findOneAndDelete({name:'Tushar'});
  res.send(users);
});

app.listen(3000);
