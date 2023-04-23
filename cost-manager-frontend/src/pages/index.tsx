import React, { useState } from 'react'
import Head from 'next/head'
import { Box, Container, Unstable_Grid2 as Grid } from '@mui/material'
import Expenditure from './Household/Expenditure'
import { ExpenditureGraph } from './Household/ExpenditureGraph'
import Income from './Household/Income'
import { IncomeGraph } from './Household/IncomeGraph'
import Total from './Household/Total'
import { TotalGraph } from './Household/TotalGraph'
import { Layout as DashboardLayout } from '../layouts/dashboard/layout'
import SideNav from '../layouts/dashboard/SideNav'

const thisYearEarnings = {
  data: [8, 16, 5, 8, 3, 14, 14, 16, 17, 19, 18, 20],
} // Get From API

const lastYearEarnings = {
  data: [12, 11, 4, 6, 2, 9, 9, 10, 11, 12, 13, 13],
} // Get From API

const Page = () => {
  const [openNav, setOpenNav] = useState(false)
  return (
    <>
      <SideNav onClose={() => setOpenNav(false)} open={openNav} />
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
                  { name: 'This year', data: thisYearEarnings.data },
                  { name: 'Last year', data: lastYearEarnings.data },
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

Page.getLayout = (page: any) => {
  // eslint-disable-next-line prettier/prettier
  <DashboardLayout>{page}</DashboardLayout>
}

export default Page
