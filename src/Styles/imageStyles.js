import {Dimensions} from 'react-native';

export const imageStyle = {
    findScooter: {
        height: Dimensions.get('window').width * 0.7056,
        width: Dimensions.get('window').width * 0.65,
        overflow: 'visible',
        zIndex: 1,
        position: 'absolute',
    },
    findScooterBluetooth: {
        width: Dimensions.get('window').width * 0.25,
        position: 'absolute',
        justifyContent: 'center',
        alignItems: 'center',
        zIndex: 3,
    },
    profileScooter: {
        height: Dimensions.get('window').width * 0.5428,
        width: Dimensions.get('window').width * 0.5,
        overflow: 'visible',
        zIndex: 1,
        position: 'absolute',
    },
    profile: {
        width: Dimensions.get('window').width * 0.25,
        height: Dimensions.get('window').width * 0.25,
        position: 'absolute',
        justifyContent: 'center',
        alignItems: 'center',
        zIndex: 3,
    },
    scooterGuide: {
        width: Dimensions.get('window').width * 0.7,
        height: Dimensions.get('window').width * 0.7,
        borderRadius: Dimensions.get('window').width * 0.35,
        justifyContent: 'center'
    },
    editScooterType: {
        width: Dimensions.get('window').width * 0.5,
        height: Dimensions.get('window').width * 0.5,
        borderRadius: Dimensions.get('window').width * 0.25,
        justifyContent: 'center',
        marginBottom: 10,
    }
}