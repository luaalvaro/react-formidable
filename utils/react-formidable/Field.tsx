interface IProps {
    id: string,
    type: string,
    required: boolean
}

import { useState, useEffect } from 'react'
import { useStore } from './useStore'

const Field = ({ id, type, required }: IProps) => {

    const state = useStore(state => state)

    useEffect(() => {
        // console.log(data)
    }, [state])

    return (
        <div>
            <label htmlFor={`rf_${id}`}>{id}</label>
            <input
                type={type}
                id={`rf_${id}`}
                defaultValue={state.data.[`${id}`]}
                onChange={event => {
                    state.set_data({ ...state.data, [`${id}`]: event.target.value })
                }}
            />
        </div>
    )
}

export default Field