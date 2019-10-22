import React, { useState, useEffect } from "react";
import logo from "./logo.svg";
import "./App.css";

const App = () => {
  const [filterString, setFilterString] = useState('')
  const [foods, setFoods] = useState(["spaghetti", "ice cream", "sushi", "bologna", "cheese", "green beans", "collard greens", "cornbread", "black eyed peas", "ham", "chicken", "steak"])

  

  const mappedFoods = foods.filter((element, index) => {
    return element.includes(filterString);
  })
  .map((element, index) => {
    return <h2 key={index}>{element}</h2>;
  });
  return (
    <div>
      <input onChange={e => setFilterString(e.target.value)} type="text" value={ filterString } />
      <h4>{mappedFoods}</h4>
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
