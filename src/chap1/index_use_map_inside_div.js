import React, { Component } from 'react'
import { render } from 'react-dom'

var style = {
    backgroundColor: 'orange',
    color: 'blue',
    fontFamily: 'Arial'
  }

let userDetails = [
    {"name":"pavan", "age":30, "address":"dwd"},
    {"name":"pgt", "age":35, "address":"kyp"},
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

const Details = ({userInfo}) => {
    return (
        <div>
               {userInfo.map(
                   //Same as Lamba you can ommit the braces along with return 
                   // user => return <DisplayEachDetails name={user.name} age={user.age} address={user.address} />
                   (user) => { return <DisplayEachDetails name={user.name} age={user.age} address={user.address} /> }
                   )
               } 
        </div>                
    )
}


render(
    <Details userInfo = {userDetails} />,
    document.getElementById('root')
)