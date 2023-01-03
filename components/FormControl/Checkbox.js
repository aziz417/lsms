import React, { useEffect, useState } from "react";
import { capitalizeFirst, convertToSlug, ucFirst } from "../../halpers/helper"


export default function Checkbox(props) {
    const [isChecked, setIsChecked] = useState(true);

    useEffect(() => {
        setIsChecked(props.checked)
    }, [])

    const checkEvent = (e) => {
        props.onChangeEvent ? props.onChangeEvent(e) : '';
    }

    return <>
        <div className="icheck-success d-inline">
            <input
                required={props.required}
                type="checkbox"
                id={props.name}
                checked={isChecked}
                value={props.value}
                name={props.name}
                onChange={(e) => {
                    setIsChecked(!isChecked)
                    checkEvent(e)
                }}
            />

            <label className="capitalize" htmlFor={props.name}>
                {ucFirst(props.label)}
                <span className="text-danger">
                    {props.required == 'true' ? '*' : ''}
                </span>
            </label>

        </div>
        <div>
            <span className="text-xs capitalize">{props.help ?? ''}</span>
        </div>
    </>

}