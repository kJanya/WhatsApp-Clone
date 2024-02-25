import mongoose from 'mongoose';
import dotenv from 'dotenv';
dotenv.config();
const USERNAME=process.env.DB_USERNAME;
const PASSWORD=process.env.DB_PASSWORD;
const Connection=async()=>{
    const URL=`mongodb://Khushi:Khushi19@ac-ewpe4an-shard-00-00.gjdrt6r.mongodb.net:27017,ac-ewpe4an-shard-00-01.gjdrt6r.mongodb.net:27017,ac-ewpe4an-shard-00-02.gjdrt6r.mongodb.net:27017/?ssl=true&replicaSet=atlas-1g2f4s-shard-0&authSource=admin&retryWrites=true&w=majority&appName=clone-whatsapp`;
    try{
        await mongoose.connect(URL,{useUnifiedTopology:true});
        console.log('Database connected succesfully');
    }catch(error)
    {
        console.log('Error while connecting with the database',error.message);

    }
}
export default Connection;