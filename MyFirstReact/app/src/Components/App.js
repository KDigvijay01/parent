import './App.css';
import React from 'react';
import './ContactList.css';




import Header from './Header';
import AddContact from './AddContact';
import ContactList from './ContactList';
import ContactCard from './ContactCard';

function App() {
  return (
    <div className='ui container'>
     
      <ContactList/>
  
    </div>
  )
}

export default App;
