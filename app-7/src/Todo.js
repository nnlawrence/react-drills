import React, {useState} from 'react'

const Todo = (props) => {
    return (
        <div>
            {props.task}
        </div>
    )
}

export default Todo

// import React, {Component} from 'react';

// export default class Todo extends Component {
//   render() {
//     return <p>{this.props.task}</p>;
//   }
// }