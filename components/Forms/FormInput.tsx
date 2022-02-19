import { Flex, FlexProps, FormLabel, FormLabelProps, Input, InputProps, Text, useTheme } from "@chakra-ui/react"


type FormInputProps = {
    labelProps?: FormLabelProps,
    label: string,
    containerProps?: FlexProps,
    inputProps?: InputProps
}

function FormInput({ labelProps, label, containerProps, inputProps = {} }: FormInputProps) {
  const theme =  useTheme()
  const {white} = theme.colors.brand
  const { type = 'text'} = inputProps
  return (
    <Flex flex='1' alignItems='center' {...containerProps} borderBottom={`2px solid ${white}`}>
        <FormLabel fontSize='1.4rem' borderRight={`1px solid ${white}`} px='1rem' flex='0.3'  {...labelProps}>{label}</FormLabel>
        <Input pb='0.3rem' type = {type} fontSize='1.4rem' border='none' outline='none'  _focus={{ border: 'none', boxShadow: 'none'}} flex='0.7'  {...inputProps}  />
    </Flex>
  )
}

export default FormInput