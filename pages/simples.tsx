import { Form, Field, Button } from "../utils/react-formidable"

export default function simples() {
    return (
        <div>
            <Form id="simples">
                <>
                    <Field id="name" type="text" required={true} />
                    <Button text="Salvar" />
                </>
            </Form>
        </div>
    )
}
