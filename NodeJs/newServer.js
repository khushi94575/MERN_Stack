const path = require("path");
const dirPath = path.join(__dirname, "localDB.json");
console.log(dirPath);

const http = require("http");
const server = http.createServer((req, res) => {
  res.setHeader("content-type", "application/json");
  if (req.method === "GET" && req.url === "/getstudents") {
    fs.readFile(dirPath, "utf-8", (err, data) => {
      if (err) {
        ((res.statusCode = 500), console.log(err));
      } else {
        let result = JSON.parse(data);
        res.end(JSON.stringify(result));
      }
    });
  } else if (req.method == "POST" && req.url == "/addStudent") {
    const body = "";
    req.on("data", (chunk) => {
      body += chunk;
    });
    req.on("end", () => {
      let newStudent = JSON.parse(body);
      fs.readFile(dirPath, "utf-8", (err, data) => {
        if (err) {
          console.log(err);
        } else {
          let students = JSON.parse(data);
          students.push(newStudent);
          fs.writeFile(
            dirPath,
            JSON.stringify(students, null, 4),
            "utf-8",
            (err) => {
              if (err) {
                console.log(err);
              }
              res.end(
                JSON.stringify({
                  message: "update students successfully",
                  students,
                }),
              );
            },
          );
        }
      });
    });
  }
});
server.listen(3000, () => console.log("server is listening on port 3000"));
