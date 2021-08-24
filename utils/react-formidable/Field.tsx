interface IProps {
    id: string,
    type: string,
    required: boolean,
    label: string,
    minLength: number
}

import { useStore } from './useStore'

import { useEffect } from 'react'

const Field = ({ id, type, required = false, label, minLength = 1 }: IProps) => {

    const state = useStore(state => state)

    useEffect(() => {

        check_field_value(state.data.[`${id}`])

    }, [state.data.[`${id}`]])

    function check_field_value(value: string) {

        if (required && value === "") {
            return state.set_data_errors({
                ...state.data_errors,
                [`${id}`]: 'Este campo é obrigatório'
            })
        }

        state.set_data_errors({
            ...state.data_errors,
            [`${id}`]: undefined
        })

        if (type === 'email') {
            if (value?.indexOf("@") === -1 || value?.indexOf(".") === -1) {
                return state.set_data_errors({
                    ...state.data_errors,
                    [`${id}`]: 'Preencha um email válido'
                })
            }
        }

        if (value?.length < minLength) {
            return state.set_data_errors({
                ...state.data_errors,
                [`${id}`]: `Preencha pelo menos ${minLength} caracteres`
            })
        }

        return state.set_data_errors({
            ...state.data_errors,
            [`${id}`]: ``
        })
    }

    return (
        <div
            style={{
                display: 'flex',
                flexDirection: 'column',
                width: '100%'
            }}
        >
            <label
                htmlFor={`rf_${id}`}

                style={{
                    fontWeight: '700',
                    fontSize: "14px",
                    textTransform: 'capitalize',
                    fontFamily: "Roboto",
                    marginBottom: "5px",
                    color: "rgba(0,0,0,0.8)"
                }}
            >
                {label}
            </label>
            {type !== 'textarea' &&
                <input
                    type={type === 'textarea' || type === 'email' ? 'text' : type}
                    id={`rf_${id}`}
                    defaultValue={state.data.[`${id}`]}
                    onChange={event => {
                        state.set_data({ ...state.data, [`${id}`]: event.target.value })
                    }}

                    style={{
                        border: '1px solid rgba(0,0,0,0.2)',
                        height: '28px',
                        marginBottom: '5px',
                        borderRadius: '3px'
                    }}
                />
            }

            {type === 'textarea' &&
                <textarea
                    id={`rf_${id}`}
                    defaultValue={state.data.[`${id}`]}
                    onChange={event => {
                        state.set_data({ ...state.data, [`${id}`]: event.target.value })
                    }}

                    style={{
                        border: '1px solid rgba(0,0,0,0.2)',
                        marginBottom: '5px',
                        borderRadius: '3px',
                    }}
                />
            }
            <label
                style={{
                    color: 'rgba(220,20,20,0.7)',
                    display: true ? 'inline' : 'none'
                }}
            >
                {state.data_errors[`${id}`]}
            </label>
        </div>
    )
}

export default Field