import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Outlet, Navigate } from "react-router-dom";
import { loginUser, logoutUser } from "../redux/features/authSlice";
import { checkAccessTokenValidity } from "./checkAccessTokenValidity ";

const ProtectedRoutes = () => {
  const { isSuccess } = useSelector((state) => state.auth);
  const storedUser = JSON.parse(localStorage.getItem('user'));

  const isLoggedIn = storedUser && isSuccess;

  return isLoggedIn ? <Outlet /> : <Navigate to="/" replace />;
};

// const ProtectedRoutes = () => {
//   const { user, accessToken } = useSelector((state) => state.auth);
//   const dispatch = useDispatch();
//   // console.log("us", JSON.parse(localStorage.getItem("user")));

//   useEffect(() => {
//     const storedUser = JSON.parse(localStorage.getItem("user"));
//     const storedAccessToken = storedUser.token;

//     console.log(storedUser,  storedAccessToken);
//     if (storedUser && storedAccessToken) {
//       checkAccessTokenValidity(storedAccessToken)
//         .then((response) => {
//           dispatch(
//             loginUser({ user: storedUser, accessToken: storedAccessToken })
//           );
//         })
//         .catch((error) => {
//           dispatch(logoutUser());
//         });
//     } else {
//       // No user or accessToken in localStorage, log out the user
//       dispatch(logoutUser());
//     }
//   }, [dispatch]);

//   return user ? <Outlet /> : <Navigate to="/" replace />;
// };
export default ProtectedRoutes;
