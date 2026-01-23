import { StyleSheet } from "react-native";
import { COLORS } from "../../Constants/COLORS";
import { Dimensions } from "react-native";
const { width, height } = Dimensions.get('window');

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
export default styles;