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
              <Route path='/profile' render={() => <Profile />} />
              <Route path='/dialogs' render={() => <Dialogs />} />
              <Route path='/news' render={() => <News />} />
              <Route path='/music' render={() => <Musics />} />
              <Route path='/settings' render={() => <Settings />} />
            </div>
          </div>
        </div>
      </div>
    </BrowserRouter>
  )
}

export default App;
