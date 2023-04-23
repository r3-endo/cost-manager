import ArrowDownIcon from '@heroicons/react/24/solid/ArrowDownIcon'
import ArrowUpIcon from '@heroicons/react/24/solid/ArrowUpIcon'
import CurrencyDollarIcon from '@heroicons/react/24/solid/CurrencyDollarIcon'
import { Card, CardContent, Stack, Typography, Avatar, SvgIcon } from '@mui/material'
import React, { memo } from 'react'
import { useRecoilValue } from 'recoil'
import { expenditureState } from '../../store/expenditureState'

function Expenditure(props: {title: string}) {
  const expenditureData = useRecoilValue(expenditureState);

  return (
    <Card sx={{ height: '100%' }}>
      <CardContent>
        <Stack alignItems="flex-start" direction="row" justifyContent="space-between" spacing={3}>
          <Stack spacing={1}>
            <Typography color="text.secondary" variant="overline">
              {props.title}
            </Typography>
            <Typography variant="h4">{expenditureData.value}</Typography>
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
        {expenditureData.difference && (
          <Stack alignItems="center" direction="row" spacing={2} sx={{ mt: 2 }}>
            <Stack alignItems="center" direction="row" spacing={0.5}>
              <SvgIcon color={expenditureData.positive ? 'success' : 'error'} fontSize="small">
                {expenditureData.positive ? <ArrowUpIcon /> : <ArrowDownIcon />}
              </SvgIcon>
              <Typography color={expenditureData.positive ? 'success.main' : 'error.main'} variant="body2">
                {expenditureData.difference}%
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

export default memo(Expenditure)