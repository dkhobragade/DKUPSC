"use client";

import { Box, Burger, Drawer, Group, HoverCard, HoverCardDropdown, ScrollArea, Space, Text, } from '@mantine/core';
import classes from './HeaderMegaMenu.module.css';
import { fontFamily, menuList } from '@/app/Constants/types';
import React, { useState } from 'react';
import Button from './Button';
import LogoImg from '../lowLevel/logo.png'
import Image from 'next/image';
import { useDisclosure } from '@mantine/hooks';
import { IconChevronCompactDown } from '@tabler/icons-react';

export function HeaderMegaMenu ()
{
    const [ hoveredMenu, setHoveredMenu ] = useState<number | null>( null )
    const [ opened, { toggle, close } ] = useDisclosure( false )


    const renderMenuList = () =>
    {
        return <>
            { menuList.map( ( item: { key: number, value: string, dropdown: boolean, } ) =>
                <React.Fragment key={ item.key }>
                    <Text style={ getCardStyles( hoveredMenu === item.key ) } onMouseEnter={ () => setHoveredMenu( item.key ) } onMouseLeave={ () => setHoveredMenu( null ) } fw={ 500 } ff={ fontFamily[ 1 ] } size='xl' >{ item.value }</Text>
                    { item.dropdown &&
                        <Group justify="center">
                            <HoverCard>
                                <HoverCard.Target>
                                    <IconChevronCompactDown size={ 20 } />
                                </HoverCard.Target>
                                <HoverCardDropdown>
                                    <Text fw={ 500 } ff={ fontFamily[ 1 ] } size='xl'> Pre</Text>
                                    <Text fw={ 500 } ff={ fontFamily[ 1 ] } size='xl'> Mains</Text>
                                </HoverCardDropdown>
                            </HoverCard>
                        </Group>
                    }
                    <Space w="xl" />
                </React.Fragment>
            ) }
        </>

    }


    const renderMenuListForBurger = () =>
    {
        return <>
            { menuList.map( ( item: { key: number; value: string } ) => (
                <Text
                    key={ item.key }
                    onClick={ close }
                    py="sm"
                    ff={ fontFamily[ 1 ] }
                    fw={ 500 }
                    style={ { cursor: 'pointer' } }
                >
                    { item.value }
                </Text>
            ) ) }
        </>

    }

    return (
        <Box>
            <header className={ classes.header }>
                <Group justify="space-between" h="100%" wrap="nowrap" w="100%" >
                    <Image src={ LogoImg } style={ { width: 'fit-content', height: '-webkit-fill-available' } } alt="Logo" />
                    <Group h="100%" gap={ 0 } visibleFrom="sm">
                        { renderMenuList() }
                    </Group>
                    <Burger opened={ opened } onClick={ toggle } hiddenFrom="sm" aria-label='Toggle Menu' />
                    <Group visibleFrom="sm" gap="sm" >
                        <Button variant="filled" text='Log In' />
                        <Button text='Sign Up' variant="default" />
                    </Group>
                </Group>
            </header>
            <Drawer
                opened={ opened }
                onClose={ close }
                size="100%"
                padding="md"
                hiddenFrom="sm"
                zIndex={ 1001 } >
                <ScrollArea>
                    <Box>
                        { renderMenuListForBurger() }
                        <Box mt="lg">
                            <Button variant="filled" text="Log In" fullWidth />
                            <Space h="sm" />
                            <Button text="Sign Up" variant="default" fullWidth />
                        </Box>
                    </Box>
                </ScrollArea>
            </Drawer>
        </Box>
    );
}


const getCardStyles = ( isHovered: boolean ): React.CSSProperties => ( {
    cursor: "pointer",
    color: isHovered ? "Blue" : "Black",
    transition: "all 0.3s ease",
} );