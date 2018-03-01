import React from 'react';
import Select from 'react-select';
import 'react-select/dist/react-select.css';

const Dropdown = (props) => {

    let opts = [];
    props.data.map(datum => {
      opts.push({
        value: datum,
        label: datum
      });
      return false;
    });

    return (
      <Select
        name={props.name}
        value={props.value}
        onChange={(evt) => {
          props.onChange(evt.value);
        }}
        options={opts}
      />
    );
}

export default Dropdown;
