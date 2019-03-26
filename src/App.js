import React, { Component } from 'react'
import Table from './Table'
import Form from './Form'

class App extends Component {
    state = {
        characters: []
    };

    
      
  render() {
    
    const { characters } = this.state;

    return (
        <div className="container">
          <h1>React Tutorial</h1>
          <p>Add a new character with a name and a job to the table fulfilling and submitting form below.</p>
          <Table characterData={characters} removeCharacter={this.removeCharacter} />
          <Form handleSubmit={this.handleSubmit} />
        </div>
    )
  }

  //you can define another React methods after render() method
  removeCharacter = index => {
    const { characters } = this.state;
  
    this.setState({
      characters: characters.filter((character, i) => {
        return i !== index
      }),
    })
  }

  handleSubmit = character => {
    this.setState({ characters: [...this.state.characters, character] })
  }

}

export default App