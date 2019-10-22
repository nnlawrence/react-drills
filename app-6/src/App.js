import React, {Component} from 'react'
import Todo from './Todo'
​
class App extends Component {
  constructor(){
    super()
    this.state = {
      input: '',
      list: []
    }
  }
​
  handleChange = event => {
    const {name, value} = event.target
    this.setState({
      [name]: value
    })
  }
​
  addToDo = input => {
    this.state.list.push(input)
    this.setState({
      input: ''
    })
  }
​
  render(){
    const {input, list} = this.state
    console.log(this.state.input)
    console.log(this.state.list)
    return(
      <div>
        <h1>My To-Do List:</h1>
        <input
          name='input'
          value={input}
          placeholder='Enter new task'
          onChange={event => this.handleChange(event)}
        />
        <button onClick={() => this.addToDo(input)}>Add</button>
        {list.map((element, index) => {
          return <Todo todo={element} key={`Todo item ${index}`}/>
        })}
      </div>
    )
  }
}
​
export default App