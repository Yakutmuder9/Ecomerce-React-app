import { Outlet, Navigate } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { refreshTokens } from "../redux/features/auth/authServices";
import { loginUser } from "../redux/features/auth/authSlice";

const PrivateRoutes = () => {
  // const dispatch = useDispatch();
  // const accessToken = useSelector((accessToken) => accessToken);
  // const isAuthenticated = !!accessToken;
  let num = true;
  // useEffect(() => {
  //   const refreshAccessToken = async () => {
  //     try {
  //       const newAccessToken = await refreshTokens();
  //       dispatch(loginUser({ accessToken: newAccessToken }));
  //     } catch (error) {
  //       console.log(error);
  //       // dispatch(logout());
  //     }
  //   };
  //   if (isAuthenticated) {
  //     refreshAccessToken();
  //   }
  // }, [dispatch, isAuthenticated]);

  return num ? <Outlet /> : <Navigate to="/login" />;
};

export default PrivateRoutes;
