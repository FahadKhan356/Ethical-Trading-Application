import React, { useState } from 'react'
import { ImageBackground, StyleSheet, View, Text, TouchableOpacity, Image, TextInput } from 'react-native'
import { IMAGES } from '../../Constants/IMAGES';
import Icon from 'react-native-vector-icons/Ionicons'
import { useNavigation } from '@react-navigation/native';
import { COLORS } from '../../Constants/COLORS';
import { Dimensions } from 'react-native';
import CustomInput from '../../Components/CustomInput';

const { width, height } = Dimensions.get('window');




export type RootStackParamList = {
  EmailProvider: undefined;
  OtpVerification: { email: string }; // Pro tip: pass the email to show it on next screen
  // ... rest
};

const EmailProvider = () => {

   const [email, setEmail] = useState('');
    const navigation = useNavigation<any>();
    return (
        <ImageBackground style={styles.ImageBackgrounStyle} source={IMAGES.home2bg}>
           
           
            <TouchableOpacity
                style={styles.backButton}
                onPress={() => navigation.goBack()}
                activeOpacity={0.7}>
                <Icon
                    name="arrow-back"
                    size={25}
                    color="#ffffff"
                    style={{ marginLeft: 10 ,shadowColor: '#000000', shadowOffset: { width: 3, height: 6 },
                    shadowOpacity: 1,
                    shadowRadius: 20,}}
                    onPress={() => navigation.goBack()}
                />

            </TouchableOpacity>
            <View style={{ justifyContent: 'center', alignItems: 'center' , marginTop: 100 }}>
                <Image style={styles.imageStyle} source={IMAGES.ForgetPassWord}></Image>
            </View>


            <Text style={styles.forgetPassText} >{`FORGET \n PASSWORD`}</Text>
            <Text style={styles.descriptionText} >Provide Your account's email for which you want to reset the password!</Text>
   
 <View style={{ marginTop: 10, marginHorizontal: 20 }}> 
<CustomInput
          auth
          name="email"
          value={email}
          handleInput={()=>{}}
        />
 </View>

 
   
        <TouchableOpacity style={styles.nextBtn} onPress={() => navigation.navigate('OtpVerification')}>
 <Text style={styles.nextText}>Next</Text>
        </TouchableOpacity>

 

        </ImageBackground>
    )
}

export default EmailProvider;

const styles = StyleSheet.create({
    ImageBackgrounStyle: {
        flex: 1,
        resizeMode: "contain",
    },
    backButton: {
        marginTop: 50, // Moves it below the status bar
        marginLeft: 15,
        width: 50,     // Give it a defined touch area
        height: 50,
        justifyContent: 'center',
    },
    imageStyle: {

        width: 80,     // Adjust width as needed
        height: 80,    // SPECIFY HEIGHT to remove the extra empty space
        resizeMode: 'contain',
        shadowColor: '#a2787800',
        shadowOffset: { width: 3, height: 10 },
        shadowOpacity: 1,
        shadowRadius: 20,
        alignItems: 'center',
        justifyContent: 'center',
        alignSelf: 'center',
    },

    forgetPassText: {
        fontSize: 35,
        fontWeight: '700',
        textAlign: 'center',
        fontFamily: 'Montserrat-Bold',
        color: '#FFFFFF',
        shadowColor: '#000000',
        shadowOffset: { width: 3, height: 10 },
        shadowOpacity: 0.3,
        shadowRadius: 20,
        marginTop: 20,
    },
    descriptionText: {
        fontSize: 18,
        textAlign: 'center',
        fontFamily: 'Montserrat-Regular',
        color: '#FFFFFF',
        marginTop: 15,
        marginHorizontal: 40,
         shadowColor: '#000000',
        shadowOffset: { width: 3, height: 6 },
        shadowOpacity: 0.3,
        shadowRadius: 20,
  
    },
      input: { backgroundColor: 'rgba(255,255,255,0.1)',
         borderRadius: 12,
          height: 55, 
          paddingHorizontal: 15, 
          color: 'white', 
          fontSize: 16, 
          borderWidth: 1, 
          borderColor: 'rgba(255,255,255,0.2)' },
          
          textInput:{
            color: 'white',
            fontSize: 16,
            flex: 1,
          },
            nextText: {
              color: COLORS.green2,
              fontSize: width * 0.04,
              fontWeight: '600',
            },
             nextBtn: {
    alignItems: 'center',
    justifyContent: 'center',
    width: width * 0.86,
    height: height * 0.058,
    backgroundColor: COLORS.white,
    borderRadius: 30,
    alignSelf: 'center',
    marginTop: 50,
  },

});
