import Header from "./header/header";
import UpdateContact from "./updateContact/UpdateContact"
import ListContact from "./listContact/ListContacts"
import DetailedContact from "./listContact/DetailedContact"
import "./App.css";
import React, { useState, useEffect } from "react";
import { uuid } from "uuidv4";
import { BrowserRouter as Router, Switch, Route, } from "react-router-dom";
import {getContacts,deleteContacts, addContact} from "../services/ContactServices"

const contactList = []

function App() {

  //use state using useState Hook
  //const [contacts, updateContacts] = useState(JSON.parse(localStorage.getItem('contacts')))
  const [contacts, updateContacts] = useState(contactList)

  //Component did Mount
  useEffect(() => {
    //const newList = 
    getContacts().then(newList=> {
    newList && updateContacts(newList)});
  },[])

  //Store into local storage:
  // useEffect(() => {
  //   localStorage.setItem('contacts', JSON.stringify(contacts))
  // }, [contacts])

  //Add into DB
  const updateContactDatabase = (newname, phoneNumber) => {
    const contact = { name: newname, number: phoneNumber, id: uuid() }
    addContact(contact)
    .then(
      getContacts().then(newList=> {
        console.log('newList: '+newList);
        newList && updateContacts(newList)})
    )
    .catch();
  }


  const deleteContactHandler = (id) => {
    console.log('deleting contact: ' + id)
    //const newarray = contacts.filter(val => val.id !== id)
    deleteContacts(id).then(
      getContacts().then(newList=> {
        console.log('newList: '+newList);
        newList && updateContacts(newList)}
    ));
    //updateContacts(newarray);
  }


  return (
    <div className="ui container">
      {/* <DetailedContact contact={contact}/> */}
      {/* <Header /> */}
      <Router>
        <Route path='/' component={Header} />
        <Switch>
          <Route path="/add" render={(props) =>
            <UpdateContact {...props}
              updateList={updateContactDatabase} />}>
          </Route>
          <Route exact path="/" render={(props) =>
            <ListContact {...props} contactList={contacts}
              deleteContactHandler={deleteContactHandler} />}>
          </Route>
          <Route path="/detail/:id" render={(props) =>
            <DetailedContact {...props}/>}>
          </Route>
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