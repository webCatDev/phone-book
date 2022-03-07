import { useState,React } from 'react';
import List from './List';
import Form from './Form';

function Contacts() {
  const store = localStorage.getItem("store")?JSON.parse(localStorage.getItem("store")):[];
    const [contacts,setContacts]=useState(store)
   
  return (
    <div className='contacts'>
        <List contacts={contacts} deleteContact={setContacts}/>
        <Form addContact={setContacts} contacts={contacts} />
    </div>
  )
}

export default Contacts;