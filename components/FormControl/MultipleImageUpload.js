import { capitalizeFirst, convertToSlug, ucFirst } from "../../halpers/helper"
import React, { useEffect, useState } from "react";

export default function MultipleImageUpload(props) {
    const previewImageLink = 'https://t3.ftcdn.net/jpg/01/17/72/36/360_F_117723612_z7zQmUrrpG4IRGQLvgX5nwtwC18ke3qU.jpg'

    const [images, setImages] = useState([])
    const [imageSizeMaxWarning, setImageSizeMaxWarning] = useState([]);


    const upload = (event) => {

        const selectedImages = event.target.files;
        const imageArray = Array.from(selectedImages)

        const imageaArrayLinks = imageArray?.map((file) => {
            if (((file.size / 1024) / 1024).toFixed(2) > 1) {
                return previewImageLink;
            } else {
                return URL.createObjectURL(file);

            }
        })

        setImages((previousImages) => previousImages.concat(imageaArrayLinks));


        // if (event.target.files[0].size <= props.size * 10000) {
        //     if (props.onChangeHandel) {
        //         props.onChangeHandel(event)
        //     }
        //     setImageSizeMaxWarning(null)
        //     setImage(event.target.files[0]);
        // } else {
        //     setImageSizeMaxWarning('Selected image size should be below 2MB')
        // }
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
                        multiple
                    />

                    <label className="custom-file-label" htmlFor="exampleInputFile">Choose Multiple Images</label>

                </div>

            </div>
            <span className="text-xs">{capitalizeFirst(props.help + ', accepts files is ' + props.accept + ' and max size ' + props.size + 'mb')}</span>

            <div className="multiple-image-priview-section">

                {images && images?.map((image, index) => {
                    return (
                        <div key={image} className="multiple-image-priview-item">
                            <span className="multiple-image-priview-item-count">{index + 1}</span>
                            <span className="multiple-image-priview-item-remove-btn">X</span>

                            <img src={image} alt="..." className="img-thumbnail image-with-100x100" />

                        </div>
                    )
                })}

            </div>


        </div>

    </>
}