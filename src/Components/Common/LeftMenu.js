
import React, {useEffect, useState} from 'react';
import {Keyboard, Text, Dimensions} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import LeftMenuButton from './LeftMenuButton'
import { Actions } from 'react-native-router-flux';
import {closeMenu, signUserOut} from '../../Actions';
import LinearGradient from 'react-native-linear-gradient';
import {containerStyle, textStyle} from '../../Styles'
import { getVersion } from 'react-native-device-info';

export default function LeftMenu() {
    const dispatch = useDispatch()
    const version = getVersion()
    

    return (
        <LinearGradient colors={containerStyle.gradientColor} locations={containerStyle.gradientLocation} style={containerStyle.menuLinearGradient}>
            <LeftMenuButton title='CHOOSE EVENT' onPress={() => { Actions.eventSearch(), dispatch(closeMenu()), Keyboard.dismiss;}}/>
            <LeftMenuButton title='SIGN OUT' onPress={() => { dispatch(signUserOut()), dispatch(closeMenu()), Keyboard.dismiss;}}/>
        
            <Text style={{
                ...textStyle.placeholder,
                position: 'absolute',
                bottom: Dimensions.get('window').height * 0.03
            }}>Version: {version}</Text>
            {/* <LeftMenuButton title='DFU UPDATE' onPress={() => {Actions.bluetoothDFUUpdate(), Keyboard.dismiss; }}/>
            <LeftMenuButton title='DFU' onPress={() => {Actions.dFUPage(), dispatch(closeMenu()), Keyboard.dismiss; }}/> */}
        </LinearGradient>
    )
}