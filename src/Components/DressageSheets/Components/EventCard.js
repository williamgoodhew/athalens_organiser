import React from 'react';
import {
    Image,
    Text,
    View,
    Dimensions,
    TouchableOpacity,
} from 'react-native';

import {textStyle} from '../../../Styles';

export function EventCard(props) {
    const {title, subTitle, image, onPress} = props;
    Text.defaultProps = Text.defaultProps || {};
    Text.defaultProps.allowFontScaling = false;
    return (
        <TouchableOpacity onPress={onPress}>
            <View
                style={{
                    width: Dimensions.get('window').width *0.8,
                    backgroundColor: 'white',
                    margin: Dimensions.get('window').width *0.022,
                    borderRadius: 5,
                    shadowColor: "#000",
                    shadowOffset: {
                        width: 0,
                        height: 2,
                    },
                    shadowOpacity: 0.25,
                    shadowRadius: 3.84,

                    elevation: 5,
                }}>
                <View style={{flexDirection: 'row'}}>
                    <Image
                        style={{
                            width: Dimensions.get('window').width *0.1,
                            margin: Dimensions.get('window').width *0.02,
                            height: Dimensions.get('window').width*0.1,
                            borderRadius: Dimensions.get('window').width*0.05,
                        }}
                        source={{uri: image.url64}}
                    />
                    <View
                        style={{
                            marginTop: Dimensions.get('window').width *0.02,
                            height: Dimensions.get('window').width*0.1,
                            justifyContent: 'space-around'
                        }}>
                        <Text
                        style={textStyle.name}>{title}</Text>
                        <Text
                        style={textStyle.date}>{subTitle}</Text>
                    </View>
                    
                </View>
                
            </View>
        </TouchableOpacity>
    );
};
