import { Stack, Typography } from '@mui/material';
import React from 'react';
import Grid from '@mui/material/Unstable_Grid2';
import Image from 'next/image';

const GridItem = (props) => {
    const { value, image } = props;

    return (
        <Stack direction={{ xs: 'row', sm: 'column' }} alignItems="center" spacing={2}>
            <Image src={image} height={60} />

            <Typography textAlign="center" width="250px">{value}</Typography>
        </Stack>
    )
}

export const Text = () => {
    return (

        <Stack width="100vw" position="relative" height={{ xs: '10vh', md: "40vw" }} alignItems="center" spacing="20px" overflow="hidden" backgroundColor='rgb(245, 245, 245)' paddingTop="50px">
            <Typography fontSize="16px" fontWeight="bold" color="rgb(242, 142, 0)" textAlign="center">Future of data center sustainability</Typography>
            <Typography width='800px' textAlign='center'>
                S-System is a data center provider and leading innovation house in Mongolia's technology infrastructure industry,
                that offers customizable and client-catered solutions.
            </Typography>

            <Stack width="60vw" flexWrap="wrap" direction={{ sx: "column", md: 'row' }} justifyContent="space-between" alignItems="center" gap={8} paddingTop="90px">

                <Grid container spacing={6} width="70vw">
                    <Grid xs={12} md={4}>
                        <GridItem image={require('../../assets/icon4.svg')} />
                        <Typography width='250px' textAlign='center'>
                            <Typography>Professional team</Typography>
                            Team of certified engineers with proven track record and a long-lasting experience in systems and network engineering,
                            cyber sercurity and data center infrastucture
                        </Typography>
                    </Grid>
                    <Grid xs={12} md={4}>
                        <GridItem image={require('../../assets/future.svg')} />
                        <Typography width='250px' textAlign='center'>
                            <Typography>Future ready</Typography>
                            Well equipped with latest system hardware from world leading manufacturers
                        </Typography>
                    </Grid>
                    <Grid xs={12} md={4}>
                        <GridItem image={require('../../assets/sustainable.svg')} />
                        <Typography width='250px' textAlign='center'>
                            <Typography>Sustainable</Typography>
                            Tier 3 Facility, Uninterruptible power supply
                        </Typography>
                    </Grid>
                </Grid>
            </Stack>
        </Stack >
    )
}