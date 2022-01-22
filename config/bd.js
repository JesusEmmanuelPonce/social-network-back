import mongoose from "mongoose";

const connectDB = async() => {

    try {
        await mongoose.connect(process.env.DB, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });

        console.log("connected");

    } catch (error) {
        console.log("no connected", error);   
    }
};

export default connectDB;
