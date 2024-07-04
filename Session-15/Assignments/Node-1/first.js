let array=[45,18,33,7,10,17]

function sumArray(a){
    return a.reduce((a,b)=>a+b)
}

module.exports={array,sumArray}