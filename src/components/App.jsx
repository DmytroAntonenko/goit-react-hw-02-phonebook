import React, {Component} from "react";
import shortid from 'shortid';
import ContactForm from "./ContactForm";
import Filter from './Filter';

class App extends Component  {
  state = {
    contacts: [
      {id: 'id-1', name: 'Rosie Simpson', number: '459-12-56'},
      {id: 'id-2', name: 'Hermione Kline', number: '443-89-12'},
      {id: 'id-3', name: 'Eden Clements', number: '645-17-79'},
      {id: 'id-4', name: 'Annie Copeland', number: '227-91-26'},
    ],
    filter: '',
  }

 
  formHandleSubmit = data => {
    console.log(data)
  };

  addContact = (nameForAdd, numberForAdd) => {
    const isExistContact = this.state.contacts.find(
      ({ name }) => name === nameForAdd,
    );
    if (isExistContact) {
      alert(`${nameForAdd} is already in contacts`);
      return;
    }
    const contact = {
      id: shortid.generate(),
      name: nameForAdd,
      number: numberForAdd,
    };
    this.setState(({ contacts }) => ({ contacts: [contact, ...contacts] }));
  };

  changeFilter = event => {
    this.setState({ filter: event.currentTarget.value });
  };
  

  render() {

    const { filter } = this.state;

  return (
    <div
      style={{
      //   height: '100vh',
      //   display: 'flex',
      //   justifyContent: 'center',
      //   alignItems: 'center',
      //   fontSize: 40,
      //   color: '#010101'
      border: '1px solid black',
      borderRadius: '4px',
      maxWidth: '240px',
      margin: 'auto',
      padding: '12px'
      }}
    >
      <h1>Phonebook</h1>
      <ContactForm onSubmit={this.addContact}/>
      <h2>Contacts</h2>
      <Filter value={filter} onChange={this.changeFilter} />
      
    </div>
  )}
}

export default App;
