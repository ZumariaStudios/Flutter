import React from 'react';

class Input extends React.Component {
  constructor(props) {
    super(props);
    this.state = {value: ''};
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
    this.props.onChange(event.target.value);
  }

  render() {
    return (
      <label> {this.props.title}
        <input value={this.state.value} onChange={this.handleChange}>
        </input> {this.props.after}
      </label>
    )
  }
}

export default Input;
