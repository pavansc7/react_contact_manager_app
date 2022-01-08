import React from "react";
import { Link } from "react-router-dom";
class UpdateContact extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            name:'',
            number:''
        }
    }

    updateName = (event) => {       
        this.setState({
            name:event.target.value
        })
    }

    updateNumber = (event) => {
        this.setState({
            number:event.target.value
        })
    }    

    submitForm = (event) => {
        event.preventDefault();
        console.log('Form has been submitted: '+this.state.name + ' '+this.state.number);
        this.props.updateList(this.state.name,this.state.number);

        //clear Fields
        this.setState ({
            name:'',
            number:''
        })
    }

    render() {
        return (
            <div>
                <div className="ui main large text" id="">
                    
                    <form className="ui form" style={{fontSize:"20px"}}  onSubmit={this.submitForm}>
                        <div className="field">
                            <label>Name</label>
                            <input type="text" placeholder="Name" onChange={this.updateName} value={this.state.name}/>
                        </div>
                        <div className="field">
                            <label>Phone Number</label>
                            <input type="number" placeholder="Phone Number" onChange={this.updateNumber} value={this.state.number}/>
                        </div>
                        <button className="ui button" type="submit">Submit</button>
                        <Link to="/"><button className="ui right floated primary button">List contacts</button></Link>
                    </form>
                   
                </div>
            </div>
        )
    }
}

export default UpdateContact;