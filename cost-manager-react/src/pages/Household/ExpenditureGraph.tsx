import { Box, Card, CardContent, CardHeader, Stack, Typography, useTheme } from '@mui/material'
import React, { memo } from 'react'
import { Chart } from '../../components/Chart';
import { useRecoilValue } from 'recoil';
import { expenditureGraphState } from '../../store/expenditureGraphState';

const setChartOptions = (labels: string[]) => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const theme = useTheme();
  return {
    chart: {
      background: 'transparent',
    },
    colors: [theme.palette.primary.main, theme.palette.success.main, theme.palette.warning.main],
    dataLabels: {
      enabled: false,
    },
    labels,
    legend: {
      show: false,
    },
    plotOptions: {
      pie: {
        expandOnClick: false,
      },
    },
    states: {
      active: {
        filter: {
          type: 'none',
        },
      },
      hover: {
        filter: {
          type: 'none',
        },
      },
    },
    stroke: {
      width: 0,
    },
    theme: {
      mode: theme.palette.mode,
    },
    tooltip: {
      fillSeriesColor: false,
    },
  }
}

function ExpenditureGraph(props: {title: string}) {
  const expenditureGraphData = useRecoilValue(expenditureGraphState);
  const chartOptions = setChartOptions(expenditureGraphData.categories.map(category => category.label));
  const chartSeries: number[] = expenditureGraphData.categories.map(category => category.percentage);
  const labels: string[] = expenditureGraphData.categories.map(category => category.label);

  return (
    <Card sx={{ height: '100%' }}>
      <CardHeader title={props.title} />
      <CardContent>
        <Chart height={300} options={chartOptions} series={chartSeries} type="donut" width="100%" />
        <Stack alignItems="center" direction="row" justifyContent="center" spacing={2} sx={{ mt: 2 }}>
          {chartSeries.map((item: number, index: number) => {
            const label = labels[index];
            return (
              <Box
                key={label}
                sx={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                }}
              >
                <Typography sx={{ my: 1 }} variant="h6">
                  {label}
                </Typography>
                <Typography color="text.secondary" variant="subtitle2">
                  {item}%
                </Typography>
              </Box>
            )
          })}
        </Stack>
      </CardContent>
    </Card>
  )
}

export default memo(ExpenditureGraph)