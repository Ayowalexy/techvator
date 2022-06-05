import {
  Box,
  Flex,
  Link,
  Stack,
  Text,
  useTheme,
  Modal,
  ModalBody,
  ModalContent,
  useDisclosure,
  ModalOverlay,
  Icon,
  InputRightElement,
} from "@chakra-ui/react";
import React, { useState } from "react";
import * as yup from "yup";
import { useFormik } from "formik";
import { Btn } from "@/components/Button";
import { useIsomorphicLayoutEffect } from "framer-motion";
import Container from "@/components/Container";
import FormInput from "@/components/Forms/FormInput";
import FormSelect from "@/components/Forms/FormSelect";
import HeaderTag from "@/components/HeaderTag";
import ProfileUpload from "@/components/Uploads/ProfileUpload";
import FormTextArea from "../Forms/FormTextArea";
import { MdOutlineCancel } from "react-icons/md";
import { FaChevronDown } from "react-icons/fa";
import { FaChevronRight } from "react-icons/fa";

type CompleteProfileProps = {};

function CompleteProfile({}: CompleteProfileProps): JSX.Element {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const theme = useTheme();
  const { black, metallicSunburst, white } = theme.colors.brand;
  const [imageFile, setImageFile] = useState();

  useIsomorphicLayoutEffect(() => {
    onOpen();
  }, []);

  const regex =
    /^([0]?[1-9]|[1|2][0-9]|[3][0|1])[./-]([0]?[1-9]|[1][0-2])[./-]([0-9]{4}|[0-9]{2})$/;

  const validationSchema = yup.object().shape({
    occupation: yup.string().trim().required("Occupation is required"),
    city: yup.string().trim().required("City is required"),
    gender: yup.string().trim().required("Gender is required"),
    dob: yup
      .string()
      .trim()
      .required("Date of Birth is required")
      .matches(regex, "Date of Birth must be in the formate DD/MM/YYYY"),
    bio: yup.string(),
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
      occupation: "",
      city: "",
      gender: "",
      dob: "",
      bio: "",
    },
    validationSchema,
    onSubmit: async (values, formikHelpers) => {
      console.log(values);
    },
  });

  return (
    <Modal size={"6xl"} isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent maxW="1000px" bg="transparent" p="0">
        <ModalBody
          alignItems="stretch"
          justifyContent="center"
          // py="calc(100% * 0.15)"
        >
          <Flex
            w="100%"
            p={{ base: "1.6rem 2.5rem", md: "1.2rem 5.6rem" }}
            maxW="160rem"
            h="100%"
            borderRadius="lg"
            flexDir="column"
            bg="white"
          >
            <Flex alignItems="center">
              <Box flex="1">
                <HeaderTag
                  textAlign="left"
                  mb=".7rem"
                  fontSize="1.7rem"
                  fontWeight="600"
                  letterSpacing="unset"
                  color={black}
                >
                  Complete Profile
                </HeaderTag>
                <Text color={black} fontSize="1.1rem">
                  Let's get to meet you
                </Text>
              </Box>

              <Btn
                mt={{ base: "2rem" }}
                p={{ base: "unset", md: "1rem 4rem" }}
                border="unset !important"
                background="unset"
                h="unset"
                alignSelf="center"
                fontWeight="semibold"
                onClick={() => onClose()}
                color={black}
                leftIcon={<Icon as={MdOutlineCancel} boxSize="3rem" />}
                _hover={{
                  color: white,
                }}
              >
                <Text display={{ base: "none", md: "inline-block" }}>
                  Skip, i will do it later
                </Text>
              </Btn>
            </Flex>
            <Box>
              <form onSubmit={handleSubmit}>
                <Stack spacing="2.7rem" pb="2rem">
                  {/* File Upload Component*/}
                  <Flex alignItems="center">
                    <ProfileUpload
                      imageFile={imageFile}
                      setImageFile={setImageFile}
                    />
                  </Flex>

                  <Flex
                    alignItems="flex-start"
                    flexDir={["column", "column", "column", "row"]}
                    gap="2rem"
                  >
                    <FormInput
                      label="What do you do?"
                      containerProps={{
                        flexDir: "column",
                        // mr: ["0", "0", "0", "3.9rem"],
                      }}
                      labelProps={{
                        alignSelf: "flex-start",
                        borderRight: "unset",
                        fontSize: "1.1rem",
                        fontWeight: "800",
                        color: black,
                      }}
                      inputProps={{
                        id: "occupation",
                        name: "occupation",
                        onChange: handleChange,
                        onBlur: handleBlur,
                        isInvalid: !!errors.occupation && touched.occupation,
                        borderRadius: "md",
                        border: `1px solid ${black} !important`,
                        p: "2.3rem",
                        color: black,
                        placeholder: "Occupation",
                        _placeholder: {
                          color: black,
                        },
                      }}
                      formErrorMessage={errors.occupation}
                    />

                    <FormSelect
                      label="I live at"
                      containerProps={{
                        flexDir: "column",
                        // mr: { base: 0, lg: "3.9rem" },
                      }}
                      labelProps={{
                        alignSelf: "flex-start",
                        borderRight: "unset",
                        fontSize: "1.1rem",
                        fontWeight: "800",
                        color: black,
                      }}
                      selectProps={{
                        icon: (
                          <InputRightElement
                            as="button"
                            height="100%"
                            mr="1rem"
                            mt="2rem"
                            bg="transparent"
                            color={black}
                            children={
                              <Icon as={FaChevronDown} boxSize="2rem" />
                            }
                          />
                        ),
                        id: "city",
                        name: "city",
                        onChange: handleChange,
                        onBlur: handleBlur,
                        isInvalid: !!errors.city && touched.city,
                        borderRadius: "md",
                        border: `1px solid ${black} !important`,
                        color: black,
                        size: "lg",
                        sx: {
                          "&.chakra-select": {
                            height: "4.9rem",
                          },
                        },
                      }}
                      formErrorMessage={errors.city}
                    >
                      <option value="Female"> Cape Town</option>
                      <option value="Male"> JoBurg</option>
                    </FormSelect>
                  </Flex>

                  <Flex
                    alignItems="flex-start"
                    flexDir={["column", "column", "column", "row"]}
                    gap="2rem"
                  >
                    <FormSelect
                      label="Gender"
                      containerProps={{
                        flexDir: "column",
                        // mr: { base: 0, lg: "3.9rem" },
                      }}
                      labelProps={{
                        alignSelf: "flex-start",
                        borderRight: "unset",
                        fontSize: "1.1rem",
                        fontWeight: "800",
                        color: black,
                      }}
                      selectProps={{
                        icon: (
                          <InputRightElement
                            as="button"
                            height="100%"
                            mr="1rem"
                            mt="2rem"
                            bg="transparent"
                            color={black}
                            children={
                              <Icon as={FaChevronDown} boxSize="2rem" />
                            }
                          />
                        ),
                        id: "gender",
                        name: "gender",
                        onChange: handleChange,
                        onBlur: handleBlur,
                        isInvalid: !!errors.gender && touched.gender,
                        borderRadius: "md",
                        border: `1px solid ${black} !important`,
                        color: black,
                        size: "lg",
                        sx: {
                          "&.chakra-select": {
                            height: "4.9rem",
                          },
                        },
                      }}
                      formErrorMessage={errors.gender}
                    >
                      <option value="Female"> Female</option>
                      <option value="Male"> Male</option>
                    </FormSelect>

                    <FormInput
                      label="Date of Birth"
                      containerProps={{
                        flexDir: "column",
                        // mr: ["0", "0", "0", "3.9rem"],
                      }}
                      labelProps={{
                        alignSelf: "flex-start",
                        borderRight: "unset",
                        color: black,
                        fontSize: "1.1rem",
                        fontWeight: "800",
                      }}
                      inputProps={{
                        id: "dob",
                        name: "dob",
                        onChange: handleChange,
                        onBlur: handleBlur,
                        isInvalid: !!errors.dob && touched.dob,
                        borderRadius: "md",
                        border: `1px solid ${black} !important`,
                        p: "2.3rem",
                        color: black,
                        placeholder: "DD/MM/YYYY",
                        _placeholder: {
                          color: black,
                        },
                      }}
                      formErrorMessage={errors.dob}
                    />
                  </Flex>

                  <Flex
                    alignItems={{ base: "flex-start", lg: "center" }}
                    flexDir={{ base: "column", lg: "row" }}
                  >
                    <FormTextArea
                      containerProps={{
                        flexDir: "column",
                        border: "none !important",
                      }}
                      label="About you"
                      labelProps={{
                        alignSelf: "flex-start",
                        borderRight: "unset",
                        fontSize: "1.1rem",
                        fontWeight: "800",
                        color: black,
                      }}
                      textAreaProps={{
                        placeholder: "Bio can be anything awesome",
                        _placeholder: {
                          color: black,
                        },
                        id: "bio",
                        name: "bio",
                        onChange: handleChange,
                        onBlur: handleBlur,
                        borderRadius: "md",
                        border: `1px solid ${black} !important`,
                        p: "2.5rem",
                        rows: 3,
                        color: black,
                      }}
                    />
                  </Flex>
                  <Flex justifyContent="flex-end">
                    <Btn
                      isLoading={isSubmitting}
                      type="submit"
                      fontFamily="Roboto"
                      fontWeight="400"
                      borderRadius="lg"
                      fontSize="1.2rem"
                      maxW="30.6rem"
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
                      Save & Update
                    </Btn>
                  </Flex>
                </Stack>
              </form>
            </Box>
          </Flex>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
}

export default CompleteProfile;
