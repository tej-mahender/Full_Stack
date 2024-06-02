//Contact External API
function getPosts(){
    //async API request
    fetch('https://jsonplaceholder.typicode.com/posts')//returns promise
    .then(response => response.json())
    .then(data => console.table(data))
    .catch(err=>console.log(err))
}
getPosts()

//using async & await
async function getPosts2(){
    try{
    //await makes the control to wait untill fetch is completed
    let res=await fetch('https://jsonplaceholder.typicode.com/posts')
    let data=await res.json()
    console.log(data)
    } catch(er){
        console.log(er)
    }
}
getPosts2()

