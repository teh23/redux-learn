import logo from './logo.svg';
import './App.css';
import React, {useEffect} from "react";
import Posts from "./components/Posts";
import {PostForm} from "./components/PostForm";
import Test from "./components/Test"
import {Provider, useDispatch} from "react-redux";
import store from "./store";
import {initData} from "./reducers/PostReducer";


function App() {
    const dispatch = useDispatch()

    useEffect(  () =>{
        console.log('ue')
        dispatch(initData())
    }, [dispatch])

      return (
          <Provider store={store}>
                <div className="App">
                    <PostForm/>
                    <Posts/>
                </div>
          </Provider>
      );
}

export default App;
