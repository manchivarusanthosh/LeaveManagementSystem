import express from "express"
import cors from "cors"
import mongoose from "mongoose"
import jwt from "jsonwebtoken"
//const jwt = require('jsonwebtoken');
const app = express()

app.use(express.json())
app.use(express.urlencoded())
app.use(cors())

const JWT_SECRET = "PCS SECRET KEY"

mongoose.connect('mongodb://localhost:27017/emsDB',{
    useNewUrlParser: true,
    useUnifiedTopology:true
},()=>{
    console.log("DB Connected")
})

const userSchema =new mongoose.Schema({
    name:String,
    email:String,
    password:String
})

const User = new mongoose.model("User",userSchema)

//Routes
app.post("/register",(req,res)=>{
    const {name, email, password} = req.body 
    User.findOne({email:email},(err,user)=>{
        console.log(user)
        if(user){
            res.send({message:"User Already registered"})
        }
        else{
            const user = new User({
                name,
                email,
                password
            })
        
            user.save(err =>{
                if(err){
                    res.send(err)
                }else{
                    res.send({message:"Successfully Registered"})
                }
            })
        }
        })
    })
    

app.post("/login",(req,res) =>{
    const {email, password} = req.body
    User.findOne({email:email},(err,user)=>{
        if(user){
            if(password===user.password){
                const token = jwt.sign({
                    user
                }, JWT_SECRET)
                console.log(token)
                
                res.send({message:"Login Successfull",jwt_token:token})
                // res.send({message:"Login Successfull",user:user})
            }
            else{
                res.send({message:"Password didn't match"})
            }
        }else{
            res.send({message:"User Not Registered"})
        }
    })
})

app.listen(9002,() => {
    console.log("BE started at port 9002")
})