import React from 'react';
import Contacts from './components/contacts';

class App extends React.Component {
  state = {
    contacts: []
  }

  componentDidMount() {
    fetch('http://jsonplaceholder.typicode.com/users') //GET request to the endpoint
    .then(res => res.json()) //parses the output to JSON
    .then((data) => { //sets the value of our state to the output from the API call 
      this.setState({ contacts: data })
    }) 
    .catch(console.log) //logs any error we get to the console.
  }

  render() {
    return (
      <Contacts contacts={this.state.contacts} />
    );
  }
}

export default App;
