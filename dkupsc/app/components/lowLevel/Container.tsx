import React from 'react'
import { Container as CardContainer } from "@mantine/core"

interface Props
{
    children: any
}

const Container = ( props: Props ) =>
{
    return (
        <CardContainer style={ styleCss } >{ props.children }</CardContainer>
    )
}

export default Container

const styleCss = {
    width: '100%',
    height: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
}