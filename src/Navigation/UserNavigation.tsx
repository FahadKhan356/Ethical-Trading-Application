import React, { use } from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

// Screens
import OnboardingScreen from '../Screens/OnBoarding/OnboardingScreen';
import Portfolio from '../Screens/UserScreen/Portfolio';
import AIAssistant from '../Screens/UserScreen/AIAssitant';
import ResearchScreen from '../Screens/UserScreen/Research';
import CommunityScreen from '../Screens/UserScreen/Community';
import MicroSoftScreen from '../Screens/UserScreen/MicroSoft';
import AchevementScreen from '../Screens/UserScreen/Achievement';
import WellcomeScreen1 from '../Screens/OnBoarding/OnBoardingQ1';
// import Wellcomescreen2 from '../Screens/OnBoarding/OnBoardingQ2';
// import WellcomeScreen3 from '../Screens/OnBoarding/OnBoardingQ3';

import LoginScreen from '../Screens/AuthScreen/LoginSceen';
import SignUp from '../Screens/AuthScreen/SignUp';
import BottomNavigation from './BottomNavigation';
import ProfileScreen from '../Screens/UserScreen/ProfileScreen';
import EditProfileScreen from '../Screens/UserScreen/EditProfileScreen';
import EmailProvider from '../Screens/ForgetPassword/EmailProvider';
import OtpVerification from '../Screens/ForgetPassword/OtpVerification';
import UpdatePassword from '../Screens/ForgetPassword/UpdatePassword';
import PasswordUpdated from '../Screens/ForgetPassword/PasswordUpdated';
import OnBoardingQ1 from '../Screens/OnBoarding/OnBoardingQ1';
import { useSelector } from 'react-redux';
import { RootState } from '../Store/type';
import AsyncStorage from '@react-native-async-storage/async-storage';
// import OnBoardingQ2 from '../Screens/OnBoarding/OnBoardingQ2';
// import OnBoardingQ3 from '../Screens/OnBoarding/OnBoardingQ3';

type Props = {
  isLoggedIn: boolean;
};


const Stack = createNativeStackNavigator();


const UserNavigation: React.FC<Props> = ({isLoggedIn}) => {
  
  
  const isFirstTime =useSelector((state: RootState) => state.auth.first);
  const user = useSelector((state:RootState)=>state.auth.userDetails);
  const getInitialRoute = () => {
 
    if (!isFirstTime==false) { //if true means done
    return 'OnboardingScreen'; // Literal first open
  }
  
  if (!isLoggedIn) {
    return 'LoginScreen'; // Returning user but logged out
  }

  if (!user?.onboardingCompleted==false) { // if true means done
    return 'OnBoardingQ1'; 
  }

  return 'HomeScreen'; // Fully set up user
};
  return (
    <Stack.Navigator
      initialRouteName={getInitialRoute()}
      screenOptions={{ headerShown: false }}
    >
      {/* Auth Screens */}
      <Stack.Screen name="OnboardingScreen" component={OnboardingScreen} />
      <Stack.Screen name="OnBoardingQ1" component={OnBoardingQ1} />
      {/* <Stack.Screen name="OnBoardingQ2" component={OnBoardingQ2} />
      <Stack.Screen name="OnBoardingQ3" component={OnBoardingQ3} /> */}
      {/* <Stack.Screen name="WellcomeScreen4" component={WellcomeScreen4} /> */}
      <Stack.Screen name="LoginScreen" component={LoginScreen} />
      <Stack.Screen name="SignUp" component={SignUp} />

      {/* Home */}
      <Stack.Screen name="HomeScreen" component={BottomNavigation} />

   
      <Stack.Screen name="Portfolio" component={Portfolio} />
      <Stack.Screen name="AIAssistant" component={AIAssistant} />
      <Stack.Screen name="Research" component={ResearchScreen} />
      <Stack.Screen name="Community" component={CommunityScreen} />
      <Stack.Screen name="MicroSoft" component={MicroSoftScreen} />
      <Stack.Screen name="Achevement" component={AchevementScreen} />
      <Stack.Screen name="ProfileScreen" component={ProfileScreen} />
       <Stack.Screen name="EditProfileScreen" component={EditProfileScreen} />
{/* Forget Password Screens */}

<Stack.Screen name="EmailProvider" component={EmailProvider} />
<Stack.Screen name="OtpVerification" component={OtpVerification} />
<Stack.Screen name="UpdatePassword" component={UpdatePassword} />
<Stack.Screen name="PasswordUpdated" component={PasswordUpdated} />



    </Stack.Navigator>
  );
};

export default UserNavigation;
