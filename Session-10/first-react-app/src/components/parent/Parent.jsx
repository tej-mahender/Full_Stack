import Child from "../child/Child"
import { useState } from "react"

function Parent(){

    let [counter,setCounter]=useState(0)
    let [dataFromChild,setDataFromChild]=useState(0)

    function IncCounter(){
        setCounter(counter+1);
    }
    function DecCounter(){
        setCounter(counter-1);
    }
    function getDataFromChild(data){
        setDataFromChild(data)
    }

    return(
        <div className="bg-primary mx-auto mt-5 w-75 p-4 text-center">
            <h2 >Parent</h2>
            <h2>Counter in Parent - {counter}</h2>
            <h2>Data From Child - {dataFromChild}</h2>
            <button className="btn btn-light m-3" onClick={IncCounter}>+1</button>
            <button className="btn btn-light m-3" onClick={DecCounter}>-1</button>

            <Child data={{counter,IncCounter,DecCounter,getDataFromChild}}/>
        </div>
    )
}
export default Parent