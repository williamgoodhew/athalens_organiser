import React from 'react';
import {
    Image,
    Text,
    View,
    Dimensions,
    TouchableOpacity,
} from 'react-native';

import {textStyle} from '../../../Styles';

export function LargeImage(props) {
    const {image} = props;
    Text.defaultProps = Text.defaultProps || {};
    Text.defaultProps.allowFontScaling = false;
    
    let url;
    if(!image.urlSocial) {
        url = image.url
    } else {
        url = image.urlSocial
    }
    const size = Image.getSize(url)
    console.log('size: ', size)
    return (
        <TouchableOpacity>
            <Image
                source={{uri: url}}
                style={{
                    width: Dimensions.get('window').width,
                    height: Dimensions.get('window').width,
                    marginBottom: 10
                }}
                
            />
        </TouchableOpacity>
    );
};

// import React, { RefObject } from "react";
// import { Dimensions, StyleSheet } from "react-native";
// import Animated, {
//   Value,
//   block,
//   cond,
//   eq,
//   set,
//   useCode,
// } from "react-native-reanimated";
// import {
//   PinchGestureHandler,
//   ScrollView,
//   State,
// } from "react-native-gesture-handler";
// import {
//   onGestureEvent,
//   pinchActive,
//   pinchBegan,
//   timing,
//   transformOrigin,
//   translate,
//   vec,
// } from "react-native-redash";

// const { width } = Dimensions.get("window");
// const SIZE = width;
// const styles = StyleSheet.create({
//   image: {
//     ...StyleSheet.absoluteFillObject,
//     width: undefined,
//     height: undefined,
//     resizeMode: "cover",
//   },
// });

// interface Post {
//   user: string;
//   picture: {
//     uri: string;
//   };
//   caption: string;
//   timestamp: number;
//   likes: number;
//   avatar: string;
// }

// interface PostProps {
//   post: Post;
//   state: Animated.Value<State>;
//   pinchRef: RefObject<PinchGestureHandler>;
//   pinchRefs: RefObject<PinchGestureHandler>[];
//   scrollView: RefObject<ScrollView>;
// }

// export default ({
//   post,
//   state,
//   pinchRef,
//   pinchRefs,
//   scrollView,
// }: PostProps) => {
//   const origin = vec.createValue(0, 0);
//   const pinch = vec.createValue(0, 0);
//   const focal = vec.createValue(0, 0);
//   const scale = new Value(1);
//   const numberOfPointers = new Value(0);
//   const pinchGestureHandler = onGestureEvent({
//     numberOfPointers,
//     scale,
//     state,
//     focalX: focal.x,
//     focalY: focal.y,
//   });
//   const zIndex = cond(eq(state, State.ACTIVE), 3, 0);
//   const adjustedFocal = vec.add(
//     {
//       x: -SIZE / 2,
//       y: -SIZE / 2,
//     },
//     focal
//   );
//   useCode(
//     () =>
//       block([
//         cond(pinchBegan(state), vec.set(origin, adjustedFocal)),
//         cond(
//           pinchActive(state, numberOfPointers),
//           vec.set(pinch, vec.minus(vec.sub(origin, adjustedFocal)))
//         ),
//         cond(eq(state, State.END), [
//           set(pinch.x, timing({ from: pinch.x, to: 0 })),
//           set(pinch.y, timing({ from: pinch.y, to: 0 })),
//           set(scale, timing({ from: scale, to: 1 })),
//         ]),
//       ]),
//     [adjustedFocal, numberOfPointers, origin, pinch, scale, state]
//   );
//   return (
//     <>
//       <Animated.View style={{ width: SIZE, height: SIZE, zIndex }}>
//         <PinchGestureHandler
//           ref={pinchRef}
//           simultaneousHandlers={[
//             scrollView,
//             // ...pinchRefs.filter((ref) => ref !== pinchRef),
//           ]}
//           {...pinchGestureHandler}
//         >
//           <Animated.View style={StyleSheet.absoluteFill}>
//             <Animated.Image
//               style={[
//                 styles.image,
//                 {
//                   transform: [
//                     ...translate(pinch),
//                     ...transformOrigin(origin, { scale }),
//                   ],
//                 },
//               ]}
//               source={{ uri: 'https://storage.googleapis.com/athalens-51eb0.appspot.com/britishEventing%2F1E2Z0J4p7ZRQHZgnb2cD%2Funsorted001aa2a3-26e5-45ea-b10c-de5a4a805009?GoogleAccessId=firebase-adminsdk-wkx7i%40athalens-51eb0.iam.gserviceaccount.com&Expires=16447017600&Signature=I9cGzpyeMRQri6PfC3kNgneQXUpqHS87%2BCOw38KR0eXyjxKC%2FgpjETkA9VnVN2EFf4t2GPnGj0jTYap5IEquGQPRdahFmJA0M9EScs8xp8OhwThjLoWEMjSGle%2BLpHMGQY4rVyUnYVSNaTqfIjZnrFffPrLfMMOI0yC%2FOyjyQFpHdnmynVSWc2mRFgbxdT8yU0j1vXOafLA5S4Sr%2Fd2ULsDqGYRwtdBslRChMnIsvxRTiKzHFt17DfGZRQ7qCVgY2qkC1ljbOfzbLD5tZ7b%2B9AIxZOb8Xs3lLXv7Rh11f%2BnEM%2FxJ%2FtpKtNwW5Y%2F1VqP5mAI4eZKtAKhJTIHMZAYsYQ%3D%3D' }}
//             />
//           </Animated.View>
//         </PinchGestureHandler>
//       </Animated.View>
//     </>
//   );
// };











