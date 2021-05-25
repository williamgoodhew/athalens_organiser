import React, { useEffect } from 'react';
import {
    SafeAreaView,
    StyleSheet,
    ScrollView,
    View,
    ActivityIndicator,
    StatusBar,
  } from 'react-native';
import {useDispatch} from 'react-redux'
import {launchScreen} from '../../Actions'

import {
    Colors,
  } from 'react-native/Libraries/NewAppScreen';

export default function LaunchScreen() {
    const dispatch = useDispatch()

    useEffect(()=>{
        dispatch(launchScreen())
    },[launchScreen])

    return (
        <>
        <StatusBar translucent backgroundColor='transparent' barStyle="dark-content" />
        <SafeAreaView>
          <ScrollView
            contentInsetAdjustmentBehavior="automatic"
            style={styles.scrollView}>
                <View style={styles.sectionContainer}>
                    <ActivityIndicator size='large' color="#000" />
                </View>
          </ScrollView>
        </SafeAreaView>
      </>
    );
};

const styles = StyleSheet.create({
    scrollView: {
      backgroundColor: '#fff',
    },
    engine: {
      position: 'absolute',
      right: 0,
    },
    body: {
      backgroundColor: Colors.white,
      justifyContent: 'center',
    },
    sectionContainer: {
      marginTop: '50%',
      paddingHorizontal: 24,
      justifyContent: 'center',
    },
    sectionTitle: {
      fontSize: 24,
      fontWeight: '600',
      color: Colors.black,
    },
    sectionDescription: {
      marginTop: 8,
      fontSize: 18,
      fontWeight: '400',
      color: Colors.dark,
    },
    highlight: {
      fontWeight: '700',
    },
    footer: {
      color: Colors.dark,
      fontSize: 12,
      fontWeight: '600',
      padding: 4,
      paddingRight: 12,
      textAlign: 'right',
    },
  });
