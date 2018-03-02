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
    this.nextSection = this.nextSection.bind(this);
  }

  handleChange(e, name) {
    this.setState({[name]: e.target.checked});
  }

  nextSection() {
    this.props.history.push('/InputBPMPage');
  }

  render() {
    return (
      <form>
        <h1 className="input_title">Its all coming together now!</h1>
        <br />
        <label>
          <Toggle
            defaultChecked={this.state.smoker}
            onChange={(e) => {
              this.handleChange(e, 'smoker')
            }}
          />
          <span>Smoke?<br/></span>
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
        <span><br/>Under medication for:<br/></span>
        <label>
          <input
            type='checkbox'
            defaultChecked={this.state.diabetesMed}
            onChange={(e) => {
              this.handleChange(e, 'diabetesMed')
            }}
          />
          <span> Diabetes<br/></span>
          <input
            type='checkbox'
            defaultChecked={this.state.bloodPressMed}
            onChange={(e) => {
              this.handleChange(e, 'bloodPressMed')
            }}
          />
          <span>Blood pressure<br/></span>
        </label>

        <input
         type='submit'
         value='Continue'
         onClick={this.nextSection}/>
      </form>
    )
  }
}

export default withRouter(InputSpecificPage);
