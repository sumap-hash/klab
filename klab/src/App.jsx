import React from "react";
import { Container } from "react-bootstrap";
import TopHeader from "./components/TopHeader";
import ProjectView from "./pages/project";
import "./style.css";
import { BrowserRouter } from "react-router-dom";
import Router from "./router";

import { createStore, compose } from "redux";
import rootReducer from "./redux/reducer";
import { Provider } from "react-redux";
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(rootReducer, composeEnhancers());

const App = () => {


  return (
    <div className="App">
      <Provider store={store}>
        <BrowserRouter>
          <TopHeader />
          <Container fluid className="app-container">
            <Router />
          </Container>
        </BrowserRouter>
      </Provider>
    </div>
  );
};

export default App;
