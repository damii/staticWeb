import { Box, Stack, Typography } from "@mui/material";
import { CustomButton } from "@/components/button";
import React, { Suspense } from "react";
import Image from "next/image";
import { useRouter } from "next/router";

const GridItem = (props) => {
    const { value } = props;

    return (
        <Stack direction={{ xs: 'row', sm: 'column' }}>
            {/* <Image src={require('../../assets/cost.png')} />
            <Image src={require('../../assets/future.png')}/>
            <Image src={require('../../assets/sustainable.png')}/> */}
            <Typography>{value}</Typography>
        </Stack>
    )
}

const WhyCard = (props) => {
    const { value, image, backgroundColor } = props;

    return (
        <Stack height={220} width={220} backgroundColor={backgroundColor} alignItems="center">
            <Box width="100%" height="fit-content" bgcolor="rgba(255, 255, 255, 0.3)" paddingTop="10px" paddingBottom="20px" paddingLeft="10px">
                <Typography color="white" fontWeight="bold" fontSize={18} textAlign="start" width="90%">{value}</Typography>
            </Box>


            <Box display="flex" height="100%" alignItems="center">
                <Image src={image} width={100} />
            </Box>
        </Stack>
    )
}

export const Why = () => {

    const router = useRouter()

    return (
            <Stack width="100vw" alignItems="center" spacing={6}>
                <Typography fontSize={'2em'} fontWeight="100" color='rgb(234, 86, 13)' textAlign="center" lineHeight={'1em'}>
                    Why
                    <br />
                    <span style={{ fontWeight: "bold" }}>
                        S Systems
                    </span>
                </Typography>


                <Stack width="60vw" flexWrap="wrap" direction={{ sx: "column", md: 'row' }} justifyContent="space-between" alignItems="center" gap={8} paddingTop="50px">
                    <WhyCard value="Professional team" image={require('../../assets/icon4.svg')} backgroundColor="rgb(98, 123, 151)" />
                    <WhyCard value="Future ready" image={require('../../assets/future.svg')} backgroundColor="rgb(127, 113, 128)" />
                    <WhyCard value="Sustainable" image={require('../../assets/sustainable.svg')} backgroundColor="rgb(242, 142, 0)" />
                </Stack>
                {/* <CustomButton onClick={() => { router.push('/contactUs') }} value="CONTACT US" fontWeight="700" fontSize="13px" /> */}
            </Stack>
    )
}