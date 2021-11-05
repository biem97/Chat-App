import databaseConfig from "../../configs/databaseConfigs";
import mongoose from "mongoose";

const connect = async () => {
  // MongoDB Atlas Database connect
  return await mongoose
    .connect(databaseConfig.MONGO_URI)
    .then(() => console.log("MongoDB successfully connected"))
    .catch((err) =>
      console.error(`Can't connect to the MongoDB Atlas: ${err}`)
    );
};

const disconnect = () => {
  return mongoose.disconnect();
};

module.exports = {
  connect,
  disconnect,
  connection: mongoose.connection,
};
