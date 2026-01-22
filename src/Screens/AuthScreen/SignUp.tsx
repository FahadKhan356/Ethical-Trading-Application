import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  ImageBackground,
  TouchableOpacity,
  ScrollView,
  Dimensions,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {IMAGES} from '../../Constants/IMAGES';
import {COLORS} from '../../Constants/COLORS';
import CustomInput from '../../Components/CustomInput';
import {SignUpUserAPI} from '../../Store/Action/AuthAction';
import styles from '../../styles/AuthScreen/SignUpStyles';
import SocialButton from '../../Components/SocialBtn';

const {width, height} = Dimensions.get('window');

const SignUpScreen = () => {
  const navigation = useNavigation<any>();
  
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [secure1, setSecure1] = useState(true);
  const [secure2, setSecure2] = useState(true);
  const [loading, setLoading] = useState(false);

  const handleInput = (name: string, text: string) => {
    if (name === 'email') setEmail(text);
    if (name === 'password') setPassword(text);
    if (name === 'confirmPassword') setConfirmPassword(text);
  };

const onSubmit = () => {
  if (!email || !password || !confirmPassword) {
    return;
  }

  if (password !== confirmPassword) {
    return;
  }

  const payload = {
    email: email,
    password: password,
    firstName: email.split('@')[0],
    lastName: '',
  };

  console.log('Signup Payload ->', payload);
  SignUpUserAPI(payload, setLoading, navigation);
};

  return (
    <ImageBackground
      source={IMAGES.loginbg}
      style={styles.container}
      resizeMode="cover">

      <ScrollView>

        <View style={styles.logoWrapper}>
          <Image source={IMAGES.Ethical} style={styles.logo} />
        </View>

        <Text style={styles.title}>Sign Up</Text>

        <CustomInput auth name="email" value={email} handleInput={handleInput} />

        <CustomInput
          auth
          name="password"
          value={password}
          secure={secure1}
          setSecure={setSecure1}
          handleInput={handleInput}
        />

        <CustomInput
          auth
          name="confirmPassword"
          value={confirmPassword}
          secure={secure2}
          setSecure={setSecure2}
          handleInput={handleInput}
          placeholder="Confirm Password"
        />

        <View style={styles.btnWrapper}>
          <TouchableOpacity style={styles.Btn} onPress={onSubmit}>
            <Text style={styles.btntext}>
              {loading ? 'Please wait...' : 'Submit'}
            </Text>
          </TouchableOpacity>
        </View>

        <TouchableOpacity onPress={() => navigation.navigate('LoginScreen')}>
          <Text style={styles.bottomText}>
            Already have an account{' '}
            <Text style={styles.signupText}>Sign In</Text>
          </Text>
        </TouchableOpacity>

        <Text style={[styles.orText, {marginTop: 20}]}>Or</Text>

         <View style={styles.socialBtnContainer}>

       <SocialButton image={IMAGES.Google} onPress={()=>{}}/>
         <SocialButton image={IMAGES.XTwitter} onPress={()=>{}}/>
           <SocialButton image={IMAGES.Facebook} onPress={()=>{}}/>

         </View>

      </ScrollView>
    </ImageBackground>
  );
};

export default SignUpScreen;


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

//   title: {
//     color: COLORS.white,
//     fontSize: width * 0.09,         
//     fontWeight: '600',
//     textAlign: 'center',
//     marginBottom: height * 0.07,        
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
//     marginTop: height * 0.05,       
//   },

//   Btn: {
//     width: width * 0.86,            
//     height: height * 0.058,            
//     backgroundColor: COLORS.white,
//     borderRadius: 25,
//     alignItems: 'center',
//     justifyContent: 'center',
//   },

//   btntext: {
//     color: COLORS.green2,
//     fontSize: width * 0.04,           
//     fontWeight: '600',
//   },


// });
