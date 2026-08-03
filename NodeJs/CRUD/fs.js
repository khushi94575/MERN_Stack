let users = [
    {
        id:1,
        name:"Khushi",
        age:20
    },
    {
        id:2,
        name:"Kartik",
        age:22
    },
    {
        id:3,
        name:"aman",
        age:24
    }
];


// const fs = require("fs");

// fs.writeFile("../../DB.json",JSON.stringify(users, null, 4),
// "utf-8",
// (err)=>{
//     if(err){
//         console.log(err);
//     }
//         console.log("Db created");
// })

// fs.readdir("./users",(err,data)=>{
//     if(err){
//         console.log(err)
//     }else{
//         console.log(data);
//     }
// })


// fs.appendFile("localDB.json",JSON.stringify("this is my append file "),"utf-8",(err)=>{
//     if(err)console.log(errr);
//     console.log("update syccessful ");
// });

// fs.rename("localDB.json","newDB.json",(err)=>{
//     if(err) console.log(err);
//     console.log("rename done!");
// })


// fs.unlink("localDB.json")

// fs.mkdir("users",(err)=>{
//     if(err){
//         console.log(err);
//     }else{
//         console.log("Folder created");
        
//     }
// })



// fs.copyFile("./fs.js","newfs.js",(err)=>{
//     if(err){
//         console.log(err);
//     }else{
//         console.log("copy")
//     }
// });


// fs.rmdir("users",(err)=>{
//     if(err){
//         console.log(err);
//     }else{
//         console.log("directory Removed successfully");
//     }
// })




const deleteUser = (id) => {
    fs.readFile("../../DB.json", "utf-8", (err, data) => {
        if (err) {
            console.log(err);
            return;
        }

        let users = JSON.parse(data);

        users = users.filter(user => user.id !== id);
        fs.writeFile(
            "../../DB.json",
            JSON.stringify(users, null, 4),
            "utf-8",
            (err) => {
                if (err) {
                    console.log(err);
                    return;
                }

                console.log("User deleted successfully");
            }
        );
    });
};


deleteUser(2);