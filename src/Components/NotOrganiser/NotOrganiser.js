import React, { useEffect } from 'react';
import {
    SafeAreaView,
    ScrollView,
    View,
    Text,
    StatusBar,
    Dimensions,
    Linking,
  } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {textStyle, containerStyle} from '../../Styles';
import {HeaderMain, ButtonMain} from '../Common'
import {eventsFetch} from '../../Actions';
import {useDispatch, useSelector} from 'react-redux';


export default function NotOrganiser() {

  const input = React.createRef();
    Text.defaultProps = Text.defaultProps || {};
    Text.defaultProps.allowFontScaling = false;

    const {eventList, eventsLoading} = useSelector(state => state.dSheets);
    const dispatch = useDispatch();

    useEffect(() => {
        const date = (Date.now()/1000)
        dispatch(eventsFetch(date))
      }, [dispatch])

    const options = {
      enableVibrateFallback: true,
      ignoreAndroidSystemSettings: false
    };

    console.log(eventList)
    return (
      <LinearGradient colors={containerStyle.gradientColor} locations={containerStyle.gradientLocation} style={containerStyle.gradient}>
        <StatusBar translucent backgroundColor='transparent' barStyle="dark-content" />
        <HeaderMain/>
        <SafeAreaView>
            <ScrollView
              contentInsetAdjustmentBehavior="automatic"
              style={containerStyle.scrollView}
              keyboardShouldPersistTaps='always'>
                <View style={containerStyle.sectionContainer}>
                  <Text style={textStyle.label}>This app is to be used by event organisers only. To view you competition photos please go to the Athalens app.</Text>
                <ButtonMain title="Athalens app" onPress={() => Linking.openURL('https://apps.apple.com/gb/app/athalens/id1386315066?l=nb')}/>
                </View>
                {/*This padding is so that the keyboard does not get in the way*/}
                <View style={{marginBottom: Dimensions.get('window').height * 0.7}}></View>
            </ScrollView>
        </SafeAreaView>
      </LinearGradient>
    );
};