import { createStore } from 'redux'
import React, {useEffect} from "react";

const counter = (state = 0, action) =>{
    switch (action.type){
        case 'INCREMENT':
            return state + 1
        case 'DECREMENT':
            return state - 1
        default:
            return state
    }
}



const store = createStore(counter)




const Test = () =>{
    const render = () =>{
        return(
            <p>
                {store.getState()}
            </p>
        )
    }
    useEffect(() =>{
        store.subscribe(render)
    })
    return(
        <div>
            {render()}
            <button onClick={store.dispatch({type: 'INCREMENT'})}>dodaj</button>
        </div>
    )
}

export default Test;