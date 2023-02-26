import React from 'react';
import { Stack, Typography } from '@mui/material';
import Grid from '@mui/material/Unstable_Grid2';
import { MultiActionAreaCard } from '../../components/multiactionCard'
import { CheckIcon } from '@/assets/icons';


export const Services = () => {
    return (
        <Stack width="100vw" position="relative" alignItems="center" spacing="6vw" backgroundColor='rgb(245 245 245)' paddingTop="30px" paddingBottom="30px">
            <Typography fontSize={'2em'} fontWeight="100" color='rgb(234 86 13)' textAlign="center" lineHeight={'1em'}>
{/* joohon dooshluulah  */}
                Our
                <br />
                <span style={{ fontWeight: "700" }}>
                Services
                </span>
            </Typography>


            <Grid container spacing={4} width="70vw">
                <Grid xs={12} md={6} display="flex" justifyContent="center">
                    <MultiActionAreaCard label="CO-LOCATION" values={[{ icon: <CheckIcon />, value: '99.98% SLA' }, { icon: <CheckIcon />, value: 'Modern Data Center' }, { icon: <CheckIcon />, value: 'Maintenance Support' }]} />
                </Grid>
                <Grid xs={12} md={6} display="flex" justifyContent="center">
                    <MultiActionAreaCard label="VIRTUAL MACHINE" values={[{ icon: <CheckIcon />, value: 'Flexibility' }, { icon: <CheckIcon />, value: 'Simplified Management' }, { icon: <CheckIcon />, value: 'Faster Time to Market' }]} />
                </Grid>
                <Grid xs={12} md={6} display="flex" justifyContent="center">
                    <MultiActionAreaCard label="PaaS" values={[{ icon: <CheckIcon />, value: 'Cloud Native Environment' }, { icon: <CheckIcon />, value: 'Faster Development' }, { icon: <CheckIcon />, value: 'Micro Services' }]} />
                </Grid>
                <Grid xs={12} md={6} display="flex" justifyContent="center">
                    <MultiActionAreaCard label="DEDICATED SERVER" values={[{ icon: <CheckIcon />, value: '99.98% SLA' }, { icon: <CheckIcon />, value: 'Dedicated Resources' }, { icon: <CheckIcon />, value: 'Maintenance Support' }]} />
                </Grid>
            </Grid>

        </Stack>
    )
}