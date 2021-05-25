import React from 'react';
import {
  View,
  TouchableOpacity,
} from 'react-native';

import { Button } from 'react-native-elements';
import {textStyle, colors} from '../../Styles';

export function ButtonMain(props) {
    const {title, onPress, disabled, loading} = props;

    const upper = title.toUpperCase()
    return (
        <View>
            <Button
                raised={true}
                title={upper}
                disabled={disabled}
                buttonStyle={{
                    borderRadius: 10,
                    backgroundColor: colors.secondarySunshine,
                    height: 40,
                }}
                titleStyle={{
                    ...textStyle.input,
                    justifyContent: 'center'
                }}
                containerStyle={{
                    margin: 10,
                    overflow: 'visible',
                    backgroundColor: 'transparent',
                    borderRadius: 10
                }}
                activeOpacity={0.7}
                TouchableComponent={TouchableOpacity}
                onPress={onPress}
                loading={loading}
                allowFontScaling={false}
            />
        </View>
    );
};

