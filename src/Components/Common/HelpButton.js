import React from 'react';
import {
    TouchableOpacity,
    Text,
    View
} from 'react-native';

import Icon from 'react-native-vector-icons/FontAwesome';
import {textStyle, colors} from '../../Styles';

export function HelpButton(props) {
    const {value, onPress} = props;
    Text.defaultProps = Text.defaultProps || {};
    Text.defaultProps.allowFontScaling = false;
    return (
        <TouchableOpacity
            onPress={onPress}
            style={{
                height: 'auto',
                width: '94%',
                borderBottomColor: colors.primaryGrey,
                borderBottomWidth: 1,
                alignItems: 'center',
                flexDirection: 'row',
                marginBottom: 10,
                paddingVertical: 10,
                marginHorizontal: 10
            }}
        >
            <View
                style={{width: '90%', height: 40, justifyContent: 'center'}}
            >
                <Text numberOfLines={1} style={{
                    ...textStyle.input,
                    }}>{value}</Text>
            </View>
            <Icon name="angle-right" size={40} style={{position: 'absolute', right: 0, paddingBottom: 10,}}/>
        </TouchableOpacity>
    );
};