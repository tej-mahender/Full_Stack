//creating a promise
let rank=false;
const pro=new Promise((fulfilled,rejected)=>{
    setTimeout(()=>{
        if(rank){
            fulfilled("Promise fulfilled")
        }else{
            rejected('failed')
        }
    },6000)
})
//console.log(pro)

//consuming promise
//then-executed when promise is fulfilled
//catch-executes when promise is rejected
pro.then((msg)=> {
    console.log("Msg from promise:",msg)
})
.catch((msg)=>{
    console.log("Msg in promise:", msg);
});
