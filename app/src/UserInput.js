import React from 'react';
import './App.css';

class UserInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = {name: ''};
    this.state = {age: ''};
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.name});
  }

  handleSubmit(event) {
    alert('A name was submitted ' + this.state.name);
  }

  render() {
    return (
      <form>
        <h1 class="input_title">Introduce yourself</h1>
        <label class="input_pompt">My name is {this.state.name}
          <input type="text" value={this.state.name} onChange={this.handleChange}>
          </input>
        </label>

        <label class="input_pompt">and I am a
          <div className="dropdown-list">
            <div>
            {this.renderListItems}
            </div>
          </div>
        </label>

        <label class="input_pompt">, who
          <input>
          </input>
        </label>

        <label class="input_pompt">is {this.state.age} years old
          <input type="text" value={this.state.age} onChange={this.handleChange}>
          </input>
        </label>

      </form>
    );
  }
}


export default UserInput;
