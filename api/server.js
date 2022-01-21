const express = require("express")

const server = express()

server.use(express.json())

server.get("/", (req, res) => {
  res.status(200).json("Hello world")
})
//eslint-disable-next-line
server.use("*", (err, req, res, next) => {
  res.status(err.status || 500).json({
    message: err.message,
    status: err.status,
    error: "something went wrong",
  })
})

module.exports = server
