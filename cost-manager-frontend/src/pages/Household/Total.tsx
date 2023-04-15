import React from 'react'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import CurrencyDollarIcon from '@heroicons/react/24/solid/CurrencyDollarIcon'
import ArrowDownIcon from '@heroicons/react/24/solid/ArrowDownIcon'
import ArrowUpIcon from '@heroicons/react/24/solid/ArrowUpIcon'
import Typography from '@mui/material/Typography'
import { Avatar, Stack, SvgIcon } from '@mui/material'

const value = 5000 // Get from API
const difference = 20 // Get from API
const positive = false // Get From API

const Total = () => {
  return (
    <Card sx={{ height: '100%' }}>
      <CardContent>
        <Stack alignItems="flex-start" direction="row" justifyContent="space-between" spacing={3}>
          <Stack spacing={1}>
            <Typography color="text.secondary" variant="overline">
              収支
            </Typography>
            <Typography variant="h4">{value}</Typography>
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
        {difference && (
          <Stack alignItems="center" direction="row" spacing={2} sx={{ mt: 2 }}>
            <Stack alignItems="center" direction="row" spacing={0.5}>
              <SvgIcon color={positive ? 'success' : 'error'} fontSize="small">
                {positive ? <ArrowUpIcon /> : <ArrowDownIcon />}
              </SvgIcon>
              <Typography color={positive ? 'success.main' : 'error.main'} variant="body2">
                {difference}%
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

export default Total
