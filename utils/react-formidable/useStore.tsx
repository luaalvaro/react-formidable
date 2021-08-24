import create from "zustand"

interface IProps {

}

const useStore = create(set => ({
    data: {},
    set_data: (new_data: object) => set(state => ({ data: new_data }))
}))

export { useStore }