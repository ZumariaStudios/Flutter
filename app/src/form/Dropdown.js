import React from 'react';
import Select from 'react-select';
import 'react-select/dist/react-select.css';

const Dropdown = (props) => {

    let opts = [];
    let longestWord;
    let counter = 0;
    props.data.map(datum => {
        opts.push({
            value: datum,
            label: datum
        });

        if (counter === 0) {
          longestWord = datum;
        } else {
          if (datum.length !== 0 &&
            datum.length > longestWord.length) {
            longestWord = datum;
          }
        }
        counter++;
        return false;
    });

    return (
        <div className="Dropdown">
            <Select
                name={props.name}
                value={props.value}
                width={props.longestWord}
                onChange={(evt) => {
                    props.onChange(evt.value);
                }}
                options={opts}
            />
        </div>
    );
}

export default Dropdown;
