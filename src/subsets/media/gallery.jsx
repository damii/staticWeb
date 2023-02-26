import { CustomButton } from '@/components/button';
import { Box, Stack, Typography } from '@mui/material';
import Image from 'next/image';
import React from 'react';
import { useRouter } from 'next/router'

const Queue = ({ direction, text, image }) => (
    <Stack direction={direction === 'left' ? "row-reverse" : 'row'} justifyContent="space-between" width="100vw">
        <Stack paddingTop='30px' width="47%" alignItems={direction === 'left' ? 'start' : 'end'}>
            <Typography width={300} textAlign={direction === 'left' ? 'start' : 'end'}>{text}</Typography>
        </Stack>

        <Stack width="47%" alignItems={direction === 'left' ? 'end' : 'start'}>
            <Image style={{ width: '400px', height: '300px' }} src={image} />
        </Stack>
    </Stack>
)

export const Gallery = () => {

    const router = useRouter()

    return (
        <Stack width="100vw" position="relative" alignItems="center" spacing="10vw" overflow="hidden" backgroundColor='rgb(245, 245, 245)' paddingTop="50px" paddingBottom="30px">
            <Typography fontSize="16px" fontWeight="bold" color="rgb(242, 142, 0)" textAlign="center">Gallery</Typography>

            <Stack gap={5} style={{ marginTop: '40px !important' }}>
                <Queue direction="left" image={require('../../assets/pictures/media.jpg')} text="The most important infrastructure of 21st century" />
                <Queue direction="right" image={require('../../assets/pictures/advise.jpg')} text="Advisory from top consultancy firm  led by top business leaders in data center" />
                <Queue direction="left" image={require('../../assets/pictures/team.jpg')} text="Team of certified engineers with years of experience in Systems, Networks, Cyber security and Data center Infrastructure" />
                <Queue direction="right" image={require('../../assets/pictures/equipped.jpg')} text="Well equipped with technology from the world's leading manufacturer" />
                <Queue direction="left" image={require('../../assets/pictures/247.jpg')} text="24/7 on-site technical support will be the eyes and hands to manage your infrastructure" />
            </Stack>

            {/* <CustomButton href="https://forms.office.com/r/61wuDbWgf4" value="contac us" /> */}
            {/* <CustomButton value="contac us" /> */}
            {/* <CustomButton onClick={() => { router.push('/contactUs') }} value="CONTACT US" fontWeight="700" fontSize="13px" /> */}

        </Stack >
    )
}