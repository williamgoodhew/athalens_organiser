import React from 'react';
import {
  View,
} from 'react-native';

import { Button } from 'react-native-elements';
import {textStyle} from '../../Styles/textStyle';

export function ButtonText(props) {
    const {title, onPress, disabled} = props;
    return (
            <Button
                raised={true}
                type='clear'
                title={title}
                disabled={disabled}
                titleStyle={{
                    ...textStyle.placeholder,
                }}
                onPress={onPress}
                allowFontScaling={false}
            />
    );
};
