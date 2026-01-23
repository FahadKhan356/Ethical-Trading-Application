import { StyleSheet } from "react-native";
import { COLORS } from "../../Constants/COLORS";
import { Dimensions } from "react-native";
const {width, height}= Dimensions.get('window');

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
export default styles;