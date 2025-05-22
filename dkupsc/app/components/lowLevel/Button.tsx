import React from 'react'
import { Button as PrimaryButton } from '@mantine/core'
import Text from './Text'

interface Props
{
    text: string,
    variant: 'default' | 'filled' | 'gradient' | 'light'
    size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl'
    fullWidth?: boolean
    radius?: 'lg' | 'sm' | 'md'
    onClick?: () => void
}

const Button = ( props: Props ) =>
{
    return (
        <PrimaryButton variant={ props.variant } onClick={ props.onClick } fullWidth={ props.fullWidth } radius={ props.radius } >
            <Text text={ props.text } size={ props.size ?? 'xl' } />
        </PrimaryButton>
    )
}

export default Button