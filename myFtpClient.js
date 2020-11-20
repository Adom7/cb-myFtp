const readline = require ("readline")
const fs = require ('fs');
const { rawListeners } = require("process");
const command = process.argv[2];
let userExist = 0
const data = fs.readFileSync('/Users/adlaneould/Desktop/Efrei/Node/CodeFlix/onecode/cb-myFtp/connexion.json','utf8')
const userInfos = JSON.parse(data)

if (!process.argv[2]){
    console.log("You must enter a command \nType HELP to list the commands.") // si la commande n'est pas rensigner.
    process.exit(0)
}
else{
    if (process.argv[2] == 'USER' ) {
        let username = process.argv[3]
        if (!username) {
            console.log("Usage : node e01.js <username> ")                   // si l'username n'est pas renseigner.
            process.exit(0)
        }
        else {
            for (let i = 0; i < userInfos.length; i++) {
                const element = userInfos[i];
                if (element.userName === process.argv[3]) {
                        userExist = 1
                }
            }            
            if (userExist === 0) {
                console.log("You do not exist in our System. What Happened ?");
                //NOTE User dont exist the code will just end with a prompt telling the client.
            }if (userExist === 1) {
                console.log("Congratulation you Exist !");                       
                    //NOTE User exist you have to ask the password of the account
                    // TODO Use rl.question to get a respond by the user , if the respond if false, you have to user process.exit(0) with a log(wrong pass) 
                    //ANCHOR use the userInfos[i].passWord to verify, use same method then username.
            }
        }
    
    }
}



// const rl = readline.createInterface({
//     input: process.stdin,
//     output: process.stdout
//   });
//   rl.question('Username ?'),
//   rl.question('What is your favorite food? ', (answer) => {
//     console.log(`Oh, so your favorite food is ${answer}`);

//     rl.close()
//   });


  

// Must Handle all of those :
/*
USER <username>: check if the user exist
PASS <password>: authenticate the user with a password
LIST: list the current directory of the server
CWD <directory>: change the current directory of the server
RETR <filename>: transfer a copy of the file FILE from the server to the client
STOR <filename>: transfer a copy of the file FILE from the client to the server
PWD: display the name of the current directory of the server
HELP: send helpful information to the client
QUIT: close the connection and stop the program
*/