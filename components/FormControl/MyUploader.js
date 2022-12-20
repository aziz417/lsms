
import 'react-dropzone-uploader/dist/styles.css'
import Dropzone from 'react-dropzone-uploader'
import { useState } from 'react'
import { ucFirst } from '../../halpers/helper';

export default function MyUploader(props) {

    const [amni, setAmni] = useState(false);
    const handleChangeStatus = ({ meta }, status, fileWithMeta) => {
        setAmni(!amni)
        // console.log(meta)
        console.log(fileWithMeta)
    }


    const handleSubmit = (fields) => {
        console.log(fields)
        // allFiles.forEach(f => f.remove())
    }


    return <>
        <div className="form-group mt-3">
            <label htmlFor="exampleInputFile">{ucFirst(props.label)}</label>
          

            <div className="input-group">
                <Dropzone
                    onChangeStatus={handleChangeStatus}
                    maxFiles={props.maxFiles}
                    canRestart={true}
                    maxSizeBytes={props.maxFileSize}
                    accept={props.accept}
                    submitButtonContent={null}
                    inputContent={`Drop ${props.maxFiles} Files`}
                    inputWithFilesContent={files => `${props.maxFiles - files.length} more`}
                    submitButtonDisabled={files => files.length < props.maxFiles}
                />
            </div>
        </div>
    </>

}

