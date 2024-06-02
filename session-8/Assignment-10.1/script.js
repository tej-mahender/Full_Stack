const form=document.querySelector('.calci')
const h1=document.querySelector('.res')

 let firstinput=form.children[1]
 let secondinput=form.children[2]
 let add=form.children[3]
 let sub=form.children[4]
 let mul=form.children[5]
 let div=form.children[6]

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