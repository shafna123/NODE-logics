// let n = 5;
// let string = "";
// for (let i = 1; i <= n; i++) {
//     // if(i%2 != 0)
//   // printing spaces
//   {
//   for (let j = 0; j < n - i; j++) {
//     string += " ";
//   }
//   // printing star
//   for (let k = 0; k = i; k++) {
//     string += "*";
//   }
//   string += "\n";
// }
// }
// console.log(string);







// let n = 6;
// let m = 20;
// let string = " ";
//         for ( let i = 1; i <= n; i++)
//         {
          
          
//             if (i == 1 || i == n){
//               for (let j = 1; j <= m; j++)
//                   process.stdout.write ("*");}

//             else{
//             process.stdout.write ("*");
//             for (let j = 1; j <= m-1; j++){
//                   process.stdout.write (" ");}
//           }
//           process.stdout.write ("*");
//         console.log(string);
//         } 






// const http = require('https');
// http.get('https://reqres.in/api/user', (res)=>{         //to send request
//   var content = '';
//   res.on('data', (data)=>{
//     content += data;
//   });
//   res.on('end',()=>{
//     console.log(content)
//   });
// });








// const axios = require('axios')
// axios.get('https://reqres.in/api/users?page=1')
// .then(function(response){
//   console.log(response.data);
// });










//for number pattern printing



let i=1



for (let i = 0; i < 10; i++) {

    // for (let j = 1; j <= i; j++) {

    //   process.stdout.write(`${i} `)

     

   

       

    // }

    // count++

    for (let j = 0; j < 10-i; j++) {

        process.stdout.write(' ')

       

    }

    for(let k=0;k<i;k++){

        process.stdout.write(`${i} `)

    }

    console.log()

}




