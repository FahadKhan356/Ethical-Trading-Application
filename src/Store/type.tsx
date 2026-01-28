import {PersistState} from 'redux-persist/es/types';

interface UserDetails {
  id: string;
  name: string;
  firstName: string;
  lastName: string;
  email: string;
  profile_picture: string;
  onboardingCompleted:boolean,

}

export interface AuthState {
  loginUser: boolean;
  first: boolean;
  userDetails: UserDetails;
  tokenId: string | null;
}

export interface RootState{
  auth: AuthState;
  _persist: PersistState;
}
