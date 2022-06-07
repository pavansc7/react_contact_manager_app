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

//let  a = 10;


class Details extends Component{
    
    constructor(props) {
        super(props)
        this.state = {
            isEnabled: false,
            userInfo: this.props.userInfo
        }   
       // this.updateisEnabled = this.updateisEnabled.bind(this);

    }


        updateisEnabled  = () => {
        
        /* Directly if you want to change variable*/
        // this.setState(
        //     {
        //         isEnabled: !this.state.isEnabled                
        //     }
        // )

        //Change based on variable
        console.log("Hi I am this "+ typeof(this.updateisEnabled));
        this.setState(
            previousState => ({ isEnabled: !previousState.isEnabled })
        )
    }

 

    render(){
      //  this.updateisEnabled.call
        //const {userInfo} = this.props;
        return(
        <div>            
               { this.state.isEnabled && this.state.userInfo.map(
                   (user) => { return <DisplayEachDetails name={user.name} age={user.age} address={user.address} /> }
                   )

               }
               <p style={style}>{this.state.isEnabled.toString()}</p> 
               <button type="submit" onClick={this.updateisEnabled}>Submit</button>
               {console.log(this.state)}
        </div>               
    )
            }
}

render(
    <Details userInfo = {userDetails} />,
    document.getElementById('root')
)