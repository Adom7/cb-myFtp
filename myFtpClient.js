const net = require('net')
const readline = require ('readline')
const client = new net.Socket()

//NOTE Permet de poser une question au client avec rl.question(......)
const rl = readline.createInterface({       
    input: process.stdin,
    output: process.stdout
});
client.connect(5000, '127.0.0.1', () => {
  console.log('connected')
    rl.question('Please enter your username like this : USER <username> \n',(username)=> {
        client.write(username)
        rl.close()
    
    });
    rl.question('Please enter your password like this : PASS <password> \n ',(password)=>{
        client.write(password)
        rl.close()
    });

})

client.on('data', (data) => {
  console.log(data.toString())
})