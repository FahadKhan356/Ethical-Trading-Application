import React from 'react';
import {
    ImageBackground, StyleSheet, View, Text,
    TouchableOpacity, Image, Dimensions
} from 'react-native';
import { IMAGES } from '../../Constants/IMAGES';
import { COLORS } from '../../Constants/COLORS';
import Icon from 'react-native-vector-icons/Ionicons';
import { useNavigation, CommonActions } from '@react-navigation/native';
import styles from '../../styles/ForgetPassword/PasswordUpdatedStyles';

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
