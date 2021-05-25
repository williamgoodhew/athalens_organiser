import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';
import {Actions} from 'react-native-router-flux';
import {
    LAUNCH_SCREEN,
    SIGN_IN,
    AUTH_LOADING,
    SIGN_IN_ERROR,
    GET_PROFILE,
    SIGN_OUT,
    EMAIL_CHANGED,
    PASSWORD_CHANGED,
} from './Types';

export const launchScreen = () => {
    return async dispatch => {
        const user = auth().currentUser;
        console.log('user: ', user)
        if (!user) {
            Actions.enterEmail()
            dispatch({
                type: LAUNCH_SCREEN
            })
        } else {

            firestore()
                .collection('users')
                .doc(user.uid)
                .onSnapshot(snapshot => {
                    const data = snapshot.data();
                    data.uid = snapshot.id
                    if (data.organiser) {
                        Actions.eventSearch()
                    } else {
                        Actions.notOrganiser()
                    }
                    dispatch({
                        type: GET_PROFILE,
                        payload: data,
                    })
                })
        }
    }
}


export const signIn = (email, password) => {
    return async dispatch => {
        dispatch({
            type: AUTH_LOADING,
        })
        try {
            const emailLowerCase = email.toLowerCase();
            const user = await auth().signInWithEmailAndPassword(emailLowerCase, password)
            console.log('user: ', user)
            console.log('user.uid: ', user.user.uid)

            dispatch({
                type: SIGN_IN,
                payload: user.user,
            })
            Actions.eventSearch();
        } catch (error) {
            dispatch({
                type: SIGN_IN_ERROR,
                error: 'Sign in error'
            })
        }
    }
}


export const signUserOut = () => {
    return dispatch => {
        dispatch({
            type: AUTH_LOADING,
        })
        auth()
        .signOut()
        .then(() => {
            dispatch({
                type: SIGN_OUT,
            });
            console.log('signed out');
            Actions.reset('enterEmail')
        })
        .catch((error) => {
            console.log(error)
        })
    }
}

export const emailChanged = (text) => {
    //Android adds a space to the end of an email if you select it automatically - .trim() removes any whitespace from the email
    const email = text.trim();
    
    return dispatch => {
        dispatch({
            type: EMAIL_CHANGED,
            email,
        })
    }
}

export const passwordChanged = (text) => {
    let passwordCheck = true;
    if (text.length > 5) {
        passwordCheck = false
    }

    return dispatch => {
        dispatch({
            type: PASSWORD_CHANGED,
            password: text,
            passwordCheck
        })
    }
}