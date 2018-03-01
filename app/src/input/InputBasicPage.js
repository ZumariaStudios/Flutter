import React from 'react';
import Dropdown from '../form/Dropdown.js';
import {withRouter} from 'react-router-dom';

class InputBasicPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userName: '',
      adjective: '',
      sex: '',
      age: '',
      listValues: [true, false, false, false, false]
    };

    this.handleChange = this.handleChange.bind(this);
    this.arrayToggle = this.arrayToggle.bind(this);
    this.nextSection = this.nextSection.bind(this);
  }

  handleChange (event, name, num){
    this.setState({[name]: event.target.value});
    this.arrayToggle(num);
  }

  arrayToggle(num) {
    var listValues = this.state.listValues;
    listValues[num] = true;
    this.setState({listValues});
  }
//comment here
  nextSection() {
    this.props.history.push('/InputBMIPage');
  }

  render() {
    return (
      <div className ="inputBasicPage">
      <form>
        <h1 className="input_title">Introduce yourself</h1>
        <label className="input_prompt">My name is
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
                name='adjective'
                data={['groovy', 'good looking', 'eccentric', 'fabulous']}
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
                   name='sex'
                   data={['gentleman', 'lady']}
                   value={this.state.sex}
                   onChange={(newVal) => {
                     this.setState({sex: newVal});
                     this.arrayToggle(3);
               }}/>
           </label>
             : null
           }

          {this.state.listValues[3] ?
           <label className="input_prompt"> who is
             <input
                 type="age"
                 value={this.state.age}
                 onChange={(e) => this.handleChange(e, 'age', 4)
               }>
             </input> years old. <br/><br/>
           </label>
           : null
         }

         {this.state.listValues[4] ?
           <input
            type='submit'
            value='Continue'
            onClick={this.nextSection}/>
           : null}

      </form>
      </div>
    );
  }
}

export default withRouter(InputBasicPage);
