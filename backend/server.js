var express = require('express')
var bodyParser = require('body-parser')
var cors=require('cors')
var mongodb= require('mongodb')
var expressFileupload = require('express-fileupload');
var session = require('express-session')
var database= require('./database')
var app = express()
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use(cors())

app.use(session({
    secret:'cat',
    resave:false,
    saveUninitialized:true
}))

app.post('/register', async (req, res) => {
    let registerData = {
        name: req.body.username,
        category: req.body.category,

    }

    let loginData = {
        email: req.body.email,
        password: req.body.password,
        userStatus: req.body.status
    }
    try {
        const db = await database
        const registerResult = await db.collection('register').insertOne(registerData)
        loginData.userId = registerResult.insertedId
        await db.collection('login').insertOne(loginData)
        res.json("success")

    } catch (err) {
        console.error(err)
    }
})

app.post('/login', (req, res) => {
    let logindetails = {
        email: req.body.username,
        password: req.body.userPassword
    }
    // console.log(email);
    // console.log(password);
    database.then((db) => {
        return db.collection('login').findOne({ email: logindetails.email }).then((result) => {
            console.log(result);
            let user = result
            if (user) {
                if (user.password == logindetails.password) {
                    req.session.user = user

                    if (user.userStatus == 0) {
                        res.json(user)
                    }
                    else if (user.userStatus == 1) {
                        res.json(user)
                    }
                    else if (user.userStatus == 2) {
                        res.json(user)
                    }
                    else {
                        res.json('invalid')
                    }
                }
                else {
                    res.json('invalid')
                }
            }
            else {
                res.json('invalid')
            }
        })
    })
})

app.listen(5000)