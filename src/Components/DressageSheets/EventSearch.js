import React, { useEffect } from 'react';
import {
    SafeAreaView,
    ScrollView,
    View,
    Text,
    StatusBar,
    Dimensions,
  } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {textStyle, containerStyle} from '../../Styles';
import {HeaderMain} from '../Common'
import {eventsFetch} from '../../Actions';
import {useDispatch, useSelector} from 'react-redux';
import {EventList} from './Components/EventList'


export default function EventSearch() {

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
                  <Text style={textStyle.title}>Choose event</Text>
                  <EventList events={eventList} loading={eventsLoading}/>

                </View>
                {/*This padding is so that the keyboard does not get in the way*/}
                <View style={{marginBottom: Dimensions.get('window').height * 0.7}}></View>
            </ScrollView>
        </SafeAreaView>
      </LinearGradient>
    );
};
