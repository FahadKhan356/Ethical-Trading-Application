import React, { useState } from 'react';
import { ImageBackground, StyleSheet, View, Text, TouchableOpacity, Image, Dimensions, Alert } from 'react-native';
import { IMAGES } from '../../Constants/IMAGES';
import { COLORS } from '../../Constants/COLORS';
import Icon from 'react-native-vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/native';
import OTPTextInput from 'react-native-otp-textinput'; // <-- Import the library
import styles from '../../styles/ForgetPassword/OtpVerificationStyles';
import { useSelector } from 'react-redux';
import { showError } from '../../Constants/FlashMessage';

const { width, height } = Dimensions.get('window');

const OtpVerification = () => {
     const generatedOtp = useSelector((state: any) => state.auth.otp);
  
    const navigation = useNavigation<any>();
    const [otp, setOtp] = useState('');
    const [loader, setLoader] = useState(false);

  
    const handleOtp=()=>{
        if(otp.length<6){
            showError('Please enter a valid 6-digit OTP.');
            return;
        }
        if(otp==null || otp===''){
            showError('OTP cannot be empty.');
            return;
        }
     if(otp===generatedOtp){
        navigation.navigate('UpdatePassword');
     }else{
        Alert.alert('Invalid OTP! Please try again.');
     }
    };

    return (
        <ImageBackground style={styles.ImageBackgrounStyle} source={IMAGES.home2bg}>
            
            {/* Back Button */}
            <TouchableOpacity
                style={styles.backButton}
                onPress={() => navigation.goBack()}
                activeOpacity={0.7}>
                <Icon name="arrow-back" size={25} color="#ffffff" style={styles.iconShadow} />
            </TouchableOpacity>

            {/* Header Image */}
            {/* <View style={{ justifyContent: 'center', alignItems: 'center', marginTop: 80 }}>
                <Image style={styles.imageStyle} source={IMAGES.ForgetPassWord} />
            </View> */}

            <Text style={styles.codeText}>{`CO\nDE`}</Text>
            <Text style={styles.verificationText}>{`VERIFICATION`}</Text>
            <Text style={styles.descriptionText}>
                Please enter the 6-digit code sent to your email address.
            </Text>

            {/* --- OTP INPUT SECTION --- */}
            <View style={styles.otpWrapper}>
                <OTPTextInput
                    handleTextChange={(text) => setOtp(text)}
                    inputCount={6}
                    keyboardType="numeric"
                    tintColor={COLORS.white}      // Color of the active box border
                    offTintColor="rgba(255,255,255,0.2)" // Color of inactive box border
                    containerStyle={styles.otpContainer}
                    textInputStyle={styles.otpInput}
                />
            </View>

            {/* Verify Button */}
            <TouchableOpacity 
                style={styles.nextBtn} 
                onPress={() => handleOtp()}
            >
                <Text style={styles.nextText}>Verify Now</Text>
            </TouchableOpacity>

            {/* Resend Link */}
            <TouchableOpacity style={{ marginTop: 20 }}>
                <Text style={styles.resendText}>
                    Didn't receive code? <Text style={{ color: COLORS.green2, fontWeight: 'bold' }}>Resend</Text>
                </Text>
            </TouchableOpacity>

        </ImageBackground>
    );
};

export default OtpVerification;
