interface IProps {
    children: JSX.Element,
    onSubmit: (data: object) => object,
    background: string,
    padding: string,
    maxWidth: string,
    className: string,
    margin: string,
}

import { FormEvent } from "react"

import { useStore } from "../useStore"

const Form = ({ children, onSubmit, background, padding, maxWidth, className, margin, }: IProps) => {

    const store = useStore(state => state)

    const handleSubmit = (event: FormEvent) => {
        event.preventDefault()

        let has_data = Object.keys(store.data).length ? true : false
        let has_errors = Object.keys(store.data_errors).length ? true : false

        if (!has_data) {
            return onSubmit({ error: { message: 'this form has never been touched' } })
        }

        if (has_errors) {
            console.log()
            return onSubmit({ error: { message: 'this form has invalid fields', err: store.data_errors }, data: store.data })
        }

        return onSubmit({ data: store.data })
    }

    return (
        <form
            className={className}
            onSubmit={(event) => handleSubmit(event)}
            style={{
                width: '100%',
                maxWidth: maxWidth,
                background: background,
                padding: padding,
                margin: margin
            }}
        >
            {children}
        </form>
    )
}

export default Form