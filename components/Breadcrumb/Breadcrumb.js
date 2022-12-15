import Link from 'next/link'
import { capitalizeFirst, convertToSlug, ucFirst } from "../../halpers/helper"
import React, { useState } from 'react';



export default function Breadcrumb(props) {
 const [breadcoumbShowHide, setBreadcoumbShowHide] = useState('')
 const [breadcoumbShowHideFlag, setBreadcoumbShowHideFlag] = useState(false)

    const mobileBreadcumbManage = () => {
        setBreadcoumbShowHideFlag(!breadcoumbShowHideFlag)
        if (breadcoumbShowHideFlag) {
            setBreadcoumbShowHide('breadcumb-item-response-mobile-show')
        }else{
            setBreadcoumbShowHide('')
        }
    }

    return <>
        <li className="breadcrumb-item breadcumb-home-item d-flex justify-content-center align-items-center">
            <Link className='font-weight-bold' href="/" role="button">Home</Link>
            <i onClick={mobileBreadcumbManage} className="btn-xs ml-2 btn-info right fas fa-angle-left mobile-breadcumb-manage"></i>
        </li>

        {props.parameters?.map((parameter, index) => {
            if (Number.isInteger(parameter) == false && parameter) {
                return (
                    <li
                        key={index}
                        className={`breadcrumb-item breadcumb-item-response-mobile-none align-items-center breadcumb-item-response-manage breadcumb-item-response-mobile-manage ${breadcoumbShowHide}`}>

                        <Link
                            className={props.parameters.length == (index + 1) ? "font-weight-bold  btn disabled" : "font-weight-bold"}
                            href={props.parameters.length == (index + 1) ? "#" : "/" + parameter} >
                            {ucFirst(parameter)}
                        </Link>
                    </li>
                )
            }
        })}
    </>
}