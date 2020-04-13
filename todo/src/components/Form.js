import React from 'react';

const Form = (props) => {
    return(
        <form>
            <input type="text" placeholder="add something" onChange={props.handleChanges}/>
            <button onClick={() => props.dispatch({ type: "SET_EDITING" })}>Add Todo</button>
        </form>
    )
}
export default Form;