let connection;
const readline = require('readline');

const setupInput = (conn) => {

  connection = conn;
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");


  connection.on("connect", () => {

    stdin.on('data', handleUserInput);

  });

  stdin.resume();
  return stdin;

};

const handleUserInput = function (key) {
  // your code here

  if (key === '\u0077') {

    connection.write('Move: up');

  } else if (key === '\u0061') {

    connection.write('Move: left');

  } else if (key === '\u0073') {

    connection.write('Move: down');

  } else if (key === '\u0064') {

    connection.write('Move: right');

  } else if (key === '\u0020') {

    const rl = readline.createInterface({

      input: process.stdin,
      output: process.stdout
    
    });

    rl.question('Writing: ', (answer) => {

      connection.write(`Say: ${answer}`);
      console.log('Keep playing');

    });

  } else if (key === '\u0003') {

    process.exit();

  }
};

module.exports = setupInput;