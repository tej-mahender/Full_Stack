import React from 'react'
import {cardContext} from './cardContext'

function cardContext({children}){
    retrun (
        <cardContext.Provider value={}>
        {children}
        </cardContext.Provider>
    )
}