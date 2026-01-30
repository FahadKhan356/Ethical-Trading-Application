import React, { useState } from 'react';
import {
  View,
  Text,
  Image,
  ImageBackground,
  TouchableOpacity,
  ScrollView,
  Alert,
  ActivityIndicator,
  StyleSheet,
  Dimensions,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { IMAGES } from '../../Constants/IMAGES';
import { COLORS } from '../../Constants/COLORS';
import CustomInput from '../../Components/CustomInput';
import { LoginUserAPI,signInWithGoogle } from '../../Store/Action/AuthAction';
import styles from '../../styles/AuthScreen/LoginStyles';
import SocialButton from '../../Components/SocialBtn';
import EmailProvider from '../ForgetPassword/EmailProvider';
import { useSelector } from 'react-redux';
import { RootState } from '../../Store/type';


const { width, height } = Dimensions.get('window');

const LoginScreen = () => {
  const navigation = useNavigation<any>();
    const user = useSelector((state:RootState)=>state.auth.userDetails);

  const [form, setForm] = useState({
    email: 'user@gmail.com',
    password: '12345678aa',
  });
  const [secure, setSecure] = useState(true);
  const [loading, setLoading] = useState(false);

  const handleInput = (name: string, value: string) => {
    setForm(prev => ({
      ...prev,
      [name]: value,
    }));
  };

  const validateForm = () => {
    const { email, password } = form;
    if (!email || !password) {
      Alert.alert('Error', 'Please fill in all fields');
      return false;
    }
    return true;
  };

  const handleLogin = () => {
    if (!validateForm()) return;

    console.log('Login Payload ->', form);
    // navigation.navigate('HomeScreen');

    LoginUserAPI(form, setLoading, navigation,user);
   
  };
  
  const navigateToForgotPassword = () => {
    // navigation.navigate("EmailProvider");
    navigation.navigate('EmailProvider');
  };

  return (
    <ImageBackground
      source={IMAGES.loginbg}
      style={styles.container}
      resizeMode="cover">

      <ScrollView showsVerticalScrollIndicator={false}>

        <View style={styles.logoWrapper}>
          <Image source={IMAGES.Ethical} style={styles.logo} />
        </View>

        <Text style={styles.title}>Sign In</Text>

        <CustomInput
          auth
          name="email"
          value={form.email}
          handleInput={handleInput}
        />

        <CustomInput
          auth
          name="password"
          value={form.password}
          secure={secure}
          setSecure={setSecure}
          handleInput={handleInput}
        />

        <TouchableOpacity style={styles.forgotWrapper} onPress={navigateToForgotPassword}>
          <Text style={styles.forgotText}>Forgot Password?</Text>
        </TouchableOpacity>

        <View style={styles.btnWrapper}>
          <TouchableOpacity
            style={styles.Btn}
            disabled={loading}
            onPress={handleLogin}>
            {loading ? (
              <ActivityIndicator color={COLORS.black} />
            ) : (
              <Text style={styles.btntext}>Submit</Text>
            )}
          </TouchableOpacity>
        </View>

        <Text
          style={styles.bottomText}
          onPress={() => navigation.navigate('SignUp')}>
          Don’t have an account{' '}
          <Text style={styles.signupText}>Sign up</Text>
        </Text>

        <Text style={[styles.orText, { marginTop: 20 }]}>Or</Text>

        <View style={styles.socialBtnContainer}>

          <SocialButton image={IMAGES.Google} onPress={() => {  signInWithGoogle(navigation,setLoading);}} />
          <SocialButton image={IMAGES.XTwitter} onPress={() => { }} />
          <SocialButton image={IMAGES.Facebook} onPress={() => { }} />

        </View>



- 

      </ScrollView>
    </ImageBackground>
  );
};

export default LoginScreen;


// const styles = StyleSheet.create({
//    container: {
//     flex: 1,
//     paddingHorizontal: width * 0.06,
//     paddingTop: height * 0.080,
//   },

//   logoWrapper: {
//     alignItems: 'center',
//   },

//   logo: {
//     width: width * 0.48,
//     height: height * 0.16,
//     resizeMode: 'contain',
//   },

//   logoText: {
//     color: COLORS.white,
//     fontSize: width * 0.05,
//     fontWeight: '700',
//   },

//   logoSubText: {
//     color: COLORS.white,
//     fontSize: width * 0.03,
//     letterSpacing: 1,
//   },

//   title: {
//     color: COLORS.white,
//     fontSize: width * 0.09,
//     fontWeight: '600',
//     textAlign: 'center',
//     marginBottom: height * 0.07,
//     marginTop: height * 0.015,
//   },

//   forgotWrapper: {
//     alignItems: 'flex-end',
//     marginBottom: height * 0.03,
//   },

//   forgotText: {
//     color: COLORS.white,
//     fontSize: width * 0.04,
//   },

//   bottomText: {
//     color: COLORS.white,
//     fontSize: width * 0.04,
//     textAlign: 'center',
//     marginTop: height * 0.025,
//   },

//   signupText: {
//     fontWeight: '700',
//     textDecorationLine: 'underline',
//   },

//   btnWrapper: {
//     alignItems: 'center',
//   },

//   Btn: {
//     width: width * 0.86,
//     height: height * 0.058,
//     backgroundColor: COLORS.white,
//     borderRadius: 30,
//     alignItems: 'center',
//     justifyContent: 'center',
//   },

//   btntext: {
//     color: COLORS.green2,
//     fontSize: width * 0.04,
//     fontWeight: '600',
//   },

// });
