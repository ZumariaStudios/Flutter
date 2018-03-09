import React from 'react';

const HalfCircle = (props) => {

  let results = props.bmi;
  let resultsLabel;
  let rotationDegree;
  const BG_COLOR = 'rgba(114, 153, 164, 0.25)';

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
    <svg className='HalfCircle' viewBox='0 0 1021.9 489' width="350" preserveAspectRatio='none' fill={BG_COLOR}>
        <path d="M510 8C232 8 7 221.8 7 486h1006C1013 221.8 788 8 510 8z"/>
        { resultsLabel === 'underweight' ?
            <g className='under'>
                <path d="M7 486h503L153.8 148.3C63.1 234.8 7 354.1 7 486z"/>
                <path d="M154.2 147.9l-.4.4L510 486 154.2 147.9z"/>
            </g>
          : null }
        { resultsLabel === 'healthy' ?
            <g className='normal'>
                <path d="M154.2 147.9L510 486V8C371 8 245.2 61.4 154.2 147.9z"/>
                <path d="M154.2 147.9l-.4.4L510 486 154.2 147.9z"/>
            </g>
          : null }
        { resultsLabel === 'overweight' ?
            <g className='overweight'>
                <path d="M511 8v478l354.9-338.9C775 61.1 649.6 8 511 8z"/>
            </g>
        : null }
        { resultsLabel === 'obese' ?
              <g className='obese'>
                  <path d="M865.9 147.1L511 486h503c0-132.5-56.6-252.3-148.1-338.9z"/>
              </g>
        : null }
        <g>
              <path transform={rotationDegree} fill="#7299A4" d="M456 477h55v9h-55z"/>
        </g>
    </svg>
    <div>BMI Results</div>
    </div>
  );
}

export default HalfCircle;
