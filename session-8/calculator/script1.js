const form=document.querySelector("form")
const h1=document.querySelector('.res')

 let firstinput=form.children[0]
 let secondinput=form.children[1]
 let add=form.children[2]
 let sub=form.children[3]
 let mul=form.children[4]
 let div=form.children[5]

form.addEventListener('submit',(event)=>{
    //stop page to refresh
    event.preventDefault();
})
add.addEventListener('click',()=>{
     let a=Number(firstinput.value)      //get the values of the input
     let b=Number(secondinput.value)
     let sum=a+b      //find sum
     h1.textContent=sum      //append to body
})
sub.addEventListener('click',()=>{
    let a=Number(firstinput.value)
    let b=Number(secondinput.value)
    let sum=a-b
    h1.textContent=sum;
})
mul.addEventListener('click',()=>{
    let a=Number(firstinput.value)
    let b=Number(secondinput.value)
    let sum=a*b
    h1.textContent=sum;
})
div.addEventListener('click',()=>{
    let a=Number(firstinput.value)
    let b=Number(secondinput.value)
    let sum=a/b
    h1.textContent=sum;
})