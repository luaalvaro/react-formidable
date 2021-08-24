interface IProps {
    children: JSX.Element,
    id: string
}

import { FormEvent } from "react"

import { useStore } from "./useStore"

const Form = ({ children, id }: IProps) => {

    const store = useStore(state => state)

    const handleSubmit = (event: FormEvent) => {
        event.preventDefault()

        console.log(store?.data)
    }

    return (
        <form onSubmit={(event) => handleSubmit(event)}>
            {children}
        </form>
    )
}

export default Form