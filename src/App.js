import React from 'react';
import { BrowserRouter, Route, Link } from "react-router-dom";
import DashboardScreen from "./screens/DashboardScreen";
import StatisticsScreen from "./screens/StatisticsScreen";

class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <div className="grid-container">
          <main>
            <Route path="/statistics" component={StatisticsScreen} />
            <Route path="/" component={DashboardScreen} exact />
          </main>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
