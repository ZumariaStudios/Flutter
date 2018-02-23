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
      <label>
      <Select
        name="form-field-name"
        value={props.value}
        onChange={(evt) => {
          console.log('dropdown evt: ' + evt.value);
          props.onChange(evt.value);
        }}
        options={opts}
      />
      </label>
    );
}

export default Dropdown;
