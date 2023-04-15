import React from 'react'
import Head from 'next/head'
import Income from '../../pages/Household/Income'
import { Box, Container, Unstable_Grid2 as Grid } from '@mui/material'
import Expenditure from '../../pages/Household/Expenditure'
import Total from '../../pages/Household/Total'
import { ExpenditureGraph } from '../../pages/Household/ExpenditureGraph'

const Layout: React.FC = () => {
  return (
    <>
      <Head>
        <title>Overview | Devias Kit</title>
      </Head>
      <Box component="main" sx={{ flexGrow: 1, py: 8 }}>
        <Container maxWidth="xl">
          <Grid container spacing={3}>
            <Grid xs={12} sm={6} lg={3}>
              <Income />
            </Grid>
            <Grid xs={12} sm={6} lg={3}>
              <Expenditure />
            </Grid>
            <Grid xs={12} sm={6} lg={3}>
              <Total />
            </Grid>
            <Grid xs={12} lg={8}>
              <ExpenditureGraph
                chartSeries={[63, 15, 22]}
                labels={['Desktop', 'Tablet', 'Phone']}
                sx={{ height: '100%' }}
              />
            </Grid>
          </Grid>
        </Container>
      </Box>
    </>
  )
}

export default Layout
