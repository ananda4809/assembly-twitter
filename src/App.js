import React from 'react';
import logo from './logo.svg';
import './App.css';

import Twitter from "./components/twitter";
import Login from "./components/login";

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {
  return (
    <Twitter />
  )
}

export default App;