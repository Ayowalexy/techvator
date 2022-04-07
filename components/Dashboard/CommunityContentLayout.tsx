import { Grid } from '@chakra-ui/react'
import React, { ReactNode } from 'react'


type CommunityContentLayoutProps = {
    children: ReactNode |  ReactNode[]
}
function CommunityContentLayout({children}: CommunityContentLayoutProps): JSX.Element {
  return (
    <Grid
    py='5rem'
    gap='3.3rem'
    templateColumns='30rem auto 30rem'
    >{children}
    </Grid>
  )
}

export default CommunityContentLayout