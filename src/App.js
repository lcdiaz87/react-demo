import React from 'react';
import { BrowserRouter, Route, Link } from "react-router-dom";
import DashboardScreen from "./screens/DashboardScreen";
import StatisticsScreen from "./screens/StatisticsScreen";

class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <div className="grid-container">
          {/* <header>
            <Link to="/">Dashboard</Link>
            <Link to="/statistics">Statistics</Link>
          </header> */}
          <main>
            <Route path="/statistics" component={StatisticsScreen} />
            <Route path="/" component={DashboardScreen} exact />
          </main>
          {/* <footer>Demo for Job-Impulse</footer> */}
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
