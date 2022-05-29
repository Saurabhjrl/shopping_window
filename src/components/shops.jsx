import React, { Component } from "react";
import { getShops } from "../services/fakeShopService";
import Shop from "./shop";
import SearchBox from "./searchBox";

class Shops extends Component {
  state = {
    shops: [],
    searchQuery: "",
  };

  componentDidMount() {
    // call to the server
    const shops = getShops();
    this.setState({ shops });
  }

  handleChange = (query) => {
    const searchQuery = query;
    this.setState({ searchQuery });
  };

  render() {
    const { shops, searchQuery } = this.state;
    return (
      <React.Fragment>
        <SearchBox value={searchQuery} onChange={this.handleChange} />
        <div className="row">
          {shops.map((shop) => (
            <Shop key={shop.id} shop={shop} searchQuery={searchQuery} />
          ))}
        </div>
      </React.Fragment>
    );
  }
}

export default Shops;
