import { HomeAbout } from "@/subsets/home/about";
import { Banner } from "@/subsets/home/banner";
import { Why } from "@/subsets/home/why";
import { Box, Stack } from "@mui/material";
import { Services } from "@/subsets/home/services";

export default function Home() {
  return (
    <Stack spacing={10} paddingBottom={10}>
      <Banner />
      
      <HomeAbout />

      <Services/>

      <Why />
    </Stack>
  )
}
