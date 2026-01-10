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
import { IMAGES, ICONS } from '../../Constants/IMAGES';
import { COLORS } from '../../Constants/COLORS';
import { Dimensions } from 'react-native';
import { useNavigation, NavigationProp } from '@react-navigation/native';

const { width, height } = Dimensions.get('window');

type RootStackParamList = {
  ProfileScreen: undefined;
};

const CommunityScreen = () => {
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();
   const [activeFilter,setActiveFilter]=useState('co-ops')
 
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

          <Text style={styles.headerTitle}>Community</Text>

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


        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          style={styles.filterRow}
        >
       <TouchableOpacity onPress={() => setActiveFilter('co-ops')}>
  <Text
    style={[
      styles.filter,
      activeFilter === 'co-ops' && styles.activeFilter,
    ]}>
    co-ops
  </Text>
</TouchableOpacity>

<TouchableOpacity onPress={() => setActiveFilter('farms')}>
  <Text
    style={[
      styles.filter,
      activeFilter === 'farms' && styles.activeFilter,
    ]}>
    farms
  </Text>
</TouchableOpacity>

<TouchableOpacity onPress={() => setActiveFilter('ReFi DAO')}>
  <Text
    style={[
      styles.filter,
      activeFilter === 'ReFi DAO' && styles.activeFilter,
    ]}>
    ReFi DAO
  </Text>
</TouchableOpacity>

        </ScrollView>

        <View style={styles.card}>

          <Image source={IMAGES.comunity} style={styles.cardImage} />


          <View style={styles.cardRow}>
            <View>
              <Text style={styles.cardTitle}>FMS Stocks</Text>
              <Text style={styles.cardSub}>Project Name</Text>
            </View>

            <View style={{ alignItems: 'flex-end' }}>
              <Text style={styles.cardTitle}>New York, USA</Text>
              <Text style={styles.cardSub}>Location</Text>
            </View>
          </View>


          <Text style={styles.description}>
            Lorem Ipsum is simply dummy text of the printing and
            typesetting industry.
          </Text>


          <View style={styles.progressRow}>
            <Text style={styles.progressText}>Progress</Text>
            <Text style={styles.progressText}>80%</Text>
          </View>

          <View style={styles.progressBar}>
            <View style={styles.progressFill} />
          </View>

          <TouchableOpacity style={styles.learnBtn}>
            <Text style={styles.learnText}>Learn More</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.investBtn}>
            <Text style={styles.investText}>Invest</Text>
          </TouchableOpacity>

        </View>

        <View style={{ height: 40 }} />
      </ScrollView>
    </ImageBackground>
  );
};

export default CommunityScreen;


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
    borderRadius: width * 0.075,
  },

  headerTitle: {
    position: 'absolute',
    width: '100%',
    textAlign: 'center',
    color: COLORS.white,
    fontSize: 27,
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
    height: height * 0.068,
    paddingHorizontal: width * 0.045,
  },

  searchInput: {
    flex: 1,
    color: COLORS.white,
    fontSize: 18,
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


  filterRow: {
    marginTop: height * 0.022,
  },

  filter: {
    paddingHorizontal: width * 0.07,
    paddingVertical: height * 0.010,
    borderRadius: 22,
    backgroundColor: 'rgba(255,255,255,0.12)',
    color: COLORS.white,
    marginRight: width * 0.05,
    fontSize: 15,
  },

  activeFilter: {
    backgroundColor: COLORS.white,
    color: '#000',

  },


  card: {
    marginTop: height * 0.025,
    backgroundColor: 'rgba(255,255,255,0.10)',
    borderRadius: 26,
    padding: 16,
  },

  cardImage: {
    width: '100%',
    height: height * 0.19,
    borderRadius: 20,
    marginBottom: 10,
  },

  cardRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },

  cardTitle: {
    color: COLORS.white,
    fontSize: 17,
    fontWeight: '600',
    marginTop: 5,
  },

  cardSub: {
    color: COLORS.slowhgray,
    fontSize: 16,
    marginTop: 2,
  },

  description: {
    color: COLORS.slowhgray,
    fontSize: 13,
    marginTop: height * 0.011,
    lineHeight: 18,
  },

  progressRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: height * 0.020,
  },

  progressText: {
    color: COLORS.slowhgray,
    fontSize: 16,
  },

  progressBar: {
    height: height * 0.014,
    borderRadius: 8,
    backgroundColor: 'rgba(255,255,255,0.2)',
    marginTop: 6,
  },

  progressFill: {
    width: '80%',
    height: '100%',
    borderRadius: 4,
    backgroundColor: COLORS.white,
  },

  learnBtn: {
    marginTop: height * 0.018,
    paddingVertical: height * 0.018,
    borderRadius: 25,
    backgroundColor: 'rgba(255,255,255,0.15)',
    alignItems: 'center',
  },

  learnText: {
    color: COLORS.white,
    fontSize: 14,
  },

  investBtn: {
    marginTop: height * 0.012,
    paddingVertical: height * 0.018,
    borderRadius: 25,
    backgroundColor: COLORS.green3,
    alignItems: 'center',
  },

  investText: {
    color: '#000',
    fontSize: 15,
    fontWeight: '600',
  },

});
