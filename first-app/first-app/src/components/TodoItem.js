import React from 'react'

function TodoItem(props, index){
    let style = props.item.completed ? "TodoItem completed" : "TodoItem";
    return(
            <label className={style}>
                <input 
                    className="checkbox" 
                    type="checkbox" 
                    checked={props.item.completed}
                    onChange={()=> props.handleChange(props.item.id)}
                    
                />

                {props.item.text}
            </label>
    );
}

export default TodoItem