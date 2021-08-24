import create from "zustand"

interface IProps {

}

const useStore = create(set => ({
    data: {},
    set_data: (new_data: object) => set(state => ({ data: new_data })),

    data_errors: {},
    set_data_errors: (new_errors: object) => set(state => ({ data_errors: new_errors })),
}))

export { useStore }