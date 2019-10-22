// import React, {Component} from 'react';
// import Todo from "./Todo";

// export default class List extends Component {
//   render() {
//     let list = this.props.tasks.map((element, index) => {
//       return <Todo key={index} task={element} />;
//     });
    
//     return <div>{list}</div>;
//   }
// }

import React, {useState} from 'react';

const List = () => {

  let thisList = this.props.tasks.map((element, index) => {
          return <Todo key={index} task={element} />;
        });
return (
  <div>
    {thisList}
  </div>
)
}

export default List;