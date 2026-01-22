import React from 'react';
import { 
    ImageBackground, StyleSheet, View, Text, 
    TouchableOpacity, Image, Dimensions 
} from 'react-native';
import { IMAGES } from '../../Constants/IMAGES';
import { COLORS } from '../../Constants/COLORS';
import Icon from 'react-native-vector-icons/Ionicons';
import { useNavigation, CommonActions } from '@react-navigation/native';

const { width, height } = Dimensions.get('window');

const PasswordUpdated = () => {
    const navigation = useNavigation();

    const handleBackToLogin = () => {
        // This resets the navigation stack so the user can't "go back" to the password reset flow
        navigation.dispatch(
            CommonActions.reset({
                index: 0,
                routes: [{ name: 'LoginScreen' }],
            })
        );
    };

    return (
        <ImageBackground style={styles.ImageBackgrounStyle} source={IMAGES.home2bg}>
            
            {/* Success Icon Area */}
            <View style={styles.centerContainer}>
                <View style={styles.successCircle}>
                    <Icon name="checkmark-done-outline" size={80} color={COLORS.green2} />
                </View>

                {/* Heading */}
                <Text style={styles.headingText}>{`PASSWORD \n UPDATED`}</Text>
                
                {/* Description */}
                <Text style={styles.descriptionText}>
                    Your password has been reset successfully. {"\n"}
                    Now you can login with your new credentials.
                </Text>

                {/* Back to Login Button */}
                <TouchableOpacity 
                    style={styles.loginBtn} 
                    onPress={handleBackToLogin}
                >
                    <Text style={styles.loginText}>Back to Login</Text>
                </TouchableOpacity>
            </View>

        </ImageBackground>
    );
};

export default PasswordUpdated;

const styles = StyleSheet.create({
    ImageBackgrounStyle: { flex: 1, resizeMode: "cover" },
    centerContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    successCircle: {
        width: 150,
        height: 150,
        borderRadius: 75,
        backgroundColor: 'rgba(255, 255, 255, 0.9)',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 30,
        // Shadow for the circle
        elevation: 10,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 5 },
        shadowOpacity: 0.3,
        shadowRadius: 10,
    },
    headingText: {
        fontSize: 32,
        fontWeight: '700',
        textAlign: 'center',
        fontFamily: 'Montserrat-Bold',
        color: '#FFFFFF',
        lineHeight: 38,
    },
    descriptionText: {
        fontSize: 16,
        textAlign: 'center',
        color: '#FFFFFF',
        marginTop: 15,
        marginHorizontal: 50,
        opacity: 0.9,
        lineHeight: 22,
    },
    loginBtn: {
        alignItems: 'center',
        justifyContent: 'center',
        width: width * 0.86,
        height: height * 0.058,
        backgroundColor: COLORS.white,
        borderRadius: 30,
        marginTop: 50,
    },
    loginText: {
        color: COLORS.green2,
        fontSize: 16,
        fontWeight: '600',
    },
});