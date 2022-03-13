import { Box, Flex, Text, useTheme } from '@chakra-ui/react'
import React, {useState, useCallback, useEffect } from 'react'
import { useDropzone } from 'react-dropzone'

type ProfileUploadProps = {
    imageFile: File | string;
    setImageFile: (value: undefined) => void
}

function ProfileUpload({ 
    imageFile, 
    setImageFile 
}: ProfileUploadProps): JSX.Element {


const theme = useTheme()
const { gray, rotiLight  } = theme.colors.brand

// accepted files
const acceptedFileFormat = '.jpg, .png, image/png, image/jpg, image/jpeg'

// const [isUploading, setIsUploading] = useState(false)
const [uploadProgress, setUploadProgress] = useState(0)
const [previewFile, setPreviewFile] = useState<any>("/imgs/profile/profile.png")

const onDrop =  useCallback((acceptedFiles) => {
    const reader = new FileReader()
    
    reader.onload = function() {
        setPreviewFile(reader.result)
        setImageFile(acceptedFiles[0]);
        let progressInterval;
        setUploadProgress(3)

    progressInterval = setInterval(() => {
     
        setUploadProgress(prevUploadProgress => {
            if(prevUploadProgress === 0)  {
                clearInterval(progressInterval)
                return 0;
            }
          return prevUploadProgress - 1
        })
   
    }, 1000)
       
    }

    reader.readAsDataURL(acceptedFiles[0])
},[])



const {
    getRootProps,
    getInputProps,
    isDragActive,
    // isDragAccept,
    // isDragReject,
    // acceptedFiles,
    open,
} = useDropzone({ onDrop, accept: acceptedFileFormat, maxFiles: 1  })

  return (
    <Flex my='2rem' gap='1rem' alignItems='center'  maxW='17.8rem'>
        <Box 
        cursor='pointer'
        borderRadius='5px' 
        pos='relative' 
        w='6.7rem' h='6.7rem' 
        bg={gray} bgImage={`url(${previewFile})`} bgSize='cover' bgRepeat='no-repeat'
        overflow='hidden'
        _after={{
            content: `url(/imgs/profile/upload.svg)`,
            width: "100%",
            height: "50%",
            background: isDragActive ? rotiLight : "rgba(0,0,0, .8)",
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            position: 'absolute',
            bottom: '0', left: '0',
        }}
        {...getRootProps()}  
        onClick={open} 
        >
            <Box 
            pos='absolute' 
            w='100%' h='100%' 
            top='0' right='0' bottom='0' left='0'  
            backdropFilter={`blur(${uploadProgress}px)`}
            pointerEvents='none'
            />
             <input {...getInputProps()}  />
        </Box>
        
        <Text  fontSize='1rem'>
            Upload profile <br /> picture 
            
        </Text>
   </Flex>
  )
}

export default ProfileUpload