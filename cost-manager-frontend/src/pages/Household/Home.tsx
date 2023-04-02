import React from 'react'
import Header from '../../components/Header'
import { Chart as ChartJS, Legend, Tooltip, ArcElement } from 'chart.js'
import { Pie } from 'react-chartjs-2'

ChartJS.register(Legend, Tooltip, ArcElement)

const chartData = {
  labels: ['Red', 'Blue', 'Yellow'],
  datasets: [
    {
      label: '# of Votes',
      data: [12, 19, 3],
      backgroundColor: ['rgb(255, 99, 132)', 'rgb(54, 162, 235)', 'rgb(255, 205, 86)'],
      borderWidth: 1,
    },
  ],
}

const chartOptions = {
  responsive: true,
}

const Home: React.FC = () => {
  return (
    <div>
      <Header />
      <div>
        <h2>総資産</h2>
        <div style={{ width: '50rem', height: '30rem', margin: 0, textAlign: 'center' }}>
          <Pie data={chartData} options={chartOptions} />
        </div>
      </div>
    </div>
  )
}

export default Home
