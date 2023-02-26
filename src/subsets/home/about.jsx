import { CustomButton } from '@/components/button';
import { ImageList, Stack, Typography } from '@mui/material';
import Grid from '@mui/material/Unstable_Grid2';
import Image from 'next/image';
import React from 'react';

const GridItem = (props) => {
    const { value, image } = props;

    return (
        <Stack direction={{ xs: 'row', sm: 'column' }} alignItems="center" spacing={2}>
            <Image src={image} height={60} />

            <Typography textAlign="center" width="250px">{value}</Typography>
        </Stack>
    )
}

export const HomeAbout = () => {
    return (
        <Stack alignItems="center">
            <Stack width="70vw" position="relative" alignItems="center" spacing="3vw">
                <Typography fontSize={'2em'} fontWeight="100" color='rgb(234 86 13)' textAlign="center" lineHeight={'1em'}>
                    About
                    <br />
                    <span style={{ fontWeight: "700" }}>
                        Services
                    </span>
                </Typography>

                <Grid container spacing={6} width="70vw">
                    <Grid xs={12} md={4}>
                        <GridItem value="The data center is the right location" image={require('../../assets/icon1.svg')} />
                    </Grid>
                    <Grid xs={12} md={4}>
                        <GridItem value="Customers benefit from Tier Ⅲ certified facilities" image={require('../../assets/icon2.svg')} />
                    </Grid>
                    <Grid xs={12} md={4}>
                        <GridItem value="We offer customizable and client-catered technology solutions" image={require('../../assets/icon3.svg')} />
                    </Grid>

                    <Grid container spacing={6} width="70vw">
                        <Grid xs={12} md={6}>
                            <GridItem value="Our innovative facility design allows all businesses to enjoy the same economic benefits and lower operating costs than other legacy data centers" image={require('../../assets/costEfficient.svg')} />
                        </Grid>
                        <Grid xs={12} md={6}>
                            <GridItem value="Protecting connecting data application" image={require('../../assets/icon5.svg')} />
                        </Grid>
                    </Grid>
                </Grid>
            </Stack>
        </Stack>
    )
}