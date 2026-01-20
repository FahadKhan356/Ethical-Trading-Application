import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  Image,
  TouchableOpacity,
  StatusBar,
  ScrollView,
} from 'react-native';
import { IMAGES } from '../../Constants/IMAGES';
import { COLORS } from '../../Constants/COLORS';
import {useNavigation} from '@react-navigation/native';
import { Dimensions } from 'react-native';
import styles from '../../styles/AuthScreen/OnboardingStyles'

const { width, height } = Dimensions.get('window');

const OnboardingScreen: React.FC = () => {
    const navigation = useNavigation<any>();
  return (
    <ImageBackground
      source={IMAGES.onboardimgbg}
      style={styles.container}
      resizeMode="cover"
    >
      <StatusBar translucent backgroundColor="transparent" />

    
<View style={styles.overlay} pointerEvents="none" />


      <ScrollView contentContainerStyle={styles.scrollContent}>
        <View style={styles.content}>
 
          <Image
            source={IMAGES.Ethical}
            style={styles.logo}
            resizeMode="contain"
          />

        
          <Text style={styles.title}>Empower</Text>
          <Text style={styles.subtitle}>
            Your Trade With{'\n'}Complete Knowledge
          </Text>

          
       
  <TouchableOpacity style={styles.button}onPress={() => {
  console.log('Pressed');
  navigation.navigate('LoginScreen');
}}>
    <View style={styles.arrowCircle}>
      <Text style={styles.arrow}>➜</Text>
    </View>

    <Text style={styles.buttonText}>Get Started</Text>
  </TouchableOpacity>

        </View>
      </ScrollView>
    </ImageBackground>
  );
};

export default OnboardingScreen;


// const styles = StyleSheet.create({
//     container: {
//     flex: 1,
//   },

//   overlay: {
//     ...StyleSheet.absoluteFillObject,
//     backgroundColor: 'rgba(0, 90, 40, 0.75)',
//   },

//   content: {
//     flex: 1,
//     paddingHorizontal: width * 0.06,   
//     paddingTop: height * 0.080,       
//   },

//   scrollContent: {
//     flexGrow: 1,
//   },

//   logo: {
//     width: width * 0.60,              
//     height: width * 0.60,
//     marginBottom: height * 0.085,     
//     alignSelf: 'center',
//     resizeMode: 'contain',
//   },

//   title: {
//     color: COLORS.white,
//     fontSize: width * 0.055,           
//     fontStyle: 'italic',
//     textAlign: 'left',
//     marginTop: height * 0.18,          
//   },

//   subtitle: {
//     color: COLORS.white,
//     fontSize: width * 0.07,            
//     fontWeight: '700',
//     lineHeight: width * 0.09,          
//     textAlign: 'left',
//   },

//   button: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     backgroundColor: COLORS.white,
//     width: '95%',
//     paddingVertical: height * 0.020,   
//     paddingHorizontal: width * 0.04,   
//     borderRadius: 40,
//     justifyContent: 'center',
//     alignSelf: 'center',
//     marginTop: height * 0.03,          
//   },

//   buttonText: {
//     color: COLORS.black,
//     fontSize: width * 0.04,          
//     fontWeight: '600',
//   },

//   arrowCircle: {
//     width: width * 0.105,             
//     height: width * 0.105,
//     borderRadius: width * 0.055,
//     backgroundColor: COLORS.black,
//     justifyContent: 'center',
//     alignItems: 'center',
//     position: 'absolute',
//     left: width * 0.02,                
//   },

//   arrow: {
//     color: COLORS.white,
//     fontSize: width * 0.05,            
//     fontWeight: '700',
//   },
// });

