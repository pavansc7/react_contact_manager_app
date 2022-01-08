import Header from "./header/header";
import UpdateContact from "./updateContact/UpdateContact"
import ListContact from "./listContact/ListContacts"
import "./App.css";
import React, { useState, useEffect } from "react";
import { uuid } from "uuidv4";
import { BrowserRouter as Router, Switch, Route,  } from "react-router-dom";

const contactList = [
  {
    name: 'ramesh',
    number: 12345,
    id: uuid()
  },
  {
    name: 'suresh',
    number: 988676,
    id: uuid()
  },
]



function App() {

  //use state using useState Hook
  //const [contacts, updateContacts] = useState(JSON.parse(localStorage.getItem('contacts')))
  const [contacts, updateContacts] = useState(contactList)

  const updateList = (newname, phoneNumber) => {
    console.log('Updating state')
    updateContacts([...contacts, { name: newname, number: Number(phoneNumber), id: uuid() }])
  }

  useEffect(() => {
    const newList = JSON.parse(localStorage.getItem('contacts'));
    console.log(JSON.parse(localStorage.getItem('contacts')));
    newList && updateContacts(newList);
  }, [])

  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(contacts))
  }, [contacts])



  const deleteContactHandler = (id) => {
    console.log('deleting contact: ' + id)
    const newarray = contacts.filter(val => val.id !== id)
    updateContacts(newarray);
  }

  return (
    <div className="ui container">
      <Router>
      <Route path='/' component={Header} />
        <Switch>
          <Route path="/add" component={() => <UpdateContact  updateList={updateList} />}></Route>
          <Route path="/" component={() => <ListContact contactList={contacts} deleteContactHandler={deleteContactHandler} />}></Route>
        </Switch>
          {/* <Route path='/' component={<Header />} />
          <Route path="/" component={<UpdateContact updateList={updateList} />}></Route>
          <Route path="/list" component={<ListContact contactList={contacts} deleteContactHandler={deleteContactHandler} />}></Route> */}
      </Router>

      {/* <UpdateContact updateList={updateList} />
      <ListContact contactList={contacts} deleteContactHandler={deleteContactHandler} /> */}
    </div>
  );
}
//}

export default App;


//Using class approach

/*
class App extends React.Component {

  constructor(props) {
    super(props)

    this.state = {
      contactList: contactList,
      emptyName: 'name1'
    }
  }

  concatArray = (old,newname,phoneNumber) => {
    old.push({name:newname,number:phoneNumber})
    return old;
  }
  updateList = (name,phoneNumber) => {
    console.log('Updating state')
    // contactList.push({name:name,number:phoneNumber});
    // console.log(this.state.contactList)
    this.setState({
      contactList: this.concatArray(this.state.contactList,name,phoneNumber)
    },console.log(this.state))
  }

  */

  // render() {