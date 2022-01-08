import React from 'react'
import ReactDOM from 'react-dom'

var style = {
  backgroundColor: 'blue',
  color: 'white',
  fontFamily: 'Arial'
}

const title = React.createElement(
    'h1', // -> element
   {id: 'title', className: 'TitleClass', style: style}, // -> props of element
    'Hello PavanKumar'              // -> child element whic we want to enclose
)

ReactDOM.render(
    title,
    document.getElementById('root')
)