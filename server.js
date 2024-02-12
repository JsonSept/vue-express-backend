import  express  from "express"
import {config} from "dotenv"
import cors from "cors"
config()

const app = express();
app.use(cors())
app.use(express.json())

app.get("/",(req,res)=>{
    res.send({
        message:"Bonjour!"
    })
})

app.post('/login',(req,res)=>{
    res.send(`Hi,${req.body.email}. You have logged in`)
})

const PORT = process.env.PORT
app.listen(PORT, () => {
    console.log('http://localhost:' + PORT);
})