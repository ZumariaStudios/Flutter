import React from 'react';
import BMIGraph from '../visualization/BMIGraph.js';

const BMIReader = (props) => {

  let results = props.bmi;
  let resultsLabel;
  let rotationDegree;

  if (results <= 18.5) {
      resultsLabel = 'underweight';
      rotationDegree = 'rotate(22,350,338.2)';
  } else if (results <= 25) {
      resultsLabel = 'healthy';
      rotationDegree = 'rotate(72,350,338.2)';
  } else if (results <= 30) {
      resultsLabel = 'overweight';
      rotationDegree = 'rotate(127,350,338.2)';
  } else {
      resultsLabel = 'obese';
      rotationDegree = 'rotate(175,350,338.2)';
  }
  console.log('final results: ' + resultsLabel);

  return (
    <div>
    <BMIGraph results={resultsLabel} rotation={rotationDegree} bmi={results}/>
    </div>
  );
}

export default BMIReader;
