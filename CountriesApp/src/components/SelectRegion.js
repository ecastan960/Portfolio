import React, { Component } from "react";
import Select from "react-select";
import axios from "axios";
import NumberFormat from "react-number-format";

// this class displays all the countries in an
// expecific region

const options = [
  { value: "asia", label: "Asia" },
  { value: "europe", label: "Europe" },
  { value: "oceania", label: "Oceania" },
  { value: "africa", label: "Africa" },
  { value: "americas", label: "Americas" },
];

class SelectRegion extends Component {
  constructor(props) {
    super(props);

    this.state = {
      url: "",
      posts: [],
    };
  }

  render() {
    const { posts } = this.state;
    const changeValue = (value) => {
      console.log(value.value);
      axios
        .get(`https://restcountries.eu/rest/v2/region/${value.value}`)
        .then((response) => {
          console.log(response.data[0]);
          this.setState({ posts: response.data });
        })
        .catch((error) => {
          console.log(error);
        });
    };
    return (
      <div>
        <div data-toggle="tooltip" data-placement="top" title="Select region">
          <Select onChange={changeValue} options={options}></Select>
        </div>

        <hr />
        <table className="table table-hover">
          <thead>
            {posts.length ? (
              <tr>
                <th>#</th>
                <th>Flag</th>
                <th>Name</th>
                <th>Capital</th>
                <th>Population</th>
                <th>Currency</th>
                <th>Language</th>
              </tr>
            ) : null}
          </thead>
          <tbody>
            {posts.length
              ? posts.map((post, index) => (
                  <tr key={index}>
                    <td>{index}</td>
                    <td>
                      <img className="small-flag" src={post.flag} alt="" />
                    </td>
                    <td>{post.name}</td>
                    <td>{post.capital}</td>
                    <td>
                      <NumberFormat
                        value={post.population}
                        className="foo"
                        displayType={"text"}
                        thousandSeparator={true}
                        renderText={(value, props) => (
                          <div {...props}>{value}</div>
                        )}
                      />
                    </td>
                    <td>{post.currencies[0].code}</td>
                    <td>{post.languages[0].name}</td>
                  </tr>
                ))
              : null}
          </tbody>
        </table>
      </div>
    );
  }
}

export default SelectRegion;
