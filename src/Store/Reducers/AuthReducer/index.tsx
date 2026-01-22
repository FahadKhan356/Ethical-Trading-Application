import {createSlice} from '@reduxjs/toolkit';

// const initialState = {
//   loginUser: false,
//   userDetails: [],
//   tokenId: null,
//   first: true,
// };
const initialState = {
  loginUser: true, // Set to true to bypass login screens
  tokenId: "dummy-token-12345", // Mock token
  first: false,
  userDetails: {
    "access_token": "mock_access_token",
    "refresh_token": "mock_refresh_token",
    "expires_in": 900,
    "user": {
        "id": "2506550f-28fa-4be4-820b-e83085b3324f",
        "email": "testapi@example.com",
        "firstName": "Dummy",
        "lastName": "User",
        "role": "user"
    }
  },
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setFirst: state => {
      state.first = false;
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
    logOut: () => initialState,
  },
});

export const {setFirst, setLoginUser, setUserDetails, setTokenId, logOut} =
  authSlice.actions;

export default authSlice.reducer;
