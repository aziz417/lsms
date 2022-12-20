
export default function CustomButton(props) {

    return <>
        <button type={props.type}
            className={props.classes} >
            {props.icon ? <i className={props.icon}></i> : ''}
            {props.title ?? ''}
        </button>
    </>
}