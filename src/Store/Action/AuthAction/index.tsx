import API from '../../../Constants/API';
import {showError, showSuccess} from '../../../Constants/FlashMessage';
import {EndPoints} from '../../../Constants/Routes';
import {store} from '../../../Store/store';
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
    const res = await API.post(
      EndPoints.login,  
     data);

    console.log('Login Response ->', res?.data);

    if (res?.status === 201 || res?.status === 200) {
      console.log('Login Response new ->', res?.data.access_token);
      store.dispatch(setTokenId(res.data.access_token));
      store.dispatch(setUserDetails(res.data.user));
      store.dispatch(setLoginUser());

      showSuccess('Login successfully');

      navigation.reset({
        index: 0,
        routes: [{name: 'HomeScreen'}],
      });
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


