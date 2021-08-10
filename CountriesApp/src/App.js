import React, { Component } from "react";
import Search from "./components/Search";
import SelectBy from "./components/SelectBy";
import SelectRegion from "./components/SelectRegion";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      select: "country",
      region: "",
    };
  }

  selectSearch(item) {
    this.setState({
      select: item,
    });
  }

  selectRegion(item) {
    this.setState({
      region: item,
    });
  }

  render() {
    return (
      <div>
        <nav class="navbar navbar-dark bg-dark">
          <div class="container-fluid">
            <span class="navbar-brand mb-0 h1">Countries App</span>
          </div>
        </nav>
        <div className="row container mt-4">
          {/* this seccion allows to select the type of search wanted */}
          <div className="select-bar col-3">
            <SelectBy
              data={{
                select: this.state.select,
                selectSearch: this.selectSearch.bind(this),
              }}
            ></SelectBy>
          </div>
          {/* Depending on the type of search, the process required a search bar or 
          an select bar */}
          <div className="col">
            {this.state.select === "country" ? (
              <Search data={{ select: this.state.select }} />
            ) : null}
            {this.state.select === "capital" ? (
              <Search data={{ select: this.state.select }} />
            ) : null}
            {this.state.select === "region" ? (
              <SelectRegion
                data={{
                  region: this.state.region,
                  selectRegion: this.selectRegion.bind(this),
                }}
              ></SelectRegion>
            ) : null}
          </div>
        </div>
      </div>
    );
  }
}

export default App;
