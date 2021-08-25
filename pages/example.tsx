import { Flex } from '@chakra-ui/react'
import { Form, Field, Button } from '../utils/react-formidable'

export default function example() {

    const handleSubmit = (data: object) => {
        console.log(data)
    }

    return (
        <Flex>
            <Form
                onSubmit={handleSubmit}
                maxWidth="512px"
                margin="0 auto"
                padding="25px"
                autocomplete="false"
            >
                <Field id="name" type="text" label="Your name" minLength={8} required={true} />
                <Field id="email" type="email" label="Your email" />
                <Field id="pass" type="password" label="Create a password" required={true} minLength={8} />
                <Field id="pass2" type="password" label="Type the password again" required={true} minLength={8} />
                <Button>Fazer login</Button>
            </Form>
        </Flex>
    )
}
