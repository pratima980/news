
import './App.css';

import React, { Component } from 'react'
import Navbar from './components/Navbar';
import News from './components/News';


export default class App extends Component {

  render() {
    return (
      <div>
      <Navbar></Navbar>
      <h2 className='text-center text-primary'>News MONK - TOP Headlines</h2><hr></hr>
      <News></News>
     
      </div>
    )
  }
}

