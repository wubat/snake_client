const net = require("net")
const { connect } = require("./client")
const { setupInput } = require("./input")


console.log("connecting...")
connect()
setupInput(connect())