import { useSelector } from 'react-redux';
import API from '../../../Constants/API';
import { showError, showSuccess } from '../../../Constants/FlashMessage';
import { EndPoints } from '../../../Constants/Routes';
import { store } from '../../../Store/store';
import Config from "react-native-config";
import { GoogleSignin } from '@react-native-google-signin/google-signin';
import {
  setLoginUser,
  setTokenId,
  setUserDetails,
  setOtpKey,
} from '../../Reducers/AuthReducer';

 const redirection = (onBoardingCompleted:any , navigation:any) => {
    if (onBoardingCompleted==true) {
      console.log("in login api ig true : ",onBoardingCompleted);
      navigation.reset({
        index: 0,
        routes: [{ name: 'HomeScreen' }],
      });
    }else{
         console.log("in login api ig false : ", onBoardingCompleted);
          navigation.reset({
        index: 0,
        routes: [{ name: 'OnBoardingQ1' }],
      });
    } 

  }
export const LoginUserAPI = async (
  data: any,
  setLoad: (value: boolean) => void,
  navigation: any,
  user: any,
) => {

 

  setLoad(true);

  try {
    const res = await API.post(
      EndPoints.login,
      data);

    console.log('Login Response ->', res?.data);

    if (res?.status === 201 || res?.status === 200) {
      console.log('Login Response new ->', res?.data.user.onboardingCompleted);
      store.dispatch(setTokenId(res.data.access_token));
      store.dispatch(setUserDetails(res.data.user));
      store.dispatch(setLoginUser());
      redirection(res.data.user.onboardingCompleted,navigation);


    }
    else {
      console.log('Login Response new 1 ->', res?.data.token);
      console.log('Response w->', res.status, res.data.refresh_token);
      showError('Login failed ');
    }
  } catch (err: any) {
    console.debug('LoginUserAPI error ->', err?.response?.data);

    showError(
      err?.response?.data?.error ||
      err?.response?.data?.message ||
      'Something went wrong'
    );
  } finally {
    setLoad(false);

  }
};


export const SignUpUserAPI = async (
  data: any,
  setLoad: (value: boolean) => void,
  navigation: any,
) => {
  setLoad(true);

  try {
    const res = await API.post(EndPoints.signUp, data);

    if (res?.status === 200 || res?.status === 201) {
      showSuccess('Register Successfully');
      navigation.navigate('HomeScreen');
    } else {
      showError('Signup failed');
    }
  } catch (err: any) {
    console.error('SignUpUserAPI error ->', err?.response?.data);
    showError(err?.response?.data?.message || 'Something went wrong');
  } finally {
    setLoad(false);
  }
};
//Forget Password Api
export const ForgotPasswordAPI = async (
  email: any,
  setLoad: (value: boolean) => void,
  navigation: any,
) => {
  setLoad(true);
  try {

    const res = await API.post(EndPoints.forgotPassword, { email });
    if (res?.status === 200 || res?.status === 201) {
      showSuccess(`${res.data.message}`);
      console.log('Forgot Password Response ->', res?.data.otp);
      store.dispatch(setOtpKey(res?.data.otp));
      navigation.navigate('OtpVerification', { email: res?.data.email });
    } else {


      showError(`${res.data.error}`);

    }
  } catch (err: any) {
    console.error('ForgotPasswordAPI error ->', err?.response?.data);
    showError(err?.response?.data?.message || 'Something went wrong');

  } finally {
    setLoad(false);
  }

};

export const LogoutUserAPI = async () => {
  // return API.post(EndPoints.logout);
  try {
    return await API.post(EndPoints.logout);
  } catch (err: any) {
    if (err?.response?.status === 401) {
      return null; // ignore
    }
    throw err;
  }
};

//storing QA
export const StoreQaApi = async (data: {
  ans1: string;
  ans2: string;
  ans3: string;
}, token: string,

) => {
  try {
    return await API.post(EndPoints.onBoardingQA, data, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
  
  
  } catch (err: any) {
    showError(err?.response?.data?.message || 'Something went wrong');
  }
}



export const signInWithGoogle = async (navigation:any, setLoad:(value:boolean)=>void) => {
  try{
  setLoad(true);
  await GoogleSignin.hasPlayServices();
  const userInfo = await GoogleSignin.signIn();

// In newer versions, data is nested inside 'data'
const idToken = userInfo.data?.idToken;

if (!idToken) {
  throw new Error("No ID Token received from Google");
}

console.log("Success! ID Token:", idToken);

  
  console.log("id token after : ", idToken );
  // Send idToken to backend
  const res = await API.post(EndPoints.googleAuth, { idToken } 
  //   {
  //   method: 'POST',
  //   headers: { 'Content-Type': 'application/json' },
  //   body: JSON.stringify({ idToken}),
  // }
);
  console.log("response status : ", res.status);
 if(res.status == 200 || res.status ==201){
     store.dispatch(setTokenId(res.data.access_token));
      store.dispatch(setUserDetails(res.data.user));
      store.dispatch(setLoginUser());  
  navigation.reset({
        index: 0,
        routes: [{ name: 'HomeScreen' }],
 });
 console.log("Google Auth Done .... !")

 }


  }catch(err){
    console.log("google auth error: ",err);
  }finally{
     setLoad(true);
  }

};



// export const SearchCompanyAPI = async (
//   query: string,
//   limit = 10,
//   offset = 0,
// ) => {
//   const res = await API.get(
//     `${EndPoints.company}?query=${query}&limit=${limit}&offset=${offset}`,
//   );

//   return res?.data;
// };


