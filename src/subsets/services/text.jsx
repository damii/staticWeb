import { Stack, Typography } from '@mui/material';
import React from 'react';
import { CustomButton } from '@/components/button';

export const Text = () => {
    return (
        <Stack width="100vw" position="relative" height={{ xs: '50vh', md: "50vw" }} alignItems="center" spacing="20px" overflow="hidden" backgroundColor='rgb(245, 245, 245)' paddingTop="50px">
            <Typography fontSize="16px" sx={{ textDecoration: 'underline' }} fontWeight="bold" color="rgb(17, 34, 78)" textAlign="center">VIRTUAL MACHINE</Typography>
            <Typography width='900px' textAlign='center'>
                We provide secure, powerful and resizable virtual machines (VMs) to support any workloads or applications. VM types consist of
                a combination of CPU, memory and storage. All Virtual Machine types are running on the INTEL XEON GOLD processor.
            </Typography>

            <Typography fontSize="16px" sx={{ textDecoration: 'underline' }} fontWeight="bold" color="rgb(17, 34, 78)" textAlign="center">PaaS</Typography>
            <Typography width='900px' textAlign='center'>
                Platform as a service (PaaS) is a cloud-based computing model that allows development teams to build, test, deploy
                and scale applications faster and more cost-effectively.
            </Typography>

            <Typography fontSize="16px" sx={{ textDecoration: 'underline' }} fontWeight="bold" color="rgb(17, 34, 78)" textAlign="center">CO-LOCATION</Typography>
            <Typography width='900px' textAlign='center'>
                Datacenter collocation services help protect critical data with the most aggressive SLA of 99.98% availability or 5 minutes of
                downtime per year in our resilient datacenter with two options available:
                <br />
                1. Best suited for customers with a small and mid size number of
                counters that can be placed in a common room. Ideal for customers who need to keep installation and setup costs to a minimum.
                <br />
                2. Customers with larger deployments or who need to configure their data room to meet specific requirements will appreciate the
                flexibility when they have additional control over their deployment setup, including the option of a dedicated plant.
            </Typography>

            <Typography fontSize="16px" sx={{ textDecoration: 'underline' }} fontWeight="bold" color="rgb(17, 34, 78)" textAlign="center">DEDICATED SERVER</Typography>
            <Typography width='900px' textAlign='center'>
                All resources are allocated for predictable peak performance to ensure no sharing with other instances, no sharing with neighbors, and no theft.
                By purchasing a dedicated server, you always get 100% CPU, so you can run latency-sensitive applications and workloads.
            </Typography>
            {/* <CustomButton href="https://www.squarespace.com/ecommerce/membership-sites/?channel=display_nonprogrammatic&subchannel=dribbble&campaign=29044504&subcampaign=354956713_545916079&source=184145607&utm_medium=display_nonprogrammatic&utm_source=dribbble&utm_content=" value="Contac us" /> */}
        </Stack >
    )
}