import React from 'react';
import Dropdown from './Dropdown.js';
import {withRouter} from 'react-router-dom';

class InputBasicPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userName: '',
      adjective: '',
      sex: '',
      age: '',
      listValues: [true, false, false, false]
    };

    this.handleChange = this.handleChange.bind(this);
    this.arrayToggle = this.arrayToggle.bind(this);
    this.nextSection = this.nextSection.bind(this);
  }

  handleChange (event, name, num){
    this.setState({[name]: event.target.value});
    this.arrayToggle(num);
    name === 'age' ? this.nextSection() : null;
  }

  arrayToggle(num) {
    var listValues = this.state.listValues;
    listValues[num] = true;
    this.setState({listValues});
  }

  nextSection() {
    this.state.age ? this.props.history.push('/InputBMIPage') : null;
  }

  render() {
    return (
      <form>
        <h1 className="input_title">Introduce yourself</h1>
        <label className="input_pompt">My name is
          <input
              type="name"
              value={this.state.name}
              onChange={(e) => {
                this.handleChange(e, 'userName', 1)
              }}>
          </input>
        </label>

         { this.state.listValues[1] ?
          <label className="input_dropdown">and I am a
            <Dropdown
                data={['groovy', 'good loocking', 'eccentric', 'fabulous']}
                value={this.state.adjective}
                onChange={(newVal) => {
                  this.setState({adjective: newVal});
                  this.arrayToggle(2);
              }} />
          </label>
            : null
          }

         {this.state.listValues[2] ?
          <label className="input_dropdown">
              <Dropdown
                  data={['gentelman', 'lady']}
                  value={this.state.sex}
                  onChange={(newVal) => {
                    this.setState({sex: newVal});
                    this.arrayToggle(3);
              }}/>
          </label>
            : null
          }

         {this.state.listValues[3] ?
          <label className="input_pompt">, who is
            <input
                type="age"
                value={this.state.age}
                onChange={(e) => this.handleChange(e, 'age')
              }>
            </input> years old.
          </label>
          : null
        }
      </form>
    );
  }
}

export default withRouter(InputBasicPage);