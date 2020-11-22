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
    if (directive === 'USER'){
        
    
          for (let i = 0; i < userInfos.length; i++) {
            const element = userInfos[i];
            if (element.userName === parameter) {
                    userExist = 1
            }
        }            
        if (userExist === 0) {
            socket.write("You do not exist in our System. What Happened ?");

        }else if (userExist === 1) {
            socket.write("Congratulation you Exist !");                       
                
        }
    }
                  
  })


  socket.write('Hello from server')
})

server.listen(5000, () => {
  console.log('Server started at port 5000')
})