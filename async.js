

function thanseela(cb){
    cb()
}

thanseela(function (){
    console.log("callback executed")
});

function task(age){
    return new Promise(function(res,rej){
            setTimeout(function (){
                let data = "";
                if(data){
                    res(data)
                }
                else{
                    rej("404")
                }
            },5000)
    })
}

function then(func){
    let result = "fida";
    func(result)
}

let fullname = "fida ashique";
let fname = fullname.replace("ashique","valavi").toUpperCase().toLowerCase()
console.log(fname)
// task().then((res)=>{
//     return res+" thanseela";
// }).then((shafna)=>{
// console.log(shafna)
// }).catch((error)=>{
//     console.log(error)
// })

async function work(){
    try{
    let data = await task();
    console.log(data)
    }
    catch{
        console.log("error occurred");
    }
}
work();