import { CheckIcon } from "@/assets/icons";
import { MultiActionAreaCard } from "@/components/multiactionCard";
import { Grid, Stack, Typography } from "@mui/material";
import { CustomButton } from "@/components/button";
import { Banner } from "@/subsets/services/banner";
import {Text} from '@/subsets/services/text'

export default function Services() {
    return (
        <Stack direction="column" minHeight="calc(100vh - 160px)">

            <Banner />
            <Text/>

        </Stack>


    )
}