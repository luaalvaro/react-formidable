interface IProps {
    text: string
}

const Button = ({ text }: IProps) => (
    <>
        <button>{text}</button>
    </>
)

export default Button