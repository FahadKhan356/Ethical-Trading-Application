import { useSelector } from 'react-redux';
import API from '../../../Constants/API';
import { showError, showSuccess } from '../../../Constants/FlashMessage';
import { EndPoints } from '../../../Constants/Routes';
import { store } from '../../../Store/store';
import {
  setLoginUser,
  setTokenId,
  setUserDetails,
  setOtpKey,
} from '../../Reducers/AuthReducer';
import { RootState } from '../../type';

export const LoginUserAPI = async (
  data: any,
  setLoad: (value: boolean) => void,
  navigation: any,
  user: any,
) => {

  const redirection = () => {
    if (user?.onboardingCompleted) {
      navigation.reset({
        index: 0,
        routes: [{ name: 'HomeScreen' }],
      });
    } else {
      navigation.reset({
        index: 0,
        routes: [{ name: 'OnBoardingQ1' }],
      });
    }

  }

  setLoad(true);

  try {
    const res = await API.post(
      EndPoints.login,
      data);

    console.log('Login Response ->', res?.data);

    if (res?.status === 201 || res?.status === 200) {
      console.log('Login Response new ->', res?.data.user.email);
      store.dispatch(setTokenId(res.data.access_token));
      store.dispatch(setUserDetails(res.data.user));
      store.dispatch(setLoginUser());

      showSuccess('Login successfully');

      // navigation.reset({
      //   index: 0,
      //   routes: [{name: 'HomeScreen'}],
      // });

      redirection();
    }
    else {
      console.log('Login Response new 1 ->', res?.data.token);
      console.log('Response ->', res.status, res.data);
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
  navigation:any
) => {
  try {
    return await API.post(EndPoints.onBoardingQA, data, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
   navigation.reset({
        index: 0,
        routes: [{ name: 'Home' }],
      });
  
  } catch (err: any) {
    showError(err?.response?.data?.message || 'Something went wrong');
  }
}



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


