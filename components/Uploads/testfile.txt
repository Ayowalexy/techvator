import React, { useCallback, useState } from 'react'
import { Box, Flex, IconButton, Img, useToast } from '@chakra-ui/react'
import { useDropzone } from 'react-dropzone'
import axios from 'axios'


function ProfileUpload({ auth, displayPicture, setDisplayPicture, defaultBgImg } : any) {

    // accepted files
    const acceptedFileFormat = '.jpg, .png, image/png, image/jpg, image/jpeg'

    const toast = useToast()

    const [isUploading, setIsUploading] = useState(false)
    const [dpUploadProgress, setDpUploadProgress] = useState(0)

    // OnFile Drop
    const onDrop = useCallback(async(acceptedFiles) => {

            const file = acceptedFiles.shift();
            setDisplayPicture({  ...displayPicture, file, preview: URL.createObjectURL(file) })
            setIsUploading(true)
            const formData = new FormData()
            formData.append('file', file)

            try {
            const response = await axios.post(`${process.env.NEXT_PUBLIC_API_URL}/upload`, formData ,
                {
                    headers: {
                        'Authorization': `Bearer ${auth?.token}`,
                        'Content-Type': 'multipart/formdata'
                    },
                    onUploadProgress: progressEvent => {
                        let scale = 1;
                        const progress = (progressEvent.loaded / progressEvent.total)
                        setDpUploadProgress(scale - progress)
                    }
                }
                )

                if(response.status === 200  && response.data.code === 200) {
                    const { _id } = response.data.data
                    setDisplayPicture({
                        ...displayPicture,
                        preview: URL.createObjectURL(file),
                        fileId: _id
                    })
                    setIsUploading(false)
                    toast({
                        position: 'top-right',
                        title: "Profile upload complete",
                        description: "Click save button to save",
                        //   status: "er",
                        duration: 5000,
                        isClosable: true,
                    });

                }

            } catch (error) {
                console.log(error)
                setIsUploading(false)
                toast({
                    position: 'top-right',
                    title: "Profile upload failed",
                    description: "Please retry",
                    status: "error",
                    duration: 5000,
                    isClosable: true,
                });
            }
            
        },
        [],
     )


    const {
        getRootProps,
        getInputProps,
        // isDragActive,
        // isDragAccept,
        // isDragReject,
        // acceptedFiles,
        open,
    } = useDropzone({ onDrop, accept: acceptedFileFormat, maxFiles: 1});
    

    return (
        <Flex alignItems='center'>
            <Box 
            position='relative' 
            bgImage={defaultBgImg ? `url(${defaultBgImg})` : ''}
            bgRepeat='no-repeat'
            bgSize='cover'
            //  bgColor='black'  
            _focus={{outline: 'none'}} 
            {...getRootProps()}  
            onClick={open} 
            display='inline-block' 
            boxSize='120px'  
            borderRadius='50%'
            mx='auto'
            >
                        {
                        displayPicture.preview &&  <Img boxSize='100%'  position='absolute' borderRadius='50%' src={displayPicture.preview} objectFit='cover' objectPosition='top center'  />
                    }
                        { 
                        isUploading && 
                        <Box  
                        transform={ isUploading ? `scale(${dpUploadProgress})` : ''} 
                        position='absolute' w='100%' h='100%' borderRadius='50%' opacity='.3' bg='rgba(226, 230, 255, 1) !important'> </Box>
                        }
                        <IconButton
                        isLoading={isUploading}
                        //  onClick={open}
                        
                        // isLoading={true}
                        position='absolute'
                        right='-11%'
                        top='16%'
                        _focus={{ boxShadow:'none' }}
                        borderRadius='50%'
                        aria-label="Git Auth"
                        icon={<Img src='/icons/editButton.svg' boxSize='40px' objectFit='cover' />}
                        />
                    <input {...getInputProps()}  />
                </Box>
        </Flex>
    )
}

export default ProfileUpload
