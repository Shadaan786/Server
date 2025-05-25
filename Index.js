const http = require("http")
// const fs = require("fs")
// const url = require("url")
const express = require("express")


const app = express()

app.get("/", (req, res)=>{
    return res.send("Hello welcome from HomePage")
})

app.get("/about", (req, res)=>{
    return res.send("Helo I am lakke ka bhai from about page" + "hey" + req.query.name + "you are" + req.query.age)
})


// function myHandler(req, res) {

//     if (req.url === "/favicon.ico") return res.end()
//     const log = `${Date.now()}:${req.url} New request received\n`
//     const myUrl = url.parse(req.url, true)
//     console.log(myUrl)
//     fs.appendFile("log.txt", log, (err, data) => {
//         switch (myUrl.pathname) {
//             case '/': res.end("HomePage")
//                 break
//             case '/about':
//                 // res.end("I am lakke ka bhai")
//                 const username = myUrl.query.myname
//                 res.end(`Hi, ${username}`)
//                 break
//             default: res.end("404 Not Found")
//         }

//         // console.log(req.headers)
//         // res.end("Hello from Server")

//     })

// }

app.listen(8000, ()=> console.log("Server started succesfully"))
const myServer = http.createServer(app)
// myServer.listen(8000, () => console.log("Server Started"))



