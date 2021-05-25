import React from 'react';
import {
    Image,
    Text,
    View,
    Dimensions,
} from 'react-native';

import {textStyle} from '../../Styles';
import {ButtonBack} from './ButtonBack';

export function TitleImage(props) {
    const {title, subTitle, image} = props;
    Text.defaultProps = Text.defaultProps || {};
    Text.defaultProps.allowFontScaling = false;
    return (
        <View>
            <Image
                style={{
                    width: Dimensions.get('window').width,
                    height: Dimensions.get('window').height*0.15,
                    zIndex: 1
                }}
                source={{uri: image}}
            />
            <View
                style={{
                    width: Dimensions.get('window').width,
                    height: Dimensions.get('window').height*0.15,
                    position: 'absolute',
                    backgroundColor: 'rgba(0, 0, 0, 0.3)',
                    zIndex: 2,
                    display: 'flex',
                    justifyContent: 'center'
                }}
            >
                <Text style={textStyle.imageTitle}>{title}</Text>
                <Text style={textStyle.imageSubTitle}>{subTitle}</Text>
            </View>
            
        </View>
    );
};


