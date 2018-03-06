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

    let isSmall = () => {
      return longestWord.length <= 3;
    };
    const size = isSmall() ? "SmllDrop" : "RegDrop";
    var liClasses = `${size} Dropdown`;

    return (
        <div className={liClasses}>
            <Select
                name={props.name}
                value={props.value}
                style={{width: (props.value.length*8)+90}}
                onChange={(evt) => {
                    props.onChange(evt.value);
                }}
                options={opts}
            />
        </div>
    );
}

export default Dropdown;
