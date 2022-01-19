//IP: 165.227.47.243
//PORT: 50541

// establishes a connection with the game server

const {IP, PORT} = require('./constants')
const net = require("net");

const connect = function () {
  const conn = net.createConnection({
    host: IP,
    port: PORT,
  });

  // interpret incoming data as text
  conn.setEncoding("utf8");

  conn.on("connect", () => {

    conn.write('Name: CRO');
    // conn.write('Say: I\'m up');
    console.log('connection established');

  });

  conn.on("data", (data) => {
    // code that does something when the connection is first established
    console.log(data);
  });

  return conn;
};

module.exports = connect;