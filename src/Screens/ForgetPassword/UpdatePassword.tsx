import React, { useState } from 'react';
import {
    ImageBackground, StyleSheet, View, Text,
    TouchableOpacity, Image, Dimensions, Alert
} from 'react-native';
import { IMAGES } from '../../Constants/IMAGES';
import { COLORS } from '../../Constants/COLORS';
import Icon from 'react-native-vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/native';
import CustomInput from '../../Components/CustomInput';
import styles from '../../styles/ForgetPassword/UpdatePasswordStyles';

const { width, height } = Dimensions.get('window');

const UpdatePassword = () => {

    const navigation = useNavigation<any>();
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [secure, setPasSecure] = useState(true);
    const [NewPassecure, setNewPasSecure] = useState(true);

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
            <View style={{ justifyContent: 'center', alignItems: 'center', marginTop: 60 }}>
                <Image style={styles.imageStyle} source={IMAGES.ForgetPassWord} />
            </View>

            {/* Heading */}
            <Text style={styles.headingText}>{`NEW \n CREDENTIALS`}</Text>

            {/* Description */}
            <Text style={styles.descriptionText}>
                Your identity has been verified! {"\n"}
                <Text style={{ fontWeight: 'bold', color: COLORS.green2 }}>Set your new password</Text>
            </Text>

            {/* Inputs Section */}
            <View style={{ marginTop: 30, marginHorizontal: 20 }}>
                <CustomInput
                    auth
                    name="password" // Assuming Ionicons name for password
                    placeholder="New Password"
                    value={password}
                    secure={secure}
                    setSecure={setPasSecure}
                    handleInput={(name, text) => setPassword(text)}

                />

                <View style={{ marginTop: 15 }}>
                    <CustomInput
                        auth
                        name="confirmPassword"
                        placeholder="Confirm Password"
                        value={confirmPassword}
                        secure={NewPassecure}
                        setSecure={setNewPasSecure}
                        handleInput={(name, text) => setConfirmPassword(text)}

                    />
                </View>
            </View>

            {/* Update Button */}
            <TouchableOpacity
                style={styles.updateBtn}
                onPress={() => {
                    // Logic to check if passwords match
                    if (password === confirmPassword) {
                        navigation.navigate('PasswordUpdated');
                    } else {
                        Alert.alert("Passwords do not match!");
                    }
                }}
            >
                <Text style={styles.updateText}>Update</Text>
            </TouchableOpacity>

        </ImageBackground>
    );
};

export default UpdatePassword;
