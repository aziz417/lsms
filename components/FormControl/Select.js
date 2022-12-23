import Select2 from 'react-select';
import { ucFirst } from '../../halpers/helper';


const Select = (props) => {
    const optionsd = [
        { value: "vc1", label: "f" },
        { value: "vcr", label: "d" },
        { value: "f", label: "s" },
        { value: "vcd", label: "fgrg" },
    ]

    const onChangeEvent = (e) => {
        if (props.onChangeHandel) {
            props.onChangeHandel(e)
        }
    }

    return <>
        <div className="form-group">
            <label className="capitalize" htmlFor={props.id}>{props.lavel}
                <span className="text-danger">{props.required == 'true' ? '*' : ''}</span>
            </label>

            <Select2
                onChange={onChangeEvent}
                options={props.options}
                placeholder={ucFirst(props.placeholder)}
                name={props.name}
                required={props.required}
                id={props.id}
            />
            <span className="text-xs capitalize" > {props.help} </span>
        </div>

    </>
}

export default Select