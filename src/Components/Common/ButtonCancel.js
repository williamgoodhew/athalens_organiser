import React from 'react';
import {
  View,
} from 'react-native';

import { Button } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';

export function ButtonCancel(props) {
    const {onPress} = props;
    return (
        <View style={{ position: 'absolute', top: 20, right: 0}}>
            <Button
                type='clear'
                icon={
                    <Icon
                      name="close"
                      size={25}
                      color="black"
                    />
                }
                onPress={onPress}
            />
        </View>
    );
};