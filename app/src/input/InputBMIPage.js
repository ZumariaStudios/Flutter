import React from 'react';
import Dropdown from '../form/Dropdown.js';
import {withRouter} from 'react-router-dom';

class InputBMIPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      weight: '',
      weightMes: '',
      height: '',
      heightMes: '',
      listValues: [true, false, false]
    };
    this.handleChange = this.handleChange.bind(this);
    this.arrayToggle = this.arrayToggle.bind(this);
    this.nextSection = this.nextSection.bind(this);
  }

  handleChange (event, name){
    this.setState({[name]: event.target.value});
  }

  arrayToggle(num) {
    var listValues = this.state.listValues;
    listValues[num] = true;
    this.setState({listValues});
  }

  nextSection() {
    this.props.history.push('/InputSpecificPage');
  }

  render() {
    return (
      <form>
        <label className="input_prompt">Last time I checked, I weight
          <input
              type="weight"
              value={this.state.weight}
              onChange={(e) => {
                this.handleChange(e, 'weight')
              }}>
          </input>
        </label>
        <Dropdown
          name='weightMes'
          data={['lbs', 'kg']}
          value={this.state.weightMes}
          onChange={(newVal) => {
            this.setState({weightMes: newVal});
            this.arrayToggle(1);
          }}
        />

        {this.state.listValues[1] ?
          <div>
         <label className="input_prompt">and was
           <input
               type="height"
               value={this.state.height}
               onChange={(e) => this.handleChange(e, 'height')
             }>
           </input> tall.
         </label>
         <Dropdown
           name='heightMes'
           data={['ft', 'm']}
           value={this.state.heightMes}
           onChange={(newVal) => {
             this.setState({heightMes: newVal});
             this.arrayToggle(2);
           }}/></div>
         : null
       }

       {this.state.listValues[2] ?
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
