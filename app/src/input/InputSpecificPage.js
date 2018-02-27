import React from 'react';
import Toggle from 'react-toggle';
import {withRouter} from 'react-router-dom';

class InputSpecificPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      smoker: false,
      famHistory: false,
      diabetesMed: false,
      bloodPressMed: false
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e, name) {
    this.setState({[name]: e.target.checked});
  }

  render() {
    return (
      <form>
        <h1 className="input_title">Its all coming together now!</h1>
        <label>
          <Toggle
            defaultChecked={this.state.smoker}
            onChange={(e) => {
              this.handleChange(e, 'smoker')
            }}
          />
          <span>Smoke?</span>
        </label>
        <label>
          <input
            type='checkbox'
            defaultChecked={this.state.famHistory}
            onChange={(e) => {
              this.handleChange(e, 'famHistory')
            }}
          />
          <span>Have a family history of heart disease?</span>
        </label>
        <span>Under medication for:</span>
        <label>
          <input
            type='checkbox'
            defaultChecked={this.state.diabetesMed}
            onChange={(e) => {
              this.handleChange(e, 'diabetesMed')
            }}
          />
          <span>Diabetes</span>
          <input
            type='checkbox'
            defaultChecked={this.state.bloodPressMed}
            onChange={(e) => {
              this.handleChange(e, 'bloodPressMed')
            }}
          />
          <span>Blood pressure</span>
        </label>
      </form>
    )
  }
}

export default withRouter(InputSpecificPage);
