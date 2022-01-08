import React from "react";
import user from "../../images/user.png";
import { Link } from "react-router-dom";

class ListContact extends React.Component {

    getContactList = () => {
        return this.props.contactList && this.props.contactList.map(index => {
            return (
                <div className="item" key={index.id}>
                    <img className="ui avatar image" src={user} alt="user" />
                    <div className="content">
                        <div className="header">{index.name} </div>
                        <div>{index.number}</div>
                    </div>
                    <i className="trash alternate outline icon" onClick={() => this.props.deleteContactHandler(index.id)}></i>
                </div>
            )
        })
    }

    render() {
        return (
            <div class="main">
                <h1>Contact list
                <Link to="/add"><button className="ui right floated primary button">Add contact</button></Link>
                </h1>   
                <div className="ui celled list main">
                {this.getContactList()}
                </div>
            </div>
        )
    }
}

export default ListContact;