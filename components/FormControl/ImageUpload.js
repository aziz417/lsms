import { capitalizeFirst, convertToSlug, ucFirst } from "../../halpers/helper"
import React, { useEffect, useState } from "react";

export default function ImageUpload(props) {
    const previewImageLink = 'https://t3.ftcdn.net/jpg/01/17/72/36/360_F_117723612_z7zQmUrrpG4IRGQLvgX5nwtwC18ke3qU.jpg'

    const [image, setImage] = useState(null)
    const [imageSizeMaxWarning, setImageSizeMaxWarning] = useState(null);


    const upload = (event) => {
        console.log(event.target.files[0].size);

        if (event.target.files[0].size <= props.size * 10000) {
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
        <div className="form-group mt-3">
            <label htmlFor="exampleInputFile">{props.label}</label>
            <div>
                <span className="text-xs text-danger">{imageSizeMaxWarning ?? ''}</span>
            </div>
            <div className="input-group">

                <div className="custom-file">

                    <input
                        type="file"
                        accept={props.accept ?? 'image/*'}
                        className="custom-file-input"
                        id="exampleInputFile"
                        onChange={(e) => (upload(e))}
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