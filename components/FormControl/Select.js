import Select2 from 'react-select';
import { ucFirst } from '../../halpers/helper';


const Select = (props) => {
   
    const onChangeEvent = (e) => {
        if (props.eventHandel) {
            props.eventHandel(e)
        }
    }

    return <>
        <div className="form-group">
            <label className="capitalize" htmlFor={props.id}>{props.lavel}
                <span className="text-danger">{props.required == true ? '*' : ''}</span>
            </label>

            <Select2
                onChange={(e) => onChangeEvent(e)}
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