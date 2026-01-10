import React, { useState } from 'react';
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
import {COLORS} from '../../Constants/COLORS';
import {IMAGES, ICONS} from '../../Constants/IMAGES';
import { Dimensions } from 'react-native';
const { width, height } = Dimensions.get('window');


const PortfolioScreen = ({navigation}: any) => {

  const [activeFilter, setActiveFilter]=useState('Technology')
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
          <Text style={styles.headerTitle}>Portfolio</Text>

          <TouchableOpacity style={styles.iconBtn}>
            <Image source={ICONS.Bell} style={styles.icon} />
          </TouchableOpacity>
        </View>

  
        <View style={styles.searchBox}>
          <TextInput
            placeholder="Search Here"
            placeholderTextColor="#bbb"
            style={styles.searchInput}
          />

          <View style={styles.searchIconWrapper}>
            <Image source={ICONS.search} style={styles.searchIcon} />
          </View>
        </View>

        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          style={styles.filterRow}
        >
   <TouchableOpacity onPress={() => setActiveFilter('Technology')}>
  <Text
    style={[
      styles.filter,
      activeFilter === 'Technology' && styles.activeFilter,
    ]}>
    Technology
  </Text>
</TouchableOpacity>

<TouchableOpacity onPress={() => setActiveFilter('Anti Weapons')}>
  <Text
    style={[
      styles.filter,
      activeFilter === 'Anti Weapons' && styles.activeFilter,
    ]}>
    Anti Weapons
  </Text>
</TouchableOpacity>

<TouchableOpacity onPress={() => setActiveFilter('Anti Wear')}>
  <Text
    style={[
      styles.filter,
      activeFilter === 'Anti Wear' && styles.activeFilter,
    ]}>
    Anti Wear
  </Text>
</TouchableOpacity>

        </ScrollView>

      
        <Text style={styles.sectionTitle}>Portfolio</Text>

    
{[1, 2].map((item, index) => (
  <TouchableOpacity
    key={index}
    activeOpacity={0.85}
    style={styles.card}
    onPress={() => navigation.navigate('MicroSoft')}
  >

  
    <View style={styles.cardLeft}>
      <Image
        source={ICONS.microsoft}
        style={styles.companyIcon}
      />

      <View>
        <Text style={styles.companyName}>MSFT</Text>
        <Text style={styles.companySub}>
          Microsoft Group
        </Text>

        <Text style={styles.price}>$21,326.27</Text>
        <Text style={styles.growth}>
          ↗ 1.7590 $ (0.57%)
        </Text>
      </View>
    </View>

    
    <View style={styles.cardRight}>
      <TouchableOpacity>
        <Image
          source={ICONS.Arrow2}
          style={styles.arrowIcon}
        />
      </TouchableOpacity>

      <Image
        source={IMAGES.Graph}
        style={styles.graph}
      />
    </View>

  </TouchableOpacity>
))}

        <View style={{height: 40}} />
      </ScrollView>
    </ImageBackground>
  );
};

export default PortfolioScreen;


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
    position: 'relative',
  },

  avatar: {
    width: width * 0.15,             
    height: width * 0.15,
    borderRadius: width * 0.052,    
  },

  headerTitle: {
    position: 'absolute',
    alignSelf: 'center',
    width: '100%',
    textAlign: 'center',
    color: COLORS.white,
    fontSize: 26,                     
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
    marginTop: height * 0.028,     
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'rgba(255,255,255,0.12)',
    borderRadius: 35,
    paddingHorizontal: width * 0.045,  
    height: height * 0.068,            
  },

  searchInput: {
    color: COLORS.white,
    flex: 1,
    fontSize: 18,                     
  },

  searchIconWrapper: {
    width: width * 0.11,              
    height: width * 0.11,
    borderRadius: width * 0.055,
    backgroundColor: 'rgba(255,255,255,0.15)',
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 10,
  },

  searchIcon: {
    width: width * 0.045,             
    height: width * 0.045,
    tintColor: COLORS.slowhgray,
  },

 
  filterRow: {
    marginTop: height * 0.023,       
  },

  filter: {
    paddingHorizontal: width * 0.06,  
    paddingVertical: height * 0.01,   
    borderRadius: 18,
    backgroundColor: 'rgba(255,255,255,0.12)',
    color: COLORS.white,
    marginRight: width * 0.035,        
    fontSize: 13,                     
    marginTop: 10,
    marginBottom: 10,
  },

  activeFilter: {
    backgroundColor: COLORS.white,
    color: '#000',
    fontWeight: '600',
  },

  sectionTitle: {
    color: COLORS.white,
    fontSize: 21,                      
    fontWeight: '600',
    marginTop: 10,
    marginBottom: -10,
  },


  card: {
    marginTop: height * 0.025,        
    backgroundColor: 'rgba(255,255,255,0.10)',
    borderRadius: 24,
    padding: 16,
    flexDirection: 'row',
    justifyContent: 'space-between',
    height: height * 0.18,           
  },

  cardLeft: {
    flexDirection: 'row',
    gap: 12,
  },

  companyIcon: {
    width: width * 0.11,              
    height: width * 0.11,
    borderRadius: width * 0.055,
  },

  companyName: {
    color: COLORS.white,
    fontSize: 14,                  
    fontWeight: '600',
  },

  companySub: {
    color: '#ccc',
    fontSize: 12,                     
    marginBottom: 8,
  },

  price: {
    color: COLORS.white,
    fontSize: 25,                     
    fontWeight: '700',
    marginTop: height * 0.025,
  },

  growth: {
    color: COLORS.green4,
    fontSize: 14,                     
    marginTop: 4,
  },

  cardRight: {
    alignItems: 'flex-end',
    justifyContent: 'space-between',
  },

  arrowBtn: {
    width: width * 0.075,              
    height: width * 0.075,
    borderRadius: width * 0.0375,
    backgroundColor: COLORS.black,
    justifyContent: 'center',
    alignItems: 'center',
  },

  arrowIcon: {
    width: width * 0.035,              
    height: width * 0.035,
    tintColor: COLORS.white,
  },

  graph: {
    width: width * 0.2,               
    height: width * 0.2,
    resizeMode: 'contain',
    tintColor: COLORS.white,
  },
});
