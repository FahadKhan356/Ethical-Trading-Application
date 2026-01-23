import { StyleSheet } from "react-native";
import { COLORS } from "../../Constants/COLORS";
import { Dimensions } from "react-native";
const {width, height}= Dimensions.get('window')

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
    headingText: {
        fontSize: 32, fontWeight: '700', textAlign: 'center',
        fontFamily: 'Montserrat-Bold', color: '#FFFFFF', marginTop: 20,
        lineHeight: 38,
    },
    descriptionText: {
        fontSize: 16, textAlign: 'center', color: '#FFFFFF',
        marginTop: 10, marginHorizontal: 40, opacity: 0.9,
        fontFamily: 'Montserrat-Regular',
    },
    updateBtn: {
        alignItems: 'center', justifyContent: 'center',
        width: width * 0.86, height: height * 0.058,
        backgroundColor: COLORS.white, borderRadius: 30,
        alignSelf: 'center', marginTop: 40,
    },
    updateText: { color: COLORS.green2, fontSize: 16, fontWeight: '600' },
});
export default styles;  