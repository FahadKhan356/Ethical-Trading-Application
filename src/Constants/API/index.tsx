import axios from 'axios';
import { store } from '../../Store/store';
import { logOut } from '../../Store/Reducers/AuthReducer';
import { EndPoints } from '../Routes';

const API = axios.create({
  baseURL: EndPoints.baseUrl,
  timeout: 10000,
});

API.interceptors.request.use(
  async config => {
    const {
      auth: { tokenId },
    } = store.getState();
 //debuging logout header
    if (config.url?.includes('logout')) {
      console.log('🔐 Logout API Token ->', tokenId);
      console.log(
        '📤 Logout Authorization Header BEFORE ->',
        config.headers?.Authorization
      );
    }

    if (tokenId) {
      config.headers['Authorization'] = `Bearer ${tokenId}`;
    }
    //debuging logout header 
    if (config.url?.includes('logout')) {
      console.log(
        '📤 Logout Authorization Header AFTER ->',
        config.headers?.Authorization
      );
    }

    const method = (config.method || '').toLowerCase();

    if (['post', 'put', 'patch'].includes(method)) {
      if (!config.headers['Content-Type']) {
        config.headers['Content-Type'] = 'application/json';
      }
    } else {
      if (config.headers['Content-Type']) {
        delete config.headers['Content-Type'];
      }
    }
    config.headers['Accept'] = 'application/json';
    // config.headers.set('Authorization', `Bearer ${tokenId}`);

    return config;
  },
  error => Promise.reject(error),
);
API.interceptors.response.use(
  res => res,
  err => {
    const isLogoutCall = err.config?.url?.includes('logout');

    if (err.response?.status === 401 && !isLogoutCall) {
      store.dispatch(logOut());
    }

    return Promise.reject(err);
  }
);


// API.interceptors.response.use(
//   response => response,
//   error => {
//     if (error.response?.status === 401) {
//       console.warn('Unauthorized! Logging out...');
//       store.dispatch(logOut());
//     }
//     return Promise.reject(error);
//   },
// );

// const BASE_URL = EndPoints.baseUrl;

// const timeoutFetch = (fetchPromise: Promise<Response>, timeout = 10000) => {
//   let timeoutReject: (reason?: any) => void;

//   const timeoutPromise = new Promise<Response>((_, reject) => {
//     timeoutReject = reject;
//   });

//   setTimeout(() => {
//     timeoutReject(new Error('Request Timeout'));
//   }, timeout);

//   return Promise.race([fetchPromise, timeoutPromise]);
// };

// export const API = async (endpoint: string, options: RequestInit = {}) => {
//   const {
//     auth: {tokenId},
//   } = store.getState();

//   const method = (options.method || 'GET').toLowerCase();

//   const headers: any = {
//     ...(options.headers || {}),
//   };

//   if (tokenId) {
//     headers['Authorization'] = `Bearer ${tokenId}`;
//   }

//   if (['post', 'put', 'patch'].includes(method)) {
//     if (!headers['Content-Type']) {
//       headers['Content-Type'] = 'application/json';
//     }
//   } else {
//     if (headers['Content-Type']) {
//       delete headers['Content-Type'];
//     }
//   }

//   const config: RequestInit = {
//     ...options,
//     headers,
//   };

//   const url = `${BASE_URL}${endpoint}`;

//   try {
//     const res = await timeoutFetch(fetch(url, config), 10000);

//     if (res.status === 401) {
//       console.warn('Unauthorized! Logging out...');
//       store.dispatch(logOut());
//     }

//     if (!res.ok) {
//       const errorData = await res.json().catch(() => ({}));
//       throw {
//         response: {
//           status: res.status,
//           data: errorData,
//         },
//       };
//     }

//     return res.json();
//   } catch (err) {
//     return Promise.reject(err);
//   }
// };

export default API;
