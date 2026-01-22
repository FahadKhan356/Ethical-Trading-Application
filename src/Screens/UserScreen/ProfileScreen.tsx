import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  ImageBackground,
  TouchableOpacity,
  Dimensions,
  Alert,
} from 'react-native';
import { useNavigation, NavigationProp } from '@react-navigation/native';
import { useDispatch, useSelector } from 'react-redux';

import { IMAGES, ICONS } from '../../Constants/IMAGES';
import { COLORS } from '../../Constants/COLORS';

import { LogoutUserAPI } from '../../Store/Action/AuthAction';
import { logOut } from '../../Store/Reducers/AuthReducer';
import { showError } from '../../Constants/FlashMessage';
import { store } from '../../Store/store';

const { width, height } = Dimensions.get('window');

export type RootStackParamList = {
  Achevement: undefined;
  LoginScreen: undefined;

  EditProfileScreen: { mode: 'username' | 'email' | 'password' };
};

const ProfileScreen = () => {
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();
  const dispatch = useDispatch();
  // const user = useSelector((state: any) => state.user.userDetails.user);
  // const userName = `${user?.firstName || ''} ${user?.lastName || ''}`.trim();
  // const userEmail = user?.email || '';
  // ✅ NEW (Safe and Correct):
const user = useSelector((state: any) => state.auth?.userDetails?.user);

// Fallback logic to prevent empty strings or crashes
const userName = user 
  ? `${user.firstName ?? ''} ${user.lastName ?? ''}`.trim() 
  : 'Guest User';
const userEmail = user?.email ?? 'No email available';   
  const handleLogout = async () => {
    try {
      console.log(
        '🧠 Token at logout click ->',
        store.getState().auth.tokenId
      );
      await LogoutUserAPI();

      dispatch(logOut());

      navigation.reset({
        index: 0,
        routes: [{ name: 'LoginScreen' }],
      });
    } catch (error) {
      console.log('Logout error ->', error);

      showError('Logout Failed: Something went wrong while logging out');
    }
    //temprary block until api fixed
    finally{
       navigation.reset({
        index: 0,
        routes: [{ name: 'LoginScreen' }],
      });
    }

  };

  return (
    <ImageBackground
      source={IMAGES.Homebg2}
      style={styles.imagebg}
      resizeMode="cover">

      <View style={styles.panel}>

        <View style={styles.topRow}>
          <Image source={IMAGES.user} style={styles.avatar} />

          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Image source={ICONS.closeicon} style={styles.closeIcon} />
          </TouchableOpacity>
        </View>

  <View style={styles.editContainer}>
<View style={styles.infoRow}>
          <Image source={ICONS.usericon} style={styles.infoIcon} />
          <Text style={styles.infoText}>{userName}</Text>
        </View>

         <TouchableOpacity onPress={() =>  navigation.navigate('EditProfileScreen', { mode: 'username' })}>
            <Image source={ICONS.EditIcon} style={{ width: 20, height: 20 }} />
          </TouchableOpacity>
  </View>
        

r

        <View style={styles.editContainer}>
          <View style={styles.infoRow}>
            <Image source={ICONS.email} style={styles.infoIcon} />
            <Text style={styles.infoText}>{userEmail}</Text>

          </View>
          <TouchableOpacity onPress={() => navigation.navigate('EditProfileScreen', { mode: 'email' })}>
            <Image source={ICONS.EditIcon} style={{ width: 20, height: 20 }} />
          </TouchableOpacity>
        </View>

<View style={styles.editContainer}> 
<View style={styles.infoRow}>
          <Image source={ICONS.Lock} style={styles.infoIcon} />
          <Text style={styles.infoText}>Password</Text>
        </View>
<TouchableOpacity onPress={() =>  navigation.navigate('EditProfileScreen', { mode: 'password' })}>
            <Image source={ICONS.EditIcon} style={{ width: 20, height: 20 }} />
          </TouchableOpacity>
</View>
        
        <Text style={styles.sectionTitle}>AI Preferences</Text>

        <View style={styles.divider} />

        <TouchableOpacity
          style={styles.menuItem}
          onPress={() => navigation.navigate('Achevement')}>
          <Image source={ICONS.PowerIcon} style={styles.menuIcon} />
          <Text style={styles.menuText}>Gamification</Text>
        </TouchableOpacity>

        <View style={styles.menuItem}>
          <Image source={ICONS.setting} style={styles.menuIcon} />
          <Text style={styles.menuText}>Settings</Text>
        </View>

        <View style={styles.menuItem}>
          <Image source={ICONS.language} style={styles.menuIcon} />
          <Text style={styles.menuText}>Language</Text>
        </View>

        <View style={{ flex: 1 }} />

        <TouchableOpacity style={styles.menuItem1} onPress={handleLogout}>
          <Image source={ICONS.logout} style={styles.menuIcon} />
          <Text style={styles.menuText}>Log Out</Text>
        </TouchableOpacity>

      </View>
    </ImageBackground>
  );
};

export default ProfileScreen;

const styles = StyleSheet.create({
  imagebg: {
    flex: 1,
  },

  panel: {
    width: width * 0.75,
    height: '100%',
    backgroundColor: 'rgba(255,255,255,0.08)',
    paddingTop: height * 0.06,
    paddingHorizontal: width * 0.06,
  },

  topRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: height * 0.05,
    marginTop: 20
  },

  avatar: {
    width: width * 0.26,
    height: width * 0.26,
    borderRadius: width * 0.13,
  },

  closeIcon: {
    width: 22,
    height: 22,
    tintColor: COLORS.white,
    marginLeft: 220,
    marginBottom: 28
  },

  infoRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: height * 0.022,
  },
  editContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',

  },

  infoIcon: {
    width: 20,
    height: 20,
    tintColor: COLORS.white,
    marginRight: 14,
  },

  infoText: {
    color: COLORS.white,
    fontSize: 18,
  },

  divider: {
    height: 1,
    backgroundColor: 'rgba(255,255,255,0.2)',
    marginVertical: height * 0.03,
  },

  sectionTitle: {
    color: COLORS.slowhgray,
    fontSize: 20,
    // marginBottom: height * 0.02,
    marginTop: 10
  },

  menuItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: height * 0.030,
  },

  menuIcon: {
    width: 20,
    height: 20,
    tintColor: COLORS.slowhgray,
    marginRight: 14,
  },

  menuText: {
    color: COLORS.white,
    fontSize: 20,
  },
  menuItem1: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: height * 0.080,
  },

  modalOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.7)', // Darken background
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalContent: {
    width: width * 0.85,
    backgroundColor: 'rgba(40,40,40,0.95)', // Matches your panel feel
    borderRadius: 20,
    padding: 25,
    borderWidth: 1,
    borderColor: 'rgba(255,255,255,0.1)',
  },
  modalTitle: {
    color: COLORS.white,
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20,
    textTransform: 'capitalize',
  },
  input: {
    width: '100%',
    height: 50,
    backgroundColor: 'rgba(255,255,255,0.05)',
    borderRadius: 10,
    color: COLORS.white,
    paddingHorizontal: 15,
    fontSize: 16,
    marginBottom: 25,
    borderWidth: 1,
    borderColor: 'rgba(255,255,255,0.2)',
  },
  modalButtons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  modalBtn: {
    flex: 0.48,
    height: 45,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  textContainer: {
    flex: 1, // Pushes the edit icon to the right
  },
  infoLabel: {
    color: COLORS.slowhgray,
    fontSize: 12,
    textTransform: 'uppercase',
  },
  
});


