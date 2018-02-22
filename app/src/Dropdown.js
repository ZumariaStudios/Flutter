import React from 'react';
import Select from 'react-select';
import 'react-select/dist/react-select.css';

export class Dropdown extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedOption: '',
    };
  }

  handleChange = (selectedOption) => {
    this.setState({ selectedOption });
    console.log(`Selected: ${selectedOption.label}`);
  }

  render() {
    const { selectedOption } = this.state;
    const value = selectedOption && selectedOption.value;

    let opts = [];
    this.props.data.map(datum => {
      opts.push({
        value: datum,
        label: datum
      });
    });

    return (
      <label> {this.props.title}
      <Select
        name="form-field-name"
        value={value}
        onChange={this.handleChange}
        options ={opts}
      />
      </label>
    );
  }
}
