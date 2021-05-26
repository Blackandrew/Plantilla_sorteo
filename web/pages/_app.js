import React from 'react'
import { ChakraProvider, ColorModeProvider, theme } from '@chakra-ui/react'


function MyApp({ Component, pageProps }) {

    return (
        <ChakraProvider resetCSS theme={theme}>
            <ColorModeProvider
                options={{
                    initialColorMode: "light",
                    useSystemColorMode: true,
                }}
            >
                <Component {...pageProps} />
            </ColorModeProvider>
        </ChakraProvider>
    )
}

export default MyApp