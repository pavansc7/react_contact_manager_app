//Pass values 

import React, { Component } from 'react'
import { render } from 'react-dom'

let myDetails = {
  name: 'Pavan',
  lastname: 'kumar',
  age: 34
}

//This is using prop Method 1
const GetDetails = (props) => {
return ( 
<div> I am Pavan
<p>{props.myDetails.name}</p>
<p>{props.myDetails.age}</p>
</div>
)
}

render(
    <GetDetails myDetails={myDetails}/>,
    document.getElementById('root')
)


//This is using direct values like array

import React, { Component } from 'react'
import { render } from 'react-dom'


const Details = ({Bookname, Bookprice}) => {
    return (
        <p>
           {Bookname} and {Bookprice}
        </p>
    )
}


render(
    <Details Bookname='Book1' Bookprice='300/-' />,
    document.getElementById('root')
)