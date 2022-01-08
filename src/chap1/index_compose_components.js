
//This is example for how to call multiple components

import React, { Component } from 'react'
import { render } from 'react-dom'

let myDetails = {
  name: 'XYZ',
  lastname: 'RMZ',
  age: 34
}

const GetDate = (prop) => {
    return <p>I am {prop.name} {prop.lastname}</p>
}

const GetDetails = (prop) => {
return ( 
<div> <GetDate name={myDetails.name} lastname={myDetails.lastname}/>
<p>{prop.name}</p>
<p>{prop.age}</p>
</div>
)
}

render(
    <div>
    <GetDetails name='pavan' age={80} />
    <GetDetails name='Ramesh' age={90} />
    </div>,
    document.getElementById('root')
)