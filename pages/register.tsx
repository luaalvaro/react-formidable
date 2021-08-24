import { Flex, Text } from '@chakra-ui/react'

import { Form, Field, Button } from '../utils/react-formidable'

export default function register() {

    const handleSubmit = (data) => {
        console.log(data)
    }
    return (
        <Flex
            minH="100vh"
            background="#d4d4d4"

            padding="35px"

            direction="column"
        >

            <Text
                color="#fff"
                fontSize="30px"
                marginBottom="30px"
            >
                Register
            </Text>

            <Form onSubmit={handleSubmit}>
                <>
                    <Field
                        id="name"
                        label="Por favor, como você se chama?"
                        type="string"
                        minLength={6}
                        required={true}
                    />

                    <Field
                        id="email"
                        label="Seu melhor email"
                        type="email"
                        required={true}
                    />

                    <Field
                        id="pass"
                        label="Crie uma senha forte"
                        type="password"
                        required={true}
                    />

                    <Field
                        id="pass2"
                        label="Repita sua senha"
                        type="password"
                        required={true}
                    />


                    <Button text="Salvar" />
                </>
            </Form>

        </Flex>
    )
}
