import { Box, Typography, useMediaQuery } from '@mui/material'
import Image from 'next/image'
import React, { useEffect, useRef, useState } from 'react'
import { CustomButton } from './button'
import Link from 'next/link'
import { useRouter } from 'next/router'


export const Header = () => {
    const matches = useMediaQuery('(max-width:600px)');
    const [isTop, setIsTop] = useState(true);
    const router = useRouter()
    // console.log(matches)

    useEffect(() => {
        const onscroll = (e) => {
            if (window.scrollY === 0) {
                setIsTop(true);
            } else {
                setIsTop(false)
            }

        };

        window.removeEventListener('scroll', onscroll);
        window.addEventListener('scroll', onscroll, { passive: true });
        return () => window.removeEventListener('scroll', onscroll);
    }, [])

    return (
        <Box display="flex" justifyContent="center" alignItems="center" width="100vw" position="fixed" top={0} left={0} backgroundColor={isTop ? "transparent" : "black"} zIndex={100} height={80}>

            <Box position="absolute" left={0} display="flex" marginLeft={4} alignItems="center" height={80}>
                <Link href='/'>
                    <Image src={require('../assets/logo2.png')} width={110} />
                </Link>
            </Box>


            <Box display="flex" justifyContent='space-around' alignItems="center" width="70vw">
                <CustomButton onClick={() => { router.push('/services') }} value="SERVICES" backgroundColor="transparent" fontWeight="700" fontSize="13px" />
                <CustomButton onClick={() => { router.push('/media') }} value="MEDIA" backgroundColor="transparent" fontWeight="700" fontSize="13px" />
                <CustomButton onClick={() => { router.push('/aboutUs') }} value="ABOUT US" backgroundColor="transparent" fontWeight="700" fontSize="13px" />
                <CustomButton onClick={() => { router.push('/whySystems') }} value="WHY S SYSTEMS" backgroundColor="transparent" fontWeight="700" fontSize="13px" />
            </Box>
        </Box>

    )
}

// flex, font, path