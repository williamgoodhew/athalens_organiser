import React from 'react';
import {
  View,
} from 'react-native';

import { Button } from 'react-native-elements';
import {textStyle} from '../../Styles/textStyle';
import Icon from 'react-native-vector-icons/FontAwesome';

export function ButtonNumber(props) {
    const {title, onPress, disabled, loading} = props;
    return (
            <Button
                raised={true}
                title={title}
                type='clear'
                icon={
                    <Icon
                      name="sort-down"
                      size={15}
                      color="black"
                    />
                  }
                titleStyle={{
                    ...textStyle.input,
                    justifyContent: 'center',
                    marginLeft: 3,
                }}
                containerStyle={{
                    overflow: 'visible',
                    width: '30%',
                }}
                onPress={onPress}
                allowFontScaling={false}
            />
    );
};

