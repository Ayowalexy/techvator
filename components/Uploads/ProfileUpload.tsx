import React, {useState, useCallback } from 'react'
import { useDropzone } from 'react-dropzone'

type ProfileUploadProps = {

}

function ProfileUpload({}: ProfileUploadProps): JSX.Element {

// accepted files
const acceptedFileFormat = '.jpg, .png, image/png, image/jpg, image/jpeg'

const [isUploading, setIsUploading] = useState(false)
const [uploadProgress, setUploadProgress] = useState(0)

const onDrop = () => {}


const {} = useDropzone({ onDrop, accept: acceptedFileFormat, maxFiles: 1  })

  return (
    <div>ProfileUpload</div>
  )
}

export default ProfileUpload