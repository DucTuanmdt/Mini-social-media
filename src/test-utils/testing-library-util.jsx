import { render } from "@testing-library/react";
import { Provider } from "react-redux";
import store from "../redux/store";
import { BrowserRouter } from "react-router-dom";

const renderWithReduxAndRouter = (Component, options) =>
  render(
    <Provider store={store}>
      <BrowserRouter>{Component}</BrowserRouter>
    </Provider>,
    options
  );

export * from "@testing-library/react";

export { renderWithReduxAndRouter as render };
