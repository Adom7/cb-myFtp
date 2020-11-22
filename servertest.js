const net = require('net')
const fs = require ('fs');
let userExist = 0
const userFile = fs.readFileSync('/Users/adlaneould/Desktop/Efrei/Node/CodeFlix/onecode/cb-myFtp/connexion.json','utf8')
const userInfos = JSON.parse(userFile)

const server = net.createServer((socket) => {
  console.log('new connection')

  socket.on('data', (data) => {
    const [directive, parameter] = data.toString().split(' ')         //directive correspond au 1er Terme (Command) le second Terme correspond au parametre.
    console.log(parameter);
    switch (directive) {
        case 'CWD':
            try {
                process.chdir(parameter);
                socket.write(`New directory: ${process.cwd()}`);
              } catch (err) {
                socket.write((`chdir: ${err}`));
              }
            
          break;
    }
                  
  })


  socket.write('Hello from server')
})

server.listen(5000, () => {
  console.log('Server started at port 5000')
})