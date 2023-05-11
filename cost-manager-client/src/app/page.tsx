"use client"; // this is a client component
import { Inter } from 'next/font/google'
import UserProvider from './provider/userProvider'
import TopPage from './component/topPage';

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
     <UserProvider>
        <TopPage></TopPage>
     </UserProvider>
    </>
  )
}
