import React from "react";
import person from "../../images/person.png"
import { Link } from "react-router-dom";

const  DetailedContact = ({location:{state:state}}) => {
    let {contact} = state
    return(        
            <div className="main">
                <div className="ui card centered">
                <img src={person} alt="user_image" className="image" ></img>
                <div className="content">
                    <div className="header">{contact.name}</div>
                    <div className="description">
                        {contact.number}
                        {contact.description}
                    </div>
                </div>
                </div>
                <div className="center-div">
                    <Link to="/" >
                        <button  className="ui button blue centre" style={{textAlign: 'center'}}>Back to contacts</button>
                    </Link>
                </div>
            </div>
            
        
    );
}

export default DetailedContact;