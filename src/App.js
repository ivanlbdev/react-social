import React from 'react';
import './App.css';
import Header from './components/header/Header';
import Navigation from './components/navbar/Navbar';
import Profile from './components/profile/Profile';
import Dialogs from './components/dialogs/Dialogs';
import { Route, BrowserRouter } from 'react-router-dom';
import News from './components/news/News';
import Musics from './components/musics/Musics';
import Settings from './components/set/Settings';

const App = () => {
  return (
    <BrowserRouter>
      <div className="app-wrapper">
        <Header />
        <div className="container">
          <div className="main-content">
            <Navigation />
            <div className="app_wrapper_content">
              <Route path='/profile' component={Profile} />
              <Route path='/dialogs' component={Dialogs} />
              <Route path='/news' component={News} />
              <Route path='/music' component={Musics} />
              <Route path='/settings' component={Settings} />
            </div>
          </div>
        </div>
      </div>
    </BrowserRouter>
  )
}

export default App;
