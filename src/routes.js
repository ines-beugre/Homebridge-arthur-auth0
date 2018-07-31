import React from 'react';
import { Redirect, Route, Router } from 'react-router-dom';
import App from './App';
import Home from './Home/Home';
import Profile from './Profile/Profile';
import Callback from './Callback/Callback';
import Ping from './Ping/Ping';
import Auth from './Auth/Auth';
import history from './history';
import { Trombinoscope } from './trombiComponents/Trombinoscope';
import { Person } from './trombiComponents/Person';
import { CreateOrUpdate } from './trombiComponents/CreateOrUpdate';
import { List } from './trombiComponents/List';

const auth = new Auth();

const handleAuthentication = (nextState, replace) => {
    console.log('hahahaha', nextState.location.hash)
  if (/access_token|id_token|error/.test(nextState.location.hash)) {
    auth.handleAuthentication();
  }
}

export const makeMainRoutes = () => {
  return (
    <Router history={history} component={App}>
      <div>
        <Route path="/" render={props => <App auth={auth}{...props} />} />
        {/* <Route path="/" render={props => <App auth={auth} {...props} />} /> */}
        {/* <Redirect to="/trombinoscope" /> */}
        <Route path="/home" render={props => <Home auth={auth} {...props} />} />
        <Route
          path="/profile"
          render={props =>
            !auth.isAuthenticated()
              ? <Redirect to="/home" />
              : <Profile auth={auth} {...props} />}
        />
        <Route
          path="/callback"
          render={props => {
            handleAuthentication(props);
            return <Callback {...props} />;
          }}
        />
        <Route path="/ping" render={(props) => (
          !auth.isAuthenticated() ? (
            <Redirect to="App" />
          ) : (
            <Ping auth={auth} {...props} />
          )
        )}/>
        <Route path="/trombinoscope" component={(props) => { return <Trombinoscope auth={auth} {...props}/>} }/>
        <Route path="/person/:email" component={(props) => { return <Person auth={auth} {...props}/>}}/>
        <Route path="/update/:email" component={(props) => { return <CreateOrUpdate auth={auth} maxLength={30} {...props}/>} }/> 
        <Route path="/list" component={(props) => { return <List auth={auth} {...props}/>}}/>
        <Route path="/create" component={(props) => { return <CreateOrUpdate auth={auth} maxLength={30} {...props}/>} }/>

      </div>
    </Router>
  );
};