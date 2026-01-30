// const initialState =
//  {
//   loginUser: true, // Set to true to bypass login screens
//   tokenId: "dummy-token-12345", // Mock token
//   first: false,
//   userDetails: {
//     "access_token": "mock_access_token",
//     "refresh_token": "mock_refresh_token",
//     "expires_in": 900,
//     "user": {
//         "id": "2506550f-28fa-4be4-820b-e83085b3324f",
//         "email": "testapi@example.com",
//         "firstName": "Dummy",
//         "lastName": "User",
//         "role": "user"
//     }
//   },
// };
import {createSlice} from '@reduxjs/toolkit';


const initialState = {
  loginUser: false,
  userDetails: [],
  tokenId: null,
  first: false,
  otp:null,
};



const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setFirst: state => {
      state.first = true;
    },
    setLoginUser: state => {
      state.loginUser = true;
    },
    setUserDetails: (state, action) => {
      state.userDetails = action.payload;
    },
    setTokenId: (state, action) => {
      state.tokenId = action.payload;
    },
    setOtpKey:(state, action)=>{
      state.otp=action.payload
    },

    // setFirstTime:(state, action)=>{
    //   // state.firstTime=action.payload
    // },
  logOut(state) {
      state.loginUser = false;
      state.tokenId = null;
      state.userDetails = [];
    
    },
  },
});

export const {setFirst, setLoginUser, setUserDetails, setTokenId, logOut, setOtpKey} =
  authSlice.actions;

export default authSlice.reducer;
