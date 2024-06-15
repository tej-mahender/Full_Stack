import { useState } from "react";
import { sampleContext } from "./testContext";

export function Store({children}){
    let [a,setA]=useState(10);

   return  (
    <sampleContext.Provider value={{a,setA}}>
        {children}
    </sampleContext.Provider>
   )
}