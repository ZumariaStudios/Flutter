import React from 'react';
import Toggle from 'react-toggle';
import {withRouter} from 'react-router-dom';
import Header from '../form/Header.js';
import Footer from '../form/Footer.js';

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
    const value = e.target.checked;
    this.localStore(name, value);
    this.setState({[name]: value});
  }

  localStore(name, value) {
    const cachedHits = localStorage.getItem(value);
    if (cachedHits) {
      this.setState({[name]: JSON.parse(cachedHits)});
      return;
    }

    localStorage.setItem(name, JSON.stringify(value));
  }

  nextSection() {
    this.props.history.push('/InputHeartRatePage');
  }

  componentWillMount() {
    this.localStore('smoker', false);
    this.localStore('famHistory', false);
    this.localStore('diabetesMed', false);
    this.localStore('bloodPressMed', false);
  }

  render() {
    return (
      <div className ="inputPage">
      <div className="top_half">
      <Header header="Its all coming together now! Do you:"/>
      </div>
      <div className="bottom_half">
      <form className ="form">
        <div className="inputLabel">
            <label>Smoke?
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
        Take medication for:
            <label>
                <div className="medicationInput">
                 <div className="diabetesCond">Diabetes</div>
                    <Toggle className="toggle"
                        defaultChecked={this.state.diabetesMed}
                        onChange={(e) => {
                            this.handleChange(e, 'diabetesMed')
                        }}/>
                <div className="bloodPressCond">Blood pressure</div>
                    <Toggle className="toggle"
                        defaultChecked={this.state.bloodPressMed}
                        onChange={(e) => {
                            this.handleChange(e, 'bloodPressMed')
                        }}/>
                  </div>
            </label>
        </div>

        <input
           type='submit'
           value='Continue'
           onClick={this.nextSection}/>

      </form>

            <Footer pageID='3'/>
            </div>
            </div>
    )
  }
}

export default withRouter(InputSpecificPage);
