interface IProps {
    children: JSX.Element,
    onSubmit: (data: object) => {},
    background: string,
    padding: string,
    maxWidth: string,
    className: string,
}

import { FormEvent } from "react"

import { useStore } from "./useStore"

const Form = ({ children, onSubmit, background, padding, maxWidth, className }: IProps) => {

    const store = useStore(state => state)

    const handleSubmit = (event: FormEvent) => {
        event.preventDefault()

        let has_data = Object.keys(store.data).length ? true : false

        has_data
            ? onSubmit(store.data)
            : onSubmit({ error: { message: 'this form has never been touched' } })

    }

    return (
        <form
            className={className}
            onSubmit={(event) => handleSubmit(event)}
            style={{
                width: '100%',
                maxWidth: maxWidth,
                background: background,
                padding: padding
            }}
        >
            {children}
        </form>
    )
}

export default Form