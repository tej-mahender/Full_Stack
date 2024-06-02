//access head
let head = document.head
console.log('Head is ',head)

//access body
let body = document.body
console.log('Body is ',body)

//access other elements
let h1=document.querySelector('h1')
console.log(h1)

let p=document.querySelector('.first')
console.log(p)

let h2=document.querySelector('#second')
console.log(h2)

//access children from a parent
let parent = document.querySelector('div')
console.log(parent)
console.log(parent.children)//displays array of children
//accessing children individually
console.log(parent.children[0])
console.log(parent.children[1])
console.log(parent.children[2])

//accessing parent from children





//ADDING INTERACTIVITY
//adding event listeners
//event listener is a function that is called when an event occurs
h1.addEventListener('click',()=>{

    //change styles when clicked
    h1.style.color='blue'

    //change content
    h1.textContent='I was clicked'
})

//increment counter example
let counter=document.querySelector('.counter')
let incB=document.querySelector('.inc')
let decB=document.querySelector('.dec')
incB.addEventListener('click',()=>{
    counter.textContent=Number(counter.textContent)+1
})
decB.addEventListener('click',()=>{
    counter.textContent=Number(counter.textContent)-1
})


//create html element
let a=document.createElement('h3')
//add text to element
a.textContent='I am a new element'
//add element to the DOM
//document.body.appendChild(a)
parent.appendChild(a)


//display array elements
let numbers=[10,20,30]

let add=document.querySelector('.add')

add.addEventListener('click',()=>{
        numbers.push(100);

        displayNumbers();
        numbers.length=0
})

function displayNumbers(){
    
for(let el of numbers){
    //create element
    let h4=document.createElement('h4')
    //add content
    h4.textContent=el
    //add element to the DOM
    document.body.appendChild(h4)
}
}
