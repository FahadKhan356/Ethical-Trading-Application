import React, { useState } from 'react'
import { ImageBackground, StyleSheet, View, Text, TouchableOpacity, Image, TextInput, ActivityIndicator } from 'react-native'
import { IMAGES } from '../../Constants/IMAGES';
import Icon from 'react-native-vector-icons/Ionicons'
import { useNavigation } from '@react-navigation/native';
import { COLORS } from '../../Constants/COLORS';
import { Dimensions } from 'react-native';
import CustomInput from '../../Components/CustomInput';
import styles from '../../styles/ForgetPassword/EmailProviderStyles';
import { ForgotPasswordAPI } from '../../Store/Action/AuthAction';

const { width, height } = Dimensions.get('window');




export type RootStackParamList = {
  EmailProvider: undefined;
  OtpVerification: { email: string }; // Pro tip: pass the email to show it on next screen
  // ... rest
};

const EmailProvider = () => {

    const [ loader, setLoader]=useState(false);
    const handleSendOtp=()=>{
 ForgotPasswordAPI(email,setLoader,navigation);
    }


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
          handleInput={(name,text) => setEmail(text)}
        />
 </View>

 
   
        <TouchableOpacity style={styles.nextBtn} onPress={handleSendOtp}>
            {loader ? (
                          <ActivityIndicator color={COLORS.black} />
                        ) : (
 <Text style={styles.nextText}>Next</Text>)}
        </TouchableOpacity>

 

        </ImageBackground>
    )
}

export default EmailProvider;
