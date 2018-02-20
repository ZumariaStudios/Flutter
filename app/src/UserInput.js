import React from 'react';
import './App.css';
import {Dropdown} from './Dropdown.js';

class UserInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      age: ''
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event, name) {
    this.setState({[name]: event.target.value});
  }

  handleSubmit(event) {
    alert('A name was submitted ' + this.state.name);
  }

  render() {
    return (
      <form>
        <h1 className="input_title">Introduce yourself</h1>
        <label className="input_pompt">My name is
          <input type="name" value={this.state.name} onChange={(e) => this.handleChange(e, 'name')}>
          </input>
        </label>

        <label className="input_dropdown">and I am a
              <Dropdown data={['groovy', 'good loocking', 'eccentric', 'fabulous']}/>
        </label>

        <label className="input_dropdown">
              <Dropdown data={['gentelman', 'lady']}/>
        </label>

        <label className="input_pompt">, who is
          <input type="age" value={this.state.age} onChange={(e) => this.handleChange(e, 'age')}>
          </input> years old.
        </label>

      </form>
    );
  }
}


export default UserInput;
