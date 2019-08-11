import React, { Component } from 'react'

export default class Image extends Component {
    render(){
    return (
        <div>
        <img src={this.props.myImage} />
        <h1>Hello Swan</h1>
        </div>
    )
}
}