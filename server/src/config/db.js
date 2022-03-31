const mongoose = require("mongoose");


const connect = async () => {
    return await mongoose.connect("");
}

module.exports = connect;