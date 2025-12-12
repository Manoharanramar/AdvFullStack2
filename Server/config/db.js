import mongoose from "mongoose";
export const connectDB = async () => {// /*async->oru process  occurs means next process do not occur*/   /*sync-top to bottom code will run*/
    try{
        await mongoose.connect(process.env.MONGODB_URL);
        console.log('MongoDB connected successfully');
    }
    catch(error){
        console.error('MongoDB connection error:',error);
        process.exit(1);
    }
}
