import {
     Box,
     Icon,
     Grid
     } from "@chakra-ui/react";
import { ReactNode } from 'react'

type CommunityMobileLayoutParentProps = {
    children: ReactNode
}


function CommunityMobileLayout ({
    children
}: CommunityMobileLayoutParentProps) : JSX.Element {
    return (
        <Grid>
            {children}
        </Grid>
    )
}

export default CommunityMobileLayout