import React, { useEffect } from 'react';
import {
    SafeAreaView,
    ScrollView,
    View,
    Text,
    StatusBar,
    Dimensions,
    Platform,
  } from 'react-native';
import {useDispatch, useSelector} from 'react-redux'
import ReactNativeHapticFeedback from "react-native-haptic-feedback";
import LinearGradient from 'react-native-linear-gradient';
import {Actions} from 'react-native-router-flux';

import {ButtonMain, ButtonBack, ButtonText, InputLogin} from '../Common';

import {passwordChanged, signIn} from '../../Actions'

import {textStyle, containerStyle} from '../../Styles';

export default function EnterPassword() {
    const input = React.createRef();
    Text.defaultProps = Text.defaultProps || {};
    Text.defaultProps.allowFontScaling = false;
    useEffect(() => {
      if (input.current) {
        input.current.focus();
      }
    }, [input]);

    const dispatch = useDispatch();

    const {email, loading, error, password} = useSelector(state => state.auth);
    console.log('password: ', password)
    const options = {
        enableVibrateFallback: true,
        ignoreAndroidSystemSettings: false
      };
      
    return (
      <LinearGradient colors={containerStyle.gradientColor} locations={containerStyle.gradientLocation} style={containerStyle.gradient}>
        <StatusBar translucent backgroundColor='transparent' barStyle="dark-content" />
        <SafeAreaView>
          <ScrollView
            contentInsetAdjustmentBehavior="automatic"
            style={containerStyle.scrollView}
            keyboardShouldPersistTaps='always'>
              <ButtonBack onPress={() => Actions.pop()}/>
              <View style={containerStyle.sectionContainer}>
                <Text style={textStyle.title}>Welcome</Text>
                <InputLogin ref1={input} title1='Please type your password' secureTextEntry1={true} onChangeText1={(text) => dispatch(passwordChanged(text))} placeholder1='password' value1={password} autoFocus1={true}/>
                <Text style={textStyle.error}>{error}</Text>
                <ButtonMain
                    title='Sign in'
                    loading={loading}
                    onPress={() => {dispatch(signIn(email, password)), ReactNativeHapticFeedback.trigger("impactMedium", options)}}
                />
                </View>
                {/*This padding is so that the keyboard does not get in the way*/}
                <View style={{marginBottom: Dimensions.get('window').height * 0.7}}></View>
          </ScrollView>
        </SafeAreaView>
      </LinearGradient>
        
    );
};

