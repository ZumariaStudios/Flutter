import React from 'react';

const Radial = (props) => {
    const BAR_WIDTH = 5;
    const amt = props.completed || 0;
    console.log('props completed: ' + amt);
    console.log('pathClass is: ' + props.statusClass);
    const dashString = `${amt}, 100`;

    let text = null;
    if (amt) {
        text = (<text className="radialText" x='50%' y='50%' dy='0.3em' textAnchor='middle'>{amt}%</text>);
    }

    let statusClass = 'intermediate';
    if (amt > 40 && amt < 80) {
      statusClass = 'intermediate';
    }
    if (amt >= 80) {
      statusClass = 'high_risk';
    }

    return (
        <svg className='Radial' viewBox='0 0 36 36'>
            <g className={statusClass}>
                <path className='background'
                    d='M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831'
                    fill='none'
                    strokeWidth={BAR_WIDTH}
                />
                <path className='completed'
                    d='M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831'
                    fill='none'
                    strokeDasharray={dashString}
                />
                {text}
            </g>
        </svg>
    );

};

export default Radial;
