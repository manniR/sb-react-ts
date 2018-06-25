import * as React from "react";
import { render } from "react-dom";

import Hello from "./Hello";
import Posts from "./components/Posts/Posts";
import PostForm from "./components/Post/PostForm";
import { Provider } from "react-redux";
import store from "./store";

import "./index.css";

const styles = {
  fontFamily: "sans-serif",
  textAlign: "center"
};

const App = () => (
  <Provider store={store}>
    <div style={styles}>
      <Hello name="Typescript ist working" />
      <h2>Start editing to see some magic happen {"\u2728"}</h2>
      <PostForm />
      <Posts />
    </div>
  </Provider>
);

render(<App />, document.getElementById("root"));
