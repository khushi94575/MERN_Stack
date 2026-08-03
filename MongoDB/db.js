const dns=require("dns");
dns.setServers(["8.8.8.8","8.8.4.4"]);



const mongoose=require("mongoose");
 const url = "mongodb+srv://khushi94575_db_user:GZsuzjROuQUf5xnv@cluster0.gbprybt.mongodb.net/?appName=Cluster0"
  connectDB=async()=>{
    await mongoose.connect(url);
    console.log("Connected SuccessFully")
}

module.exports = connectDB;