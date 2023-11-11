import React, { useReducer } from 'react'

const Actions = {
    ADD: 'add-digit',
    ChooseOp: 'choose-operation',
    DEL: 'delete-digit',
    CLEAR: 'clear',
    EVALUATE: 'evaluate'
}
function reducer(state, {type, payload}){
    switch(type){
        case Actions.ADD:
            return {
                ...state,
                currOperand: `${state.currOperand || ""}${payload.digit}`,
    }
    }
}

function Calculator() {
    const[{currOperand, preOperand, operation}, dispatch] = useReducer(reducer, {})

    // dispatch({type: Actions.ADD, payload: {digit: 1}})
  return (
    <div className='cal-grid'>
        <div className="output">
            <div className="pre-operand"> {preOperand} {operation} </div>
            <div className="curr-operand"> {currOperand} </div>
        </div>
        <button className='span-two'>AC</button>
        <button className=''>DEL</button>
        <digitButton digit="/" dispatch={dispatch}/>
        <button className=''>1</button>
        <button className=''>2</button>
        <button className=''>3</button>
        <button className=''>*</button>
        <button className=''>4</button>
        <button className=''>5</button>
        <button className=''>6</button>
        <button className=''>+</button>
        <button className=''>7</button>
        <button className=''>8</button>
        <button className=''>9</button>
        <button className=''>-</button>
        <button className=''>.</button>
        <button className=''>0</button>
        <button className='span-two'>=</button>
    </div>
  )
}

export default Calculator

export function digitButton({dispatch, digit}) {
    return <button onClick={() => dispatch({ type: Actions.ADD, payload: {digit} })}>{digit}</button>    
}
