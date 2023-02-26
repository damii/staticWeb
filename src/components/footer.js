import { Box, Stack, Typography, useMediaQuery } from '@mui/material'
import Image from 'next/image'
import React from 'react'

export const Footer = () => {
    return (
        <Stack alignItems="center" width="100vw" backgroundColor="black">
            <Stack paddingTop={4} spacing={5} paddingBottom={10} justifyContent="space-between" width="80vw" height="auto">
                <Image src={require('../assets/logo2.png')} width={110} />

                <Stack direction="row" justifyContent="space-between">
                    <Stack>
                        <Typography color="white">HEAD OFFICE</Typography>
                        <Typography color="white">Address</Typography>
                        <Typography color="white">Email</Typography>
                    </Stack>
                    <Stack>
                        <Typography color="white">SERVICES</Typography>
                        <Typography color="white">Co-Location</Typography>
                        <Typography color="white">VPS</Typography>
                        <Typography color="white">Cloud</Typography>
                        <Typography color="white">Dedicated server</Typography>
                    </Stack>
                    <Stack>
                        <Typography color="white">MEDIA</Typography>
                        <Typography color="white">Gallery</Typography>
                    </Stack>
                    <Stack>
                        <Typography color="white">ABOUT US</Typography>
                        <Typography color="white">History</Typography>
                        <Typography color="white">Honors & Certification</Typography>
                    </Stack>
                    <Stack>
                        <Typography color="white">WHY S SYSTEMS</Typography>
                    </Stack>
                </Stack>
            </Stack>
        </Stack>
    )
}