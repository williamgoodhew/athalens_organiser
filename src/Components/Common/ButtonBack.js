import React from 'react';
import {
  View,
  Dimensions
} from 'react-native';

import { Button } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';

export function ButtonBack(props) {
    const {onPress, help} = props;
    let left = 24;
    if (help) {
        left = 0
    }
    return (
        <View style={{ position: 'absolute', top: 20, zIndex: 3, left: left}}>
            <Button
                type='clear'
                icon={
                    <Icon
                      name="arrow-left"
                      size={25}
                      color="black"
                      zIndex={10}
                    />
                }
                onPress={onPress}
            />
        </View>
    );
};
