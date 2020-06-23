import React, { useEffect, useState } from 'react';
import Contacts from './components/contacts';

const App = () => {
  const [contactsFromApi, setContactsFromApi] = useState([]);

  useEffect(() => {
    fetch('http://jsonplaceholder.typicode.com/users') //GET request to the endpoint
    .then(res => res.json()) //parses the output to JSON
    .then((data) => { //sets the value of our state to the output from the API call 
      setContactsFromApi(data)
    })
    .catch(console.log) //logs any error we get to the console.
  }, []);

  return (
    <Contacts contacts={contactsFromApi} />
  );
}

export default App;
