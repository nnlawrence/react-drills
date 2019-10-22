import React, { useState } from "react";

const NewTask = () => {
  const [input, setInput] = useState('')

    const add = () => {
    props.add(input);
  }

  return (
    <div>
      <input onChange={(e) => setInput(e.target.value)} value={ input } />
      <button onClick={add}>Add</button>
    </div>
  )
}

// class NewTask extends Component {
//   constructor() {
//     super();

//     this.state = {
//       input: ""
//     };

//     this.handleAdd = this.handleAdd.bind(this);
//   }

//   handleInputChange(value) {
//     this.setState({ input: value });
//   }

//   handleAdd() {
//     this.props.add(this.state.input);
//     this.setState({ input: "" });
//   }

//   render() {
//     return (
//       <div>
//         <input
//           value={this.state.input}
//           placeholder="Enter new task"
//           onChange={e => this.handleInputChange(e.target.value)}
//         />

//         <button onClick={this.handleAdd}>Add</button>
//       </div>
//     );
//   }
// }

export default NewTask;