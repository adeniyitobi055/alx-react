import React from 'react';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Login from '../Login/Login';
import CourseList from '../CourseList/CourseList';
import Notifications from '../Notifications/Notifications';
import './App.css';
import PropTypes, { bool } from 'prop-types';

const App = ({ isLoggedIn }) => {
	return (
      <React.Fragment>
        <Notifications />
        <div className='App'>
          <Header />
        </div>
        {isLoggedIn ? <CourseList /> : <Login />}
        <Footer />
      </React.Fragment>
	);
};

App.protoType = {
  isLoggedIn: PropTypes.bool,
};

App.defaultProps = {
  isLoggedIn: false,
};

export default App;
