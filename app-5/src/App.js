import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import Image from './Image'

const App = () => {

  return (
    <div>
      <Image img={'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR1aSBpq2L6B0P-oKEYFxqF7XvLWVxy2HMYwgxI82A0VQYsiTvB'} />
    </div>
  )
}

export default App;

// class App extends Component {
//   render() {
//     return (
//       <div className="App">
//         <Image myImage={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR1aSBpq2L6B0P-oKEYFxqF7XvLWVxy2HMYwgxI82A0VQYsiTvB"} />
//       </div>
//     );
//   }
// }

// export default App;
