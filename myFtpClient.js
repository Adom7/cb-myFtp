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

        rl.on('line', (request) =>[
            client.write(request)
           ])
    });

client.on('data', (data) => {
  console.log(data.toString())
})
client.on("end", (data)=>{
    process.exit(0)
})