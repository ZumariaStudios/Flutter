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
      diabetic: false,
      treatingBP: false,
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
    this.localStore('diabetic', false);
    this.localStore('treatingBP', false);
  }

  render() {
    return (
      <div className ="inputBottomPage">
      <Header header="Its all coming together now! Do you:"/>
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
                        defaultChecked={this.state.diabetic}
                        onChange={(e) => {
                            this.handleChange(e, 'diabetic')
                        }}/>
                <div className="bloodPressCond">Blood pressure</div>
                    <Toggle className="toggle"
                        defaultChecked={this.state.treatingBP}
                        onChange={(e) => {
                            this.handleChange(e, 'treatingBP')
                        }}/>
                  </div>
            </label>
        </div>

        <input
           type='submit'
           value='Continue'
           onClick={this.nextSection}/>

      </form>
      </div>
    )
  }
}

export default withRouter(InputSpecificPage);
