import express from 'express';
import colors from 'colors';
import dotenv from 'dotenv';
import morgan from 'morgan';
import connectDB from './config/db.js';
import authRoutes from "./routes/authRoutes.js"
import cors from 'cors';





//configure env
dotenv.config();
//reset API
const app = express();
//database config
connectDB();

//body-pars
import bodyParser from 'body-parser';
app.use(bodyParser.json())

//middleWare

app.use(morgan('dev'))
app.use(cors());



//Routes
app.use('/api/v1/auth', authRoutes);











//PORT
const PORT = 8000;




app.get('/',(req, res)=>{
    res.send({
        message:"welcome to ecommer app"
    })
})

app.listen(PORT , ()=> console.log(`server Running on PORT : ${PORT}`.bgCyan.white))