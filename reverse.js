//Reverse a string

var str="hello world"

console.log("The initial string is: "+str)

var ar=str.split(" ")

console.log(ar)

var result=""

ar.forEach((item)=>{

    // console.log(item[item.length-1])



    for(let i = item.length-1; i>=0 ; i--){

        // let index = item.length-1

        // console.log(index)

        result+=item[i]




    }

    result+=" "

})

console.log("After reversal: "+ result)