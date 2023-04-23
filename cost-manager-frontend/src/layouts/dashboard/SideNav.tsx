/* eslint-disable react/react-in-jsx-scope */
import { Box, Drawer, Stack, useMediaQuery } from '@mui/material'
import { usePathname } from 'next/navigation'
import { Scrollbar } from '../../components/Scrollbar'
import { items } from './config'
import { SideNavItem } from './SideNavItem'

const SideNav = (props: any) => {
  const { open, onClose } = props
  const pathname = usePathname()

  const content = (
    <Scrollbar
      sx={{
        height: '100%',
        '& .simplebar-content': {
          height: '100%',
        },
        '& .simplebar-scrollbar:before': {
          background: 'neutral.400',
        },
      }}
    >
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          height: '100%',
        }}
      >
        <Box
          component="nav"
          sx={{
            flexGrow: 1,
            px: 2,
            py: 3,
          }}
        >
          <Stack
            component="ul"
            spacing={0.5}
            sx={{
              listStyle: 'none',
              p: 0,
              m: 0,
            }}
          >
            {items.map((item) => {
              const active = item.path ? pathname === item.path : false

              return (
                <SideNavItem
                  active={active}
                  disabled={false} // todo
                  external={false} // todo
                  icon={item.icon}
                  key={item.title}
                  path={item.path}
                  title={item.title}
                />
              )
            })}
          </Stack>
        </Box>
      </Box>
    </Scrollbar>
  )

  return (
    <Drawer
      anchor="left"
      onClose={onClose}
      open={open}
      PaperProps={{
        sx: {
          backgroundColor: 'neutral.800',
          color: 'common.white',
          width: 280,
        },
      }}
      sx={{ zIndex: (theme) => theme.zIndex.appBar + 100 }}
      variant="temporary"
    >
      {content}
    </Drawer>
  )
}

export default SideNav
