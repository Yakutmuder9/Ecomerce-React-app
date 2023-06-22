import {
  Box,
  Flex,
  Button,
  FormControl,
  FormLabel,
  Input,
  Link,
  Switch,
  Text,
  useColorModeValue,
  CircularProgress,
} from "@chakra-ui/react";
import signInImage from "../../app/assets/img/signInImage.png";
import { useDispatch } from "react-redux";
import { useToast } from "@chakra-ui/react";
import { useRef, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { setCredentials } from "../../features/auth/authSlice";
import { useLoginMutation } from "../../features/auth/authApiSlice";
import usePersist from "../../hooks/usePersist";
import DashFooter from "../../components/Footer/HomeFooter";
import { motion } from "framer-motion";

const Login = () => {
  const usernameRef = useRef(null);
  const errRef = useRef(null);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errMsg, setErrMsg] = useState("");
  const [persist, setPersist] = usePersist();
  const [error, setError] = useState({});

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const textColor = useColorModeValue("gray.700", "white");
  const bgForm = useColorModeValue("whiteAlpha.900", "blackAlpha.700");
  const titleColor = useColorModeValue("gray.700", "blue.500");

  const [login, { isLoading }] = useLoginMutation();

  useEffect(() => {
    usernameRef.current?.focus();
  }, []);

  useEffect(() => {
    setErrMsg("");
  }, [username, password]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { accessToken } = await login({ username, password }).unwrap();
      dispatch(setCredentials({ accessToken }));
      setUsername("");
      setPassword("");
      navigate("/dash");
    } catch (err) {
      if (!err.status) {
        setErrMsg("No Server Response");
      } else if (err.status === 400) {
        setErrMsg("Missing Username or Password");
      } else if (err.status === 401) {
        setErrMsg("Unauthorized");
      } else {
        setErrMsg(err.data?.message);
      }
      errRef.current.focus();
    }
  };

  const handleUsernameInput = (e) => setUsername(e.target.value);
  const handlePwdInput = (e) => setPassword(e.target.value);
  const handleToggle = () => setPersist((prev) => !prev);

  return (
    <motion.div
      initial={{ opacity: 0, x: -100 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: 100 }}
      transition={{ duration: 0.3 }}
    >
      <Flex position="relative">
        <Flex
          h={{ sm: "initial", md: "75vh", lg: "85vh" }}
          w="100%"
          maxW="1044px"
          mx="auto"
          justifyContent="space-between"
          mb="50px"
          pt={{ md: "0px" }}
        >
          <Flex
            w="100%"
            h="100%"
            alignItems="center"
            justifyContent="center"
            mb="60px"
            mt={{ base: "50px", md: "20px" }}
          >
            <Flex
              zIndex="2"
              direction="column"
              w="445px"
              borderRadius="15px"
              p="40px"
              mx={{ base: "100px" }}
              m={{ base: "20px", md: "auto" }}
              bg={bgForm}
            >
              <Text
                fontSize="xl"
                fontWeight="bold"
                textAlign="center"
                mb="22px"
              >
                Zilla Shopping Admin <br></br> Login
              </Text>
              <Text ref={errRef} color={"red.400"}>
                {errMsg}
              </Text>
              <form onSubmit={handleSubmit}>
                <FormControl>
                  <FormLabel ms="4px" fontSize="sm" fontWeight="normal">
                    Username
                  </FormLabel>
                  <Input
                    variant="auth"
                    fontSize="sm"
                    ms="4px"
                    type="text"
                    placeholder="Your Username"
                    mb="24px"
                    size="lg"
                    border="1px solid silver"
                    id="field-password"
                    ref={usernameRef}
                    value={username}
                    onChange={handleUsernameInput}
                  />
                  {error.username && <p>{error.username}</p>}
                  <FormLabel ms="4px" fontSize="sm" fontWeight="normal">
                    Password
                  </FormLabel>
                  <Input
                    variant="auth"
                    fontSize="sm"
                    ms="4px"
                    type="password"
                    placeholder="Your password"
                    mb="24px"
                    size="lg"
                    border="1px solid silver"
                    onChange={handlePwdInput}
                    value={password}
                  />
                  {error.password && <p>{error.password}</p>}
                  <FormControl display="flex" alignItems="center" mb={3}>
                    <Switch
                      id="email-alerts"
                      me={2}
                      colorScheme="blackAlpha"
                      onChange={handleToggle}
                      isChecked={persist}
                    />
                    <FormLabel htmlFor="email-alerts" mb="0">
                      Remember me?
                    </FormLabel>
                  </FormControl>

                  <Button
                    fontSize="14px"
                    variant="navy"
                    fontWeight="bold"
                    w="100%"
                    h="45"
                    mb="24px"
                    color="white"
                    type="submit"
                    bg={titleColor}
                  >
                    {isLoading ? (
                      <CircularProgress
                        isIndeterminate
                        size="24px"
                        color="teal"
                      />
                    ) : (
                      "Login"
                    )}
                  </Button>
                </FormControl>
              </form>

              <Flex
                flexDirection="column"
                justifyContent="center"
                alignItems="center"
                maxW="100%"
                mt="0px"
              >
                <Text color={textColor} fontWeight="medium">
                  Forgot Password?
                  <Link
                    color={titleColor}
                    as="span"
                    ms="5px"
                    href="#"
                    fontWeight="bold"
                  >
                    Reset
                  </Link>
                </Text>
              </Flex>
            </Flex>
          </Flex>

          <Box
            overflowX="hidden"
            h="100%"
            w="100%"
            left="0px"
            position="absolute"
            bgImage={signInImage}
          >
            <Box
              w="100%"
              h="100%"
              bgSize="cover"
              bg="blue.900"
              opacity="0.8"
            ></Box>
          </Box>
        </Flex>
      </Flex>
      <DashFooter />
    </motion.div>
  );
};
export default Login;
