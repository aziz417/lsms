import Link from 'next/link'

export default function CustomLink(props) {
    
    return <>
        <Link type="button"
            href={props.url ?? '/'}
            className={props.classes} >
                {props.icon ? <i className={props.icon}></i> : ''}
            {props.title ?? ''}
        </Link>
    </>
}