

let connection

const setupInput = function(conn)  {
  connection = conn
  const stdin = process.stdin
  stdin.setRawMode(true)
  stdin.setEncoding("utf8")
  stdin.resume()
  stdin.on("data", handleUserInput)
  //stdin.on(connection, handleUserInput)
  return stdin
}

const handleUserInput = function (key) {
  if (key === '\u0003') {
    process.exit();
  }
  else if (key === "a") {
      connection.write("Move: left")
  }
  else if (key === "d") {
      connection.write("Move: right")
  }
  else if (key === "s") {
      connection.write("Move: down")
  }
  else if (key === "w") {
      connection.write("Move: up")
  }
  else if (key === "1") {
    connection.write("Say: GG no RE")
  }
  else if (key === "2") {
    connection.write("smell ya later")
  }
  else if (key === "3") {
    connection.write("look behind u")
  }
  else if (key === "4") {
    connection.write("hola")
  }
}

module.exports = {
  setupInput
}