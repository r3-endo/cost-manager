import React, { createContext } from 'react'
import Expenditure from '../../pages/Household/Expenditure'
import ExpenditureGraph from '../../pages/Household/ExpenditureGraph';
import Income from '../../pages/Household/Income';
import { Box, Container, Grid } from '@mui/material';
import { ExpenditureProvider } from '../../providers/ExpenditureProvider';
import { ExpenditureGraphProvider } from '../../providers/ExpenditureGraphProvider';
import { IncomeProvider } from '../../providers/IncomeProvider';

function layout() {

  return (
    <>
      <Box component="main" sx={{ flexGrow: 1, py: 8}}>
        <Container maxWidth="xl">
          <Grid container spacing={3}>
            <Grid xs={12} sm={6} lg={3}>
              <ExpenditureProvider>
                <Expenditure title='総支出'></Expenditure>
              </ExpenditureProvider>
            </Grid>

            <Grid xs={12} sm={6} lg={3}>
              <IncomeProvider>
                <Income title='総収入'></Income>
              </IncomeProvider>
            </Grid>

            <Grid xs={12} md={6} lg={4}>
              <ExpenditureGraphProvider>
                <ExpenditureGraph title='支出内訳'></ExpenditureGraph>
              </ExpenditureGraphProvider>
            </Grid>
          </Grid>
        </Container>
    </Box>
    </>

  )
}

export default layout