import React, { Component } from "react";
import { getWindows } from "../services/fakeWindowService";
import filterData from "../utils/filterData";
import Window from "./window";

class Shop extends Component {
  state = {
    windows: [],
  };

  componentDidMount() {
    // call to the server
    const windows = getWindows(this.props.shop.id);
    this.setState({ windows });
  }

  handleChange = (window) => {
    const windows = [...this.state.windows];
    const index = windows.indexOf(window);
    windows[index] = { ...window };
    windows[index].state = !window.state;
    this.setState({ windows });
  };

  render() {
    const {
      windows: items,
      shop,
      searchQuery: query,
    } = { ...this.state, ...this.props };
    const windows = filterData(items, query);
    return (
      <React.Fragment>
        {windows.map((window) => (
          <Window
            key={window.id}
            window={window}
            onChange={this.handleChange}
            location={shop.location}
          />
        ))}
      </React.Fragment>
    );
  }
}

export default Shop;
