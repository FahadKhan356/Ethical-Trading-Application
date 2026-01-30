import { GoogleSignin } from '@react-native-google-signin/google-signin';

export const configureGoogleSignIn = () => {
  GoogleSignin.configure({
    webClientId: '581562739550-oj7ut8dqb4qnt147t8ijroaaqj7p3s5r.apps.googleusercontent.com',
    offlineAccess: true,
  });
};