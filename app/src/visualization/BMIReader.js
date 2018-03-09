import React from 'react';
import BMIGraph from '../visualization/BMIGraph.js';

const BMIReader = (props) => {

  let results = props.bmi;
  let resultsLabel;
  let rotationDegree;

  if (results <= 18.5) {
      resultsLabel = 'underweight';
      rotationDegree = 'rotate(17,510.5,486)';
  } else if (results <= 25) {
      resultsLabel = 'healthy';
      rotationDegree = 'rotate(55,510.5,486)';
  } else if (results <= 30) {
      resultsLabel = 'overweight';
      rotationDegree = 'rotate(130,510.5,486)';
  } else {
      resultsLabel = 'obese';
      rotationDegree = 'rotate(160,510.5,486)';
  }
  console.log('final results: ' + resultsLabel);

  return (
    <div>
    <BMIGraph results={resultsLabel} rotation={rotationDegree}/>
    <div>BMI Results</div>
    </div>
  );
}

export default BMIReader;
