import create from "zustand"

interface IProps {
    data: object,
    set_data: () => null,
    data_errors: object,
    set_data_errors: () => null
}

const useStore: IProps = create(set => ({
    data: {},
    set_data: (new_data: object) => set(state => ({ data: new_data })),

    data_errors: {},
    set_data_errors: (new_errors: object) => set(state => ({ data_errors: new_errors })),
}))

export { useStore }