import React from 'react'
import ReactDOM from 'react-dom'

var style = {
  backgroundColor: 'orange',
  color: 'red',
  fontFamily: 'Arial'
}

 // -> display list bad way 
// const title = React.createElement(
//     'ul', // -> element
//    {id: 'title', className: 'TitleClass', style: style}, // -> props of element
   
//    React.createElement(
//      'li',
//      {},
//      'list value 1'
//    ),

//    React.createElement(
//     'li',
//     {},
//     'list value 2'
//   ),

//   React.createElement(
//     'li',
//     {},
//     'list value 3'
//   )
// )

function p() {
return <div>
<h1>Hey it's me Pavankumar</h1>
<p>I am from dharwad</p>
</div>

}

ReactDOM.render(
  // <div>
  //   <h1>Hey it's me Pavankumar</h1>
  //   <p>I am from dharwad</p>
  // </div>,
  <p />,
    document.getElementById('root')
)