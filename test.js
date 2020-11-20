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



        //NOTE ne pas oublier d'init userExist , le fs.readFileSync et le parse !
/*      // TODO PARTIE À IMPLÉMENTER !!!!!!!!!          
for (let i = 0; i < userInfos.length; i++) {
    const element = userInfos[i];
    if (element.userName === inputUserName) {
        console.log("Congratulation you Exist !");                       
            userExist = 1
    }
}
console.log(userExist)

if (userExist === 0) {
    console.log("You do not exist in our System. What Happened ?");
}
*/