import { Flex, FlexProps, FormControl, FormLabel, FormLabelProps, Input, InputGroup, InputProps, Text, useTheme } from "@chakra-ui/react"
import { ReactNode } from "react"


type FormInputProps = {
    labelProps?: FormLabelProps,
    label: string,
    containerProps?: FlexProps,
    inputProps?: InputProps,
    inputLeftAddon?: ReactNode,
    inputRightAddon?: ReactNode
}

function FormInput({ labelProps, label, containerProps, inputProps = {}, inputLeftAddon, inputRightAddon }: FormInputProps) {
  const theme =  useTheme()
  const {white} = theme.colors.brand
  const { type = 'text'} = inputProps
  return (
      <FormControl display='flex' flex='1' alignItems='center' {...containerProps} borderBottom={containerProps?.flexDir === 'column'  ? 'unset' : `2px solid ${white}`}>
        <FormLabel fontSize='1.4rem' borderRight={`1px solid ${white}`} px='1rem' flex='0.3'  {...labelProps}>{label}</FormLabel>
        <InputGroup flex={containerProps?.flexDir === 'column' ? '1' : '0.7'}>
           {inputLeftAddon}
           <Input pb='0.3rem' type = {type} fontSize='1.4rem' border='none' outline='none'  _focus={{ border: 'none', boxShadow: 'none'}}   {...inputProps}  />
           {inputRightAddon}
        </InputGroup>
      </FormControl>
  )
}

export default FormInput