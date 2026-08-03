let users = [
    {
        id:1,
        name:"Khushi",
        age:20
    },
    {
        id:2,
        name:"kartik",
        age:22
    },
    {
        id:3,
        name:"kartik",
        age:24
    }
];


const fs = require("fs");

// fs.writeFile("localDB.json",JSON.stringify(users, null, 3),
// "utf-8",
// (err)=>{
//     if(err){
//         console.log(err);
//         console.log("Db created");
//     }
// })

fs.readdir("./users",(err,data)=>{
    if(err){
        console.log(err)
    }else{
        console.log(data);
    }
})


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



fs.copyFile("./fs.js","newfs.js",(err)=>{
    if(err){
        console.log(err);
    }else{
        console.log("copy")
    }
});