 var input = require('readline-sync')
 var str = input.question("Enter:")
 var new_str = ''
 for (let i= str.length-1; i>=0;i--) {
    new_str += str[i]
    
 }
if
    (str === new_str){
    console.log("pallindrome")}
    else{ console.log("not a pallindrome")}
