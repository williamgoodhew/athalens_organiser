import React from 'react';
import {
  View,
} from 'react-native';

import { Input } from 'react-native-elements';
import {textStyle} from '../../Styles/textStyle';
import {colors} from '../../Styles/colors';

export function InputLogin(props) {
    const {title1, onChangeText1, secureTextEntry1, placeholder1, keyboardType1, value1, autoCompleteType1, error, size, autoFocus1, textContentType1} = props;
    let lableSize;
    if (size === 'small') {
        lableSize = textStyle.input
    } else {
        lableSize = textStyle.label
    }
    return (
        <Input
            autoFocus={autoFocus1}
            value={value1}
            textContentType={textContentType1}
            placeholder={placeholder1}
            keyboardType={keyboardType1}
            label={title1}
            onChangeText={value => onChangeText1(value)}
            secureTextEntry={secureTextEntry1}
            labelStyle={lableSize}
            inputStyle={{
                ...textStyle.input,
            }}
            containerStyle={{
                marginLeft: 0,
            }}
            placeholderTextColor={colors.primaryGrey}
            autoCompleteType={autoCompleteType1}
            errorMessage={error}
            errorStyle={{
                ...textStyle.error
            }}
            allowFontScaling={false}
        />
    );
};