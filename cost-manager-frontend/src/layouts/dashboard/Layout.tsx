import React from 'react'
import Head from 'next/head'
import Income from '../../pages/Household/Income'
import { Box, Container, Unstable_Grid2 as Grid } from '@mui/material'
import Expenditure from '../../pages/Household/Expenditure'
import Total from '../../pages/Household/Total'
import { ExpenditureGraph } from '../../pages/Household/ExpenditureGraph'
import { IncomeGraph } from '../../pages/Household/IncomeGraph'
import { TotalGraph } from '../../pages/Household/TotalGraph'

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
              <TotalGraph
                chartSeries={[
                  { name: 'This year', data: [18, 16, 5, 8, 3, 14, 14, 16, 17, 19, 18, 20] },
                  { name: 'Last year', data: [12, 11, 4, 6, 2, 9, 9, 10, 11, 12, 13, 13] },
                ]}
                sx={{ height: '100%' }}
              ></TotalGraph>
            </Grid>
            <Grid xs={12} md={6} lg={4}>
              <IncomeGraph chartSeries={[63, 15, 22]} labels={['Desktop', 'Tablet', 'Phone']} sx={{ height: '100%' }} />
            </Grid>
            <Grid xs={12} md={6} lg={4}>
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
