interface IProps {
    children: string
}

const Button = ({ children }: IProps) => (
    <>
        <button
            style={{
                border: 'none',
                background: '#405090',
                color: '#fff',
                padding: '5px 25px',
                borderRadius: '4px',
                cursor: "pointer",
                marginTop: '15px'
            }}
        >
            {children}
        </button>
    </>
)

export default Button