import React, { useEffect, useState } from "react";
import { capitalizeFirst, convertToSlug, ucFirst } from "../../halpers/helper"



function InputField(props) {

    const [errorMessage, setErrorMessage] = useState(false);

    const onChangeEvent = (e) => {
        if (props.eventHandel) {
            props.eventHandel(e)
        }
    }

    if (props.anyMessage) {
        // error message
        if (props.anyMessage[props.name][0]) {
            setErrorMessage(props.anyMessage[props.name][0])
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
                name={props.name}
                className="form-control"
                id={props.name}
                placeholder={capitalizeFirst(props.placeholder)}
                maxLength={props.maxL ?? ''}
                minLength={props.minL ?? ''}
                disabled={props.disabled ?? ''}
                value={props.value}
            />
            <span className="text-xs capitalize">{props.help}</span>

            <span>{errorMessage != !false ? errorMessage : ''}</span>


        </div>
    </>
}

export default InputField;