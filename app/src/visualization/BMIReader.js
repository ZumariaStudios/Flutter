import React from 'react';
import BMIGraph from '../visualization/BMIGraph.js';
import { scaleLinear } from 'd3-scale';

const BMIReader = (props) => {

  let results = props.bmi;
  let resultsLabel;
  let slightlyText;
  const rotationDegrees = scaleLinear().domain([15, 32]).range([0, 180]);

  let r = rotationDegrees(results);

  const rotationDegree = `rotate(${r})`;

  if (results <= 17.5) {
      resultsLabel = 'underweight';
  } else if (results <= 19.5){
      resultsLabel = 'underHealthy';
      slightlyText = 'Slightly underweight';
  } else if (results <= 25) {
      resultsLabel = 'healthy';
  } else if (results <= 26) {
      resultsLabel = 'healthyOver';
      slightlyText = 'Slightly overweight';
  }else if (results <= 29) {
      resultsLabel = 'overweight';
  } else if (results <= 31){
      resultsLabel = 'overObese';
      slightlyText = 'Slightly obese';
  }else {
      resultsLabel = 'obese';
  }

  console.log('results: ' + resultsLabel);
  console.log('slightly: ' + slightlyText);

  return (
    <div className="bmiGraph">
        <BMIGraph results={resultsLabel} rotation={rotationDegree} bmi={results} slightly={slightlyText}/>
    </div>
  );
}

export default BMIReader;
