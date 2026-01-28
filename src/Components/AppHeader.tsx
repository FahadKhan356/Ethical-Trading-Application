import React from 'react';
import {
  View,
  StyleSheet,
  TouchableOpacity,
  Image,
  Dimensions,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {ICONS, IMAGES} from '../Constants/IMAGES';
import {COLORS} from '../Constants/COLORS';

const {width} = Dimensions.get('window');

interface Props {
  showBack?: boolean;
  onBackPress?: () => void;
}

const AppHeader: React.FC<Props> = ({showBack = true, onBackPress}) => {
  const navigation = useNavigation<any>();

  return (
    <View style={styles.container}>
  
      {showBack ? (
        <TouchableOpacity
          style={styles.backBtn}
          onPress={onBackPress || navigation.goBack}>
          <Image source={ICONS.backarrow} style={styles.backIcon} />
        </TouchableOpacity>
      ) : (
        <View style={styles.placeholder} />
      )}


      <Image source={IMAGES.Ethical} style={styles.logo} />

     
      <View style={styles.placeholder} />
    </View>
  );
};

export default AppHeader;


const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingTop: 20,
    paddingBottom: 12,
    justifyContent: 'space-between',
     shadowColor: '#000', // Dark shadow color
    shadowOffset: {
      width: 0,
      height: 4, // Adjust height for desired vertical offset
    },
        shadowOpacity: 20,
        shadowRadius:20,
        elevation: 30,
  },

  backBtn: {
    width: 50,
    height: 50,
    borderRadius: 27,
    backgroundColor: 'rgba(255,255,255,0.10)', 
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: COLORS.black, // Dark shadow color
    // shadowOffset: {
    //   width: 8,
    //   height: 4, // Adjust height for desired vertical offset
    // },
        
        elevation: 10,
  },

  backIcon: {
    width: 20,
    height: 20,
    tintColor: COLORS.white,
    resizeMode: 'contain',
  },

  logo: {
    width: 180,
    height: 100,
    resizeMode: 'contain',
     shadowColor: '#000', // Dark shadow color
    shadowOffset: {
      width:100,
      height: 4, // Adjust height for desired vertical offset
    },
        shadowOpacity: 20,
        shadowRadius:20,
        elevation: 30,
  },

  placeholder: {
    width: 42,
  },
});
