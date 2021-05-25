import React from 'react';
import { Text, TouchableOpacity} from 'react-native';
import {textStyle, containerStyle} from '../../Styles';

export default function LeftMenuButton(props) {
    const {title, onPress} = props;
    Text.defaultProps = Text.defaultProps || {};
    Text.defaultProps.allowFontScaling = false;
    return (
        <TouchableOpacity onPress={onPress} style={containerStyle.menuButton}>
            <Text numberOfLines={1} style={textStyle.menuButton}>{title}</Text>
        </TouchableOpacity>
    )
}