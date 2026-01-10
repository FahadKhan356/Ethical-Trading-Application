import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  ScrollView,
  ImageBackground,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import {IMAGES, ICONS} from '../../Constants/IMAGES';
import {COLORS} from '../../Constants/COLORS';
import { Dimensions } from 'react-native';

const {width, height} = Dimensions.get('window');

const MicrosoftGroupScreen = () => {
  const navigation = useNavigation();

  const [activeFilter, setActiveFilter] = useState('1D');

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <ImageBackground
        source={IMAGES.Homebg2}
        style={styles.container}
        resizeMode="cover"
      >

        <View style={styles.header}>
          <TouchableOpacity style={styles.iconBtn}     onPress={() => navigation.goBack()}>
            <Image source={ICONS.backarrow} style={styles.icon} />
          </TouchableOpacity>

          <Text style={styles.headerTitle}>Microsoft Group</Text>

          <TouchableOpacity style={styles.iconBtn}>
            <Image source={ICONS.Bell} style={styles.icon} />
          </TouchableOpacity>
        </View>

        <Text style={styles.subTitle}>Market Summary</Text>

        <Text style={styles.price}>$21,326.27</Text>

        <View style={styles.changeRow}>
          <Text style={styles.changeText}>1.7590 $ (0.57%)</Text>
          <Image source={ICONS.downarrow} style={styles.downIcon} />
        </View>

      <View style={styles.filterRow}>
  <TouchableOpacity onPress={() => setActiveFilter('1D')}>
    <Text
      style={[
        styles.filter,
        activeFilter === '1D' && styles.activeFilter,
      ]}>
      1D
    </Text>
  </TouchableOpacity>

  <TouchableOpacity onPress={() => setActiveFilter('5D')}>
    <Text
      style={[
        styles.filter,
        activeFilter === '5D' && styles.activeFilter,
      ]}>
      5D
    </Text>
  </TouchableOpacity>

  <TouchableOpacity onPress={() => setActiveFilter('1M')}>
    <Text
      style={[
        styles.filter,
        activeFilter === '1M' && styles.activeFilter,
      ]}>
      1M
    </Text>
  </TouchableOpacity>

  <TouchableOpacity onPress={() => setActiveFilter('6M')}>
    <Text
      style={[
        styles.filter,
        activeFilter === '6M' && styles.activeFilter,
      ]}>
      6M
    </Text>
  </TouchableOpacity>

  <TouchableOpacity onPress={() => setActiveFilter('Y')}>
    <Text
      style={[
        styles.filter,
        activeFilter === 'Y' && styles.activeFilter,
      ]}>
      Y
    </Text>
  </TouchableOpacity>
</View>


        <View style={styles.graphWrapper}>
          <View style={styles.yAxis}>
            <Text style={styles.yAxisText}>4500</Text>
            <Text style={styles.yAxisText}>4000</Text>
            <Text style={styles.yAxisText}>3500</Text>
            <Text style={styles.yAxisText}>3000</Text>
            <Text style={styles.yAxisText}>2500</Text>
          </View>

          <View style={styles.graphBox}>
            <Image source={ICONS.redgraph} style={styles.graph} />
          </View>
        </View>

        <View style={styles.timeRow}>
          <Text style={styles.time}>08:00 Am</Text>
          <Text style={styles.time}>10:00 Am</Text>
          <Text style={styles.time}>12:00 Pm</Text>
        </View>

        <Text style={styles.sectionTitle}>Brief Details</Text>

        <Text style={styles.description}>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum is simply dummy text of the printing and
          typesetting industry. Lorem Ipsum is simply dummy text of the
          printing and typesetting industry.
        </Text>

        <Text style={styles.sectionTitle}>Pros</Text>

        <Text style={styles.bullet}>
          • Lorem Ipsum is simply dummy text of the printing and typesetting industry.
        </Text>
        <Text style={styles.bullet}>
          • Lorem Ipsum is simply dummy text of the printing and typesetting industry.
        </Text>
        <Text style={styles.bullet}>
          • Lorem Ipsum is simply dummy text of the printing and typesetting industry.
        </Text>

        <View style={{height: 40}} />
      </ImageBackground>
    </ScrollView>
  );
};

export default MicrosoftGroupScreen;

const styles = StyleSheet.create({
 
  container: {
    flex: 1,
       paddingTop: height * 0.07,        
    paddingHorizontal: width * 0.048, 
  },

  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },

  headerTitle: {
    color: COLORS.white,
    fontSize: width * 0.060,          
    fontWeight: '600',
  },

  iconBtn: {
    width: width * 0.14,              
    height: width * 0.14,
    borderRadius: width * 0.08,        
    backgroundColor: 'rgba(255,255,255,0.15)',
    justifyContent: 'center',
    alignItems: 'center',
  },

  icon: {
    width: width * 0.07,               
    height: width * 0.07,
    tintColor: COLORS.white,
    resizeMode: 'contain',
  },

  subTitle: {
    color: COLORS.white,
    marginTop: height * 0.03,         
    fontSize: width * 0.043,          
  },

  price: {
    color: COLORS.white,
    fontSize: width * 0.09,        
    fontWeight: '700',
    marginTop: height * 0.008,       
  },

  changeRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: height * 0.008,         
  },

  changeText: {
    color: COLORS.white,
    fontSize: width * 0.035,           
    marginRight: width * 0.015,       
  },

  downIcon: {
    width: width * 0.035,              
    height: width * 0.035,
    tintColor: COLORS.lightred,
  },

  filterRow: {
    flexDirection: 'row',
    marginTop: height * 0.028,        
  },

  filter: {
    paddingHorizontal: width * 0.065,  
    paddingVertical: height * 0.015,  
    borderRadius: width * 0.055,      
    backgroundColor: 'rgba(255,255,255,0.12)',
    color: COLORS.white,
    marginRight: width * 0.025,        
    fontSize: width * 0.032,          
  },

  activeFilter: {
    backgroundColor: COLORS.white,
    color: '#000',
    fontWeight: '600',
  },

  graphWrapper: {
    flexDirection: 'row',
    marginTop: height * 0.02,        
  },

  yAxis: {
    width: width * 0.105,              
    justifyContent: 'space-between',
    paddingVertical: height * 0.012,  
  },

  yAxisText: {
    color: COLORS.slowhgray,
    fontSize: width * 0.038,           
  },

  graphBox: {
    flex: 1,
    alignItems: 'center',
  },

  graph: {
    width: '100%',
    height: height * 0.28,           
    resizeMode: 'contain',
  },

  timeRow: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: height * 0.008,        
  },

  time: {
    color: COLORS.slowhgray,
    fontSize: width * 0.035,         
  },

  sectionTitle: {
    color: COLORS.slowhgray,
    fontSize: width * 0.045,           
    fontWeight: '600',
    marginTop: height * 0.045,         
    marginBottom: height * 0.008,      
  },

  description: {
    color: COLORS.slowhgray,
    fontSize: width * 0.035,         
    lineHeight: height * 0.025,    
  },

  bullet: {
    color: COLORS.slowhgray,
    fontSize: width * 0.035,         
    marginTop: height * 0.008,     
    lineHeight: height * 0.025,      
  },
});
