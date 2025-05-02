import React from 'react';
import ContactList from './ContactList';
import { getContacts } from '../utils/data';
import ContactInput from './ContactInput';
import { Route, Routes } from 'react-router';
import AddPage from '../pages/AddPage';
import Navigation from './Navigation';
import HomePageWrapper from '../pages/HomePage';

// class ContactApp extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       contacts: getContacts(),
//     }

//     this.onDeleteHandler = this.onDeleteHandler.bind(this);
//     this.onAddContactHandler = this.onAddContactHandler.bind(this);
//   }

//   onDeleteHandler(id) {
//     const contacts = this.state.contacts.filter(contact => contact.id !== id);
//     this.setState({ contacts });
//   }

//   onAddContactHandler({ name, tag }) {
//     this.setState((prevState) => {
//       return {
//         contacts: [
//           ...prevState.contacts,
//           {
//             id: +new Date(),
//             name,
//             tag,
//             imageUrl: '/images/default.jpg',
//           }
//         ]
//       }
//     });
//   }

//   render() {
  function ContactApp() {
    return (
      <div className="contact-app">
        <header className='contact-app__header'>
          <h1>Aplikasi Kontak</h1>
          <Navigation />
        </header>
        <main>
          <Routes>
            <Route path="/" element={<HomePageWrapper />} />
            <Route path="/add" element={<AddPage />} />
          </Routes>
        </main>
      </div>
    );
  }
   
  export default ContactApp;