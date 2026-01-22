import React, { useState } from 'react';
import {
  Image,
  ImageBackground,
  TouchableOpacity,
  View,
  Text,
  TextInput,
  StyleSheet,
  Alert,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';
import { ICONS, IMAGES } from '../../Constants/IMAGES';
import { COLORS } from '../../Constants/COLORS';
import { useNavigation, useRoute, RouteProp } from '@react-navigation/native';
import { useSelector, useDispatch } from 'react-redux';
import { setUserDetails } from '../../Store/Reducers/AuthReducer';
import { RootStackParamList } from './ProfileScreen';

const EditProfileScreen = () => {
  const navigation = useNavigation();
  const route = useRoute<RouteProp<RootStackParamList, 'EditProfileScreen'>>();
  const { mode } = route.params; // Get the mode: 'username', 'email', or 'password'
  const dispatch = useDispatch();

  // Get current Redux data
  const authData = useSelector((state: any) => state.auth.userDetails);
  const user = authData?.user;

  // Local States
  const [firstName, setFirstName] = useState(user?.firstName || '');
  const [lastName, setLastName] = useState(user?.lastName || '');
  const [email, setEmail] = useState(user?.email || '');
  const [oldPassword, setOldPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [showOldPassword, setShowOldPassword] = useState(false);
const [showNewPassword, setShowNewPassword] = useState(false);

  const handleUpdate = () => {
    let updatedUser = { ...user };

    if (mode === 'username') {
      updatedUser.firstName = firstName;
      updatedUser.lastName = lastName;
    } else if (mode === 'email') {
      updatedUser.email = email;
    } else if (mode === 'password') {
      // Logic for password update usually involves an API call
      console.log("Updating password...");
    }

    const updatedDetails = { ...authData, user: updatedUser };
    dispatch(setUserDetails(updatedDetails));
    
    Alert.alert("Success", `${mode.toUpperCase()} updated successfully!`);
    navigation.goBack();
  };

  return (
    <ImageBackground source={IMAGES.Homebg2} style={styles.container}>
      <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : 'height'} style={{ flex: 1 }}>
        
        {/* HEADER */}
        <View style={styles.header}>
          <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backBtn}>
            <Image source={ICONS.backarrow} style={styles.backIcon} resizeMode="contain" />
          </TouchableOpacity>
          <Text style={styles.headerTitle}>Update {mode}</Text>
          <View style={{ width: 44 }} />
        </View>

        <View style={styles.form}>
          {/* DYNAMIC INPUTS BASED ON MODE */}
          
          {mode === 'username' && (
            <>
              <View style={styles.inputGroup}>
                <Text style={styles.label}>First Name</Text>
                <TextInput style={styles.input} value={firstName} onChangeText={setFirstName} placeholder="First Name" placeholderTextColor="gray" />
              </View>
              <View style={styles.inputGroup}>
                <Text style={styles.label}>Last Name</Text>
                <TextInput style={styles.input} value={lastName} onChangeText={setLastName} placeholder="Last Name" placeholderTextColor="gray" />
              </View>
            </>
          )}

          {mode === 'email' && (
            <View style={styles.inputGroup}>
              <Text style={styles.label}>Email Address</Text>
              <TextInput style={styles.input} value={email} onChangeText={setEmail} keyboardType="email-address" autoCapitalize="none" />
            </View>
          )}

          {mode === 'password' && (
            <>
            {/* OLD PASSWORD */}
    <View style={styles.inputGroup}>
      <Text style={styles.label}>Old Password</Text>
      <View style={styles.passwordContainer}>
        <TextInput
          style={styles.passwordInput}
          value={oldPassword}
          onChangeText={setOldPassword}
          secureTextEntry={!showOldPassword}
          placeholder="••••••••"
          placeholderTextColor="gray"
        />
        <TouchableOpacity 
          onPress={() => setShowOldPassword(!showOldPassword)}
          style={styles.eyeIcon}
        >
                <Image source={ showOldPassword?ICONS.openEye: ICONS.eye} style={{ width: 20, height: 20 }} />
        </TouchableOpacity>
      </View>
    </View>

    {/* NEW PASSWORD */}
    <View style={styles.inputGroup}>
      <Text style={styles.label}>New Password</Text>
      <View style={styles.passwordContainer}>
        <TextInput
          style={styles.passwordInput}
          value={newPassword}
          onChangeText={setNewPassword}
          secureTextEntry={!showNewPassword}
          placeholder="••••••••"
          placeholderTextColor="gray"
        />
        <TouchableOpacity 
          onPress={() => setShowNewPassword(!showNewPassword)}
          style={styles.eyeIcon}
        >
            <Image source={ showNewPassword?ICONS.openEye : ICONS.eye } style={{ width: 20, height: 20 }} />
          
        </TouchableOpacity>
      </View>
    </View>
            </>
          )}

          <TouchableOpacity style={styles.updateButton} onPress={handleUpdate}>
            <Text style={styles.updateButtonText}>UPDATE {mode.toUpperCase()}</Text>
          </TouchableOpacity>
        </View>

      </KeyboardAvoidingView>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1 },
  passwordContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'rgba(255,255,255,0.1)',
    borderRadius: 12,
    borderWidth: 1,
    borderColor: 'rgba(255,255,255,0.2)',
    height: 55,
  },
  passwordInput: {
    flex: 1, // Takes up all space except the icon
    paddingHorizontal: 15,
    color: 'white',
    fontSize: 16,
  },
  eyeIcon: {
    paddingHorizontal: 15,
    height: '100%',
    justifyContent: 'center',
  },
  header: { marginTop: 50, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', paddingHorizontal: 15 },
  backBtn: { padding: 10 },
  backIcon: { width: 24, height: 24, tintColor: 'white' },
  headerTitle: { color: 'white', fontSize: 20, fontWeight: 'bold', textTransform: 'capitalize' },
  form: { marginTop: 40, paddingHorizontal: 25 },
  inputGroup: { marginBottom: 20 },
  label: { color: COLORS.slowhgray || '#ccc', fontSize: 14, marginBottom: 8 },
  input: { backgroundColor: 'rgba(255,255,255,0.1)', borderRadius: 12, height: 55, paddingHorizontal: 15, color: 'white', fontSize: 16, borderWidth: 1, borderColor: 'rgba(255,255,255,0.2)' },
  updateButton: { backgroundColor: '#FFFFFF', height: 55, borderRadius: 12, justifyContent: 'center', alignItems: 'center', marginTop: 20 },
  updateButtonText: { color: '#000', fontSize: 16, fontWeight: 'bold' },
});

export default EditProfileScreen;