let students = [
  {
    id: 101,
    name: "Kartik",
    branch: "CSE",
  },
  {
    id: 102,
    name: "Mukesh",
    branch: "CE",
  },
  {
    id: 103,
    name: "Dhruv",
    branch: "ME",
  },
  {
    id: 104,
    name: "Khushi",
    branch: "ECE",
  },
];

let products = [
  {
    id: 1,
    name: "Laptop",
    price: 699,
  },
  {
    id: 2,
    name: "Mobile",
    price: 46068,
  },
  {
    id: 3,
    name: "Earphone",
    price: 966,
  },
  {
    id: 4,
    name: "Mixer",
    price: 999,
  },
  {
    id: 5,
    name: "Tablet",
    price: 16000,
  },
];

let users = [
  {
    post: "Admin",
    name: "Kumar",
  },
  {
    post: "Admin",
    name: "Mohit",
  },
  {
    post: "Employee",
    name: "Vitin",
  },
  {
    post: "Employee",
    name: "Mohan",
  },
  {
    post: "Employee",
    name: "Kunal",
  },
];

const http = require("http");
const server = http.createServer((req, res) => {
  if (req.method === "GET" && req.url === "/") {
    res.writeHead(200, { "content-type": "text/html" });
    res.end("<h1>HELLO WORLD</h1>");
  } else if (req.method === "GET" && req.url === "/students") {
    res.writeHead(200, { "content-type": "application/JSON" });
    res.end(JSON.stringify(students));
  } else if (req.url == "/users") {
    res.write(JSON.stringify(users));
    res.end();
  } else if (req.url == "/products") {
    res.write(JSON.stringify(products));
    res.end();
  }

  // POST Method

  if (req.method === "POST" && req.url === "/createNewStudent") {
    let body = "";

    req.on("data", (chunk) => {
      body += chunk;
    });

    req.on("end", () => {
      const student = JSON.parse(body);
      students.push(student);

      // Send response AFTER adding student
      res.writeHead(201, { "content-type": "application/json" });
      res.end(
        JSON.stringify({
          message: "student successfully added",
          students,
        }),
      );
    });
  }

  // DELETE
  else if (req.method === "DELETE" && req.url.startsWith("/deleteStudent/")) {
    const id = parseInt(req.url.split("/")[2]);

    students = students.filter((student) => student.id !== id);

    res.writeHead(200, {
      "content-type": "application/json",
    });

    res.end(
      JSON.stringify({
        message: "Student deleted successfully",
        students,
      }),
    );
  }
});

server.listen(3000, () => {
  console.log("SERVER CHAL GYA OYEE!!!!");
});
