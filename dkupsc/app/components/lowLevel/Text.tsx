import React from 'react'
import { Text as TextStyle } from '@mantine/core'
import { fontFamily } from '@/app/Constants/types'

interface Props
{
    text: string
    size: 'xs' | 'sm' | 'md' | 'lg' | 'xl'
}

const Text = ( props: Props ) =>
{
    return (
        <TextStyle ff={ fontFamily[ 1 ] } size={ props.size } >{ props.text }</TextStyle>
    )
}

export default Text