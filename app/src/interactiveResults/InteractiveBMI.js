import React from 'react';
import Dropdown from '../form/Dropdown.js';
import Slider, { createSliderWithTooltip } from 'rc-slider';
import CustomizedSlider from '../visualization/CustomizedSlider.js';
import 'rc-slider/assets/index.css';
import Toggle from 'react-toggle';
import CircularArrow from '../visualization/CircularArrow.js';

class InteractiveBMI extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showWeightRec: false,
      weightRec: '',
      showSmokeRec: false,
      smokeRec: '',
      turnArrowWeight: 'originalPos',
      turnArrowSmoke: 'originalPos',
    }
    this.showRec = this.showRec.bind(this);
    this.recomTemplate = this.recomTemplate.bind(this);
    this.arrowAnimation = this.arrowAnimation.bind(this);
  }

  turnArrow(name, value) {
    if (!value === true) {
      this.setState({[name]: 'upPos'});
    } else {
      this.setState({[name]: 'downPos'});
    }
  }

  showRec(name) {
    let value;
    if (name === 'showWeightRec') {
      value = this.state.showWeightRec;
      this.turnArrow('turnArrowWeight', value);
    } else {
      value = this.state.showSmokeRec;
      this.turnArrow('turnArrowSmoke', value);
    }
    this.setState({[name]: !value});
  }

  recomTemplate(recom, recName) {
    return (<div className="recommStyling" onClick={(e) => this.showRec(recName)}>
                    <div className="recTitle">Recommendations</div>
                    <div className="recText">{recom}</div>
                 </div>);
  }

  arrowAnimation(arrowValue) {
    return (<div className="circleArrowContainer"><CircularArrow turnArrow={arrowValue}/></div>);
  }

  render() {
    let activeClass;
    console.log('smoke state: ' + this.state.showSmokeRec);

    if (this.props.bmiResults === 'healthyOver' || this.props.bmiResults === 'overweight' ||
        this.props.bmiResults === 'overObese' || this.props.bmiResults === 'obese')
          activeClass = "LightRedArea";

    let arrow = (<div className="circleArrowContainer"><CircularArrow turnArrow={this.state.turnArrow}/></div>);

    let smokerRecom = "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.";

    let weightRecom = "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat.";

    let smokerDetails = (<div className={activeClass} onClick={(e) => this.showRec('showSmokeRec')}>
                            <div className="interactiveText">
                                <div className="interactiveInput">Smoker</div>
                                <div className="toggle">
                                    <Toggle
                                      defaultChecked={this.props.smoker}
                                      onChange={(e) => {
                                          this.props.onChangeHandleChange('smoker', e)}}/>
                                </div>
                            </div>
                        </div>);

    let heightDetails = (<div className="interactiveText">
                            <div className="interactiveInput">Height</div>
                            <input type="number" value={this.props.heightFst}></input>
                            <Dropdown className="drop" data={['ft', 'm']} value={this.props.heightFstMes}/>
                            <input type="number" value={this.props.heightSnd}></input>
                            <Dropdown className="drop" data={['in', 'cm']} value={this.props.heightSndMes}/>
                          </div>);

    let weightDetails = (<div className={activeClass} onClick={(e) => this.showRec('showWeightRec')}>
                            <div className="interactiveText">
                                <div className="interactiveInput">Weight</div>
                                <input type="number" value={this.props.weight}></input>
                                <Dropdown className="drop" data={['lbs', 'kg']} value={this.props.weightMes}/>
                                <div className="slider">
                                    <Slider
                                        defaultValue={this.props.weight}
                                        min={30}
                                        max={300}
                                        onChange={(e) => this.props.onChangeHandleChange('weight', e)}
                                        trackStyle={{ backgroundColor: '#EE4031', height: 10 }}
                                        handleStyle={{
                                            borderColor: '#E6F4F4',
                                            height: 28,
                                            width: 28,
                                            marginLeft: -14,
                                            marginTop: -9,
                                            backgroundColor: '#E6F4F4',
                                        }}
                                        railStyle={{ backgroundColor: '#7299A4', height: 10 }}
                                      />
                                  </div>
                              </div>
                          </div>);

    return(
      <div>
        <div className="interactiveTitle">BMI & Lifestyle</div>
        {weightDetails}
        {this.state.showWeightRec && activeClass ? this.recomTemplate(weightRecom, 'showWeightRec') : null}
        <div className="LightRedArea" onClick={(e) => this.showRec('showWeightRec')}>{activeClass ?
              this.arrowAnimation(this.state.turnArrowWeight) : null}</div>
        {heightDetails}
        {smokerDetails}
        {this.state.showSmokeRec && activeClass ? this.recomTemplate(smokerRecom, 'showSmokeRec') : null}
        <div className="LightRedArea" onClick={(e) => this.showRec('showSmokeRec')}>{activeClass ?
              this.arrowAnimation(this.state.turnArrowSmoke) : null}</div>
      </div>
    );
  }
}

export default InteractiveBMI;
