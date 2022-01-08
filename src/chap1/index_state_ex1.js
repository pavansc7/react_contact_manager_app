import React, { Component } from 'react'
import { render } from 'react-dom'

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
        {/* {a && (<section> */}
        <p> My name is {name}</p>
        <p> My age is {age}</p>
        <p> My address is {address}</p>
        {/* </section> ) */}
        
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
    }

    render(){
        //const {userInfo} = this.props;
        return(
        <div>        
               { this.state.userInfo.map(
                   //Same as Lamba you can ommit the braces along with return 
                   // user => return <DisplayEachDetails name={user.name} age={user.age} address={user.address} />
                   (user) => { return <DisplayEachDetails name={user.name} age={user.age} address={user.address} /> }
                   )

               }
               <p style={style}>{this.state.isEnabled}</p> 

               {console.log(this.state)}
        </div>               
    )
            }
}

render(
    <Details userInfo = {userDetails} />,
    document.getElementById('root')
)