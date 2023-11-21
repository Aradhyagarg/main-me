import app from "./app.js";
import { connectDB } from "./ config/database.js";
import cloudinary from "cloudinary";
import Razorpay from "razorpay"
import nodeCron from "node-cron"
import {Stats} from "./models/Stats.js"
const PORT = process.env.PORT || 4000;

cloudinary.v2.config({
    cloud_name: process.env.CLOUDINARY_CLIENT_NAME,
    api_key: process.env.CLOUDINARY_CLIENT_API,
    api_secret: process.env.CLOUDINARY_CLIENT_SECRET,
});

export const instance = new Razorpay({
    key_id: process.env.RAZORPAY_API_KEY,
    key_secret: process.env.RAZORPAY_API_SECRET,
});

/*nodeCron.schedule("0 0 0 1 * *", () => { // 0 har 1 min mai 0 1 har ek ghante mai 0 0 1 har ek din mai 0 0 0 1 har ek mahenai ke 1 tarik ko
    console.log("a");
});*/

nodeCron.schedule("0 0 0 1 * *", async() => {
    try{
        await Stats.create({});
    }catch(error){
        console.log(error);
    }
});

const temp = async() => {
    await Stats.create({});
}

temp();

connectDB();

app.listen(PORT, () => {
    console.log(`Server is working on port: ${PORT}`);
});