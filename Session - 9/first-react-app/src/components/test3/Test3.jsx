import './Test3.css'
import { useEffect,useState } from 'react'


function Test3(){

    let[counter,setCounter]=useState(0)

    function changeCounter(){
        setCounter(counter+1)
    }

    useEffect(()=>{
        console.log("effect function executed")
    },[])
    return(
        <div>
            <h2>Test3</h2>
            <h3>Counter-{counter}</h3>
            <button onClick={changeCounter}>Change Counter</button>
        </div>
    )
}
export default Test3