import { Stack, Typography } from '@mui/material';
import React from 'react';
import { CustomButton } from '@/components/button';

export const Text = () => {
    return (
        <Stack width="100vw" position="relative" height={{ xs: '50vh', md: "20vw" }} alignItems="center" spacing="20px" overflow="hidden" backgroundColor='rgb(245, 245, 245)' paddingTop="50px">
            <Stack width="100vw" position="relative" height={{ xs: '50vh', md: "20vw" }} alignItems="center" spacing="20px" overflow="hidden" backgroundColor='rgb(245, 245, 245)' paddingTop="50px">
                <Typography width='900px' textAlign='center'>
                    "We'd like to be able to talk to you more about how S Systems can offer you
                    a data center solution designed to your needs. If you'd like to leave your details below we will be in touch shortly"
                </Typography>
            </Stack >


            <Stack width="100vw" position="relative" height={{ xs: '50vh', md: "20vw" }} alignItems="center" spacing="20px" overflow="hidden" backgroundColor='rgb(245, 245, 245)' paddingTop="50px">
                <CustomButton href="https://forms.office.com/r/61wuDbWgf4" value="CONTACT US" fontWeight="700" fontSize="13px" />
            </Stack>
        </Stack>
    )
}