import { useRef, useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setCredentials } from "../../features/auth/authSlice";
import { useLoginMutation } from "../../features/auth/authApiSlice";
import usePersist from "../../hooks/usePersist";

const Login = () => {
  const userRef = useRef(null);
  const errRef = useRef(null);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errMsg, setErrMsg] = useState("");
  const [persist, setPersist] = usePersist();

  const navigate = useNavigate();
  const dispatch = useDispatch();

  // const [login, { isLoading }] = useLoginMutation();

  useEffect(() => {
    userRef.current?.focus();
  }, []);

  useEffect(() => {
    setErrMsg("");
  }, [username, password]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // const { accessToken } = await login({ username, password }).unwrap();
      // dispatch(setCredentials({ accessToken }));
      // setUsername("");
      // setPassword("");
      navigate("/admin/dashboard");
    } catch (err) {
      // if (!err.status) {
      //   setErrMsg("No Server Response");
      // } else if (err.status === 400) {
      //   setErrMsg("Missing Username or Password");
      // } else if (err.status === 401) {
      //   setErrMsg("Unauthorized");
      // } else {
      //   setErrMsg(err.data?.message);
      // }
      // errRef.current.focus();
    }
  };

  const handleUserInput = (e) => setUsername(e.target.value);
  const handlePwdInput = (e) => setPassword(e.target.value);
  const handleToggle = () => setPersist((prev) => !prev);

  const errClass = errMsg ? "errmsg" : "offscreen";

  // if (isLoading) return <p>Loading...</p>;

  const content = (
    <section className="public">
        <header>
            <h1>Employee Login</h1>
        </header>
        <main className="login">
            <p ref={errRef} className={errClass} aria-live="assertive">{errMsg}</p>

            <form className="form" onSubmit={handleSubmit}>
                <label htmlFor="username">Username:</label>
                <input
                    className="form__input"
                    type="text"
                    id="username"
                    ref={userRef}
                    value={username}
                    onChange={handleUserInput}
                    autoComplete="off"
                    required
                />

                <label htmlFor="password">Password:</label>
                <input
                    className="form__input"
                    type="password"
                    id="password"
                    onChange={handlePwdInput}
                    value={password}
                    required
                />
                <button className="form__submit-button">Sign In</button>


                <label htmlFor="persist" className="form__persist">
                    <input
                        type="checkbox"
                        className="form__checkbox"
                        id="persist"
                        onChange={handleToggle}
                        checked={persist}
                    />
                    Trust This Device
                </label>
            </form>
        </main>
        <footer>
            <Link to="/">Back to Home</Link>
        </footer>
    </section>
)
  return content;
};
export default Login;

// import {
//   Box,
//   Flex,
//   Button,
//   FormControl,
//   FormLabel,
//   Input,
//   Link,
//   Switch,
//   Text,
//   useColorModeValue,
//   CircularProgress,
// } from "@chakra-ui/react";
// import signInImage from "../../app/assets/img/signInImage.png";
// import { useEffect, useState } from "react";
// import { useNavigate } from "react-router-dom";
// import { useDispatch, useSelector } from "react-redux";
// import { login, validateEmail } from "../../services/authServices";
// import { useToast } from "@chakra-ui/react";
// import { loginUser } from "../../redux/features/authSlice";

// const Login = () => {
//   const textColor = useColorModeValue("gray.700", "white");
//   const bgForm = useColorModeValue("white", "navy.800");
//   const titleColor = useColorModeValue("gray.700", "blue.500");
//   const bgIcons = useColorModeValue("trasnparent", "navy.700");
//   const toast = useToast();

