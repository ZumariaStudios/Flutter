import React from 'react';
import Toggle from 'react-toggle';
import {withRouter} from 'react-router-dom';
import Header from '../form/Header.js';

class InputSpecificPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      smoker: false,
      famHistory: false,
      diabetesMed: false,
      bloodPressMed: false,
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
      <div className ="inputBottomPage">
      <Header header="Its all coming together now"/>
      <form className ="form">
        <div className="inputLabel">
            <label>Do you smoke?
                <div className="toggle">
                    <Toggle
                      defaultChecked={this.state.smoker}
                      onChange={(e) => {
                          this.handleChange(e, 'smoker')
                      }}/></div>
            </label>
        </div>
        <div className="inputLabel">
            <label>Have a family history of heart disease?
                <div className="toggle">
                    <Toggle
                      defaultChecked={this.state.famHistory}
                      onChange={(e) => {
                          this.handleChange(e, 'famHistory')
                      }}/></div>
            </label>
        </div>
        <div className="inputLabel">
        <span>Under medication for:</span>
            <label>
                <div className="medicationInput">Diabetes</div>
                    <Toggle className="toggle"
                        defaultChecked={this.state.diabetesMed}
                        onChange={(e) => {
                            this.handleChange(e, 'diabetesMed')
                        }}/>
                <div className="medicationInput">Blood pressure</div>
                    <Toggle className="toggle"
                        defaultChecked={this.state.bloodPressMed}
                        onChange={(e) => {
                            this.handleChange(e, 'bloodPressMed')
                        }}/>
            </label>
        </div>

        <input
           type='submit'
           value='Continue'
           onClick={this.nextSection}/>
      </form></div>
    )
  }
}

export default withRouter(InputSpecificPage);
