import React from 'react';
import BMIGraph from '../visualization/BMIGraph.js';

const BMIReader = (props) => {

  let results = props.bmi;
  let resultsLabel;
<<<<<<< HEAD
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
=======
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
>>>>>>> 0dd54fe5b342214a57d09b29535ffe57ad32c9a7

  return (
    <div>
    <BMIGraph results={resultsLabel} rotation={rotationDegree} bmi={results}/>
    </div>
  );
}

export default BMIReader;
