import React from 'react'
import { Center, Loader as Spinner } from '@mantine/core'

const Loader = () =>
{
    return (
        <Center style={ getCardStyles } >
            <Spinner color='lime' size={ 50 } />
        </Center>
    )
}

export default Loader

const getCardStyles = () => ( {
    width: '100%',
    height: '100vh'
} )