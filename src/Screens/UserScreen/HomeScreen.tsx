import React, { useEffect, useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  ImageBackground,
  FlatList,
  TouchableOpacity,
  Dimensions,
  ScrollView,
  ActivityIndicator,
} from 'react-native';
import { IMAGES, ICONS } from '../../Constants/IMAGES';
import { COLORS } from '../../Constants/COLORS';
import { useNavigation } from '@react-navigation/native';
import { useSelector } from 'react-redux';
// import { SearchCompanyAPI } from '../../Store/Action/AuthAction';
import Loader from '../../Components/Loader';


const { width, height } = Dimensions.get('window');

const HomeScreen = () => {
  const navigation = useNavigation<any>();

  const user = useSelector((state: any) => state.auth.userDetails);
  const userName = `${user?.givenName || ''} ${user?.familyName || ''}`.trim();

  const [companies, setCompanies] = useState<any[]>([]);
  const [loading, setLoading] = useState(false);

//  const fetchCompanies = async () => {
//     try {
//       setLoading(true);
//       const res = await SearchCompanyAPI('popular', 10, 0);

//       setCompanies(res?.items || []);
//     } catch (error) {
//       console.log('Company API error ->', error);
//     } finally {
//       setLoading(false);
//     }
//   };

  useEffect(() => {
    // fetchCompanies();
    console.log('HomeScreen mounted → fetching companies');
  }, []);

 

  return (
    <ImageBackground source={IMAGES.Homebg3} style={styles.container}>
      {loading ? (
        <Loader />
      ) : (
        <ScrollView showsVerticalScrollIndicator={false}>


          <View style={styles.header}>
            <View style={styles.userRow}>
              <TouchableOpacity
                onPress={() => navigation.navigate('ProfileScreen')}>
                <Image source={IMAGES.user} style={styles.avatar} />
              </TouchableOpacity>

              <View>
                <Text style={styles.userName}>{userName || 'User'}</Text>
                <Text style={styles.greeting}>Good Morning</Text>
              </View>
            </View>

            <TouchableOpacity
              style={styles.bell}
              onPress={() => navigation.navigate('Achevement')}>
              <Image source={ICONS.Bell} style={styles.bellIcon} />
            </TouchableOpacity>
          </View>


          <View style={styles.titleWrapper}>
            <View style={styles.titleRow}>
              <Text style={styles.bigText}>AI-SMART</Text>
              <Image source={IMAGES.homeimage} style={styles.pillSmart} />
            </View>

            <View style={styles.titleRow}>
              <Text style={styles.bigText}>TRADING</Text>
              <Image source={IMAGES.doller} style={styles.pillTrading} />
            </View>

            <View style={styles.titleRow}>
              <Image source={IMAGES.everyimage} style={styles.pillEveryone} />
              <Text style={styles.bigText}>FOR EVERYONE.</Text>
            </View>
          </View>


          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Top Companies</Text>
            <Text style={styles.sectionSub}>
              Track your favourite companies
            </Text>

            {loading ? (
              <ActivityIndicator color={COLORS.white} />
            ) : companies.length > 0 ? (
              <FlatList
                data={companies}
                keyExtractor={(item, index) => item.symbol + index}
                numColumns={2}
                scrollEnabled={false}
                columnWrapperStyle={styles.columnWrapper}
                contentContainerStyle={{ marginTop: 16 }}
                renderItem={({ item, index }) => {
                  const isSecondRow = Math.floor(index / 2) % 2 === 1;

                  return (
                    <View
                      style={[
                        styles.card,
                        {
                          backgroundColor: isSecondRow
                            ? '#3d1f1f'
                            : '#1f3d2b',
                        },
                      ]}>

                      <TouchableOpacity style={styles.cardArrow} onPress={()=>navigation.navigate('Portfolio')}>
                        <Image
                          source={ICONS.Arrow2}
                          style={styles.cardArrowIcon}
                        />
                      </TouchableOpacity>

                      <View style={styles.cardContent}>
                        <View style={styles.cardTop}>
                          <Image
                            source={ICONS.forbesion}
                            style={styles.companyLogo}
                          />
                          <Text
                            style={styles.cardTitle}
                            numberOfLines={1}>
                            {item.name}
                          </Text>
                        </View>

                        <Text style={styles.cardValue}>{item.symbol}</Text>
                        <Text style={styles.cardValue}>{item.currency}</Text>

                        <Text style={styles.cardLabel}>Value</Text>
                        <Text style={styles.cardValue}>
                          {(Number(item.matchScore) * 100).toFixed(1)}%
                        </Text>

                        <Text style={styles.cardTrend}>{item.region}</Text>
                      </View>
                    </View>
                  );
                }}
              />
            ) : (
              <View style={{ marginTop: 55, alignItems: 'center' }}>
                <Text
                  style={{
                    color: COLORS.white,
                    fontSize: 25,

                  }}>
                  No Data Available
                </Text>
              </View>
            )}
          </View>


          <View style={styles.portfolio}>
            <Text style={styles.portfolioTitle}>Portfolio</Text>
            <Text style={styles.portfolioSub}>View Portfolio</Text>
          </View>
        </ScrollView>
      )}
    </ImageBackground>
  );
};

