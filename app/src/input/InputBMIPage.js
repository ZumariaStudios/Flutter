import React from 'react';
import {withRouter} from 'react-router-dom';
import Dropdown from '../form/Dropdown.js';
import Header from '../form/Header.js';

class InputBMIPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      weight: '',
      weightMes: 'lbs',
      heightFst: '',
      heightFstMes: 'ft',
      heightSnd: '',
      heightSndMes: 'in',
      listValues: [true, false, false],
      //true means there is an error
      errors: {
        weight: false,
        heightFst: false,
        heightSnd: false,
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

    if (name === 'weight') {
      value.length === 0 || !(/^\d+$/.test(value)) ?
        fieldValidationError.weight = true :
        fieldValidationError.weight = false;
    }

    if (name === 'heightFst') {
      value.length === 0 || !(/^\d+$/.test(value)) ?
        fieldValidationError.heightFst = true :
        fieldValidationError.heightFst = false;
    }

    if (name === 'heightSnd') {
      value.length === 0 || !(/^\d+$/.test(value)) ?
        fieldValidationError.heightSnd = true :
        fieldValidationError.heightSnd = false;
    }

    this.setState({errors: fieldValidationError});
  }

  nextSection() {
    this.props.history.push('/InputSpecificPage');
  }

  componentWillMount() {
    this.localStore('weightMes', 'lbs');
    this.localStore('heightFstMes', 'ft');
    this.localStore('heightSndMes', 'in');
  }

  render() {
    return (
      <div className ="inputBottomPage">
      <Header header="Introduce yourself"/>
      <form className ="form">
        <label>Last time I checked, I weighed
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
            this.localStore('weightMes', newVal);
            this.setState({weightMes: newVal});
          }}/>
        </div></label>

        {this.state.listValues[1] ?
         <label>and was
          <div className="input_drop_align">
           <input
               className={this.state.errors.heightFst ? 'error' : null}
               name="heightFst"
               type="number"
               value={this.state.heightFst}
               onChange={(e) => this.handleChange(e, 'heightFst', 2)
             }>
           </input>
         <Dropdown
           name='heightFstMes'
           data={['ft', 'm']}
           value={this.state.heightFstMes}
           onChange={(newVal) => {
             this.localStore('heightFstMes', newVal);
             this.setState({heightFstMes: newVal});
           }}/>
           <input
               className={this.state.errors.heightSnd ? 'error' : null}
               name="heightSnd"
               type="number"
               value={this.state.heightSnd}
               onChange={(e) => this.handleChange(e, 'heightSnd', 2)
             }>
           </input>
           <Dropdown
             name='heightSndMes'
             data={['in', 'cm']}
             value={this.state.heightSndMes}
             onChange={(newVal) => {
               this.localStore('heightSndMes', newVal);
               this.setState({heightSndMes: newVal});
             }}/>

           tall.</div></label>
         : null
       }

       {this.state.listValues[2] &&
            !this.state.errors.weight &&
            !this.state.errors.heightFst &&
            !this.state.errors.heightSnd ?
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
