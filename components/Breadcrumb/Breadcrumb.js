import Link from 'next/link'
import { capitalizeFirst, convertToSlug, isInDesiredForm, ucFirst } from "../../halpers/helper"
import React, { useState } from 'react';



export default function Breadcrumb(props) {



    return <>
        <li className="breadcrumb-item breadcumb-home-item d-flex justify-content-center align-items-center">
            <Link className='font-weight-bold' href="/" role="button">Home</Link>
        </li>

        {props.parameters?.map((parameter, index) => {
            if (Number.isInteger(parameter) == false && parameter) {

                const strArray = parameter.split("-")
                const isInteger = isInDesiredForm(strArray[1]);

                if (isInteger) {
                    parameter = strArray[0];
                }

                return (
                    <li
                        key={index}
                        className={`breadcrumb-item breadcumb-item-response-mobile-none align-items-center breadcumb-item-response-manage `}>

                        <Link
                            className={props.parameters.length == (index + 1) ? "font-weight-bold  btn disabled" : "font-weight-bold"}
                            href={props.parameters.length == (index + 1) ? "#" : "/" + parameter} >
                            {ucFirst(parameter)}
                        </Link>
                    </li>
                )
            }
        })}


        <li className="nav-item dropdown breadcumb-show-hide">
            <a className="nav-link"
                data-toggle="dropdown" href="#">
                <i className="fa fa-chevron-right"></i>
            </a>
            <div className="dropdown-menu dropdown-menu-lg dropdown-menu-right">

                {props.parameters?.map((parameter, index) => {
                    if (Number.isInteger(parameter) == false && parameter) {
                        return (
                            <div key={index}>
                                <div className="dropdown-divider" />
                                <Link
                                    className={props.parameters.length == (index + 1) ? "font-weight-bold dropdown-item btn disabled" : "font-weight-bold dropdown-item"}
                                    href={props.parameters.length == (index + 1) ? "#" : "/" + parameter} >
                                    <i className="fa fa-chevron-right mr-2" />
                                    {ucFirst(parameter)}
                                </Link>
                            </div>

                        )
                    }
                })}

            </div>
        </li>
    </>
}