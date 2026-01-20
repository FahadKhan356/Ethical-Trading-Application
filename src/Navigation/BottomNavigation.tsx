import React from 'react';
import {View, StyleSheet, Image, Dimensions} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {ICONS} from '../Constants/IMAGES';
import {COLORS} from '../Constants/COLORS';
import HomeScreen from '../Screens/UserScreen/HomeScreen';
import Portfolio from '../Screens/UserScreen/Portfolio';
import AIAssistant from '../Screens/UserScreen/AIAssitant';
import CommunityScreen from '../Screens/UserScreen/Community';
import ResearchScreen from '../Screens/UserScreen/Research';

const {width, height} = Dimensions.get('window');

const Tab = createBottomTabNavigator();

const TabIcon = ({icon, focused}: any) => {
  return (
    <View style={[styles.iconBox, focused && styles.activeIcon]}>
      <Image
        source={icon}
        style={[
          styles.icon,
          {tintColor: focused ? COLORS.black : COLORS.white},
        ]}
      />
    </View>
  );
};

const BottomNavigation = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: styles.tabBar,
      }}>

      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarIcon: ({focused}) => (
            <TabIcon icon={ICONS.Home} focused={focused} />
          ),
        }}
      />

      <Tab.Screen
        name="Research"
        component={ResearchScreen}
        options={{
          tabBarIcon: ({focused}) => (
            <TabIcon icon={ICONS.research} focused={focused} />
          ),
        }}
      />

      <Tab.Screen
        name="Portfolio"
        component={Portfolio}
        options={{
          tabBarIcon: ({focused}) => (
            <TabIcon icon={ICONS.portfolio} focused={focused} />
          ),
        }}
      />

      <Tab.Screen
        name="Community"
        component={CommunityScreen}
        options={{
          tabBarIcon: ({focused}) => (
            <TabIcon icon={ICONS.community} focused={focused} />
          ),
        }}
      />

      <Tab.Screen
        name="AI"
        component={AIAssistant}
        options={{
          tabBarIcon: ({focused}) => (
            <TabIcon icon={ICONS.AI} focused={focused} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default BottomNavigation;

const styles = StyleSheet.create({
  tabBar: {
    position: 'absolute',
    bottom: height * 0.050,      
    marginLeft: width * 0.055,     
    width: width * 0.9,           
    alignSelf: 'center',
    marginBottom: -height * 0.02,   
    height: height * 0.080,       
    borderRadius: height * 0.048,  
    backgroundColor: 'rgba(23, 23, 23, 0.85)',
    borderTopWidth: 0,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 8},
    shadowOpacity: 0.35,
    shadowRadius: 12,
    elevation: 10,
   
  },

  iconBox: {
    width: width * 0.13,        
    height: width * 0.13,
    borderRadius: width * 0.075,   
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: height * 0.03,     
  },

  activeIcon: {
    backgroundColor: COLORS.white,
  },

  icon: {
    width: width * 0.08,          
    height: width * 0.08,
    resizeMode: 'contain',
  },
});
