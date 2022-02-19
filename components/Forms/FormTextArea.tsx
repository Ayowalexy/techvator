import { Flex, FlexProps, FormLabel, FormLabelProps, Textarea, TextareaProps, useTheme } from "@chakra-ui/react"


type FormTextAreaProps = {
    labelProps?: FormLabelProps,
    label: string,
    containerProps?: FlexProps,
    textAreaProps?: TextareaProps
}

function FormTextArea({ labelProps, label, containerProps, textAreaProps }: FormTextAreaProps) {
  const theme =  useTheme()
  const {white} = theme.colors.brand
  return (
    <Flex flex='1' alignItems='center' {...containerProps} borderBottom={`2px solid ${white}`}>
        <FormLabel alignSelf='flex-start' mt='1rem' fontSize='1.4rem' borderRight={`1px solid ${white}`} px='1rem' flex='0.14'  {...labelProps}>{label}</FormLabel>
        <Textarea pt='1.1rem' resize='none' rows={4} fontSize='1.4rem' border='none' outline='none'  _focus={{ border: 'none', boxShadow: 'none'}} flex='0.9'  {...textAreaProps}  />
    </Flex>
  )
}

export default FormTextArea