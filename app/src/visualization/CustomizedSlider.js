import 'rc-slider/assets/index.css';

import React from 'react';
import ReactDOM from 'react-dom';
import Slider, { createSliderWithTooltip } from 'rc-slider';

const style = { width: 600, margin: 50 };

function log(value) {
  console.log(value); //eslint-disable-line
}

function percentFormatter(v) {
  return `${v} %`;
}

const SliderWithTooltip = createSliderWithTooltip(Slider);

class CustomizedSlider extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: this.props.defaultValue,
      min: this.props.min,
      max: this.props.max,
    };
    console.log('value ' + this.state.value);
  }
  onSliderChange = (value) => {
    log(value);
    this.setState({
      value,
    });
  }
  onAfterChange = (value) => {
    console.log(value); //eslint-disable-line
  }

  render() {
    return (
      <Slider
          defaultValue={this.state.value}
          min={this.state.min}
          max={this.state.max}
          onChange={this.onSliderChange}
          onAfterChange={this.onAfterChange}
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
    );
  }
}

export default CustomizedSlider;
