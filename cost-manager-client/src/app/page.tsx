"use client"; // this is a client component
import { Inter } from 'next/font/google'
import Sample from './component/Sample'
import UserProvider from './provider/userProvider'
import DeleteMe from './component/DeleteMe';

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
     <UserProvider>
        <Sample></Sample>
        <DeleteMe></DeleteMe>
     </UserProvider>
    </>
  )
}
