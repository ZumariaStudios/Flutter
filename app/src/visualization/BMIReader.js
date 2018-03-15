import React from 'react';
import BMIGraph from '../visualization/BMIGraph.js';
import { scaleLinear } from 'd3-scale';

const BMIReader = (props) => {

  let results = props.bmi;
  let resultsLabel;
  const rotationDegrees = scaleLinear().domain([15, 35]).range([0, 180]);

  let r = rotationDegrees(results);

  const rotationDegree = `rotate(${r})`;

  if (results <= 18.5) {
      resultsLabel = 'underweight';
  } else if (results <= 25) {
      resultsLabel = 'healthy';
  } else if (results <= 30) {
      resultsLabel = 'overweight';
  } else {
      resultsLabel = 'obese';
  }

  return (
    <div className="bmiGraph">
        <BMIGraph results={resultsLabel} rotation={rotationDegree} bmi={results}/>
    </div>
  );
}

export default BMIReader;
