import { capitalizeFirst, convertToSlug, ucFirst } from "../../halpers/helper"
import React, { useEffect, useState } from "react";


export default function Radio(props) {

    const onChangeEvent = (e) => {
        if (props.onChangeHandel) {
            props.onChangeHandel(e)
        }
    }

    const [isChecked, setIsChecked] = useState('');

    useEffect(() => {
        setIsChecked(props.checkedValue)
    }, [])

    return <>
        <div className="mt-3">
            <label className="capitalize">{ucFirst(props.label)}</label>
        </div>

        {props.options?.map((option) => (
            <div key={option.value} className="icheck-success d-inline mr-2">

                <input
                    type="radio"
                    checked={isChecked == option.value}
                    value={option.value}
                    name={props.name}
                    id={convertToSlug(option.label) + '-' + option.value}
                    onChange={(e) => {
                        onChangeEvent(e)
                        setIsChecked(option.value)
                    }}
                />

                <label className="capitalize" htmlFor={convertToSlug(option.label) + '-' + option.value}>
                    {ucFirst(option.label)}
                </label>
            </div>

        ))}
        
        <div>
            <span className="text-xs capitalize">{capitalizeFirst(props.help)}</span>
        </div>
    </>

}