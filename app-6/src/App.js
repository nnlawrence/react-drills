import React, {useState} from 'react'
import Todo from './Todo'

const App = () => {
  const [list, setList] = useState([])
  const [input, setInput] = useState('')

  const addTask = () => {
    list.push(input)
    setInput('')
  }

  let toDo = list.map((element, index) => {
    return <Todo key={index} task={element} />;
  });

  return (
    <div>
      <h1>To-Do List:</h1>
      <input onChange={(e) => setInput(e.target.value)} value={ input } />  
      <button onClick={addTask}>Add</button>     
      {toDo}
    </div>
  )
}

export default App;

// class App extends Component {
//   constructor(){
//     super()
//     this.state = {
//       input: '',
//       list: []
//     }
//   }
// ​
//   handleChange = event => {
//     const {name, value} = event.target
//     this.setState({
//       [name]: value
//     })
//   }
// ​
//   addToDo = input => {
//     this.state.list.push(input)
//     this.setState({
//       input: ''
//     })
//   }
// ​
//   render(){
//     const {input, list} = this.state
//     console.log(this.state.input)
//     console.log(this.state.list)
//     return(
//       <div>
//         <h1>My To-Do List:</h1>
//         <input
//           name='input'
//           value={input}
//           placeholder='Enter new task'
//           onChange={event => this.handleChange(event)}
//         />
//         <button onClick={() => this.addToDo(input)}>Add</button>
//         {list.map((element, index) => {
//           return <Todo todo={element} key={`Todo item ${index}`}/>
//         })}
//       </div>
//     )
//   }
// }
// ​
// export default App