let password = 'clipArt66666:66';
let passArray = password.split('');

let nums = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0'];
let bigLetters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
let smallLetters = ['a', 'b', 'c', 'd', 'e,', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
let specialChars = ["!","#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", ":", ";", "<", "=", ">", "?", "@", "[", "^", "_", "`", "{", "|", "}", "~"];

let hasNumbers = [];
// This next two lines of code are arrays to help check if the password contains both upper and lower case letters.
let hasBigLetters = [];
let hasSmallLetters = [];
let hasSpecialChars = [];

for (let i = 0; i < passArray.length; i++){
    if(bigLetters.includes(passArray[i]) === true){
        hasBigLetters.push(passArray[i])
    } else if (smallLetters.includes(passArray[i]) === true){
        hasSmallLetters.push(passArray[i])    
    } else if (nums.includes(passArray[i]) === true){
        hasNumbers.push(passArray[i])
    } else if (specialChars.includes(passArray[i]) === true){
        hasSpecialChars.push(passArray[i])
    }
}

if(passArray.length < 10){
    console.log('This password is not long enough.')
    // This next line is to ensure the password is not too long
} else if(passArray.length > 20){
    console.log('This password is too long.')

}else if(!hasBigLetters.length > 0 && hasSmallLetters.length > 0 && hasNumbers.length > 0 && hasSpecialChars.length > 0){
    console.log("Password must include at least one capital letter.")

} else if(!hasSmallLetters.length > 0){
    console.log("Password must include at least one lowercase letter.")

} else if(!hasNumbers.length > 0){
    console.log("Password must include a number.")

} else if (!hasSpecialChars.length > 0){
    console.log("Password must include at least one special character.")

} else {
    console.log(`Password approved!
    \\/________________        
    /     _____________)
   /     /     /   \\ |         
   \\/\\/\\/     (O) (O)|           
     |           ------, 
     |  _       ______/ 
     | (_      /   \\  \\
     |        /  ___\\_ \\       
     |        \\      / / 
   __|_________\\______/
   \\______________\\./__\\   
    /     .       | \  |
    \\    /_\\   .  |  \\ |\\     
    | \\       /_\\ |   \\| \\
    `)
}    
