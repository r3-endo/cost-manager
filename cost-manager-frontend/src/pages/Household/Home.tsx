import React, { useEffect, useRef, useState } from 'react'
import Header from '../../components/Header'
import { Pie } from 'react-chartjs-2'
const labels = ['January', 'February', 'March', 'April', 'May', 'June']
const data = {
  labels: labels,
  datasets: [
    {
      label: 'My First dataset',
      backgroundColor: 'rgb(255, 99, 132)',
      borderColor: 'rgb(0,0,255)',
      data: [0, 10, 5, 2, 20, 30, 45],
    },
  ],
}
const Home: React.FC = () => {
  return (
    <div>
      <Header />
      <div>
        <h2>総資産</h2>
        <Pie data={data} />
      </div>
    </div>
  )
}

export default Home
