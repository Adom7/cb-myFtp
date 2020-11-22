const net = require('net')
const fs = require ('fs');
let userExist = 0
const userFile = fs.readFileSync('/Users/adlaneould/Desktop/Efrei/Node/CodeFlix/onecode/cb-myFtp/connexion.json','utf8')
const userInfos = JSON.parse(userFile)
let userConnected = 0
let password = null
let username = null
const dirList = fs.readdirSync(__dirname , "utf-8")

const server = net.createServer((socket) => {
  console.log('new connection')

  socket.on('data', (data) => {
    const [directive, parameter] = data.toString().split(' ')         //directive correspond au 1er Terme (Command) le second Terme correspond au parametre.
    switch(directive) {
        case 'USER':
          for (let i = 0; i < userInfos.length; i++) {
            const element = userInfos[i];
            if (element.userName === parameter) {
                    password = element.passWord
                    userExist = 1
            }
        }            
        if (userExist === 0) {
            socket.write("You do not exist in our System. What Happened ?");

        }else if (userExist === 1) {
                username = parameter    
                socket.write('Hello '+ username)                
                socket.write("PLease enter your Password : PASS <password>");   
                  
        }
            break;
        case 'PASS':
                if (userExist === 0) {
                  socket.write('You have to enter a valid username first')
                }else if (userExist === 1 ) {
                    if (parameter != password) {
                        socket.write("The password is wrong, try again")
                    }else if (parameter === password) {
                        socket.write("Welcome "+username+ ",you're now connected.")
                        userConnected = 1;
                    }
                }
                break;

          case 'LIST':
            if (userConnected === 0) {
              socket.write('You have to be connected to have access to this command !')
            }else if (userConnected === 1 ) {
              socket.write(dirList.toString().replace(/,/gm,'\n'));
            }
          break;

          case 'CWD':
            if (userConnected === 0) {
              socket.write('You have to be connected to have access to this command !')
            }else if (userConnected === 1 ) {
              try {
                process.chdir(parameter);
                socket.write(`New directory: ${process.cwd()}`);
              } catch (err) {
                socket.write((`chdir: ${err}`));
              }
            }
          break;

          case 'RETR':
            if (userConnected === 0) {
              socket.write('You have to be connected to have access to this command !')
            }else if (userConnected === 1 ) {
              socket.write(fs.readFileSync(parameter,"utf-8"))
            }
          break;

          case 'STOR':
            if (userConnected === 0) {
              socket.write('You have to be connected to have access to this command !')
            }else if (userConnected === 1 ) {
              console.log(fs.readFileSync(parameter,"utf-8"));
            }
          break;

          case 'PWD':
            if (userConnected === 0) {
              socket.write('You have to be connected to have access to this command !')
            }else if (userConnected === 1 ) {
              socket.write(__dirname);
            }
          break;

          case 'HELP':
              socket.write('USER <username>: check if the user exist\nPASS <password>: authenticate the user with a password\n'+
              'LIST: list the current directory of the server\nCWD <directory>: change the current directory of the server\n'+
              'RETR <filename>: transfer a copy of the file FILE from the server to the client\n'+
              'STOR <filename>: transfer a copy of the file FILE from the client to the server\n'+
              'PWD: display the name of the current directory of the server\n'+
              'HELP: send helpful information to the client')
          break;

          case 'QUIT':
              socket.write('You have been disconnected. HAVE A GOOD DAY !')
              socket.emit("end")
            break;

            }
            
           
  })


  
})

server.listen(5000, () => {
  console.log('Server started at port 5000')
})