import React, { Component } from 'react'
import { render } from 'react-dom'

let myDetails = {
  name: 'Pavan',
  lastname: 'kumar',
  age: 34
}

class Message extends Component {

  getString = (num1,num2) => {
    return num1 + num2 + ' I am string now';
  }

  render() {
    console.log(this.props)
      return (
      <div>
        <h1 style={{color: 'green'}}>
        {/* {this.props.name.lastname} */}
        {this.getString(100,200)}
        </h1>
      </div> 
      ) 
  }
}

render(
    <Message name={myDetails} lastname={myDetails.lastname}
    />,
    document.getElementById('root')
)