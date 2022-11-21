var arr=[45,63,73,78,56,36,67,133]
var arodd=[];
var areven=[];

// for (let i = 0; i < arr.length; i++) {
//     if (arr[i] % 2 ==0) {
//         areven.push(arr[i])
//     }
//     else{
//         arodd.push(arr[i])
//     }
// }

arr.forEach((i)=>{
    if(i%2 == 0){
        areven.push(i)

    }
    else{
        arodd.push(i)
    }
    
})
console.log("Odd numberrs are: ")
    console.log(arodd)
    console.log("Even numberrs are: ")
    console.log(areven)