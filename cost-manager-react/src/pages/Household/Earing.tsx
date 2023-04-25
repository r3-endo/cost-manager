import React, { memo } from 'react'
import ArrowDownIcon from '@heroicons/react/24/solid/ArrowDownIcon';
import ArrowUpIcon from '@heroicons/react/24/solid/ArrowUpIcon';
import CurrencyDollarIcon from '@heroicons/react/24/solid/CurrencyDollarIcon';
import { Card, CardContent, Typography, Avatar, SvgIcon } from '@mui/material';
import { Stack } from '@mui/system';
import { useRecoilValue } from 'recoil';
import { earingsState } from '../../store/earingsState';

function Earings(props: {title: string}) {
  const earingsData = useRecoilValue(earingsState);

  return (
    <Card sx={{ height: '100%' }}>
      <CardContent>
        <Stack alignItems="flex-start" direction="row" justifyContent="space-between" spacing={3}>
          <Stack spacing={1}>
            <Typography color="text.secondary" variant="overline">
              {props.title}
            </Typography>
            <Typography variant="h4">{earingsData.value}</Typography>
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
        {earingsData.difference && (
          <Stack alignItems="center" direction="row" spacing={2} sx={{ mt: 2 }}>
            <Stack alignItems="center" direction="row" spacing={0.5}>
              <SvgIcon color={earingsData.positive ? 'success' : 'error'} fontSize="small">
                {earingsData.positive ? <ArrowUpIcon /> : <ArrowDownIcon />}
              </SvgIcon>
              <Typography color={earingsData.positive ? 'success.main' : 'error.main'} variant="body2">
                {earingsData.difference}%
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

export default memo(Earings)