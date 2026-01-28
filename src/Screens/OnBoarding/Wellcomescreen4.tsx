// import React, { useState } from 'react';
// import {
//   View,
//   Text,
//   StyleSheet,
//   ImageBackground,
//   TouchableOpacity,
//   Image,
// } from 'react-native';
// import { IMAGES, ICONS } from '../../Constants/IMAGES';
// import { COLORS } from '../../Constants/COLORS';
// import CustomButton from '../../Components/CustomButton';
// import { Dimensions } from 'react-native';

// const {width, height} = Dimensions.get('window');

// const options = [
//   'Lorem Ipsum',
//   'Lorem Ipsum',
//   'Lorem Ipsum',
//   'Lorem Ipsum',
// ];

// const WellcomeScreen4 = ({ navigation }: any) => {
//   const [selected, setSelected] = useState<number | null>(0);

//   return (
//     <ImageBackground
//       source={IMAGES.wellcomebg}
//       style={styles.container}
//       resizeMode="cover">


//       <View style={styles.header}>
//         <TouchableOpacity
//           style={styles.backBtn}
//           onPress={() => navigation.goBack()}>
//           <Image source={ICONS.backarrow} style={styles.backIcon} />
//         </TouchableOpacity>

//         <View style={styles.logoWrap}>
//           <Image source={IMAGES.Ethical} style={styles.logo} />
//         </View>

//         <View style={{ width: 42 }} />
//       </View>


//       <Text style={styles.title}>Questionnaire</Text>

//       <View style={styles.blackCard}>

//         <View style={styles.stepsRow}>
//           <View style={styles.stepInactive}>
//             <Text style={styles.stepTextLight}>01</Text>
//           </View>

//           <View style={styles.line} />

//           <View style={styles.stepActive}>
//             <Text style={styles.stepTextDark}>02</Text>
//           </View>

//           <View style={styles.line} />

//           <View style={styles.stepInactive}>
//             <Text style={styles.stepTextLight}>03</Text>
//           </View>
//         </View>


//         <Text style={styles.question}>
//           Q2: Lorem Ipsum is simply dummy text of the printing and
//           typesetting industry.
//         </Text>


//         {options.map((item, index) => (
//           <TouchableOpacity
//             key={index}
//             style={styles.optionRow}
//             onPress={() => setSelected(index)}>

//             <View
//               style={[
//                 styles.radio,
//                 selected === index && styles.radioActive,
//               ]}
//             />

//             <Text style={styles.optionText}>{item}</Text>
//           </TouchableOpacity>
//         ))}


//         <View style={styles.btnWrapper}>
//           <CustomButton
//             title="Next"
//             onPress={() => navigation.navigate('HomeScreen')}
//           />
//         </View>

//       </View>


//     </ImageBackground>
//   );
// };

// export default WellcomeScreen4;


// const styles = StyleSheet.create({
 
//   container: {
//     flex: 1,
//     paddingTop: height * 0.050, 
//   },

//   header: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     paddingHorizontal: width * 0.053, 
//     justifyContent: 'space-between',
//   },

//   backBtn: {
//     width: width * 0.13,       
//     height: width * 0.13,
//     borderRadius: width * 0.075,
//     backgroundColor: 'rgba(255,255,255,0.10)',
//     justifyContent: 'center',
//     alignItems: 'center',
//   },

//   backIcon: {
//     width: width * 0.048,   
//     height: width * 0.048,
//     tintColor: COLORS.white,
//     resizeMode: 'contain',
//   },

//   logoWrap: {
//     alignItems: 'center',
//   },

//   logo: {
//     width: width * 0.4,    
//     height: height * 0.15,      
//     resizeMode: 'contain',
//     marginBottom: height * 0.005,
//   },

//   logoText: {
//     color: COLORS.white,
//     fontSize: 12,               
//     fontWeight: '600',
//     textAlign: 'center',
//   },

//   title: {
//     color: COLORS.white,
//     fontSize: 30,              
//     fontWeight: '600',
//     textAlign: 'center',
//     marginVertical: height * 0.03, 
//     marginBottom: height * 0.08,   
//   },

//   blackCard: {
//     flex: 1,
//     backgroundColor: '#0F0F0F',
//     borderTopLeftRadius: width * 0.13,
//     borderTopRightRadius: width * 0.13,
//     paddingHorizontal: width * 0.058,  
//     paddingTop: height * 0.04,          
//   },

//   stepsRow: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     justifyContent: 'center',
//     marginVertical: height * 0.04, 
//   },

//   stepActive: {
//     width: width * 0.13,
//     height: width * 0.13,
//     borderRadius: width * 0.065,
//     backgroundColor: COLORS.white,
//     justifyContent: 'center',
//     alignItems: 'center',
//      marginTop: -height * 0.030,
//   },

//   stepCurrent: {
//     width: width * 0.13,
//     height: width * 0.13,
//     borderRadius: width * 0.065,
//     backgroundColor: 'rgba(255,255,255,0.10)',
//     justifyContent: 'center',
//     alignItems: 'center',
//      marginTop: -height * 0.030,
//   },

//   stepInactive: {
//     width: width * 0.13,
//     height: width * 0.13,
//     borderRadius: width * 0.065,
//     backgroundColor: COLORS.green2,
//     justifyContent: 'center',
//     alignItems: 'center',
//     marginTop: -height * 0.030,
//   },

//   stepTextDark: {
//     color: '#000',
//     fontWeight: '600',
//   },

//   stepTextLight: {
//     color: COLORS.white,
//     fontWeight: '600',
//   },

//   line: {
//     width: width * 0.22,      
//     height: height * 0.0025,   
//     backgroundColor: COLORS.white,
//     marginTop: -height * 0.030,
//   },

//   question: {
//     color: COLORS.white,
//     fontSize: 18,             
//     lineHeight: 30,          
//     marginBottom: height * 0.04,
//     marginLeft: width * 0.05,
//   },

//   optionRow: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     marginBottom: height * 0.022,
//     marginLeft: width * 0.05,
//   },

//   radio: {
//     width: width * 0.048,     
//     height: width * 0.048,
//     borderRadius: width * 0.024,
//     borderWidth: 1,
//     borderColor: COLORS.white,
//     marginRight: width * 0.032,
//   },

//   radioActive: {
//     backgroundColor: COLORS.white,
//   },

//   optionText: {
//     color: COLORS.white,
//     fontSize: 18,           
//   },

//   btnWrapper: {
//     marginTop: 'auto',
//     marginBottom: height * 0.04,
//   },

//   button: {
//     backgroundColor: COLORS.white,
//     height: height * 0.07,      
//     borderRadius: height * 0.05, 
//     justifyContent: 'center',
//     alignItems: 'center',
//     width: '85%',
//     alignSelf: 'center',
//   },

//   btnText: {
//     color: COLORS.black,
//     fontSize: 16,               
//     fontWeight: '600',
//   },

//   arrowCircle: {
//     position: 'absolute',
//     right: width * 0.02,        
//     width: width * 0.105,      
//     height: width * 0.105,
//     borderRadius: width * 0.052,
//     backgroundColor: COLORS.black,
//     justifyContent: 'center',
//     alignItems: 'center',
//   },

//   arrowIcon: {
//     width: width * 0.042,       
//     height: width * 0.042,
//     tintColor: COLORS.green2,
//   },
// });
