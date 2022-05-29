import React, { Component } from "react";
import { Route, Routes } from "react-router-dom";
import NavBar from "./components/navBar";
import Shops from "./components/shops";

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <NavBar />
        <main className="container mt-4 mb-5">
          <Routes>
            <Route path="/" element={<Shops />} />
          </Routes>
        </main>
      </React.Fragment>
    );
  }
}

export default App;
