import React, { Component } from 'react'
import { render } from 'react-dom'
import PropTypes from 'prop-types'

var style = {
    backgroundColor: 'orange',
    color: 'red',
    fontFamily: 'Arial'
  }

let userDetails = [
    {"name":"pavan", "age":30, "address":"dwd"},
    {"name":"pgt", "age":35, "address":"kyp1"},
    {"name":"ramesh", "age":10, "address":"hub"},
]



const DisplayEachDetails = ({name, age, address}) => {

    return (
    <div style={style}>
        <p> My name is {name}</p>
        <p> My age is {age}</p>
        <p> My address is {address}</p>       
    </div>
    )
}

class Details extends Component{
    
    constructor(props) {
        super(props)
        this.state = {
            isEnabled: 'true',
            userInfo: this.props.userInfo
        }   

        const propTypeChecking = {};
    }

    render(){
        return(
        <div>        
               {/* { this.state.userInfo.map(
                   (user) => { return <DisplayEachDetails name={user.name} age={user.age} address={user.address} /> })
               } */}
               <p style={style}>{this.state.isEnabled}</p> 
               {console.log(this.state)}
        </div>               
    )
}
}

Details.propTypes = {
    userInfo: PropTypes.array
    // userInfo: PropTypes.object --> throws error in console .
}

render(
    <Details userInfo = {userDetails} />,
    document.getElementById('root')
)