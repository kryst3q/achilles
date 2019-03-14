import React, {Component, Suspense} from 'react';
import Navigation from './Navigation.jsx';
import { hot } from 'react-hot-loader/root';
import Spinner from "react-spinner-material";

class App extends Component {
  render() {
    return (
        <Suspense fallback={<Spinner size={120} spinnerColor={"#333"} spinnerWidth={2} visible={true} />}>
          <Navigation/>
        </Suspense>
    );
  }
}

export default hot(App);
