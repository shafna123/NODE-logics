// const fs = require('fs');
// fs.writeFileSync('myfile.txt','hello');

// function greet(){
//     console.log("hello");
// }

// module.exports = function greet(){
//        console.log("hello");
// }  
// console.log(module);
// module.exports();







// function greet(){
//     console.log("hello");}


// const sec = require ('./sw')        //for single function

// sec();



// const sec = require ('./sw')           //to call multiple functions
// sec.greet();
// sec.sayHi();



// const sec = require ('./sw')             //for table
// console.table(sec)



// const sec = require ('./sw')             //for table
// console.table(sec)

// const sec = require ('./sw')  
// sec();







// const sec = require ('./sw') 
// console.log(sec.name.firstName)                   //created object exported from other file.
// console.log(sec.name.age)








// import sec from './second.mjs';


// sec.greet()

// const sec = require ('./sw')

// console.log(sec.firstName)










// import sec from './second.mjs'
// sec.greetfunc();










     
// Creating the bblSort function
// function tickets(arr){
    
//     for(var i = 0; i < arr.length; i++){
       
//       // Last i elements are already in place 
//       for(var j = 0; j < ( arr.length - i -1 ); j++){
         
//         // Checking if the item at present iteration
//         // is greater than the next iteration
//         if(arr[j] > arr[j+1]){
           
//           // If the condition is true then swap them
//           var temp = arr[j]
//           arr[j] = arr[j + 1]
//           arr[j+1] = temp
//         }
//       }
//     }
//     // Print the sorted array
//     // console.log(arr);
//    }
    
    
//    // This is our unsorted array
//    var arr = [101, 103, 107, 109, 107, 111, 113, 115];
//    console.log (arr);
    
    
//    // Now pass this array to the bblSort() function
//    tickets(arr);






// const fs = require("fs");
// var thanzi = {
//     fullName : 'Thanzeela',
//     age : 22
// }

// var string = JSON.stringify(thanzi);
// fs.writeFileSync("data.json",string);

// console.log("yes")




// console.log("one");
// console.log("two");

// process.stdout.write("one ");
// process.stdout.write("one ");
// process.stdout.write("one ");
// process.stdout.write("one ");








// const fs = require("fs");
// var content = fs.readFileSync("data.json");
// console.log(content);

// const fs = require("fs");
// const numbers = [1, 2, 3, 2, 4, 5, 5, 6];



// for (let i = 0; i < array.length; i++) {
//     const element = array[i];

//     for (let index = 0; index < array.length; index++) {
//         const element = array[index];
        
//     }
    
// }







const service = require('./service')
var page = '1';
service.getData(page);