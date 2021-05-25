import React from 'react';
import {useDispatch} from 'react-redux';
import {
    Text,
    ScrollView,
    Dimensions,
    ActivityIndicator,
    View,
    FlatList
} from 'react-native';

import {setEvent} from '../../../Actions';
import {EventCard} from './EventCard'

export function EventList(props) {
    const {events, loading} = props;
    const dispatch = useDispatch();
    Text.defaultProps = Text.defaultProps || {};
    Text.defaultProps.allowFontScaling = false;
    return (
        <View>
            {loading && <View style ={{marginTop: 30}}>
                <ActivityIndicator size='large' color="#000" />
            </View>}

            {!loading && events && 
            <View style={{height: Dimensions.get('window').height}}>
            <FlatList
                data={events}
                keyExtractor={(item) => item.uid}
                renderItem={({ item }) =>
                    <EventCard
                        image={item.profile.profilePicture}
                        title={item.name}
                        subTitle={item.date}
                        onPress={() => dispatch(setEvent(item))}
                    />
                }
            />
            </View>}
            
        </View>
    );
};