export default HomeScreen;


const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: width * 0.05,
    paddingTop: height * 0.08,
  },

  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  userRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  avatar: {
    width: width * 0.15,
    height: width * 0.15,
    borderRadius: 25,
    marginRight: 12,
  },

  userName: {
    color: COLORS.white,
    fontSize: width * 0.06,
    fontWeight: '700',
  },

  greeting: {
    color: COLORS.white,
    fontSize: width * 0.045,
    opacity: 0.8,
  },

  bell: {
    width: width * 0.14,
    height: width * 0.14,
    borderRadius: 30,
    backgroundColor: 'rgba(255,255,255,0.15)',
    justifyContent: 'center',
    alignItems: 'center',
  },

  bellIcon: {
    width: width * 0.06,
    height: width * 0.06,
    tintColor: COLORS.white,
  },

  titleWrapper: {
    marginTop: height * 0.04,
  },

  titleRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },

  bigText: {
    color: COLORS.white,
    fontSize: width * 0.077,
    fontWeight: '800',
  },

  pillSmart: {
    width: width * 0.32,
    height: height * 0.05,
    borderRadius: 25,
    marginLeft: 8,
  },

  pillTrading: {
    width: width * 0.24,
    height: height * 0.05,
    borderRadius: 24,
    marginLeft: 8,
  },

  pillEveryone: {
    width: width * 0.3,
    height: height * 0.05,
    borderRadius: 20,
    marginRight: 10,
  },

  section: {
    marginTop: height * 0.04,
  },

  sectionTitle: {
    color: COLORS.white,
    fontSize: width * 0.055,
    fontWeight: '700',
  },

  sectionSub: {
    color: COLORS.white,
    fontSize: width * 0.045,
    marginTop: 4,
  },

  filterRow: {
    flexDirection: 'row',
    marginTop: 12,
  },

  filter: {
    color: COLORS.white,
    backgroundColor: 'rgba(34,19,19,0.15)',
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 14,
    marginRight: 8,
    fontSize: width * 0.04,
  },

  columnWrapper: {
    justifyContent: 'space-between',
    marginBottom: 18,
  },

  card: {
    width: width * 0.43,
    height: 250,
    borderRadius: 22,
    padding: 16,
    overflow: 'hidden',
  },

  cardContent: {
    flex: 1,
    justifyContent: 'space-between',
  },

  cardArrow: {
    position: 'absolute',
    top: 16,
    right: 12,
    width: 28,
    height: 28,
    borderRadius: 14,
    backgroundColor: COLORS.black,
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 10,
  },

  cardArrowIcon: {
    width: 14,
    height: 14,
    tintColor: COLORS.white,
  },

  cardTop: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },

  companyLogo: {
    width: 35,
    height: 35,
    borderRadius: 14,
  },

  cardTitle: {
    color: COLORS.white,
    fontSize: width * 0.045,
    opacity: 0.8,
  },

  cardLabel: {
    color: COLORS.white,
    fontSize: width * 0.04,
    opacity: 0.6,
  },

  cardValue: {
    color: COLORS.white,
    fontSize: width * 0.055,
    fontWeight: '700',
  },

  cardTrend: {
    fontSize: width * 0.045,
    fontWeight: '600',
    color: COLORS.white
  },

  graph: {
    position: 'absolute',
    bottom: -15,
    left: -25,
    right: -10,
    width: '130%',
    height: '55%',
    resizeMode: 'cover',
    opacity: 0.9,
  },



  portfolio: {
    marginTop: -height * 0.01,
  },

  portfolioTitle: {
    color: COLORS.white,
    fontSize: width * 0.05,
    fontWeight: '700',
  },

  portfolioSub: {
    color: COLORS.white,
    opacity: 0.7,
    marginTop: 4,
  },
});
