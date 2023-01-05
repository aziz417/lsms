import { capitalizeFirst, convertToSlug, public_path, ucFirst } from "../../halpers/helper"
import React, { useEffect, useState } from "react";

export default function ImageUpload(props) {
    let previewImageLink = 'https://t3.ftcdn.net/jpg/01/17/72/36/360_F_117723612_z7zQmUrrpG4IRGQLvgX5nwtwC18ke3qU.jpg'

    props.oldImage != null ? previewImageLink = public_path()+props.oldImage : '';
    // console.log(public_path());

    const [image, setImage] = useState(null)
    const [imageSizeMaxWarning, setImageSizeMaxWarning] = useState(null);


    const upload = (event) => {
        const file = event.target.files[0];
        const fileSize = ((file.size / 1024) / 1024).toFixed(2)
        
        if (fileSize < props.size) {
            if (props.onChangeHandel) {
                props.onChangeHandel(event)
            }
            setImageSizeMaxWarning(null)
            setImage(event.target.files[0]);
        } else {
            setImageSizeMaxWarning('Selected image size should be below 2MB')
        }
    }

    return <>
        <div className="form-group">
        <label htmlFor={props.name}>
                {props.label}
                <span className="text-danger">
                    {props.required == true ? '*' : ''}
                </span>
            </label>
            
            <br/>
            <span className="text-danger fs-10">{props.anyMessage?.[props.name]?.[0]}</span>

            <div>
                <span className="text-xs text-danger">{imageSizeMaxWarning ?? ''}</span>
            </div>
            <div className="input-group">

                <div className="custom-file">

                    <input
                        type="file"
                        accept={props.accept ?? 'image/*'}
                        className="custom-file-input"
                        id={props.name}
                        onChange={(e) => (upload(e))}
                        required={props.required}
                        name={props.name}
                    />

                    <label className="custom-file-label" htmlFor="exampleInputFile">Choose Image</label>

                </div>

            </div>
            <span className="text-xs">{capitalizeFirst(props.help + ', accepts files is ' + props.accept + ' and max size ' + props.size + 'mb')}</span>

            <div className="">
                <img src={image == null ? previewImageLink : URL.createObjectURL(image)} alt="..." className="img-thumbnail image-with-100x100" />
            </div>

        </div>

    </>
}