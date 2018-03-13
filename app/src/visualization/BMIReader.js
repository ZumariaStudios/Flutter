import React from 'react';
import BMIGraph from '../visualization/BMIGraph.js';

const BMIReader = (props) => {

  let results = props.bmi;
  let resultsLabel;
  let degree;

  if (results <= 18.5) {
      resultsLabel = 'underweight';
      degree = '22';
  } else if (results <= 25) {
      resultsLabel = 'healthy';
      degree = '72';
  } else if (results <= 30) {
      resultsLabel = 'overweight';
      degree = '127';
  } else {
      resultsLabel = 'obese';
      degree = '175';
  }

  console.log('final results: ' + resultsLabel);
  let rotationDegree = `rotate(${degree},350,338.2)`;
  console.log('rotation degree: ' + rotationDegree);

  return (
    <div className="bmiGraph">
        <BMIGraph results={resultsLabel} rotation={rotationDegree} bmi={results}/>
    </div>
  );
}

export default BMIReader;
