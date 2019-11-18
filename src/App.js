import React from 'react';
import './App.css';

import Navigation from './components/Header';
import SignUp from './components/SignUp';
import Login from './components/Login';
import Footer from './components/Footer';
import AFLogoFxn from './components/AFLogo';
// import RescheduleClass from './components/client/RescheduleClass';
// import ClientClassEditCard from './components/client/ClientClassCard';


function App() {
  return (
    <div>
       <Navigation />
       <AFLogoFxn />
       <SignUp />
       <Footer />
       <Login />
    </div>
  );
}

export default App;

 