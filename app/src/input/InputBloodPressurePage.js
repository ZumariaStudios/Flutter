import React from 'react';
import {withRouter} from 'react-router-dom';
import BPMResults from '../results/BPMResults.js';

class InputBloodPressurePage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
            sbp: '',
            dbp: '',
            sbpError: false,
            dpbError: false,
            visited: '',
    };
    this.handleChange = this.handleChange.bind(this);
    this.nextSection = this.nextSection.bind(this);
    this.validate = this.validate.bind(this);
  }

  handleChange (event, name){
    const value = event.target.value;

    this.localStore(name, value);
    this.setState({[name]: value});
    this.validate(name, value);
  }

  localStore(name, value) {
    const cachedHits = localStorage.getItem(value);
    if (cachedHits) {
      this.setState({[name]: JSON.parse(cachedHits)});
      return;
    }

    localStorage.setItem(name, JSON.stringify(value));
  }

  validate(name, value) {
    switch (name) {
      case 'sbp':
          if (value.length === 0 || value < 100 || value > 180) {
            this.setState({sbpError: true});
          } else {
            this.setState({sbpError: false});
          }
          break;
      case 'dbp':
          if (value.length === 0 || value < 70 || value > 110) {
            this.setState({dbpError: true});
          } else {
            this.setState({dbpError: false});
          }
          break;
      default:
        break;
    }
  }

  nextSection() {
    this.localStore('visited', false);
    if (this.state.sbp.length === 0 ||
            this.state.dbp.length === 0 ||
            this.state.sbpError || this.state.dbpError) {
      this.props.history.push('/SetReminderPage');
    } else {
      this.props.history.push('/InputBloodChemistryPage');
    }
  }

  render() {
    let sbpErorMessage = '*Enter a value in between 100 and 180';
    let dbpErrorMessage = '*Enter a value in between 70 and 110';
    return(
      <div className ="inputPage">
       <div className="top_half">
          <div className ="bmiResultsArea">
              <h4 className="topSpacing">Cardiovascular Health Assessment:</h4>
              <BPMResults/>
              <div className="grayLine"></div>
      </div>
      <div className="bottom_half">
          </div>
          </div>
          <h4 className="topSpacing">Keep going...</h4>
          <form className ="form">
              <label>My systolic blood pressure (SBP) (mmHg) is
                    <input
                        className={this.state.sbpError ? 'error' : null}
                        name="sbp"
                        type="number"
                        value={this.state.sbp}
                        onChange={(e) => {
                          this.handleChange(e, 'sbp')
                        }}>
                    </input>
                    <div className="errorMessage">{this.state.sbpError ?
                          sbpErorMessage: null}</div>
              </label>
              <label>My diastolic blood pressure (DBP) (mmHg) is
                    <input
                        className={this.state.dbpError ? 'error' : null}
                        name="dbp"
                        type="number"
                        value={this.state.dbp}
                        onChange={(e) => {
                          this.handleChange(e, 'dbp')
                        }}>
                    </input>
                    <div className="errorMessage">{this.state.dbpError ?
                          dbpErrorMessage : null}</div>
              </label>
              <input
                     type='submit'
                     value={
                        this.state.sbp.length === 0 ||
                        this.state.dbp.length === 0 ||
                        this.state.sbpError || this.state.dbpError ? 'Skip' : 'continue'}
                     onClick={this.nextSection}/>
           </form>
      </div>
    );
  }
}

export default withRouter(InputBloodPressurePage);
