import React, { Component } from "react";
import Select from "react-select";

const options = [
  { value: "country", label: "By Country" },
  { value: "region", label: "By Region" },
  { value: "capital", label: "By Capital" },
];

class SelectBy extends Component {
  render() {
    const changeValue = (value) => {
      console.log(value.value);
      this.props.data.selectSearch(`${value.value}`);
    };

    return (
      <div
        data-toggle="tooltip"
        data-placement="top"
        title="Select type of search"
      >
        <Select onChange={changeValue} options={options}></Select>
      </div>
    );
  }
}

export default SelectBy;
