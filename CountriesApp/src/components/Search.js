import React, { Component } from "react";
import axios from "axios";
import NumberFormat from "react-number-format";

// This component search for a capital city or a
// country
class Search extends Component {
  constructor(props) {
    super(props);

    this.state = {
      search: "",
      posts: [],
    };
  }

  handleSearchChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  handelSubmit = (event) => {
    event.preventDefault();
    let url = "";
    if (this.props.data.select === "country") {
      url = `https://restcountries.eu/rest/v2/name/${this.state.search}`;
    } else {
      url = `https://restcountries.eu/rest/v2/capital/${this.state.search}`;
    }
    axios
      .get(url)
      .then((response) => {
        console.log(response.data[0]);
        this.setState({ posts: response.data });
      })
      .catch((error) => {
        console.log(error);
        alert("Entry not found. Please check and try again");
      });
  };

  render() {
    const { search, posts } = this.state;
    return (
      <div>
        <form onSubmit={this.handelSubmit}>
          <div className="input-group mb-3">
            <input
              type="text"
              name="search"
              placeholder="Search..."
              value={search}
              onChange={this.handleSearchChange}
              className="form-control"
            />
          </div>
        </form>
        <hr />
        <div>
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
      </div>
    );
  }
}

export default Search;
