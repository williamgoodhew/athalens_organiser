import React, { useEffect } from 'react';
import {
    SafeAreaView,
    ScrollView,
    View,
    Text,
    StatusBar,
    Dimensions,
  } from 'react-native';
import {useDispatch, useSelector} from 'react-redux'
import ReactNativeHapticFeedback from "react-native-haptic-feedback";
import LinearGradient from 'react-native-linear-gradient';

import {ButtonMain, InputLogin} from '../Common';
import {emailChanged} from '../../Actions'
import {textStyle, containerStyle} from '../../Styles';
import { Actions } from 'react-native-router-flux';

export default function EnterEmail() {
  const dispatch = useDispatch()
  const {email, loading} = useSelector(state => state.auth);

  const input = React.createRef();
    Text.defaultProps = Text.defaultProps || {};
    Text.defaultProps.allowFontScaling = false;
    useEffect(() => {
      if (input.current) {
        input.current.focus();
      }
    }, [input]); //THIS WAS PREVIOUSLY [input] but 

    useEffect(() => {

  },[dispatch])

  

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
                <View style={containerStyle.sectionContainer}>
                  <Text style={textStyle.title}>Organisers app</Text>
                  <InputLogin ref1={input} title1="What's your email" onChangeText1={(text) => dispatch(emailChanged(text))} placeholder1='Email' value1={email} autoCompleteType1='email' autoFocus1={true} keyboardType1={'email-address'} textContentType1={'emailAddress'}/>
                  <ButtonMain
                      title='Sign in'
                      loading={loading}
                      onPress={() => {Actions.enterPassword(), ReactNativeHapticFeedback.trigger("impactMedium", options)}}
                  />
                </View>
                {/*This padding is so that the keyboard does not get in the way*/}
                <View style={{marginBottom: Dimensions.get('window').height * 0.7}}></View>
            </ScrollView>
        </SafeAreaView>
      </LinearGradient>
    );
};
