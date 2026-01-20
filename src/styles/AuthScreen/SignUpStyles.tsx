import { StyleSheet , Dimensions} from "react-native";
import { COLORS } from "../../Constants/COLORS";

const {height, width} = Dimensions.get('window');

const styles = StyleSheet.create({
   container: {
    flex: 1,
    paddingHorizontal: width * 0.06,  
    paddingTop: height * 0.080,       
  },

  logoWrapper: {
    alignItems: 'center',
  },

  logo: {
    width: width * 0.48,               
    height: height * 0.16,             
    resizeMode: 'contain',
  },

  title: {
    color: COLORS.white,
    fontSize: width * 0.09,         
    fontWeight: '600',
    textAlign: 'center',
    marginBottom: height * 0.07,        
  },

  bottomText: {
    color: COLORS.white,
    fontSize: width * 0.04,          
    textAlign: 'center',
    marginTop: height * 0.025,          
  },

  signupText: {
    fontWeight: '700',
    textDecorationLine: 'underline',
  },

  btnWrapper: {
    alignItems: 'center',
    marginTop: height * 0.05,       
  },

  Btn: {
    width: width * 0.86,            
    height: height * 0.058,            
    backgroundColor: COLORS.white,
    borderRadius: 25,
    alignItems: 'center',
    justifyContent: 'center',
  },

  btntext: {
    color: COLORS.green2,
    fontSize: width * 0.04,           
    fontWeight: '600',
  },


});
export default styles;