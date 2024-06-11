const form=document.querySelector('form')
const h1=document.querySelector('.res')

 let input=form.children[1]


form.addEventListener('submit',(event)=>{
    //stop page to refresh
    event.preventDefault();
    let num=Number(input.value)
    let factors=[]
    for(let i=1;i<=num;i++){
        if(num%i==0){
            factors.push(i)
            }
    }
    h1.textContent=factors.join(', ')
})
