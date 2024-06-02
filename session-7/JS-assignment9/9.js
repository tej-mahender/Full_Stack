//1. Create a promise which can be either fulfilled or rejected after 5 secs
let status=true
console.log("promise status after 5 secs")
let pro = new Promise((fulfilled,rejected)=>{
    setTimeout(()=>{
        if(status){
            fulfilled("Promised fulfilled")
        }else{
            rejected("promise failed")
        }
    },5000)
})
pro.then((msg)=>{
    console.log(msg)
})
.catch((msg)=>{
    console.log(msg)
})