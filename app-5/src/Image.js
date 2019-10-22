import React, { useState } from 'react'

const Image = (props) => {
    return (
        <div>
            <img src={props.img} />
        </div>
    )
}

export default Image;

// export default class Image extends Component {
//     render(){
//     return (
//         <div>
//         <img src={this.props.myImage} />
//         <h1>Hello Swan</h1>
//         </div>
//     )
// }
// }