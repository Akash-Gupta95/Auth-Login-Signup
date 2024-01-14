import mongoose from "mongoose";
import Colors from "colors";
const connectDB = async ()=>{
    const GO_URL = 'mongodb+srv://akashkashyapy:ak%401611xx@ecommerce.cotdcu3.mongodb.net/ecommerceGO_URL';

    try{
        const conn = await mongoose.connect(GO_URL);
        console.log(`Connected to mongodb Database ${conn.connection.host}.`.bgMagenta.white)
    }catch(error){
        console.log(`error in mongodb ${error}`.bgRed.white)
    }
}

export default connectDB;