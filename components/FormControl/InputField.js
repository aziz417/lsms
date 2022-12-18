import React, { useEffect, useState } from "react";
import { capitalizeFirst, convertToSlug, ucFirst } from "../../halpers/helper"



function InputField(props) {

    const onChangeEvent = (e) => {
        if (props.eventHandel) {
            props.eventHandel(e)
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

            <input
                onChange={(e) => (onChangeEvent(e))}
                required={props.required == true ? 'required' : false}
                type={props.type}
                className="form-control"
                id={props.name}
                placeholder={capitalizeFirst(props.placeholder)}
                maxLength={props.maxL ?? ''}
                minLength={props.minL ?? ''}
                disabled={props.disabled ?? ''}
            />
            <span className="text-xs capitalize">{props.help}</span>
        </div>
    </>
}

export default InputField;