/* eslint-disable react/react-in-jsx-scope */
import { Button, Card, CardActions, CardContent, CardHeader, Divider, SvgIcon } from '@mui/material'
import { alpha, useTheme } from '@mui/material/styles'
import ArrowPathIcon from '@heroicons/react/24/solid/ArrowPathIcon'
import ArrowRightIcon from '@heroicons/react/24/solid/ArrowRightIcon'
import { Chart } from '../../components/Chart'
import React, { memo } from 'react'
import { earingsHistoryGraphState } from '../../store/earingsHistoryState';
import { useRecoilValue } from 'recoil'

// eslint-disable-next-line react-hooks/rules-of-hooks

const setChartOptions = () => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const theme = useTheme()

  return {
    chart: {
      background: 'transparent',
      stacked: false,
      toolbar: {
        show: false,
      },
    },
    colors: [theme.palette.primary.main, alpha(theme.palette.primary.main, 0.25)],
    dataLabels: {
      enabled: false,
    },
    fill: {
      opacity: 1,
      type: 'solid',
    },
    grid: {
      borderColor: theme.palette.divider,
      strokeDashArray: 2,
      xaxis: {
        lines: {
          show: false,
        },
      },
      yaxis: {
        lines: {
          show: true,
        },
      },
    },
    legend: {
      show: false,
    },
    plotOptions: {
      bar: {
        columnWidth: '40px',
      },
    },
    stroke: {
      colors: ['transparent'],
      show: true,
      width: 2,
    },
    theme: {
      mode: theme.palette.mode,
    },
    xaxis: {
      axisBorder: {
        color: theme.palette.divider,
        show: true,
      },
      axisTicks: {
        color: theme.palette.divider,
        show: true,
      },
      categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
      labels: {
        offsetY: 5,
        style: {
          colors: theme.palette.text.secondary,
        },
      },
    },
    yaxis: {
      labels: {
        formatter: (value: any) => (value > 0 ? `${value}K` : `${value}`),
        offsetX: -10,
        style: {
          colors: theme.palette.text.secondary,
        },
      },
    },
  }
}

function EaringsHistoryGraph(props: {title: string}) {
  const earingsHistoryGraphData = useRecoilValue(earingsHistoryGraphState);
  const thisYearDatas: number[] = earingsHistoryGraphData.thisYearDatas.map(data => data.earings);
  const lastYearDatas: number[] = earingsHistoryGraphData.lastYearDatas.map(data => data.earings);

  const chartOptions = setChartOptions();

  return (
    <Card sx={{ height: '100%' }}>
      <CardHeader
        action={
          <Button
            color="inherit"
            size="small"
            startIcon={
              <SvgIcon fontSize="small">
                <ArrowPathIcon />
              </SvgIcon>
            }
          >
            Sync
          </Button>
        }
        title={props.title}
      />
      <CardContent>
        <Chart height={350} options={chartOptions} series={[{name: 'this year', data: thisYearDatas}, {name: 'last year', data: lastYearDatas}]} type="bar" width="100%" />
      </CardContent>
      <Divider />
      <CardActions sx={{ justifyContent: 'flex-end' }}>
        <Button
          color="inherit"
          endIcon={
            <SvgIcon fontSize="small">
              <ArrowRightIcon />
            </SvgIcon>
          }
          size="small"
        >
          Overview
        </Button>
      </CardActions>
    </Card>
  )
}

export default memo(EaringsHistoryGraph)