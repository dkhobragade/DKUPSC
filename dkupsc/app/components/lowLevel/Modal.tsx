import { useDisclosure } from '@mantine/hooks';
import React from 'react'
import { Modal as MainModal } from '@mantine/core';

interface Props
{
    isOpen: boolean,
    onClose: any
    title?: any
    children: any
}

const Modal = ( props: Props ) =>
{
    const [ opened, { open, close } ] = useDisclosure( false );

    return (
        <MainModal opened={ props.isOpen } onClose={ props.onClose } title={ props.title }>
            { props.children }
        </MainModal>
    )
}

export default Modal