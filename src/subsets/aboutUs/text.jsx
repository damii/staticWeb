import { Stack, Typography } from '@mui/material';
import React from 'react';
import { CustomButton } from '@/components/button';
import { useRouter } from 'next/router';

export const Text = () => {

    const router = useRouter()

    return (
        <Stack width="100vw" position="relative" height={{ xs: '50vh', md: "35vw" }} alignItems="center" spacing="20px" overflow="hidden" backgroundColor='rgb(245, 245, 245)' paddingTop="30px">
            <Stack width="100vw" position="relative" height={{ xs: '50vh', md: "35vw" }} alignItems="center" spacing="20px" overflow="hidden" backgroundColor='rgb(245, 245, 245)' paddingTop="30px">
                <Typography fontSize="16px" fontWeight="bold" color="rgb(242, 142, 0)" textAlign="center">History</Typography>
                <Typography width='900px' textAlign='center'>
                    The S SYSTEMS data center ensures 99% operability with 2N redundant
                    power supplies. It is one of the most efficient facilities in the central Asian region.

                    Our data center is scalable and modular in design to provide complete flexibility within our clients' IT infrastructure. Whether your business needs
                    racks, rooms, a full suite or an entire data center, our innovative facility design allows all businesses to enjoy the same economic benefits and lower
                    operating costs than other legacy data centers.
                </Typography>


                <Typography fontSize="16px" fontWeight="bold" color="rgb(242, 142, 0)" textAlign="center">Honors & Certification</Typography>
                <Typography width='900px' textAlign='center'>
                    S Systems data center provider and leading innovation in the Mongolian Manufacturing industry, offering customizable and
                    client-catered technology solutions.

                    Industry-practiced standards for continuous self-development (DevOps) and social and sustainable responsibilities.

                </Typography>
                {/* <CustomButton onClick={() => { router.push('/contactUs') }} value="CONTACT US" fontWeight="700" fontSize="13px" /> */}

                <Stack width="100vw" position="relative" height={{ xs: '50vh', md: "30vw" }} alignItems="center" spacing="20px" overflow="hidden" backgroundColor='rgb(245, 245, 245)' paddingTop="50px">
                    <CustomButton onClick={() => { router.push('/contactUs') }} value="CONTACT US" fontWeight="700" fontSize="13px" />
                </Stack>
            </Stack >
        </Stack >
    )
}