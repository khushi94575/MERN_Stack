const dns = require("dns");
dns.setServers(["8.8.8.8", "8.8.4.4"]);

const mongoose = require('mongoose');

const url = "mongodb+srv://khushi94575_db_user:GZsuzjROuQUf5xnv@cluster0.gbprybt.mongodb.net/Assignment2";

const connectDB = async () => {
    try {
        await mongoose.connect(url);
        console.log('Database Connected Successfully');
    } catch (error) {
        console.error('Database connection failed:', error.message);
    }
};

module.exports = connectDB;
