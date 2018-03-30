import React from 'react';

const Button = (props) => {
  let results = props.results;
  let selectStyle;
  if (results === "high" ||
      results === "stage 1 prehypertension" ||
      results === "stage 2 prehypertension" ||
      results === "Poor" ||
      results === "underweight" ||
      results === "overObese" ||
      results === "obese") {
    selectStyle = "poor";
  } else if (results === "elevated" ||
      results === "prehypertension" ||
      results === "Average" ||
      results === "overweight" ||
      results === "healthyOver" ||
      results === "underHealthy") {
    selectStyle = "average";
  } else if (results === "Good") {
    selectStyle = "good";
  } else if (results === "noVals") {
    selectStyle = "noVals";
  } else {
    selectStyle = "excellent";
  }

  let selected = true;
  console.log('selected: ' + selected)
  console.log('selectStyle: ' + selectStyle);

  let labelValue = props.label;
  console.log('label: ' + labelValue);

  let label = (<text className="label" x="40" y="110">{labelValue}</text>);

  return(
    <div>
        <svg viewBox="0 0 303.1 190.5" preserveAspectRatio='none'>
            <g id="Chol_smallButton">
                <path className={selectStyle} d="M14.7,55.5L14.2,131c-0.1,13.4,10.8,24.4,24.2,24.4l223-0.1c13.3,0,24.1-10.8,24.2-24.1l0.4-75.5c0.1-13.4-10.8-24.4-24.2-24.4l-223,0.1C25.6,31.4,14.8,42.1,14.7,55.5z"/>
            </g>
            {selected ?
            <g>
                <defs>
                    <mask id="buttonMask">
                    <path className="buttonShapeBehind1" d="M274,71.1l0.1-17.5c0.1-10.8-7-20.1-16.8-23.2c-11.8-4.6-66.8-25.1-122.7-25.1c-60.6,0-120,27-120,27l0,0.4c-6.8,4-11.5,11.2-11.9,19.6L2.6,71.1H274z"/>
                    <path className="buttonShapeBehind2" d="M2.7,26.3L2.6,43.8C2.5,54.7,9.6,63.9,19.4,67c11.8,4.6,66.8,25.1,122.7,25.1c60.6,0,120-27,120-27l0-0.c6.8-4,11.5-11.2,11.9-19.6l0.1-18.8H2.7z"/>
                    </mask>
                </defs>
                <g id="revealed"> 
                    <path className={selectStyle} d="M269.3,32.4c-11.8-4.6-66.8-25.1-122.7-25.1c-60.6,0-120,27-120,27l0,0.4c-7.1,4.2-11.9,11.9-11.9,20.7L14.2,131c-0.1,9.9,5.9,18.5,14.4,22.3l0,0.1c0,0,62.5,26,122,26c63.1,0,123-27,123-27l0-0.4c7.2-4.2,12-11.9,12.1-20.8l0.4-75.5C286.2,44.8,279.1,35.5,269.3,32.4z"/>
                </g>
            </g> : null}
            {label}
        </svg>
    </div>
  );
}

export default Button;
