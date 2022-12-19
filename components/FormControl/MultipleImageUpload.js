import { capitalizeFirst, convertToSlug, ucFirst } from "../../halpers/helper"
import React, { useEffect, useState } from "react";

export default function MultipleImageUpload(props) {

    const [images, setImages] = useState([])
    const [imageSizeMaxWarning, setImageSizeMaxWarning] = useState([]);
    const upload = (event, index) => {

        const selectedImages = event.target.files;
        const imageArray = Array.from(selectedImages)

        const imageaArrayLinks = imageArray?.map((file) => {
            const fileSize = ((file.size / 1024) / 1024).toFixed(2)
            if (fileSize > 1) {
                return {
                    "warning": + fileSize + " file size exceeded",
                    "link": '',
                    "borderColor": "error-bordar",
                };
            } else {
                return {
                    "warning": null,
                    "link": URL.createObjectURL(file),
                    "borderColor": '',
                };
            }
        })

        if (images.length == 0) {
            setImages(imageaArrayLinks);
        } else {
            if (index != null) {

                const newArray = images?.map((image, index2) => {
                    console.log(index);
                    if (index == index2) {
                        return {
                            "warning": imageaArrayLinks[0].warning,
                            "link": imageaArrayLinks[0].link,
                            "borderColor": imageaArrayLinks[0].borderColor,
                        };
                    } else {
                        return {
                            "warning": image.warning,
                            "link": image.link,
                            "borderColor": image.borderColor,
                        };
                    }
                })

                setImages(newArray);


            } else {
                setImages((previousImages) => (previousImages.concat(imageaArrayLinks)));
            }
        }
    
    }

    const removeItem = (index) => {
        const removeArray = images.filter((item, i) => {
            if(i !== index){return item}
        })

        setImages(removeArray);
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
                        onChange={(e) => (upload(e, null))}
                        multiple
                    />

                    <label className="custom-file-label" htmlFor="exampleInputFile">Choose Multiple Images</label>

                </div>

            </div>
            <span className="text-xs">{capitalizeFirst(props.help + ', accepts files is ' + props.accept + ' and max size ' + props.size + 'MB')}</span>

            <div className="multiple-image-priview-section d-flex flex-wrap">

                {images && images?.map((fileLink, index) => {
                    return (
                        <div key={fileLink.link + index} className={fileLink.link}>
                            {fileLink.warning != null ?
                                <div className="imageAddNewOption m-1">
                                    <label className={`anotherImageAddLavel ${fileLink.borderColor}`} htmlFor={`custom-file-upload-${index}`}>
                                        <input

                                            type="file"
                                            accept={props.accept ?? 'image/*'}
                                            className="custom-file-input d-none"
                                            id={`custom-file-upload-${index}`}
                                            onChange={(e) => (upload(e, index))}
                                        />
                                        Add One
                                    </label>
                                    <span className="text-danger" style={{ fontSize: '12px' }}>{fileLink.warning != null ? fileLink.warning : ''}</span>

                                </div>

                                :

                                <div className="multiple-image-priview-item m-1">
                                    <span className="multiple-image-priview-item-count">{index + 1}</span>
                                    <span className="multiple-image-priview-item-remove-btn" onClick={() => (removeItem(index))}>X</span>

                                    <img src={fileLink.link} alt="..." className={`img-thumbnail image-with-100x100 ${fileLink.borderColor}`} />

                                </div>
                            }
                        </div>

                    )
                })}


                {images.length ?
                    <label className="anotherImageAddLavel m-1" htmlFor={`custom-file-upload-addMore`}>
                        <input

                            type="file"
                            accept={props.accept ?? 'image/*'}
                            className="custom-file-input d-none"
                            id={`custom-file-upload-addMore`}
                            onChange={(e) => (upload(e, null))}
                            multiple
                        />
                        Add More...
                    </label>
                    : ''}

            </div>


        </div>

    </>
}