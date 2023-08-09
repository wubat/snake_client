const net = require("net");
const { IP, PORT } = require("./constants");
//set up connection, returns and obj
const connect = function () {
  const conn = net.createConnection({
    host: IP,
    port: PORT,
  });

  conn.setEncoding("utf8")
  conn.on("connect",() => {
    conn.write("Name: CJW")
  });

  conn.on("data", (data) => {
    console.log(data)
    console.log("connected to the game")
  });
  return conn;
}

module.exports = {
  connect
};