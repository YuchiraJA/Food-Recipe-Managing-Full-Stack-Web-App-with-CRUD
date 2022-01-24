import React, { Component } from 'react';
// import {BrowserRouter,Route} from 'react-router-dom';
// import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import { render } from "react-dom";
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";

import CreatePost from './components/CreatePost';
import EditPost from './components/EditPosts';
import Home from './components/Home';
import NavBar from './components/NavBar';
import PostDetails from './components/PostDetails';

export default class App extends Component {
  render() {
    return (
      <BrowserRouter>
          <div className="container">
            <NavBar/>
      <Routes>
      
      {/* <Route path="/" element={<Home />}></Route>
          <Route path="/add" component={CreatePost}></Route>
          <Route path="/edit/:id" component={EditPost}></Route>
          <Route path="post/:id" component={PostDetails}></Route> */}

            <Route path="/" element={ <Home/> }></Route>
            <Route path="/add" element={ <CreatePost/> }></Route>
            <Route path="/edit/:id" element={ <EditPost/> }></Route>
            <Route path="/post/:id" element={ <PostDetails/> }></Route>
            
          </Routes>
          </div>
      </BrowserRouter>
    )
  }
}