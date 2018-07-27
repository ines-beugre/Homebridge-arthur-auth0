import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Home.css';
import * as PersonServices from '../services/person';

class Home extends Component {

  constructor (){
    super();

    this.state = {
      existPerson: false,
    }
  }
  
  componentWillMount= async () => {
    this.setState({
      profile: {}
    });
    const { userProfile, getProfile } = this.props.auth;

    if (!userProfile) {
      getProfile((err, profile) => {
        const appMetadata = profile['https://auth0-serli/metadata/app_metadata'];
        const isAdmin = appMetadata.is_admin;
        const userEmail = profile.email;
        const userName = profile.name;

        sessionStorage.setItem('isAdmin', isAdmin);
        // sessionStorage.setItem('existPerson');
        sessionStorage.setItem('userEmail', userEmail);
        sessionStorage.setItem('userName', userName);

        this.verifPerson(userEmail);  
        this.setState({ profile: profile, isAdmin, userEmail, userName})
        console.log('isadminP', isAdmin);
        console.log('userEmail', userEmail);

      });
    }else {
      this.setState({ profile: userProfile});
    }
  }

  verifPerson = (email) => {
    PersonServices.verifPerson(email)
        .then(r => r.json())
        .then(existPerson => this.setState({existPerson}));
  }
  getExpiryDate() {
    const expiresAt = JSON.parse(localStorage.getItem('expires_at'));
    return JSON.stringify(new Date(expiresAt));
  }
  
  render() {
    const { isAuthenticated, login } = this.props.auth;
    const {existPerson} = this.state;
    sessionStorage.setItem('existPerson', existPerson);

    console.log ('existPerson', existPerson)
    return (
      <div className="App container">
        {isAuthenticated() &&
          <div>
            <b>You are logged in!</b> <br/> <br/>

            <div className="home-container">

                <div className="zoom service-border">
                  <div className="service-name">
                    <Link to="/trombinoscope">
                    <img className="service-img"  src = {'tromb1.jpeg'}  alt="card"/>  <br/>
                      Trombinoscope
                    </Link>
                  </div>
                </div>
                <div className="zoom service-border">
                  <div className="service-name">
                    <Link to="">
                    <img className="service-img"  src = {'lunchAtWork.jpeg'}  alt="card"/>  <br/>
                      Lunch at work
                    </Link>
                  </div>
                </div>

                
            </div>

          </div>}
        {!isAuthenticated() &&
          <b>
            You are not logged in! Please{' '}
            <a style={{ cursor: 'pointer' }} onClick={login.bind(this)}>
              Log In
            </a>{' '}
            to continue.
          </b>}
      </div>
    );
  }
}

export default Home;