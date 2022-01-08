import React, { Component } from 'react'
import { render } from 'react-dom'
import { Ring } from 'react-awesome-spinners'

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
    
    state =
     {isEnabled: false, 
    userInfo: this.props.userInfo,
        responseVal: [],
        isLoading: false
    }
    

    updateisEnabled  = () => {
        console.log("Hi I am this "+ typeof(this.updateisEnabled));
        this.setState(
            previousState => ({ isEnabled: !previousState.isEnabled })
        )
    }


    componentDidMount(){
       // console.log("Hey component is mounted now - Enjoy")

        this.setState({
                isLoading: true
        })

        fetch('https://api.github.com/users/hacktivist123/repos')
        .then(response => response.json())
        .then(responseVal => {
            this.setState({responseVal, isLoading : false})
        });

    }
 
    componentDidUpdate(){
        console.log("Hey component changed it state , act accordingly")
    }

    ApiCallData = ({data}) => {
    return (<table><td>{data.id}</td> <td>{data.id}</td> <td>{data.description}</td></table>
    )

    

    }

    

    render(){
        this.state.userInfo.map(val => {console.log(val); return val;})
        return(
        <div>      
            {this.state.isLoading ? <div><h1>Wait please still loading</h1> <Ring /> </div>:
            this.state.responseVal.map(val => { return <this.ApiCallData data={val}/>} )}

               { this.state.isEnabled && this.state.userInfo.map(
                   (user) => { return <DisplayEachDetails key={user.name} name={user.name} age={user.age} address={user.address} /> }
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