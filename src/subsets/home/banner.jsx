import { CustomButton } from '@/components/button';
import { Stack, Typography } from '@mui/material';
import Image from 'next/image';
import React from 'react';

export const Banner = () => {
    return (
        // <Stack width="100vw" position="relative" height="50vw" justifyContent="center" alignItems="center">
        <Stack width="100vw" position="relative" height={{ xs: '50vh', md: "50vw" }} alignItems="center" spacing="10vw" overflow="hidden" >
            <Image src={require('../../assets/pictures/horse.jpg')} style={{ width: '100%', height:'100%',position: 'absolute', top: 0, left: 0, zIndex: -1 }} />

            <Typography backgroundColor="rgba(128, 0, 0, 0.2)" position="absolute" bottom="200px" fontSize="2vw" fontWeight="bold" color="white" textAlign="center">
                LEADING TECHNOLOGY SERVICE PROVIDER
                <br />
                FOR MANUFACTURING INDUSTRY
                <br />
            </Typography>
        </Stack >
    )
}