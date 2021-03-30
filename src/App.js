import logo from './logo.svg';
import './App.css';
import React from "react";
import Posts from "./components/Posts";
import {PostForm} from "./components/PostForm";
import Test from "./components/Test"
import {Provider} from "react-redux";
import store from "./store";

function App() {
  return (
      <Provider store={store}>
            <div className="App">
                <Test />
                <PostForm/>
                <Posts/>
            </div>
      </Provider>
  );
}

export default App;
