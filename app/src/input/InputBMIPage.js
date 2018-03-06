import React from 'react';
import Dropdown from '../form/Dropdown.js';
import {withRouter} from 'react-router-dom';
import Header from '../form/Header.js';

class InputBMIPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      weight: '',
      weightMes: 'lbs',
      height: '',
      heightMes: 'ft',
      listValues: [true, false, false],
      //true means there is an error
      errors: {
        weight: false,
        height: false,
      }
    };
    this.handleChange = this.handleChange.bind(this);
    this.arrayToggle = this.arrayToggle.bind(this);
    this.nextSection = this.nextSection.bind(this);
    this.validate = this.validate.bind(this);
  }

  handleChange (event, name, num){
    const value = event.target.value;
    this.setState({[name]: value});
    this.validate(name, value);
    this.arrayToggle(num);
  }

  arrayToggle(num) {
    var listValues = this.state.listValues;
    listValues[num] = true;
    this.setState({listValues});
  }

  validate(name, value) {
    let fieldValidationError = this.state.errors;

    if (name === 'weight') {
      value.length === 0 || !(/^\d+$/.test(value)) ?
        fieldValidationError.weight = true :
        fieldValidationError.weight = false;
    }

    if (name === 'height') {
      value.length === 0 || !(/^\d+$/.test(value)) ?
        fieldValidationError.height = true :
        fieldValidationError.height = false;
    }

    this.setState({errors: fieldValidationError});
  }

  nextSection() {
    this.props.history.push('/InputSpecificPage');
  }

  render() {
    return (
      <div className ="inputBottomPage">
       <Header header="Introduce yourself" imgSrc="http://cdn.boilerroom.tv/wp-content/uploads/2014/08/cute.jpg?7c4b8e"/>
      <form className ="form">
        <label>Last time I checked, I weight
        <div className="input_drop_align">
          <input
              className={this.state.errors.weight ? 'error' : null}
              name="weight"
              type="number"
              value={this.state.weight}
              onChange={(e) => {
                this.handleChange(e, 'weight', 1)
              }}>
          </input>
        <Dropdown
          name='weightMes'
          data={['lbs', 'kg']}
          value={this.state.weightMes}
          onChange={(newVal) => {
            this.setState({weightMes: newVal});
          }}/>
        </div></label>

        {this.state.listValues[1] ?
         <label>and was
          <div className="input_drop_align">
           <input
               className={this.state.errors.height ? 'error' : null}
               name="height"
               type="number"
               value={this.state.height}
               onChange={(e) => this.handleChange(e, 'height', 2)
             }>
           </input>
         <Dropdown
           name='heightMes'
           data={['ft', 'm']}
           value={this.state.heightMes}
           onChange={(newVal) => {
             this.setState({heightMes: newVal});
           }}/>tall.</div></label>
         : null
       }

       {this.state.listValues[2] &&
            !this.state.errors.weight &&
            !this.state.errors.height ?
         <input
          type='submit'
          value='Continue'
          onClick={this.nextSection}/>
         : null}

      </form></div>
    )
  }
}

export default withRouter(InputBMIPage);
