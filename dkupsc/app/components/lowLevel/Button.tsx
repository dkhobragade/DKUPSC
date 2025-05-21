import React from 'react'
import { Button as PrimaryButton } from '@mantine/core'
import Text from './Text'

interface Props
{
    text: string,
    variant: 'default' | 'filled' | 'gradient' | 'light'
    size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl'
}

const Button = ( props: Props ) =>
{
    return (
        <PrimaryButton variant={ props.variant } >
            <Text text={ props.text } size={ props.size ?? 'xl' } />
        </PrimaryButton>
    )
}

export default Button