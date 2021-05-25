import React, { useEffect, useState } from 'react';
import {
    SafeAreaView,
    ScrollView,
    View,
    Text,
    StatusBar,
    Dimensions,
    Image
  } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {textStyle, containerStyle} from '../../Styles';
import {HeaderMain, ButtonMain, InputNumber} from '../Common'
import {eventsFetch, uploadDressageSheet, imagePicker, resetSuccess} from '../../Actions';
import {useDispatch, useSelector} from 'react-redux';
import {EventList} from './Components/EventList'
// import Image from 'react-native-scalable-image';



export default function UploadSheets() {

  const input = React.createRef();
    Text.defaultProps = Text.defaultProps || {};
    Text.defaultProps.allowFontScaling = false;

    const {eventData, error, uploaded, uploading, loadingPhoto, source, uri} = useSelector(state => state.dSheets);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(resetSuccess())
      }, [dispatch])

    const options = {
      enableVibrateFallback: true,
      ignoreAndroidSystemSettings: false
    };

    // const [loading, setLoading] = useState(false);
    // const [source, setSource] = useState(false)
    // const [uri, setUri] = useState()
    const [number, setNumber] = useState()

    let text = '';
    if (uploaded) {
      text = 'Upload success';
    } else {
      text = 'Upload photo'
    }

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
                  <Text style={textStyle.title}>{eventData.name}</Text>
                  {uploaded && <Text style={textStyle.label}>Dressage sheet uploaded successfully</Text>}
                  {error&& <Text style={textStyle.error}>Error uploading, please try again.</Text>}
                </View>
                {/*This padding is so that the keyboard does not get in the way*/}
                <ButtonMain
                    loading={loadingPhoto}
                    title="Take photo"
                    onPress={() => {dispatch(imagePicker()), setNumber()}}
                />
                {source && !loadingPhoto && <Image source={{ isStatic: true, uri: source }} style={{
                  width: Dimensions.get('window').width/1.5,
                  height: Dimensions.get('window').width,
                  resizeMode: 'contain',
                  marginHorizontal: Dimensions.get('window').width/6
                }}/>}
                {source && !loadingPhoto && <InputNumber
                    onChangeText1={(text) => setNumber(text)} placeholder1='Rider number' value1={number}
                />}
                {source && !loadingPhoto && <ButtonMain
                    title={text}
                    loading={uploading}
                    onPress={() => dispatch(uploadDressageSheet(uri, number, eventData))}
                />}
                <View style={{marginBottom: Dimensions.get('window').height * 0.7}}></View>
                

            </ScrollView>
        </SafeAreaView>
      </LinearGradient>
    );
};


//   async function uploadPhoto(localPath, setVeg, setProb) {
//     setVeg('Uploading...')
//     // const labels = await vision().cloudImageLabelerProcessImage(localPath);
  
//     //console.log('array: ', array)
//   }