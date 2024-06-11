// 1. Consider the following string aaaabbababababbbbabababaaaa
//Find frequency of "a" and "b".

let s = ' aaaabbababababbbbabababaaaa'
let countA = 0;
let countB = 0;
for(i in s){
    if (s[i] == 'a'){
        countA++
    }else if(s[i]=='b'){
        countB++
    }
}
console.log("Frequency of 'a': "+countA)
console.log("Frequency of 'b': "+countB)


//2. Write a function to receive a string of multiple words as argument 
//and then print the no of words in that string.
let str="how are you all"
function wordCount(str){
    let c=str.split(' ')
    return c.length
}
console.log("Number of Words in string- "+str+" is : "+wordCount(str))