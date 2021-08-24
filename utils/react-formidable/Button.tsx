interface IProps {
    text: string
}

const Button = ({ text }: IProps) => (
    <>
        <button
            style={{
                border: '1px solid rgba(0,0,0,0.4)',
                background: '#405090',
                color: '#fff',
                padding: '8px 22px',
                borderRadius: '4px',
                cursor: "pointer",
            }}
        >
            {text}
        </button>
    </>
)

export default Button