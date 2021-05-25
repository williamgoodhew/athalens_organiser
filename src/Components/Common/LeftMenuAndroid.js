import React, {useEffect, useState} from 'react';
import {
    SafeAreaView,
    ScrollView,
    View,
    StatusBar,
    Keyboard,
    Dimensions,
    Text
} from 'react-native';
import {useDispatch, useSelector} from 'react-redux'
import { Actions } from 'react-native-router-flux';

import LinearGradient from 'react-native-linear-gradient';

import {HeaderMain} from './HeaderMain';
import {HelpButton} from './HelpButton';

import {disconnectScooter, signUserOut} from '../../Actions'

import {containerStyle} from '../../Styles';

export default function LeftMenuAndroid() {
    const dispatch = useDispatch();
    const [auth, setAuth] = useState(false);

    useEffect(() => {
      // finds out if the user has authenticated with a scooter through the PIN service
      getAuthValue();
    }, []);
  
    return (
      <LinearGradient  colors={containerStyle.gradientColor} locations={containerStyle.gradientLocation} style={containerStyle.gradient}>
        <StatusBar translucent backgroundColor='transparent' barStyle="dark-content" />
        <HeaderMain/>
        <SafeAreaView>
          <ScrollView
            contentInsetAdjustmentBehavior="automatic"
            style={containerStyle.scrollView}
            keyboardShouldPersistTaps='always'>
                <View style={{marginHorizontal: '5%'}}>
                    <View style={{ height: Dimensions.get('window').height * 0.05 }}></View>

                    <HelpButton value='Help' onPress={() => console.log('clicker')} />             
                </View>
                <View style={{marginBottom: Dimensions.get('window').height * 0.7}}></View>
              </ScrollView>
        </SafeAreaView>
      </LinearGradient>
    );
};