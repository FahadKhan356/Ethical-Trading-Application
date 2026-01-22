import React, { useState } from 'react';
import { ImageBackground, StyleSheet, View, Text, TouchableOpacity, Image, Dimensions, Alert } from 'react-native';
import { IMAGES } from '../../Constants/IMAGES';
import { COLORS } from '../../Constants/COLORS';
import Icon from 'react-native-vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/native';
import OTPTextInput from 'react-native-otp-textinput'; // <-- Import the library

const { width, height } = Dimensions.get('window');

const OtpVerification = () => {
  const fakeOtp= '123456'; // For testing purposes
    const navigation = useNavigation<any>();
    const [otp, setOtp] = useState('');
    const [loader, setLoader] = useState(false);

  
    const handleOtp=()=>{
     if(otp===fakeOtp){
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

const styles = StyleSheet.create({
    ImageBackgrounStyle: { flex: 1, resizeMode: "cover" },
    backButton: { marginTop: 50, marginLeft: 15, width: 50, height: 50, justifyContent: 'center' },
    iconShadow: {
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.5,
        shadowRadius: 10,
    },
    imageStyle: { width: 80, height: 80, resizeMode: 'contain', alignSelf: 'center' },
    codeText: {
        fontSize: 70, fontWeight: '900', textAlign: 'center',
        fontFamily: 'Ariel', color: '#FFFFFF', marginTop: 20,
    },
    verificationText: {
        fontSize: 30, fontWeight: '700', textAlign: 'center',
        fontFamily: 'Montserrat-Bold', color: '#FFFFFF', marginTop: 0,
    },
    descriptionText: {
        fontSize: 16, textAlign: 'center', color: '#FFFFFF',
        marginTop: 15, marginHorizontal: 40, opacity: 0.9
    },
    
    /* --- OTP Library Styling --- */
    otpWrapper: {
        marginTop: 40,
        paddingHorizontal: 20,
        alignItems: 'center',
    },
    otpContainer: {
        marginBottom: 20,
    },
    otpInput: {
        borderWidth: 1,
        borderBottomWidth: 1, // Ensure the line shows up
        borderRadius: 10,
        backgroundColor: 'rgba(255, 255, 255, 0.1)', // Transparent white
        color: '#FFFFFF',
        width: width * 0.12,
        height: width * 0.14,
    },

    nextBtn: {
        alignItems: 'center', justifyContent: 'center',
        width: width * 0.86, height: height * 0.058,
        backgroundColor: COLORS.white, borderRadius: 30,
        alignSelf: 'center', marginTop: 40,
    },
    nextText: { color: COLORS.green2, fontSize: 16, fontWeight: '600' },
    resendText: { textAlign: 'center', color: '#FFFFFF', fontSize: 14 }
});