import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import routes from "./routes/Routes";
import AppProvider from "./AppProvider";
import Header from "./components/shared/Header";


function App() {
  return (
    <div className="App">
      <AppProvider>
        <Router>
          <Header></Header>
          <Switch>
            {routes.map((route) => (
              <Route
                // Key= {route.path}
                exact
                path={route.path}
                component={route.component}
              />
            ))}
          </Switch>
        </Router>
      </AppProvider>
    </div>
  );
}
export default App;
