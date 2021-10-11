// import React from 'react';
// import {Image, ImageSourcePropType, View} from 'react-native';
// import Touchable from './Touchable';
// import styled from 'styled-components/native';

// export type HeaderButtonType = 'back' | 'close' | 'placeholder';
// export type HeaderButtonPlacement = 'left' | 'right' | 'right2';

// const LeftButtonHolder = styled.View`
//     flex: 1,
//     height: 64,
//     width: 64,
//     flexDirection: "row",
//     alignItems: "center",
//     justifyContent: "flex-start",
//     paddingLeft: Measurements.defaultOffset,
//     zIndex: 1,
// `;

// const RightButtonHolder = styled.View`
//     flex: 1,
//     height: 64,
//     width: 64,
//     flexDirection: "row",
//     alignItems: "center",
//     justifyContent: "flex-end",
//     paddingRight: Measurements.defaultOffset,
//     zIndex: 1,
// `;

// const Right2ButtonHolder = styled.View`
//     flex: 1,
//     height: 64,
//     width: 64,
//     flexDirection: "row",
//     alignItems: "center",
//     justifyContent: "flex-end",
//     paddingRight: 4,
//     zIndex: 1,
// `;

// interface Props {
//   onPress?: () => any;
//   type: HeaderButtonType;
//   placement: HeaderButtonPlacement;
//   accessibilityLabel?: string;
// }

// const DefaultAssets = {
//   Back: require('@assets/images/icons/BackButtonForLight.webp'),
//   Close: require('@assets/images/icons/CloseButtonForLight.webp'),
// };

// function HeaderButton(props: Props) {
//   const imageSource = (): ImageSourcePropType => {
//     switch (props.type) {
//       case 'back':
//         return DefaultAssets.Back;
//       case 'close':
//         return DefaultAssets.Close;
//       case 'placeholder':
//         return 0;
//       default:
//         return props.type;
//     }
//   };
//   return (
//     <Touchable
//       disabled={props.type === 'placeholder'}
//       style={
//         props.placement === 'left'
//           ? LeftButtonHolder
//           : props.placement === 'right'
//           ? RightButtonHolder
//           : Right2ButtonHolder
//       }
//       onPress={props.onPress}
//       accessible={true}
//       accessibilityLabel={props.accessibilityLabel}>
//       {props.type === 'placeholder' ? (
//         <View />
//       ) : (
//         <Image source={imageSource()} />
//       )}
//     </Touchable>
//   );
// }

// export default HeaderButton;
