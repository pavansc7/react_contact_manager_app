import React from 'react'
import { render } from 'react-dom'

class LearnForm extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            carValue: ''
        }
    }

    updateCarValue = (event) => this.setState({ carValue : event.target.value })   

    onSubmitUpdate = (event) =>  { 
     alert("value has been changed");
     event.preventDefault() 
    }

    render() {
        return(
            <form onSubmit={this.onSubmitUpdate}>
                <label>Enter Car:
                <input 
                    type="text" 
                    onChange={this.updateCarValue}
                /></label> <br />
                <label>Car Value is : {this.state.carValue} </label>
                <button>Submit</button>
            </form>
        )
    }
}

render(
    <LearnForm />,
    document.getElementById('root')
)