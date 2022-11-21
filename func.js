function executeThis(task){
    console.log("EXECUTING*******");
    task();
}

executeThis(name=>{
    console.log("hello"+ name);
});