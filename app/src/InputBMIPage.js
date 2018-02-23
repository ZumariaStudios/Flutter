import React from 'react';
import InputBasicPage from './InputBasicPage';
import Dropdown from './Dropdown.js';
import {withRouter} from 'react-router-dom';

class InputBMIPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      weight: '',
      height: '',
      listValues: [true, false]
    };
    this.handleChange = this.handleChange.bind(this);
    this.arrayToggle = this.arrayToggle.bind(this);
  }

  handleChange (event, name, num){
    this.setState({[name]: event.target.value});
    this.arrayToggle(num);
    // name === 'age' ? this.nextSection() : null;
  }

  arrayToggle(num) {
    var listValues = this.state.listValues;
    listValues[num] = true;
    this.setState({listValues});
  }

  render() {
    return (
      <form>
        <label className="input_pompt">Last time I checked, I weight
          <input
              type="weight"
              value={this.state.weight}
              onChange={(e) => {
                this.handleChange(e, 'weight', 1)
              }}>
          </input>
        </label>

        {this.state.listValues[1] ?
         <label className="input_pompt">and was
           <input
               type="height"
               value={this.state.height}
               onChange={(e) => this.handleChange(e, 'height')
             }>
           </input> tall.
         </label>
         : null
       }
      </form>
    )
  }
}

export default withRouter(InputBMIPage);
