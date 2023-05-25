const mongoose = require("mongoose");
const connectDB = async ()=> {
    await mongoose.connect(process.env.MONGODB_URL, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
        .then(() => console.log('MongoDb Connected'))
        .catch((error) => console.log(error))
    
}

module.exports = connectDB;
