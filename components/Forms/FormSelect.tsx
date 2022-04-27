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
  Select,
  SelectFieldProps,
  SelectProps,
  Text,
  useTheme,
} from "@chakra-ui/react";
import { ReactNode } from "react";

type FormSelectProps = {
  labelProps?: FormLabelProps;
  label: string;
  containerProps?: FlexProps;
  selectProps?: SelectProps;
  inputLeftAddon?: ReactNode;
  inputRightAddon?: ReactNode;
  children?: SelectFieldProps[];
  formErrorMessage?: string;
};

function FormSelect({
  labelProps,
  label,
  containerProps,
  selectProps = {},
  inputLeftAddon,
  children,
  inputRightAddon,
  formErrorMessage,
}: FormSelectProps) {
  const theme = useTheme();
  const { white } = theme.colors.brand;
  //   const {children} = selectProps
  return (
    <FormControl
      display="flex"
      flex="1"
      alignItems="center"
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
      <Select
        fontSize="1.4rem"
        border="none"
        outline="none"
        _focus={{ border: "none", boxShadow: "none" }}
        {...selectProps}
      >
        {children}
      </Select>
      <FormErrorMessage>{formErrorMessage}</FormErrorMessage>
    </FormControl>
  );
}

export default FormSelect;
