import React from 'react';
import Dropdown from '../form/Dropdown.js';
import Slider, { createSliderWithTooltip } from 'rc-slider';
import CustomizedSlider from '../visualization/CustomizedSlider.js';
import 'rc-slider/assets/index.css';
import Toggle from 'react-toggle';

const InteractiveBMI = (props) => {

  let activeClass;

  if (props.bmiResults === 'healthyOver' || props.bmiResults === 'overweight' ||
      props.bmiResults === 'overObese' || props.bmiResults === 'obese')
        activeClass = "LightRedArea";

  let smokerRecom = "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.";

  let recomm = <div className="smokeRecomm">
                  <div className="recTitle">Recommendations</div>
                  <div className="recText">{smokerRecom}</div>
               </div>;

  let smokerDetails = (<div className={activeClass}>
                          <div className="interactiveText">
                              <div className="interactiveInput">Smoker</div>
                              <div className="toggle">
                                  <Toggle
                                    defaultChecked={props.smoker}
                                    onChange={(e) => {
                                        props.handleToggle('smoker', e)}}/>
                              </div>
                              {recomm}
                          </div>
                      </div>);

  let heightDetails = (<div className="interactiveText">
                          <div className="interactiveInput">Height</div>
                          <input type="number" value={props.heightFst}></input>
                          <Dropdown className="drop" data={['ft', 'm']} value={props.heightFstMes}/>
                          <input type="number" value={props.heightSnd}></input>
                          <Dropdown className="drop" data={['in', 'cm']} value={props.heightSndMes}/>
                        </div>);

  let weightDetails = (<div className={activeClass}>
                          <div className="interactiveText">
                              <div className="interactiveInput">Weight</div>
                              <input type="number" value={props.weight}></input>
                              <Dropdown className="drop" data={['lbs', 'kg']} value={props.weightMes}/>
                              <div className="slider">
                                  <Slider
                                      defaultValue={props.weight}
                                      min={30}
                                      max={300}
                                      onChange={(e) => props.handleChange('weight', e)}
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
      {heightDetails}
      {smokerDetails}
    </div>
  );
}

export default InteractiveBMI;
