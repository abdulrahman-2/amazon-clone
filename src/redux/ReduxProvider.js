"use client";

import { Provider } from "react-redux";
import store from "./store"; // Adjust the path if necessary

const ReduxProvider = ({ children }) => {
  return <Provider store={store}>{children}</Provider>;
};

export default ReduxProvider;
