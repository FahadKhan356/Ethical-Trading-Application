import React from 'react';
import { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  ScrollView,
  ImageBackground,
} from 'react-native';
import {IMAGES, ICONS} from '../../Constants/IMAGES';
import {COLORS} from '../../Constants/COLORS';
import {Dimensions} from 'react-native';

const {width, height} = Dimensions.get('window');


const AIAssistantScreen = () => {
  const [activeTime, setActiveTime] = useState('1D');

  return (
    <ImageBackground
      source={IMAGES.Homebg2}
      style={styles.container}
      resizeMode="cover"
    >
      <ScrollView showsVerticalScrollIndicator={false}>

   
        <View style={styles.header}>
          <TouchableOpacity style={styles.headerBtn}>
            <Image source={ICONS.menuicon} style={styles.headerIcon} />
          </TouchableOpacity>

          <Text style={styles.headerTitle}>AI Assistant</Text>

          <TouchableOpacity style={styles.headerBtn}>
            <Image source={ICONS.Bell} style={styles.headerIcon} />
          </TouchableOpacity>
        </View>

        <View style={styles.promptBox}>
          <Text style={styles.promptText}>
            Tell me about Unilever plc
          </Text>
        </View>

  
        <Text style={styles.description}>
          Lorem Ipsum is simply dummy text of the printing and
          typesetting industry.
        </Text>

        <View style={styles.companyRow}>
          <Image source={ICONS.unliver} style={styles.companyLogo} />
          <View>
            <Text style={styles.companyName}>Unilever PLC</Text>
            <Text style={styles.marketLabel}>Market Summary</Text>
          </View>
        </View>

        <Text style={styles.price}>$21,326.27</Text>

        <View style={styles.changeRow}>
          <Text style={styles.changeText}>1.7590 $ (0.57%)</Text>
          <Image source={ICONS.downarrow} style={styles.downIcon} />
        </View>
<View style={styles.timeRow}>
  {['1D', '5D', '1M', '6M', 'Y'].map(item => (
    <TouchableOpacity
      key={item}
      onPress={() => setActiveTime(item)}
      activeOpacity={0.8}
    >
      <View
        style={[
          styles.timeBtn,
          activeTime === item && styles.activeTime,
        ]}
      >
        <Text
          style={[
            styles.timeText,
            activeTime === item && styles.activeTimeText,
          ]}
        >
          {item}
        </Text>
      </View>
    </TouchableOpacity>
  ))}
</View>


      
        <View style={styles.graphWrapper}>

          <View style={styles.yAxis}>
            {['4500', '4000', '3500', '3000', '2500'].map((num, index) => (
              <Text key={index} style={styles.yAxisText}>
                {num}
              </Text>
            ))}
          </View>

    
          <View style={styles.graphBox}>
            <Image source={ICONS.redgraph} style={styles.graph} />
          </View>

        </View>

       
        <View style={styles.bottomInfoRow}>
          <TouchableOpacity style={styles.bottomBtn}>
            <Image source={ICONS.search} style={styles.bottomIcon} />
          </TouchableOpacity>

          <View style={styles.timeLabels}>
            <Text style={styles.timeLabel}>08:00 Am</Text>
            <Text style={styles.timeLabel}>10:00 Am</Text>
            <Text style={styles.timeLabel}>12:00 Pm</Text>
          </View>

     
        </View>

        <View style={{height: 40}} />
      </ScrollView>
    </ImageBackground>
  );
};

export default AIAssistantScreen;

const styles = StyleSheet.create({
  
  container: {
    flex: 1,
    paddingHorizontal: width * 0.048,
    paddingTop: height * 0.07,
  },

  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  headerBtn: {
    width: width * 0.16,
    height: width * 0.16,
    borderRadius: (width * 0.16) / 2,
    backgroundColor: 'rgba(255,255,255,0.15)',
    justifyContent: 'center',
    alignItems: 'center',
  },

  headerIcon: {
    width: width * 0.065,
    height: width * 0.065,
    tintColor: COLORS.white,
  },

  headerTitle: {
    color: COLORS.white,
    fontSize: width * 0.063,
    fontWeight: '600',
  },

  promptBox: {
    marginTop: height * 0.04,
    alignSelf: 'flex-end',
    backgroundColor: 'rgba(255,255,255,0.18)',
    paddingHorizontal: width * 0.06,
    paddingVertical: height * 0.012,
    borderRadius: width * 0.06,
  },

  promptText: {
    color: COLORS.white,
    fontSize: width * 0.045,
  },

  description: {
    color: '#ccc',
    fontSize: width * 0.040,
    marginTop: height * 0.022,
    lineHeight: height * 0.025,
  },

  companyRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: height * 0.028,
    gap: width * 0.03,
  },

  companyLogo: {
    width: width * 0.14,
    height: width * 0.14,
    borderRadius: width * 0.06,
    marginBottom: height * 0.01,
  },

  companyName: {
    color: COLORS.white,
    fontSize: width * 0.05,
    fontWeight: '600',
  },

  marketLabel: {
    color: COLORS.slowhgray,
    fontSize: width * 0.039,
    marginTop: height * 0.005,
  },

  price: {
    color: COLORS.white,
    fontSize: width * 0.07,
    fontWeight: '700',
    marginTop: height * 0.022,
  },

  changeRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: height * 0.007,
  },

  changeText: {
    color: COLORS.white,
    fontSize: width * 0.038,
    marginRight: width * 0.015,
  },

  downIcon: {
    width: width * 0.03,
    height: width * 0.03,
    tintColor: COLORS.lightred,
  },

  timeRow: {
    flexDirection: 'row',
    marginTop: height * 0.025,
    gap: width * 0.02,
  },

  timeBtn: {
    paddingHorizontal: width * 0.06,
    paddingVertical: height * 0.012,
    borderRadius: width * 0.05,
    backgroundColor: 'rgba(255,255,255,0.12)',
  },

  activeTime: {
    backgroundColor: COLORS.white,
  },

  timeText: {
    color: COLORS.white,
    fontSize: width * 0.030,
  },

  activeTimeText: {
    color: '#000',
    fontWeight: '600',
  },

  graphWrapper: {
    flexDirection: 'row',
    marginTop: height * 0.035,
  },

  yAxis: {
    justifyContent: 'space-between',
    height: height * 0.28,
    paddingRight: width * 0.02,
  },

  yAxisText: {
    color: '#888',
    fontSize: width * 0.04,
  },

  graphBox: {
    flex: 1,
    height: height * 0.35,
  },

  graph: {
    width: '100%',
    height: '100%',
    resizeMode: 'contain',
  },

  bottomInfoRow: {
    flexDirection: 'row',
    gap: width * 0.12,
    marginTop: height * 0.008,
  },

  bottomBtn: {
    width: width * 0.13,
    height: width * 0.13,
    borderRadius: (width * 0.13) / 2,
    backgroundColor: 'rgba(255,255,255,0.15)',
    justifyContent: 'center',
    alignItems: 'center',
  },

  bottomIcon: {
    width: width * 0.045,
    height: width * 0.045,
    tintColor: COLORS.white,
  },

  timeLabels: {
    flexDirection: 'row',
    gap: width * 0.08,
  },

  timeLabel: {
    color: COLORS.slowhgray,
    fontSize: width * 0.038,
  },
});
