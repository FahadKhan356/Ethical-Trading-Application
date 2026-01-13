import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  ScrollView,
  TextInput,
  ImageBackground,
} from 'react-native';
import {IMAGES, ICONS} from '../../Constants/IMAGES';
import {COLORS} from '../../Constants/COLORS';
import {Dimensions} from 'react-native';
import { useNavigation, NavigationProp } from '@react-navigation/native';

const {width, height} = Dimensions.get('window');

type RootStackParamList = {
  ProfileScreen: undefined;
};

const ResearchScreen = () => {
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();
  
  return (
    <ImageBackground
      source={IMAGES.Homebg2}
      style={styles.container}
      resizeMode="cover"
    >
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.header}>
              <TouchableOpacity onPress={() => navigation.navigate('ProfileScreen')}>
                     <Image source={IMAGES.user} style={styles.avatar} />
                   </TouchableOpacity>
          <Text style={styles.headerTitle}>Research</Text>
          <TouchableOpacity style={styles.iconBtn}>
            <Image source={ICONS.Bell} style={styles.icon} />
          </TouchableOpacity>
        </View>

       
        <View style={styles.searchBox}>
          <TextInput
            placeholder="Search Here"
            placeholderTextColor={COLORS.slowhgray}
            style={styles.searchInput}
          />
          <View style={styles.searchIconBox}>
            <Image source={ICONS.search} style={styles.searchIcon} />
          </View>
        </View>

      
        <Text style={styles.companyName}>Microsoft Group</Text>
        <Text style={styles.price}>$21,326.27</Text>

        <View style={styles.changeRow}>
          <Text style={styles.changeText}>1.7590 $ (0.57%)</Text>
          <Image source={ICONS.downarrow} style={styles.downIcon} />
        </View>

      
        <View style={styles.circleWrapper}>

    
          <Text style={styles.sideValue}>0</Text>

       
          <View style={styles.circleSection}>
            <Image source={ICONS.circular} style={styles.circleImage} />

            <View style={styles.circleCenter}>
            </View>

            <Text style={styles.industryText}>
              Industry{'\n'}Avg 91%
            </Text>
          </View>

      
          <Text style={styles.sideValue}>100</Text>
        </View>

    
        <View style={styles.esgRow}>
          <View style={styles.esgItem}>
            <Text style={styles.esgValue}>57</Text>
            <Text style={styles.esgLabel}>Environment</Text>
          </View>

          <View style={styles.esgItem}>
            <Text style={styles.esgValue}>89</Text>
            <Text style={styles.esgLabel}>Social</Text>
          </View>

          <View style={styles.esgItem}>
            <Text style={styles.esgValue}>76</Text>
            <Text style={styles.esgLabel}>Governance</Text>
          </View>
        </View>

       
        <Text style={styles.sectionTitle}>
          Business Involvement flag
        </Text>

        <Text style={styles.description}>
          • Lorem Ipsum is simply dummy text of the printing and
          typesetting industry.
        </Text>

        <View style={{height: 40}} />
      </ScrollView>
    </ImageBackground>
  );
};

export default ResearchScreen;

const styles = StyleSheet.create({
    container: {
    flex: 1,
    paddingHorizontal: width * 0.05,    
    paddingTop: height * 0.070,          
  },

  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },

  avatar: {
    width: width * 0.15,                
    height: width * 0.15,
    borderRadius: width * 0.07,
  },

  headerTitle: {
    position: 'absolute',
    width: '100%',
    textAlign: 'center',
    color: COLORS.white,
    fontSize: width * 0.065,        
    fontWeight: '600',
  },

  iconBtn: {
    width: width * 0.15,
    height: width * 0.15,
    borderRadius: width * 0.075,
    backgroundColor: 'rgba(255,255,255,0.15)',
    justifyContent: 'center',
    alignItems: 'center',
  },

  icon: {
    width: width * 0.07,
    height: width * 0.07,
    tintColor: COLORS.white,
  },

  searchBox: {
    marginTop: height * 0.03,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'rgba(255,255,255,0.12)',
    borderRadius: 35,
    height: height * 0.068,              
    paddingHorizontal: width * 0.045,
  },

  searchInput: {
    flex: 1,
    color: COLORS.white,
    fontSize: width * 0.045,
  },

  searchIconBox: {
    width: width * 0.11,
    height: width * 0.11,
    borderRadius: width * 0.055,
    backgroundColor: 'rgba(255,255,255,0.15)',
    justifyContent: 'center',
    alignItems: 'center',
  },

  searchIcon: {
    width: width * 0.045,
    height: width * 0.045,
    tintColor: COLORS.slowhgray,
  },

  companyName: {
    color: '#ccc',
    marginTop: height * 0.03,
    fontSize: width * 0.045,
  },

  price: {
    color: COLORS.white,
    fontSize: width * 0.1,              
    fontWeight: '700',
    marginTop: 8,
  },

  changeRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 6,
  },

  changeText: {
    color: COLORS.white,
    fontSize: width * 0.04,
    marginRight: 6,
  },

  downIcon: {
    width: width * 0.035,
    height: width * 0.035,
    tintColor: COLORS.lightred,
  },

 
  circleWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: height * 0.04,
  },

  sideValue: {
    color: COLORS.slowhgray,
    fontSize: width * 0.040,
    marginHorizontal: -15,
    marginTop: height * 0.16,
  },

  circleSection: {
    alignItems: 'center',
    justifyContent: 'center',
  },

  circleImage: {
    width: width * 0.5,                   
    height: width * 0.5,
    resizeMode: 'contain',
  },

  circleCenter: {
    position: 'absolute',
    alignItems: 'center',
  },

  circlePercent: {
    color: COLORS.white,
    fontSize: width * 0.08,
    fontWeight: '700',
  },

  circleLabel: {
    color:COLORS.slowhgray,
    fontSize: width * 0.035,
    marginTop: 4,
  },

  industryText: {
    position: 'absolute',
    right: -width * 0.2,
    bottom: height * 0.08,
    color: COLORS.slowhgray,
    fontSize: width * 0.040,
  },

  esgRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: height * 0.035,
  },

  esgItem: {
    alignItems: 'center',
    flex: 1,
  },

  esgValue: {
    color: COLORS.white,
    fontSize: width * 0.065,
    fontWeight: '600',
  },

  esgLabel: {
    color: COLORS.slowhgray,
    fontSize: width * 0.040,
    marginTop: 4,
  },

  sectionTitle: {
    color: COLORS.white,
    fontSize: width * 0.042,
    fontWeight: '600',
    marginBottom: 8,
    marginTop: height * 0.06,
  },

  description: {
    color: COLORS.slowhgray,
    fontSize: width * 0.04,
    lineHeight: 20,
  },
});
