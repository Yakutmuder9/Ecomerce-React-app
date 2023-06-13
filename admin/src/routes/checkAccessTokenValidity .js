import axios from 'axios';

export const checkAccessTokenValidity = (accessToken) => {
  return axios.get('/api/check-token', {
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
    Accept: "application/json",
  });
};
