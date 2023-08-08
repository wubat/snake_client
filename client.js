const net = require("net")

//set up connection, returns and obj
const connect = function () {
  const conn = net.createConnection({
    host: "localhost",
    port: 50541,
  })

  conn.setEncoding("utf8")

  conn.on("data", (data) => {
    console.log(data)
  })
}

module.exports = {
  connect
}