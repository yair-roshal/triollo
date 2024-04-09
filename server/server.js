require("rootpath")()
const express = require("express")
const app = express()
const bodyParser = require("body-parser")
const cors = require("cors")
const routes = require("./routes/index")

const { corsOptions } = require("./constants/config")

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.use(cors(corsOptions))

app.use("/", routes)

let port1 = 5005

app.listen(port1, () => {
  console.log(`Server is running on port ${port1}`)
})

// let port = 443

// https.createServer(httpsOptions, app).listen(port, () => {
//   console.log("https Web server started at port : ", port)
// })
