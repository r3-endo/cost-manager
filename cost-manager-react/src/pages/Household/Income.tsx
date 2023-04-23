import React, { memo, useContext } from 'react'
import ArrowDownIcon from '@heroicons/react/24/solid/ArrowDownIcon';
import ArrowUpIcon from '@heroicons/react/24/solid/ArrowUpIcon';
import CurrencyDollarIcon from '@heroicons/react/24/solid/CurrencyDollarIcon';
import { Card, CardContent, Typography, Avatar, SvgIcon } from '@mui/material';
import { Stack } from '@mui/system';
import { incomeState } from '../../store/incomeState';
import { useRecoilValue } from 'recoil';

function Income(props: {title: string}) {
  const incomeData = useRecoilValue(incomeState);

  return (
    <Card sx={{ height: '100%' }}>
      <CardContent>
        <Stack alignItems="flex-start" direction="row" justifyContent="space-between" spacing={3}>
          <Stack spacing={1}>
            <Typography color="text.secondary" variant="overline">
              {props.title}
            </Typography>
            <Typography variant="h4">{incomeData.value}</Typography>
          </Stack>
          <Avatar
            sx={{
              backgroundColor: 'error.main',
              height: 56,
              width: 56,
            }}
          >
            <SvgIcon>
              <CurrencyDollarIcon />
            </SvgIcon>
          </Avatar>
        </Stack>
        {incomeData.difference && (
          <Stack alignItems="center" direction="row" spacing={2} sx={{ mt: 2 }}>
            <Stack alignItems="center" direction="row" spacing={0.5}>
              <SvgIcon color={incomeData.positive ? 'success' : 'error'} fontSize="small">
                {incomeData.positive ? <ArrowUpIcon /> : <ArrowDownIcon />}
              </SvgIcon>
              <Typography color={incomeData.positive ? 'success.main' : 'error.main'} variant="body2">
                {incomeData.difference}%
              </Typography>
            </Stack>
            <Typography color="text.secondary" variant="caption">
              Since last month
            </Typography>
          </Stack>
        )}
      </CardContent>
    </Card>
  )
}

export default memo(Income)