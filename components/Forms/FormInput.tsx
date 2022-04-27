import {
  Flex,
  FlexProps,
  FormControl,
  FormErrorMessage,
  FormLabel,
  FormLabelProps,
  Input,
  InputGroup,
  InputProps,
  Text,
  useTheme,
} from "@chakra-ui/react";
import { ReactNode } from "react";

type FormInputProps = {
  labelProps?: FormLabelProps;
  label?: string;
  formErrorMessage?: string;
  containerProps?: FlexProps;
  inputProps?: InputProps;
  inputLeftAddon?: ReactNode;
  inputRightAddon?: ReactNode;
};

function FormInput({
  labelProps,
  label,
  containerProps,
  inputProps = {},
  inputLeftAddon,
  formErrorMessage,
  inputRightAddon,
}: FormInputProps) {
  const theme = useTheme();
  const { white } = theme.colors.brand;
  const { type = "text", isInvalid } = inputProps;
  return (
    <FormControl
      display="flex"
      flex="1"
      alignItems="center"
      isInvalid={isInvalid}
      {...containerProps}
      borderBottom={
        containerProps?.flexDir === "column" ? "unset" : `2px solid ${white}`
      }
    >
      <FormLabel
        fontSize="1.4rem"
        borderRight={`1px solid ${white}`}
        px="1rem"
        flex="0.3"
        {...labelProps}
      >
        {label}
      </FormLabel>
      <InputGroup flex={containerProps?.flexDir === "column" ? "1" : "0.7"}>
        {inputLeftAddon}
        <Input
          pb="0.3rem"
          type={type}
          fontSize="1.4rem"
          border="none"
          outline="none"
          _focus={{ border: "none", boxShadow: "none" }}
          {...inputProps}
        />
        {inputRightAddon}
      </InputGroup>
      <FormErrorMessage alignSelf="flex-start" fontSize="1.2rem">
        {formErrorMessage}
      </FormErrorMessage>
    </FormControl>
  );
}

export default FormInput;
