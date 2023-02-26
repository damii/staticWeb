import { Stack } from "@mui/material";
import { Banner } from "@/subsets/media/banner";
import { Gallery } from "@/subsets/media/gallery";
// import Text from "@/subsets/media/gallery"

export default function Media() {
    return (
        <Stack>
            <Banner />
            <Gallery/>
        </Stack>

    )
}