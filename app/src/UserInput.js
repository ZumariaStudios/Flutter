import React from 'react';
import './App.css';
import {Dropdown} from './Dropdown.js';
import {Input} from './Input.js';

class UserInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = {isHidden: true};
    this.toggleHidden = this.toggleHidden.bind(this);
  }

  toggleHidden() {
    this.setState({
      isHidden: !this.state.isHidden
    });
  }

  render() {
    return (
      <form>
        <h1 className="input_title">Introduce yourself</h1>

          <div>
            <Input title={'My name is'}/>

          </div>

          <div>
            { !this.state.isHidden ?
                <Dropdown title={'and I am'} data={['groovy', 'good loocking', 'eccentric', 'fabulous']}/> :
                null
            }
            {this.toggleHidden}
          </div>

          <div>
          { !this.state.isHidden ?
              <Dropdown data={['gentelman', 'lady']}/> :
              null
          }
          {this.toggleHidden}
          </div>

          <div>
          { !this.state.isHidden ?
              <Input title={', who is'} after={', years old.'}/> :
              null
          }
          </div>
      </form>
    );
  }
}


export default UserInput;
