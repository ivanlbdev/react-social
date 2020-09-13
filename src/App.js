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

const App = (props) => {
  return (
    <BrowserRouter>
      <div className="app-wrapper">
        <Header />
        <div className="container">
          <div className="main-content">
            <Navigation state={props.appState.navBar} />
            <div className="app_wrapper_content">
              <Route path='/profile' render={() => <Profile
                profilePage={props.appState.profilePage}
                addPost={props.addPost}
                updateNewPostText={props.updateNewPostText
                } />}
              />
              <Route path='/dialogs' render={() => <Dialogs
                state={props.appState.messagesPage}
                updateTextMessage={props.updateTextMessage}
                addMessage={props.addMessage} />} />
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