//   const dispatch = useDispatch();
//   const { user, isError, isSuccess, isLoading } = useSelector(
//     (state) => state.auth
//   );
//   const navigate = useNavigate();
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [error, setError] = useState({});

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     if (!email || !password) {
//       return setError("All fields are required");
//     }

//     if (!validateEmail(email)) {
//       return setError("Please enter a valid email");
//     }

//     const userData = {
//       email,
//       password,
//     };

//     try {
//       const data = await dispatch(loginUser(userData));
//       if (data.meta.requestStatus  === "fulfilled") {
//         navigate("/admin/dashboard");
//         toast({
//           title: "Login Successful",
//           status: "success",
//           duration: 3000,
//           position: "top",
//           isClosable: true,
//         });
//       } else {
//         toast({
//           title: "Not Autorized",
//           status: "warning",
//           position: "top",
//           duration: 3000,
//           isClosable: true,
//         });
//       }
//     } catch (error) {
//       toast({
//         title: "Some thing went wrong",
//         status: "error",
//         position: "top",
//         duration: 3000,
//         isClosable: true,
//       });
//     }
//   };

//   useEffect(() => {
//     if (isSuccess) {
//       navigate("/admin/dashboard");
//     } else {
//       navigate("/");
//     }
//   }, [user, isError, isSuccess, isLoading]);

//   return (
//     <Flex position="relative">
//       <Flex
//         h={{ sm: "initial", md: "75vh", lg: "85vh" }}
//         w="100%"
//         maxW="1044px"
//         mx="auto"
//         justifyContent="space-between"
//         mb="50px"
//         pt={{ md: "0px" }}
//       >
//         <Flex
//           w="100%"
//           h="100%"
//           alignItems="center"
//           justifyContent="center"
//           mb="60px"
//           mt={{ base: "50px", md: "20px" }}
//         >
//           <Flex
//             zIndex="2"
//             direction="column"
//             w="445px"
//             background="transparent"
//             borderRadius="15px"
//             p="40px"
//             mx={{ base: "100px" }}
//             m={{ base: "20px", md: "auto" }}
//             bg={bgForm}
//             boxShadow={useColorModeValue(
//               "0px 5px 14px rgba(0, 0, 0, 0.05)",
//               "unset"
//             )}
//           >
//             <Text
//               fontSize="xl"
//               color={textColor}
//               fontWeight="bold"
//               textAlign="center"
//               mb="22px"
//             >
//               Zilla Shopping Admin <br></br> Login
//             </Text>
//             <form onSubmit={handleSubmit}>
//               <FormControl>
//                 <FormLabel ms="4px" fontSize="sm" fontWeight="normal">
//                   Email
//                 </FormLabel>
//                 <Input
//                   variant="auth"
//                   fontSize="sm"
//                   ms="4px"
//                   type="email"
//                   placeholder="Your Email"
//                   mb="24px"
//                   size="lg"
//                   border="1px solid silver"
//                   id="field-password"
//                   value={email}
//                   onChange={(e) => setEmail(e.target.value)}
//                 />
//                 {error.email && <p>{error.email}</p>}
//                 <FormLabel ms="4px" fontSize="sm" fontWeight="normal">
//                   Password
//                 </FormLabel>
//                 <Input
//                   variant="auth"
//                   fontSize="sm"
//                   ms="4px"
//                   type="password"
//                   placeholder="Your password"
//                   mb="24px"
//                   size="lg"
//                   border="1px solid silver"
//                   value={password}
//                   onChange={(e) => setPassword(e.target.value)}
//                 />
//                 {error.password && <p>{error.password}</p>}
//                 <FormControl display="flex" alignItems="center" mb="24px">
//                   <Switch id="remember-login" colorScheme="navy" me="10px" />
//                   <FormLabel
//                     htmlFor="remember-login"
//                     mb="0"
//                     fontWeight="normal"
//                   >
//                     Remember me
//                   </FormLabel>
//                 </FormControl>
//                 <Button
//                   fontSize="14px"
//                   variant="navy"
//                   fontWeight="bold"
//                   w="100%"
//                   h="45"
//                   mb="24px"
//                   color="white"
//                   type="submit"
//                   bg={titleColor}
//                   // _hover={titleColor}
//                   // _focus={bgIcons}
//                   // _active={bgIcons}
//                 >
//                   {isLoading ? (
//                     <CircularProgress
//                       isIndeterminate
//                       size="24px"
//                       color="teal"
//                     />
//                   ) : (
//                     "Login"
//                   )}
//                 </Button>
//               </FormControl>
//             </form>

//             <Flex
//               flexDirection="column"
//               justifyContent="center"
//               alignItems="center"
//               maxW="100%"
//               mt="0px"
//             >
//               <Text color={textColor} fontWeight="medium">
//                 Forgot Password?
//                 <Link
//                   color={titleColor}
//                   as="span"
//                   ms="5px"
//                   href="#"
//                   fontWeight="bold"
//                 >
//                   Reset
//                 </Link>
//               </Text>
//             </Flex>
//           </Flex>
//         </Flex>

//         <Box
//           overflowX="hidden"
//           h="100%"
//           w="100%"
//           left="0px"
//           position="absolute"
//           bgImage={signInImage}
//         >
//           <Box
//             w="100%"
//             h="100%"
//             bgSize="cover"
//             bg="blue.900"
//             opacity="0.8"
//           ></Box>
//         </Box>
//       </Flex>
//     </Flex>
//   );
// };

// export default Login;
