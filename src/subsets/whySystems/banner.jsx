import { CustomButton } from '@/components/button';
import { Stack, Typography } from '@mui/material';
import { ST } from 'next/dist/shared/lib/utils';
import Image from 'next/image';
import React from 'react';

export const Banner = () => {
    return (
        <Stack width="100vw" position="relative" height={{ xs: '50vh', md: "50vw" }} alignItems="center" spacing="10vw" overflow="hidden">
            <Image src={require('../../assets/pictures/mountain.jpg')} style={{ width: '100%', height: '100%', position: 'absolute', top: 0, left: 0, zIndex: -1 }} />
            <Typography backgroundColor="rgba(128, 0, 0, 0.1)" position="absolute" bottom="100px" fontSize="2vw" fontWeight="bold" color="white" textAlign="center">
                WHY S SYSTEMS
            </Typography>

            {/* <Typography position="absolute" bottom="100px" color="white" textAlign="center" width="500px">
                Our data center is scalable and modular in design to provide
                complete flexibility within our clients' IT infrastructure.
            </Typography> */}
        </Stack >
    )
}