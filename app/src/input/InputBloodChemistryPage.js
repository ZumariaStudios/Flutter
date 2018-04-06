import React from 'react';
import {withRouter} from 'react-router-dom';
import FraminghamBMIModelResults from '../results/FraminghamBMIModelResults.js';

class InputBloodChemistryPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      triglycerides: '',
      goodChol: '',
      badChol: '',
      crp: '',
      triglyceridesError: false,
      goodCholError: false,
      badCholError: false,
      crpError: false,
    }

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
      case 'triglycerides':
          if (value.length === 0 || value < 100 || value > 500) {
            this.setState({triglyceridesError: true});
          } else {
            this.setState({triglyceridesError: false});
          }
          break;
      case 'goodChol':
          if (value.length === 0 || value < 30 || value > 100) {
            this.setState({goodCholError: true});
          } else {
            this.setState({goodCholError: false});
          }
          break;
      case 'badChol':
          if (value.length === 0 || value < 50 || value > 250) {
            this.setState({badCholError: true});
          } else {
            this.setState({badCholError: false});
          }
          break;
      case 'crp':
          if (value.length === 0 || value < 0.1 || value > 10) {
            this.setState({crpError: true});
          } else {
            this.setState({crpError: false});
          }
          break;
      default:
        break;
    }
  }

  nextSection() {
    if (this.state.triglycerides.length === 0 ||
            this.state.goodChol.length === 0 ||
            this.state.badChol.length === 0 ||
            this.state.crp.length === 0 ||
            this.state.triglyceridesError ||
            this.state.goodCholError ||
            this.state.badCholError ||
            this.state.crpError) {
      this.props.history.push('/SetReminderPage');
    } else {
      this.props.history.push('/FinalResultsPage');
    }
  }

  render() {
    let triglyceridesErorMessage = '*Enter a value in between 100 and 500';
    let goodCholErrorMessage = '*Enter a value in between 30 and 100';
    let badCholErorMessage = '*Enter a value in between 50 and 250';
    let crpErrorMessage = '*Enter a value in between 0.1 and 10';
    return(
      <div className ="inputPage">
       <div className="top_half">
          <div className ="bmiResultsArea">
              <h4 className="topSpacing">Your heart risk so far...</h4>
              <FraminghamBMIModelResults/>
              <div className="grayLine"></div>
        </div>
        <div className="bottom_half">
          </div>
          <h4>One more thing...</h4>
          <h4>Blood Chemistry</h4>
          <form className ="form">
              <label>Triglycerides (mg/dL):
                    <input
                        className={this.state.triglyceridesError ? 'error' : null}
                        name="triglycerides"
                        type="number"
                        value={this.state.triglycerides}
                        onChange={(e) => {
                          this.handleChange(e, 'triglycerides')
                        }}>
                    </input>
                    <div className="errorMessage">{this.state.triglyceridesError ?
                          triglyceridesErorMessage : null}</div>
              </label>
              <label>Good Cholesterol (HDL)(mg/dL):
                    <input
                        className={this.state.goodCholError ? 'error' : null}
                        name="goodChol"
                        type="number"
                        value={this.state.goodChol}
                        onChange={(e) => {
                          this.handleChange(e, 'goodChol')
                        }}>
                    </input>
                    <div className="errorMessage">{this.state.goodCholError ?
                          goodCholErrorMessage : null}</div>
              </label>
              <label>Bad Cholesterol (LDL) (mg/dL):
                    <input
                        className={this.state.badCholError ? 'error' : null}
                        name="badChol"
                        type="number"
                        value={this.state.badChol}
                        onChange={(e) => {
                          this.handleChange(e, 'badChol')
                        }}>
                    </input>
                    <div className="errorMessage">{this.state.badCholError ?
                          badCholErorMessage : null}</div>
              </label>
              <label>C-reactive Proteins (mg/dL):
                    <input
                        className={this.state.crpError ? 'error' : null}
                        name="crp"
                        type="number"
                        value={this.state.crp}
                        onChange={(e) => {
                          this.handleChange(e, 'crp')
                        }}>
                    </input>
                    <div className="errorMessage">{this.state.crpError ?
                          crpErrorMessage : null}</div>
              </label>
              <input
                     type='submit'
                     value={
                        this.state.triglycerides.length === 0 ||
                        this.state.goodChol.length === 0 ||
                        this.state.triglyceridesError || this.state.goodCholError ? 'Skip' : 'continue'}
                     onClick={this.nextSection}/>
           </form>


        </div>

      </div>
    );
  }
}

export default withRouter(InputBloodChemistryPage);
