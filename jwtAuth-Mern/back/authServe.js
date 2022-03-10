const express = require("express")
const jwt = require("jsonwebtoken")
const bcrypt = require('bcryptjs')
const dotenv = require('dotenv');
const app = express()
// const bodyParser = require('body-parser')
const PORT = 4000
const DataBase = "mongodb://localhost/Auth"
dotenv.config();
const tokenkey = process.env.TOKEN_SECRET // my secret key to generate a jwt

const mongoose = require('mongoose');
const User = require('./models/Usermodel');


const port = (process.env.PORT || '4000')

// database connexion
mongoose.connect(DataBase, {useNewUrlParser : true, useUnifiedTopology : true})
        .then(() => console.log(`app is succefuly connected to Auth Database...`))
        .catch((e) =>{
            console.log(`error when trying to connect with data base Auth : ${e}`)
        })

// app.use(bodyParser.urlencoded({parameterLimit: 10000, limit: '50mb', extended: true }));
app.use(express.json())


// gestion du CORS
app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*')
  res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization')
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS')
  next()
})

// fonction verification du token
const verifyToken = (req, res, next) => {
  const token = req.body.token || req.query.token || req.headers["x-access-token"]
  if (!token) {
      return res.status(403).send("A token is required for authentication")
  }
  try {
      let tokenPayload = jwt.verify(token, tokenkey)
      req.user = tokenPayload
  } catch (error) {
      return res.status(401).send(`Invalid Token : ${error}`)
  }
  next()
}
 
app.listen(port, () => console.log(`server is running on port ${port}... Press < Ctrl + C > to stop it`))



// Verification Autorisation to access
app.post("/Home", verifyToken, (req, res) => {
    // res.status(200).send(" Welcome, we are happy to see you today ! ")
    res.status(200).json({
      user: req.user
    })
    console.log(req.user)
})



// Register route
app.post("/register", async (req, res) => {
  console.log(req.body)
  try {
      // Get user input by destructuring syntax
      const first_name = req.body.first_name;
      const last_name = req.body.last_name;
      const email = req.body.email;
      const password  = req.body.password;
      console.log(email)
      // Validate user input
      if (!(email && password && first_name && last_name)) {
        return res.status(400).send("All input are required");
      }

      // check if user already exist
      // Validate if user exist in our database
      const oldUser = await User.findOne({ email });

      if (oldUser) {
        console.log("User Already Exist. Please Login")
        return res.status(409).json({
          message: "User Already Exist. Please Login"
        });
      }

      //Encrypt user password will generate a hash of 10 digit
      encryptedPassword = await bcrypt.hash(password, 10);

      // Create user in our database
      const user = await User.create({
        first_name,
        last_name,
        email: email.toLowerCase(), // convert email to lowercase
        password: encryptedPassword
      });
     
      // return new user
      res.status(201).json({
        message: "user succefuly create in database",
        user: user
      });
  } catch (error) {
      console.log(error);
  }

});


// Login route
app.post("/login", async (req, res) => {
  try {
      // Get user input
      const { email, password } = req.body;

      // Validate user input
      if (!(email && password)) {
        res.status(400).send("All input is required");
      }
      // Validate if user exist in our database
      const user = await User.findOne({ email });

      if (user && (await bcrypt.compare(password, user.password))) {
        // Create token
        const token = jwt.sign(
          { 
            userId : user._id,
            userEmail:  user.email,
            userName: user.first_name,
            userPrenom: user.last_name
          },
          tokenkey,
          {
            expiresIn: 60,  // 1 min
          }
        );

        // save user token
        user.token = token;

        // user
        res.status(200).json({
          message: "user succefuly login",
          user: user
        });
      }
      res.status(400).send("Invalid Credentials");
  } catch (error) {
      console.log(error);
  }
});