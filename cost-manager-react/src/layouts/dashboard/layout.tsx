import React from 'react'
import Expenditure from '../../pages/Household/Expenditure'
import ExpenditureGraph from '../../pages/Household/ExpenditureGraph';
import Income from '../../pages/Household/Income';
import { Box, Container, Grid } from '@mui/material';
import { ExpenditureProvider } from '../../providers/ExpenditureProvider';
import { ExpenditureGraphProvider } from '../../providers/ExpenditureGraphProvider';
import { IncomeProvider } from '../../providers/IncomeProvider';
import EaringsHistoryGraph from '../../pages/Household/EaringsHistoryGraph';
import { EaringsHistoryGraphProvider } from '../../providers/EaringsHistoryGraphProvider';
import { EaringsProvider } from '../../providers/EaringsProvider';
import Earing from '../../pages/Household/Earing';

function layout() {

  return (
    <>
      <Box component="main" sx={{ flexGrow: 1, py: 8}}>
        <Container maxWidth="xl">
          <Grid container spacing={3}>
          <Grid xs={12} sm={6} lg={3}>
              <EaringsProvider>
                <Earing title='総収支'></Earing>
              </EaringsProvider>
            </Grid>

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

            <Grid xs={12} lg={8}>
              <EaringsHistoryGraphProvider>
                <EaringsHistoryGraph title='総収入遷移'></EaringsHistoryGraph>
              </EaringsHistoryGraphProvider>
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