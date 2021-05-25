/* eslint-disable prettier/prettier */
import React from 'react';
import {
  View, StyleSheet, Dimensions, StatusBar, Keyboard, TouchableOpacity, Platform, Image
} from 'react-native';
import {colors} from '../../Styles/colors'

import {useDispatch, useSelector} from 'react-redux';
import {openMenu, closeMenu} from '../../Actions'

import { Header, Icon } from 'react-native-elements';
import LeftMenu from './LeftMenu';
import {CustomIcon} from './CustomIcons';
import Modal from 'react-native-modal';
import { Actions } from 'react-native-router-flux';

export function HeaderMain() {
    const dispatch = useDispatch()
    const menuOpen = useSelector(state => state.main.menuOpen);
    function openTheMenu() {
        if (Platform.OS === 'ios') {
            dispatch(openMenu())
        } else {
            Actions.leftMenuAndroid()
        }
    }

    return (
        <View>
            <Header style={styles.main}
                containerStyle={styles.main}
                backgroundColor= {colors.headerBackground}
                centerComponent={ <Image source={require('../../Images/icon.png')} style={styles.icon} />}

                leftComponent={ 
                    <TouchableOpacity style={{width: '100%', height: '100%', flexDirection: 'column', justifyContent:'center', alignItems:'flex-start'}}  onPress={() => {Keyboard.dismiss; openTheMenu()} }>
                       <Icon name='menu' /> 
                    </TouchableOpacity>
                }           
            />
            <StatusBar translucent backgroundColor='transparent' barStyle="dark-content"/>
            <Modal
                isVisible={menuOpen}
                swipeDirection='left'
                onSwipeComplete={() => dispatch(closeMenu())}
                animationIn='slideInLeft'
                animationOut='slideOutLeft'
                backdropOpacity={0.1}
                onBackdropPress={() => dispatch(closeMenu())}
                backdropTransitionOutTiming={0}
                style={{
                    justifyContent: 'flex-end',
                    alignItems: 'flex-start',
                    marginLeft: 0,
                    marginTop: Platform.OS === 'android' ? Dimensions.get('window').height * 0.1  - StatusBar.currentHeight : Dimensions.get('window').height * 0.1,
                    marginBottom: 0
                }}
                useNativeDriver={true}
            >
                <LeftMenu />
            </Modal>
        </View>
            
    );
};
  

const styles = StyleSheet.create({
    main: {
        height: '11%',
        borderBottomWidth: 1,
        borderBottomColor: "#707070",
        height: Dimensions.get('window').height * 0.1
    },
    icon: {
        height: Dimensions.get('window').height * 0.035,
        width: Dimensions.get('window').height * 0.035
    }
});
