import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createStore } from "redux";
import { BrowersRouter, Route, Switch } from "react-router-dom";
import rootReducer from "./reducers";
import App from "./components/App";

const store = createStore(rootReducer);

ReactDOM.render(
  <Provider store={store}>
    <BrowersRouter>
      <Switch>
        <Route exact path="/" component={App} />
      </Switch>
    </BrowersRouter>
  </Provider>,
  document.getElementById("root")
);
