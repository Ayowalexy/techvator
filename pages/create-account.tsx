import {
  Box,
  Flex,
  Icon,
  InputRightElement,
  Link,
  Stack,
  Text,
  useTheme,
  useToast,
} from "@chakra-ui/react";
import { AiOutlineEyeInvisible, AiOutlineEye } from "react-icons/ai";
import { SyntheticEvent, useState } from "react";
import Head from "next/head";
import { Btn } from "../components/Button";
import NextLink from "next/link";
import { FaChevronRight } from "react-icons/fa";
import * as yup from "yup";
import axios from "axios";
import { useFormik } from "formik";
import { NextPageContext } from "next";

import FormInput from "../components/Forms/FormInput";
import HeaderTag from "../components/HeaderTag";
import Layout from "../components/Layout";
import Wrapper from "../components/Wrapper";
import { endpoint } from "../api_routes";
import { setTheCookie } from "helpers/cookieHandler";
import { AMAHLUBI_ACCESS_TOKEN } from "../constants";
import withAuth from "middleware/withAuth";

function createaccount() {
  const theme = useTheme();
  const toast = useToast();
  const { black, metallicSunburst, white } = theme.colors.brand;
  const [passwordVisible, setPasswordVisible] = useState(false);

  const togglePasswordVisiblity = (e: SyntheticEvent) => {
    e.preventDefault();
    setPasswordVisible(!passwordVisible);
  };

  const validationSchema = yup.object().shape({
    first_name: yup.string().trim().required("firstName is required"),
    last_name: yup.string().trim().required("lastName is required"),
    email: yup.string().trim().email().required("Email Address is required"),
    password: yup.string().trim().required("Password is required").min(6),
    password_confirmation: yup
      .string()
      .oneOf([yup.ref("password"), null], "Password does not match")
      .required("Password Confirmation is required"),
  });

  const {
    handleSubmit,
    handleChange,
    handleBlur,
    isSubmitting,
    errors,
    touched,
  } = useFormik({
    initialValues: {
      first_name: "",
      last_name: "",
      email: "",
      password: "",
      password_confirmation: "",
    },
    validationSchema,
    onSubmit: async (values, formikHelpers) => {
      try {
        const response = await axios.post(endpoint.REGISTER, {
          ...values,
          role: "member",
        });

        if (response.status === 200) {
          // store access token in cookie
          setTheCookie(
            AMAHLUBI_ACCESS_TOKEN,
            response.data?.message?.accessToken
          );

          toast({
            title: "Register",
            description: "User registration successful",
            status: "success",
            duration: 4000,
            isClosable: true,
            position: "top-right",
          });

          // Could redirect the user

          formikHelpers.resetForm();
        }
      } catch (error) {
        // show server side errors
        let statusCodeErr = [400, 422, 429, 500];

        if (statusCodeErr.find((code) => code === error.response.status)) {
          // alert the error message
          const { message } = error.response.data;
          toast({
            title: "An error occurred.",
            description: message,
            status: "error",
            duration: 4000,
            isClosable: true,
            position: "top-right",
          });
        }
      }
    },
  });

  return (
    <div>
      <Head>
        <title>Create Account - Amahlubi </title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Layout>
        <Wrapper>
          <Flex
            justifyContent="center"
            alignItems="center"
            flexDir="column"
            pos="relative"
            zIndex={1}
          >
            <HeaderTag mb="3rem" fontWeight="600" letterSpacing="unset">
              Join the Community.
            </HeaderTag>
            <Box
              bg="whiteAlpha.900"
              padding="3rem 3.2rem"
              borderRadius="2xl"
              maxW="61.3rem"
              w="100%"
            >
              <HeaderTag
                mt="unset"
                letterSpacing="unset"
                fontSize="2rem"
                mb="1.8rem"
                fontWeight="600"
                color={black}
              >
                Let's sign you up for free
              </HeaderTag>
              <form onSubmit={handleSubmit}>
                <Stack spacing="2.5rem">
                  <Flex
                    alignItems="center"
                    flexDir={["column", "column", "column", "row"]}
                  >
                    <FormInput
                      // label="First Name"
                      containerProps={{
                        flexDir: "column",
                        // mr: ["0", "0", "0", "3.9rem"],
                        mx: "2rem",
                      }}
                      labelProps={{
                        alignSelf: "flex-start",
                        borderRight: "unset",
                        fontSize: "1.1rem",
                        fontWeight: "800",
                      }}
                      inputProps={{
                        id: "first_name",
                        name: "first_name",
                        onChange: handleChange,
                        onBlur: handleBlur,
                        isInvalid: !!errors.first_name && touched.first_name,
                        borderRadius: "md",
                        border: `1px solid ${black} !important`,
                        p: "2.3rem",
                        color: black,
                        placeholder: "First Name",
                        _placeholder: {
                          color: black,
                          fontWeight: "bold",
                        },
                      }}
                      formErrorMessage={errors.first_name}
                    />
                  </Flex>

                  <Flex
                    alignItems="center"
                    flexDir={["column", "column", "column", "row"]}
                  >
                    <FormInput
                      // label="First Name"
                      containerProps={{
                        flexDir: "column",
                        // mr: ["0", "0", "0", "3.9rem"],
                        mx: "2rem",
                      }}
                      labelProps={{
                        alignSelf: "flex-start",
                        borderRight: "unset",
                        fontSize: "1.1rem",
                        fontWeight: "800",
                      }}
                      inputProps={{
                        id: "last_name",
                        name: "last_name",
                        onChange: handleChange,
                        onBlur: handleBlur,
                        isInvalid: !!errors.last_name && touched.last_name,
                        borderRadius: "md",
                        border: `1px solid ${black} !important`,
                        p: "2.3rem",
                        color: black,
                        placeholder: "Last Name",
                        _placeholder: {
                          color: black,
                          fontWeight: "bold",
                        },
                      }}
                      formErrorMessage={errors.last_name}
                    />
                  </Flex>

                  <Flex
                    alignItems="center"
                    flexDir={["column", "column", "column", "row"]}
                  >
                    <FormInput
                      // label="First Name"
                      containerProps={{
                        flexDir: "column",
                        // mr: ["0", "0", "0", "3.9rem"],
                        mx: "2rem",
                      }}
                      labelProps={{
                        alignSelf: "flex-start",
                        borderRight: "unset",
                        fontSize: "1.1rem",
                        fontWeight: "800",
                      }}
                      inputProps={{
                        id: "email",
                        name: "email",
                        onChange: handleChange,
                        onBlur: handleBlur,
                        isInvalid: !!errors.email && touched.email,
                        borderRadius: "md",
                        border: `1px solid ${black} !important`,
                        p: "2.3rem",
                        color: black,
                        type: "email",
                        placeholder: "Email Address",
                        _placeholder: {
                          color: black,
                          fontWeight: "bold",
                        },
                      }}
                      formErrorMessage={errors.email}
                    />
                  </Flex>

                  <Flex
                    alignItems="center"
                    flexDir={["column", "column", "column", "row"]}
                  >
                    <FormInput
                      containerProps={{
                        flexDir: "column",
                        mx: "2rem",
                      }}
                      labelProps={{
                        alignSelf: "flex-start",
                        borderRight: "unset",
                        fontSize: "1.1rem",
                        fontWeight: "800",
                      }}
                      inputProps={{
                        id: "password",
                        name: "password",
                        onChange: handleChange,
                        onBlur: handleBlur,
                        isInvalid: !!errors.password && touched.password,
                        placeholder: "Set a password",
                        type: passwordVisible ? "text" : "password",
                        borderRadius: "md",
                        border: `1px solid ${black} !important`,

                        p: "2.3rem",
                        color: black,
                        _placeholder: {
                          color: black,
                          fontWeight: "bold",
                        },
                      }}
                      formErrorMessage={errors.password}
                      inputRightAddon={
                        <InputRightElement
                          onClick={(e) => togglePasswordVisiblity(e)}
                          as="button"
                          height="100%"
                          mr="1rem"
                          bg="transparent"
                          color={black}
                          children={
                            passwordVisible ? (
                              <AiOutlineEyeInvisible size="2rem" />
                            ) : (
                              <AiOutlineEye size="2rem" />
                            )
                          }
                        />
                      }
                    />
                  </Flex>

                  <Flex
                    alignItems="center"
                    flexDir={["column", "column", "column", "row"]}
                  >
                    <FormInput
                      containerProps={{
                        flexDir: "column",
                        mx: "2rem",
                      }}
                      labelProps={{
                        alignSelf: "flex-start",
                        borderRight: "unset",
                        fontSize: "1.1rem",
                        fontWeight: "800",
                      }}
                      inputProps={{
                        id: "password_confirmation",
                        name: "password_confirmation",
                        onChange: handleChange,
                        onBlur: handleBlur,
                        isInvalid:
                          !!errors.password_confirmation &&
                          touched.password_confirmation,
                        placeholder: "Retype password",
                        type: passwordVisible ? "text" : "password",
                        borderRadius: "md",
                        border: `1px solid ${black} !important`,
                        p: "2.3rem",
                        color: black,
                        _placeholder: {
                          color: black,
                          fontWeight: "bold",
                        },
                      }}
                      formErrorMessage={errors.password_confirmation}
                      inputRightAddon={
                        <InputRightElement
                          onClick={(e) => togglePasswordVisiblity(e)}
                          as="button"
                          height="100%"
                          mr="1rem"
                          bg="transparent"
                          color={black}
                          children={
                            passwordVisible ? (
                              <AiOutlineEyeInvisible size="2rem" />
                            ) : (
                              <AiOutlineEye size="2rem" />
                            )
                          }
                        />
                      }
                    />
                  </Flex>

                  <Flex justifyContent="center">
                    <Btn
                      isLoading={isSubmitting}
                      type="submit"
                      fontFamily="Roboto"
                      fontWeight="400"
                      borderRadius="lg"
                      fontSize="1.2rem"
                      maxW="17.6rem"
                      w="100%"
                      textAlign="center"
                      bgColor={black}
                      color={white}
                      border={black}
                      px="1.8rem"
                      py="1.5rem"
                      // _hover={{ backgroundColor: "black", opacity: ".7" }}
                      rightIcon={<Icon as={FaChevronRight} />}
                    >
                      Sign me up
                    </Btn>
                  </Flex>
                </Stack>
              </form>

              <NextLink href="/login">
                <Link href="/login">
                  <HeaderTag
                    color={black}
                    letterSpacing="unset"
                    as="h3"
                    fontSize="1.1rem"
                    fontFamily="Montserrat"
                  >
                    Already have an account?
                    <Text ml=".3rem" fontWeight="bold" as="span">
                      <a>Log in</a>
                    </Text>
                  </HeaderTag>
                </Link>
              </NextLink>
            </Box>
          </Flex>
        </Wrapper>
      </Layout>
    </div>
  );
}

export default createaccount;

export const getServerSideProps = withAuth(async (context: NextPageContext) => {
  return {
    props: {},
  };
});
