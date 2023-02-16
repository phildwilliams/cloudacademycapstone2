import React from 'react';
import axios from 'axios';

export default class PersonList extends React.Component {
  state = {
    persons: []
  }

  componentDidMount() {
    axios.get(`https://qn7tpyin7f.execute-api.us-west-2.amazonaws.com/prod`)
      .then(res => {
        const persons = res.data.body;
        this.setState({ persons });
      })
  }

  render() {
    return (
      <ul>
        {
          this.state.persons
            .map(person =>
              <li key={person.id}>{person.id}{person.name}</li>
            )
        }
      </ul>
    )
  }
}
