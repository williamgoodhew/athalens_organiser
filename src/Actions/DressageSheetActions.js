import firestore from '@react-native-firebase/firestore';
import {Actions} from 'react-native-router-flux';
import storage, { firebase } from '@react-native-firebase/storage';
import _ from 'lodash'
import {generateUUID} from '../Utils'
import {launchCamera} from 'react-native-image-picker';

import {
    EVENTS_FETCH,
    SET_EVENT,
    UPLOADED_SHEET,
    UPLOADED_SHEET_FAILED,
    TAKING_PHOTO,
    TAKING_PHOTO_ERROR,
    TAKEN_PHOTO,
    UPLOADING_SHEET,
    RESET_SUCCESS,
} from './Types';

export const eventSearch = () => {
    return dispatch => {
       dispatch({
        EVENT_SEARCH
       })
    }
}

export function eventsFetch(date) {
    return async dispatch => {
      const day1 = Number(date + 86400);
      const eventList = await firestore()
      .collection('competitions')
      .where('timestampStart', "<", day1)
      .orderBy('timestampStart', "desc")
      .limit(7)
      .get()
  
      const EventList = [];
        console.log('eventList', eventList)
      eventList.docs.forEach((doc) => {
        if (doc.id === "H21PLtSB3WeQBUqDsLCa" || doc.id === "1cb02L5NAu0jVnSuCwxa" || doc.id === "6sl0nXR8Yug0wC4tyGEm") {
          return
        } else {
          const resultObj = doc.data();
          resultObj.uid = doc.id;
          EventList.push(resultObj);
        }
        
      })
      
      const EventListSorted = _.sortBy(EventList, 'timestampStart').reverse();
      console.log('EventListSorted', EventListSorted)
      dispatch({
        type: EVENTS_FETCH,
        payload: EventListSorted
      })
    }
  }

  export const setEvent = (event) => {

    return (dispatch) => {
      dispatch({
        type: SET_EVENT,
        payload: event
      });
      Actions.uploadSheets()
    } 
  }

  export const uploadDressageSheet = (uri, number, eventData) => {
      return dispatch => {
        dispatch({
          type: UPLOADING_SHEET,
        });
        const uidGen = Date.now()

        const filename = `${eventData.uid}/${number}/${uidGen}`;
        console.log(filename)

        try {
          const secondaryStorageBucket = firebase.app().storage('gs://athalens-51eb0-dressage').ref(filename).putFile(uri);
          secondaryStorageBucket.on('state_changed', taskSnapshot => {
            console.log(`${taskSnapshot.bytesTransferred} transferred out of ${taskSnapshot.totalBytes}`);
          });
          
          secondaryStorageBucket.then(() => {
            dispatch({
              type: UPLOADED_SHEET,
              payload: secondaryStorageBucket
            });
          });
          
        } catch (error) {
          dispatch({
            type: UPLOADED_SHEET_FAILED,
          });
        }
        
        // set progress state
      }
    

  };

  export const imagePicker = () => {
    return dispatch => {
      dispatch({
        type: TAKING_PHOTO
      })
      // setLoading(true)
      // setSource(false)
      launchCamera({mediaType: 'photo', includeBase64: true, quality: 0.3}, (response) => {
      
        if (response) {
  
        
          if (response.didCancel) {
          console.log('User cancelled image picker');
          console.log('1')
          dispatch({
            type: TAKING_PHOTO_ERROR
          })
        } else if (response.error) {
          console.log('ImagePicker Error: ', response.error);
          console.log('2')
          dispatch({
            type: TAKING_PHOTO_ERROR
          })
        } else {
            console.log('3')
            console.log('reponse: ', response)
            dispatch({
              type: TAKEN_PHOTO,
              source: `data:image/jpeg;base64,${response.base64}`,
              uri: response.uri
            })
            // setSource(`data:image/jpeg;base64,${response.base64}`);
            // setUri(response.uri);
            // You can also display the image using data:
            // const source = { uri: 'data:image/jpeg;base64,' + response.data };
            // setLoading(false)
            // uploadPhoto(uri, setLoading)
        }
      } else {
          console.log('hello')
          dispatch({
            type: TAKING_PHOTO_ERROR
          })
        }
          
      });
    }
    
  }

  export const resetSuccess = () => {
    return dispatch => {
       dispatch({
        type: RESET_SUCCESS
       })
    }
}