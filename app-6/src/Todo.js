import React, {useState} from 'react'

const Todo = (props) => {
    return (
        <div>
            {props.task}
        </div>
    )
}
// function Todo(props){
//     const {todo} = props
//     return(
//         <div>
//             {todo}
//         </div>
//     )
// }

export default Todo