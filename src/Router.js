import React, {Component} from 'react';
import {Scene, Router} from 'react-native-router-flux';

import LaunchScreen from './Components/Auth/LaunchScreen';
import EnterEmail from './Components/Auth/EnterEmail';
import EnterPassword from './Components/Auth/EnterPassword';
import EventSearch from './Components/DressageSheets/EventSearch';
import UploadSheets from './Components/DressageSheets/UploadSheets';
import NotOrganiser from './Components/NotOrganiser/NotOrganiser';

/// TESTING THE MERGE
class RouterComponent extends Component {
  render() {
    return (
      <Router
        navigationBarStyle={styles.navBar}
        titleStyle={styles.navBarTitle}
        barButtonTextStyle={styles.barButtonTextStyle}>
        <Scene key="root" hideNavBar {...sceneConfig}>
        
        <Scene
            key="launchScreen"
            component={LaunchScreen}
            tintColor="#fff"
            headerMode="screen"
            navTransparent={true}
            panHandlers={null} //Prevents the swipe back functionality
          />
        <Scene
            key="enterEmail"
            component={EnterEmail}
            tintColor="#fff"
            headerMode="screen"
            navTransparent={true}
            panHandlers={null} //Prevents the swipe back functionality
          />
          <Scene
            key="enterPassword"
            component={EnterPassword}
            tintColor="#fff"
            headerMode="screen"
            navTransparent={true}
            panHandlers={null} //Prevents the swipe back functionality
          />
          <Scene
            key="eventSearch"
            component={EventSearch}
            tintColor="#fff"
            headerMode="screen"
            navTransparent={true}
            panHandlers={null} //Prevents the swipe back functionality
          />
          <Scene
            key="uploadSheets"
            component={UploadSheets}
            tintColor="#fff"
            headerMode="screen"
            navTransparent={true}
            panHandlers={null} //Prevents the swipe back functionality
          />
          <Scene
            key="notOrganiser"
            component={NotOrganiser}
            tintColor="#fff"
            headerMode="screen"
            navTransparent={true}
            panHandlers={null} //Prevents the swipe back functionality
          />
        </Scene>       
      </Router>
    );
  }
}

const sceneConfig = {
  cardStyle: {
    backgroundColor: '#fff',
  },
};

const styles = {
  navBar: {
    backgroundColor: '#000',
    shadowColor: '#fff',
    shadowBottom: '20px',
  },
  navBarTitle: {
    fontSize: 18,
    fontWeight: '300',
  },
  barButtonTextStyle: {
    fontSize: 16,
    fontWeight: '300',
  },
};

export default RouterComponent;

