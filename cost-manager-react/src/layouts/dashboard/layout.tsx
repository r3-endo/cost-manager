import React, { useState } from 'react'
import Expenditure from '../../pages/Household/Expenditure'
import ExpenditureGraph from '../../pages/Household/ExpenditureGraph';
import Income from '../../pages/Household/Income';
import { Box, Button, Container, Grid } from '@mui/material';
import { ExpenditureProvider } from '../../providers/ExpenditureProvider';
import { ExpenditureGraphProvider } from '../../providers/ExpenditureGraphProvider';
import { IncomeProvider } from '../../providers/IncomeProvider';
import EaringsHistoryGraph from '../../pages/Household/EaringsHistoryGraph';
import { EaringsHistoryGraphProvider } from '../../providers/EaringsHistoryGraphProvider';
import { EaringsProvider } from '../../providers/EaringsProvider';
import Earing from '../../pages/Household/Earing';
import EditIcon from '@mui/icons-material/Edit';
import InputModal from '../../pages/Household/InputModal';

function layout() {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [open, setOpen] = useState(false);

  const handleClick = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <Box component="main" sx={{ flexGrow: 1, py: 8}}>
        <Container maxWidth="xl">
          <Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>
            <Button variant="outlined" startIcon={<EditIcon />} onClick={handleClick}>編集</Button>
            <InputModal open={open} handleClose={handleClose}></InputModal>
          </Box>
          <Grid container spacing={3}>
            <Grid xs={12} sm={6} lg={3} style={ {padding: '.5rem'}}>
              <EaringsProvider>
                <Earing title='総収支'></Earing>
              </EaringsProvider>
            </Grid>

            <Grid xs={12} sm={6} lg={3} style={ {padding: '.5rem'}}>
              <ExpenditureProvider>
                <Expenditure title='総支出'></Expenditure>
              </ExpenditureProvider>
            </Grid>

            <Grid xs={12} sm={6} lg={3} style={ {padding: '.5rem'}}>
              <IncomeProvider>
                <Income title='総収入'></Income>
              </IncomeProvider>
            </Grid>

            <Grid xs={12} lg={8} style={ {padding: '.5rem'}}>
              <EaringsHistoryGraphProvider>
                <EaringsHistoryGraph title='総収入遷移'></EaringsHistoryGraph>
              </EaringsHistoryGraphProvider>
            </Grid>

            <Grid xs={12} md={6} lg={4} style={ {padding: '.5rem'}}>
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