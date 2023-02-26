import { CustomButton } from '@/components/button';
import { Stack, Typography } from '@mui/material';
import Image from 'next/image';
import React from 'react';

export const Banner = () => {
    return (
        <Stack width="100vw" position="relative" height={{ xs: '50vh', md: "50vw" }} alignItems="center" spacing="10vw" overflow="hidden">
            <Image src={require('../../assets/pictures/contact.png')} style={{ width: '100%', height:'125%',position: 'absolute', top: 0, left: 0, zIndex: -1 }} />
                <Typography backgroundColor="rgba(0, 0, 0, 0.5)" position="absolute" bottom="100px" fontSize="2vw" fontWeight="bold" color="white" textAlign="center">
                    CONTACT US
                </Typography>
        </Stack >
    )
}