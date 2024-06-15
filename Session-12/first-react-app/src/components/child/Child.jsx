import { useState } from "react"
function Child(props){
    //props.data-->{counter:0,IncCounter,DecCounter}

    let [sampleData,setSampleData]=useState(100)
    return(
        <div className="bg-warning p-4">
            <h2>Child</h2>
            <h3>Counter - {props.data.counter}</h3>
            <button className="btn btn-danger m-3"
            onClick={props.data.IncCounter}>+1</button>
            <button className="btn btn-danger m-3"
            onClick={props.data.DecCounter}>-1</button>

            <button className="btn btn-secondary" onClick={()=>props.data.getDataFromChild(sampleData)}>Send Data</button>
        </div>
    )
}
export default Child