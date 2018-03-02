import React from 'react';
import Dropdown from '../form/Dropdown.js';
import {withRouter} from 'react-router-dom';

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
      <form>
        <label className="input_pompt">Last time I checked, I weight
          <input
              className={this.state.errors.weight ? 'error' : null}
              type="weight"
              value={this.state.weight}
              onChange={(e) => {
                this.handleChange(e, 'weight', 1)
              }}>
          </input>
        </label>
        <Dropdown
          name='weightMes'
          data={['lbs', 'kg']}
          value={this.state.weightMes}
          onChange={(newVal) => {
            this.setState({weightMes: newVal});
          }}
        />

        {this.state.listValues[1] ?
          <div>
         <label className="input_pompt">and was
           <input
               className={this.state.errors.height ? 'error' : null}
               type="height"
               value={this.state.height}
               onChange={(e) => this.handleChange(e, 'height', 2)
             }>
           </input> tall.
         </label>
         <Dropdown
           name='heightMes'
           data={['ft', 'm']}
           value={this.state.heightMes}
           onChange={(newVal) => {
             this.setState({heightMes: newVal});
           }}/></div>
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

      </form>
    )
  }
}

export default withRouter(InputBMIPage);
