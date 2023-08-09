const net = require("net")

//set up connection, returns and obj
const connect = function () {
  const conn = net.createConnection({
    host: "localhost",
    port: 50541,
  })

  conn.setEncoding("utf8")
  conn.on("connect",() => {
    conn.write("Name: CJW")
  })
  // conn.on("connect", () => {
  //   conn.write("Move: up")
  // })
  // conn.on("connect", () => {
  //   setInterval(() => {
  //     conn.write("Move: up")}, 50)
  // })
  conn.on("data", (data) => {
    console.log(data)
    console.log("connected to the game")
  })
  return conn
}

module.exports = {
 
  connect
}