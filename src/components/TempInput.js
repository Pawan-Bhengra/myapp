import React from "react";

const scaleName = {
  c: "celcius",
  f: "fahrenhit",
};

class TempInput extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.state = { temperature: "" };
  }

  handleChange(e) {
    // this.setState = { temperature: e.target.value
    this.props.onTemperatureChange(e.target.value);
  }
  render() {
    // local state liftup from TempInput to App

    const temperature = this.props.temperature;
    const scale = this.props.scale;
    return (
      <fieldset>
        <legend>Enter temperature in {scaleName[scale]}</legend>

        <input value={temperature} onChange={this.handleChange} />
      </fieldset>
    );
  }
}

export default TempInput;
