import React, { Component } from "react";

class NumberOfEvents extends Component {
  state = { num: 32 };

  changeNum = (value) => {
    this.setState({ num: value });
    this.props.updateNumberOfEvents(value);
  };

  componentDidMount() {
    this.setState({ num: this.props.num || 32 });
  }

  render() {
    const { num } = this.state;

    return (
      <label>
        Number of events
        <input
          className="num"
          type="number"
          value={num}
          onChange={(event) => this.changeNum(event.target.value)}
        ></input>
      </label>
    );
  }
}

export default NumberOfEvents;
