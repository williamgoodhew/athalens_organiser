import React from 'react';
import {useDispatch} from 'react-redux';
import {
    Text,
    Image,
    Dimensions,
    ActivityIndicator,
    View,
    FlatList,
    TouchableOpacity,
} from 'react-native';

import {eventDetail} from '../../../Actions';

export function ImageListSmall(props) {
    const {images, loading} = props;
    const dispatch = useDispatch();
    Text.defaultProps = Text.defaultProps || {};
    Text.defaultProps.allowFontScaling = false;
    let height;
    if (images) {
        height = Dimensions.get('window').width*0.32*images.length/2
    } else {
        height = 0
    }
    console.log(height)
    return (
        <View
            style={{
                width: Dimensions.get('window').width,
                backgroundColor: 'white',
                zIndex: 3,
                marginTop: -20,
                borderTopRightRadius: 20,
                borderTopLeftRadius: 20,
                height: Dimensions.get('window').height*0.05
            }}
        >
            {loading && <View style ={{marginTop: 30}}>
                <ActivityIndicator size='large' color="#000" />
            </View>}

            {!loading && images && 
            <View style={{height: Dimensions.get('window').height*0.85, marginTop: 5}}>
            <FlatList
                numColumns={3}
                data={images}
                keyExtractor={(item) => item.uid}
                contentContainerStyle={{
                    height: height,
                }}
                renderItem={({ item, index }) =>
                    <TouchableOpacity onPress={() => dispatch(eventDetail(index))}>
                        <Image
                            source={{uri: item.url128 || item.url}}
                            style={{
                                width: Dimensions.get('window').width*0.32,
                                height: Dimensions.get('window').width*0.32,
                                margin: Dimensions.get('window').width*0.006
                            }}
                            
                        />
                    </TouchableOpacity>
                }
            />
            </View>}
            
        </View>
    );
};