"use client";

import React, { useState } from 'react'
import { HeaderMegaMenu } from '../components/lowLevel/Header'
import { Box, Flex, Input, PasswordInput, Stepper } from '@mantine/core'
import { IconAt, IconPhone } from '@tabler/icons-react';
import Button from '../components/lowLevel/Button';

const page = () =>
{

    const [ active, setActive ] = useState( 0 );
    const [ formData, setFormData ] = useState( {
        fullName: '',
        email: '',
        phoneno: '',
        password: ''
    } )


    const onChangeFormData = ( e: React.ChangeEvent<HTMLInputElement>, type: string ) =>
    {
        const { value } = e.target;

        switch ( type )
        {
            case "fullName":
                setFormData( prev => ( { ...prev, fullName: value } ) );
                break;
            case "email":
                setFormData( prev => ( { ...prev, email: value } ) );
                break;
            case "phoneno":
                setFormData( prev => ( { ...prev, phoneno: value } ) );
                break;
            case "password":
                setFormData( prev => ( { ...prev, password: value } ) );
                break;
            default:
                break;
        }
    }

    const onClickSignUp = () =>
    {
        console.log( formData )
    }

    return (
        <div>
            <HeaderMegaMenu />
            <Box w={ 1000 }>
                <Stepper active={ active }>
                    <Stepper.Step label="First step" description="Create an account">
                        <Flex
                            gap="sm"
                            direction="column">
                            <Input radius="lg" onChange={ ( e: React.ChangeEvent<HTMLInputElement> ) => onChangeFormData( e, 'fullName' ) } value={ formData.fullName } placeholder="Full Name" autoComplete="off" />
                            <Input radius="lg" onChange={ ( e: React.ChangeEvent<HTMLInputElement> ) => onChangeFormData( e, 'email' ) } value={ formData.email } placeholder="Your email" autoComplete='new-password' leftSection={ <IconAt size={ 16 } /> } />
                            <Input radius="lg" onChange={ ( e: React.ChangeEvent<HTMLInputElement> ) => onChangeFormData( e, 'phoneno' ) } value={ formData.phoneno } placeholder="Phone No" autoComplete="off" type="number" leftSection={ <IconPhone size={ 16 } /> } />
                            <PasswordInput
                                radius="lg" onChange={ ( e: React.ChangeEvent<HTMLInputElement> ) => onChangeFormData( e, 'password' ) } value={ formData.password }
                                autoComplete='new-password'
                                placeholder="Password"
                            />
                            <Button text='Sign Up' variant="filled" radius="lg" onClick={ onClickSignUp } />
                        </Flex>
                    </Stepper.Step>
                    <Stepper.Step label="Second step" description="Verify email">
                        Step 2 content: Verify email
                    </Stepper.Step>
                    <Stepper.Step label="Final step" description="Get full access">
                        Step 3 content: Get full access
                    </Stepper.Step>
                </Stepper>
            </Box>
        </div>
    )
}

export default page