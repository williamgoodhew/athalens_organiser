import React from 'react';
import {
  View,
} from 'react-native';

import { Input } from 'react-native-elements';
import {textStyle} from '../../Styles/textStyle';
import {colors} from '../../Styles/colors';

export function InputNumber(props) {
    const {title1, onChangeText1, secureTextEntry1, placeholder1, ref1, value1, autoFocus1} = props;
    return (
        <Input
            autoFocus={autoFocus1}
            value={value1}
            keyboardType='numeric'
            placeholder={placeholder1}
            ref={ref1}
            label={title1}
            onChangeText={value => onChangeText1(value)}
            secureTextEntry={secureTextEntry1}
            labelStyle={{
                ...textStyle.label
            }}
            inputStyle={{
                ...textStyle.input,
                textAlign: 'center'
            }}
            containerStyle={{
                justifyContent: 'center',
                width: '100%',
            }}
            placeholderTextColor={colors.primaryGrey}
            allowFontScaling={false}
        />
    );
};