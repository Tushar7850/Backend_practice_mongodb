const express = require("express");
const app = express();

const userModel = require("./models/user");
const postModel = require("./models/post");

// app.get("/", (req, res) => {
//   res.send("hii");
// });
app.get("/", (req, res) => {
  res.send("hii");
});

app.get("/create", async function (req, res) {
  let user = await userModel.create({
    username: "Tushar",
    age: 25,
    email: "Tush@gmail.com",
  });

  res.send(user);
});

app.get("/post/create", async function (req, res) {
  let post = await postModel.create({
    postdata: "Hello ",
    user: "66ae480b11c45172b61e2d36",
  });

  let user = await userModel.findOne({ _id: "66ae480b11c45172b61e2d36" });
  if (!user) {
    return res.status(404).send({ error: "User not found" });
  }

  console.log('user',user.posts);
  
    user.posts.push(post._id);
  await user.save();

  res.send({ post, user });
});

app.listen(3000);

// -----------------------*****************User Login / Logout *************************----------------------------------

// const express = require("express");
// const app = express();
// const cookieParser = require("cookie-parser");
// const path = require("path");
// const bcrypt = require("bcrypt");
// const jwt = require("jsonwebtoken");
// const userModel = require("./models/user");

// app.set("view engine", "ejs");
// app.use(express.json());
// app.use(express.urlencoded({ extended: true }));
// app.use(express.static(path.join(__dirname, "public")));
// app.use(cookieParser());

// app.get("/", (req, res) => {
//   res.render("index");
// });

// app.post("/create", (req, res) => {
//   let { username, email, password, age } = req.body;

//   bcrypt.genSalt(10, (err, salt) => {
//     bcrypt.hash(password, salt, async (err, hash) => {
//       let createdUser = await userModel.create({
//         username,
//         email,
//         password: hash,
//         age,
//       });

//       let token = jwt.sign({ email }, "shhhhhhhhhhhhhhhhh");
//       res.cookie("token", token);
//       res.send(createdUser);
//     });
//   });
// });

// app.get('/login',function (req,res) {
//   res.render('login')

// })
// app.post('/login',async function (req,res) {
// let user = await  userModel.findOne({email:req.body.email})
// if (!user) return res.send("something went Wrong")
//   console.log(user);

// bcrypt.compare(req.body.password,user.password,function(err,result){
//   if(result){
//     let token = jwt.sign({ email :user.email }, "shhhhhhhhhhhhhhhhh");
//     res.cookie("token", token);
//     res.send('Yes your are login ')
//   }
//     else res.send("something went Wrong")
// })

// })

// app.get('/logout',(req,res)=>{
//   res.cookie('token',"")
//   res.redirect('/')
// })

// app.listen(3000);

// -------------------------cookieParser ----------------------------

// const express = require("express");
// const app = express();
// const bcrypt = require("bcrypt");
// const jwt = require("jsonwebtoken");
// const cookieParser = require("cookie-parser");

// app.use(cookieParser());

// app.get("/", function (req, res) {
//   let token = jwt.sign({ email: "Tush@gmail.com" }, "secret");
//   console.log(token);
//   res.cookie("token", token);
//   res.send("Hello World");
// });

// app.get("/read", (req, res) => {
//   const data = jwt.verify(req.cookies.token, "secret");
//   console.log(data);
// });

// app.listen(3000);

// -----------------------bcrypt-------------------------------
// const express = require("express");
// const app = express();

// const bcrypt = require("bcrypt");

// app.get("/", function (req, res) {

//   // --------------------------convert password into hash--------------------------------
//   // bcrypt.genSalt(10, function (err, salt) {
//   //   bcrypt.hash("Tushar", salt, function (err, hash) {
//   //     console.log(hash);
//   //     res.send("Done")
//   //   });
//   // });

//   // --------------------------Match password And hash--------------------------------
//   // bcrypt.compare(
//   //   "Tushar",
//   //   "$2b$10$2nABGHOr0JfdSHL.3OFjYeYyar9QcRKNhcmDniQ5Hs4RdxWrSbFda",
//   //   function (err, result) {
//   //     console.log(result);
//   //   }
//   // );

// });

// app.listen(3000);

// ---------------------------------Cookie ----------------------------------
// const cookieParser = require('cookie-parser')
// const express =require('express')
// const app = express()

// app.use(cookieParser())

// app.get('/',function(req,res){
//   res.cookie("name","Tushar")
//   res.send('Done')
// })

// app.get('/read',function(req,res){
//  console.log(req.cookies);
// res.send('read page')
// })

// app.listen(3000)

// --------------------------------------------------CRUD OPRATION---------------------------------------------
// const express = require("express");
// const app = express();
// const path = require("path");

// const userModel = require("./models/user");

// app.set("view engine", "ejs");
// app.use(express.json());
// app.use(express.urlencoded({ extended: true }));
// app.use(express.static(path.join(__dirname, "public")));

// app.get("/", (req, res) => {
//   res.render("index");
// });
// app.get("/read", async (req, res) => {
//   let users = await userModel.find();
//   res.render("read", { users });
// });
// app.get("/edit/:id", async (req, res) => {
// let user = await userModel.findOne({_id:req.params.id})
// res.render("edit", { user });

// });
// app.post("/update/:userid", async (req, res) => {
//   let {name,email,image} = req.body
// let user = await userModel.findOneAndUpdate({_id:req.params.userid},{name,email,image},{new:true})
// res.redirect("/read");

// });
// app.get("/delete/:id", async (req, res) => {
//   let users = await userModel.findOneAndDelete({_id:req.params.id});
//   res.redirect("/read");
// });
// app.post("/create", async (req, res) => {
//   console.log(req.body)
//   let { name, email, image } = req.body
//   let createdUser = await userModel.create({
//     name,
//     email,
//     image,
//   })
//   res.redirect('/read')
// });

// app.listen(3000)
