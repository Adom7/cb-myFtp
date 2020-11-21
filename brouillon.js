const readline = require ("readline")
const fs = require ('fs');
const inputUserName = process.argv[2]           //NOTE Inutilisable dans le myFtpClient car Argv utiliser par d'autre commandes.
let userExist = 0
const data = fs.readFileSync('/Users/adlaneould/Desktop/Efrei/Node/CodeFlix/onecode/cb-myFtp/connexion.json','utf8')
// console.log(data)
const userInfos = JSON.parse(data)          //NOTE permet de créer un tableau "userInfos" qui contient les 'data'

// console.log(userInfos.userName)
// console.log(userInfos[1])

// userInfos.forEach(element => {                  //NOTE permet d'output toute les infos contenu dans le tableau "userInfos"
//     console.log(element.userName)               //NOTE element.userName nous permet en gros de faire userInfos[1].userName
// });




// userInfos.forEach(element => {
//     if (inputUserName != element.userName) {
//         console.log("Username "+ inputUserName + " Dont Exist");
//     }
//     else {
//         console.log("Congratulation you exist !")
//     }
// });

// while (userExist == false) {
//     userInfos.forEach(element => {
//         if (inputUserName == element.userName) {
//             console.log("Username "+ inputUserName + " Exist\nCongratulations you exist !");
//             userExist == true
//         }
//     });
// }
// console.log(userExist)
//NOTE Ecrit dans myFtpClient avant appel Dylan (Mauvaise manière de le faire.)


const fs = require ('fs');
const command = process.argv[2];
let userExist = 0
const userFile = fs.readFileSync('/Users/adlaneould/Desktop/Efrei/Node/CodeFlix/onecode/cb-myFtp/connexion.json','utf8')
const userInfos = JSON.parse(userFile)

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
//NOTE Permet de poser une question au client avec rl.question(......)
const readline = require ('readline')

const rl = readline.createInterface({       
    input: process.stdin,
    output: process.stdout
});
rl.question('Please enter your username like this : USER <username> \n', (username)=> {
    rl.close()

});




        //NOTE ne pas oublier d'init userExist , le fs.readFileSync et le parse !
      // TODO PARTIE À IMPLÉMENTER !!!!!!!!!          
// for (let i = 0; i < userInfos.length; i++) {
//     const element = userInfos[i];
//     if (element.userName === inputUserName) {
//         console.log("Congratulation you Exist !");                       
//             userExist = 1
//     }
// }
// console.log(userExist)

// if (userExist === 0) {
//     console.log("You do not exist in our System. What Happened ?");
// }


//NOTE Test de Rl.question.


const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('ENTER YOUR PASSWORD : PASS (password) : ', (answer) => { 
  // TODO: Log the answer in a database
  const regex = /\S+/gm ;
  const info = answer.match(regex)
  console.log(info[1])

  rl.close();
});