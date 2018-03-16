import React from 'react';
import Dropdown from '../form/Dropdown.js';
import {withRouter} from 'react-router-dom';
import Header from '../form/Header.js';

class InputBasicPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userName: '',
      adjective: 'Select',
      sex: 'Select',
      age: '',
      inputSizeUserName: 4,
      listValues: [true, false, false, false, false],
      //true means there is an error
      errors: {
        userName: false,
        age: false,
      }
    };

    this.handleChange = this.handleChange.bind(this);
    this.arrayToggle = this.arrayToggle.bind(this);
    this.nextSection = this.nextSection.bind(this);
    this.validate = this.validate.bind(this);
  }

  handleChange (event, name, num){
    const value = event.target.value;

    this.localStore(name, value);
    this.setState({[name]: value});
    this.validate(name, value);

    if (name === 'userName') {
      this.setState({inputSizeUserName: value.length });
    }

    this.arrayToggle(num);
  }

  localStore(name, value) {
    const cachedHits = localStorage.getItem(value);
    if (cachedHits) {
      this.setState({[name]: JSON.parse(cachedHits)});
      return;
    }

    localStorage.setItem(name, JSON.stringify(value));
  }

  arrayToggle(num) {
    var listValues = this.state.listValues;
    listValues[num] = true;
    this.setState({listValues});
  }

  validate(name, value) {
    let fieldValidationError = this.state.errors;

    if (name === 'userName') {
      value.length === 0 ?
        fieldValidationError.userName = true :
        fieldValidationError.userName = false;
    }

    if (name === 'age') {
      value.length === 0 || !(/^\d+$/.test(value)) ?
        fieldValidationError.age = true :
        fieldValidationError.age = false;
    }

    this.setState({errors: fieldValidationError});
  }

  nextSection() {
    this.props.history.push('/InputBMIPage');
  }

  render() {
    return (
      <div className ="inputBottomPage">
       <Header header="Introduce yourself" imgSrc="../img/NewBlue.jpg"/>
      <form className ="form">
       <div className="input_center">My name is</div>
        <label>
        <div className="div_dropdown">
          <input
              className={this.state.errors.userName ? 'error' : null}
              name="name"
              type="text"
              size={this.state.inputSizeUserName}
              value={this.state.name}
              onChange={(e) => {
                this.handleChange(e, 'userName', 1)
              }}>
          </input></div>
        </label>

         { this.state.listValues[1] ?
          <div className="input_center">
              <label>and I am a
              <div className="div_dropdown">
                <Dropdown
                    name='adjective'
                    data={['groovy', 'good looking', 'eccentric', 'fabulous']}
                    value={this.state.adjective}
                    onChange={(newVal) => {
                      this.setState({adjective: newVal});
                      this.arrayToggle(2);
                    }}/>
                        </div>
              </label>

          </div>
            : null
          }

          {this.state.listValues[2] ?
           <div className="input_center">
               <label>
              <div className="div_dropdown">
                   <Dropdown
                       name='sex'
                       data={['gentleman', 'lady']}
                       value={this.state.sex}
                       onChange={(newVal) => {
                         this.localStore('sex', newVal);
                         this.setState({sex: newVal});
                         this.arrayToggle(3);
                   }}/>
                </div>
               </label>
           </div>
             : null
           }



          {this.state.listValues[3] ?
           <label> who is
             <input
                 className={this.state.errors.age ? 'error' : null}
                 name="age"
                 type="number"
                 value={this.state.age}
                 onChange={(e) => this.handleChange(e, 'age', 4)}
              >
             </input> years old. <br/><br/>
           </label>
           : null
         }

         {this.state.listValues[4] &&
           !this.state.errors.userName &&
           !this.state.errors.age ?
           <input
            type='submit'
            value='Continue'
            onClick={this.nextSection}/>
           : null}
  </form></div>
    );
  }
}

export default withRouter(InputBasicPage);
