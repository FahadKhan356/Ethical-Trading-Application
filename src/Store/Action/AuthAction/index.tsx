import API from '../../../Constants/API';
import {showError, showSuccess} from '../../../Constants/FlashMessage';
import {EndPoints} from '../../../Constants/Routes';
import {store} from '../../store';
import {
  setLoginUser,
  setTokenId,
  setUserDetails,
} from '../../Reducers/AuthReducer';

export const LoginUserAPI = async (
  data: any,
  setLoad: (value: boolean) => void,
  navigation: any,
) => {
  setLoad(true);

  try {
    const res = await API.post('https://cognizantly-unpersonalising-anton.ngrok-free.dev/api/auth/login',
      //EndPoints.login,  
     data);

    console.log('Login Response ->', res?.data);

    if (res?.status === 200 && res?.data?.token) {
      store.dispatch(setTokenId(res.data.token));
      store.dispatch(setUserDetails(res.data.user));
      store.dispatch(setLoginUser());

      showSuccess('Login successfully');

      navigation.reset({
        index: 0,
        routes: [{name: 'HomeScreen'}],
      });
    } else {
      console.error('Login failed response -> ', res?.data)
      showError('Login failed');
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

    if (res?.status === 200) {
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


export const LogoutUserAPI = async () => {
  return API.post(EndPoints.logout);
};


export const SearchCompanyAPI = async (
  query: string,
  limit = 10,
  offset = 0,
) => {
  const res = await API.get(
    `${EndPoints.company}?query=${query}&limit=${limit}&offset=${offset}`,
  );

  return res?.data;
};


