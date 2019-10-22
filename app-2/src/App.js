import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";

const App = () => {
  const [foods, setFoods] = useState(["spaghetti", "ice cream", "sushi", "bologna", "cheese"])

//   const addFoods = () => {
//     foods.push(foods);
//     setFoods('');
// }

  const mappedFoods = foods.map((element, i) => {
    return (
      <p key={i}>{ element }</p>
    )
  })
  return (
    <div>
      {mappedFoods}
      {/* <input onChange={(e) => setFoods(e.target.value)}
             value={ foods } /> */}
      {/* <button onClick={addFoods}>Add To List</button> */}
    </div>
  )
}

export default App;

// class App extends Component {
//   render() {
//     return (
//       <div className="App">
//         <div className="App-header">
//           <img src={logo} className="App-logo" alt="logo" />
//           <h2>Welcome to React</h2>
//         </div>
//         <p className="App-intro">
//           To get started, edit <code>src/App.js</code> and save to reload.
//         </p>
//       </div>
//     );
//   }
// }

// export default App;
