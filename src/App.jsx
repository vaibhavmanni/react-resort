import React, { Component } from 'react';

import Navbar from './components/Navbar/Navbar'
import  Home  from './components/pages/Home/Home'
import  Rooms  from './components/pages/Rooms/Rooms'
import  AboutUs  from './components/pages/AboutUs/AboutUs'
import  SingleRoom  from './components/pages/SingleRoom/SingleRoom'
import  ErrorPage  from './components/pages/ErrorPage/ErrorPage'
import Footer from './components/Footer/Footer'

import { Route, Switch } from 'react-router-dom'

import styles from './App.module.css'

export default class App extends Component {
  render() {
    return (
      <div className={styles.container}>
        <Navbar/>
        <Switch>
          <Route exact path={["/", "/home"]} component={Home}/>
          <Route exact path='/rooms/' component={Rooms}/>
          <Route exact path='/about-us/' component={AboutUs}/>
          <Route exact path='/:slug' component={SingleRoom}/>
          <Route component={ErrorPage}/>
        </Switch>
        <Footer/>
      </div>
    )
  }
}

