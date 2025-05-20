"use client";

import { Box, Button, Group, Space, Text, } from '@mantine/core';
import classes from './HeaderMegaMenu.module.css';
import { fontFamily, menuList } from '@/app/Constants/types';
import React, { useState } from 'react';

export function HeaderMegaMenu ()
{
    const [ hoveredMenu, setHoveredMenu ] = useState<number | null>( null )


    const renderMenuList = () =>
    {
        return <>
            { menuList.map( ( item: { key: number, value: string } ) =>
                <React.Fragment key={ item.key }>
                    <Text style={ getCardStyles( hoveredMenu === item.key ) } onMouseEnter={ () => setHoveredMenu( item.key ) } onMouseLeave={ () => setHoveredMenu( null ) } fw={ 500 } ff={ fontFamily[ 1 ] } size='xl' >{ item.value }</Text>
                    <Space w="xl" />
                </React.Fragment>
            ) }
        </>

    }

    return (
        <Box pb={ 120 }>
            <header className={ classes.header }>
                <Group justify="space-between" h="100%">
                    {/* <Image src={ logoImg } radius="md"
                        h={ 200 }
                        w="auto"
                        fit="contain"
                        alt='Logo' /> */}
                    logo
                    <Group h="100%" gap={ 0 } visibleFrom="sm">
                        { renderMenuList() }
                    </Group>
                    <Group visibleFrom="sm">
                        <Button variant="default">Log in</Button>
                        <Button>Sign up</Button>
                    </Group>
                </Group>
            </header>
        </Box>
    );
}


const getCardStyles = ( isHovered: boolean ): React.CSSProperties => ( {
    cursor: "pointer",
    color: isHovered ? "Blue" : "Black",
    transition: "all 0.3s ease",
} );