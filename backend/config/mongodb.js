import mongoose from "mongoose";

const connectDB = async () => {
  await mongoose
    .connect(`${process.env.MONGODB_URI}`)
    .then(() => {
      console.log(`DB CONNECTED!`);
    })
    .catch((e) => console.log(e));
};

export default connectDB;
