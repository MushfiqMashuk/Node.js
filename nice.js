for(var i =0; i<3; i++){
    setTimeout(()=>console.log(i), 1000);
    console.log("hello world");
    console.log("hello universe");
    
}

function a(){
    console.log(this);
}
a();
console.log(this);