import React, { Component, Suspense } from 'react';
import { hot } from 'react-hot-loader/root';
import Spinner from "react-spinner-material";
import { BrowserRouter as Router } from "react-router-dom";
import Navbar from "../components/UI/Navbar/Navbar";
import Content from "../components/UI/Content/Content";

class App extends Component {
  render() {
    return (
        <Suspense fallback={<Spinner size={120} spinnerColor={"#333"} spinnerWidth={2} visible={true} />}>
            <Router>
                <div>
                    <Navbar/>
                    <Content/>
                </div>
            </Router>
        </Suspense>
    );
  }
}

export default hot(App);
