import React, {useState} from 'react';
import {
    TouchableOpacity,
    Text,
    View
} from 'react-native';

import Icon from 'react-native-vector-icons/FontAwesome';
import {textStyle, colors} from '../../Styles';

export function FAQItem(props) {
    Text.defaultProps = Text.defaultProps || {};
    Text.defaultProps.allowFontScaling = false;
    const {question, answer} = props;
    const [visible, setVisible] = useState(false)
    return (
        <TouchableOpacity
            onPress={() => setVisible(visible => !visible)}
            activeOpacity={0.7}
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
                    style={{width: '85%'}}
                >
                    <View
                        style={{width: '100%', height: 'auto', justifyContent: 'center'}}
                    >
                        <Text multiline={true} style={{
                            ...textStyle.faqQuestion,
                            }}>{question}</Text>
                    </View>
                    {visible && <View
                        style={{width: '90%', height: 'auto', justifyContent: 'center'}}
                    >
                        <Text multiline={true} style={{
                            ...textStyle.faqAnswer,
                            }}>{answer}</Text>
                    </View>}
                </View>
            
            <Icon name="angle-down" size={40} style={{position: 'absolute', right: 0, paddingBottom: 10,}}/>
        </TouchableOpacity>
    );
};