import { styled } from '@mui/material/styles'
import { usePathname } from 'next/navigation'
import React, { useCallback, useEffect, useState } from 'react'
import SideNav from './SideNav'

const SIDE_NAV_WIDTH = 280

const LayoutRoot = styled('div')(({ theme }) => ({
  display: 'flex',
  flex: '1 1 auto',
  maxWidth: '100%',
  [theme.breakpoints.up('lg')]: {
    paddingLeft: SIDE_NAV_WIDTH,
  },
}))

const LayoutContainer = styled('div')({
  display: 'flex',
  flex: '1 1 auto',
  flexDirection: 'column',
  width: '100%',
})

export const Layout = (props: any) => {
  const { children } = props
  const pathname = usePathname()
  const [openNav, setOpenNav] = useState(true)

  const handlePathnameChange = useCallback(() => {
    if (openNav) {
      setOpenNav(true)
    }
  }, [openNav])

  useEffect(() => {
    handlePathnameChange()
  }, [pathname])

  return (
    <>
      <SideNav onClose={() => setOpenNav(true)} open={openNav} />
      <LayoutRoot>
        <LayoutContainer>{children}</LayoutContainer>
      </LayoutRoot>
    </>
  )
}

export default Layout
