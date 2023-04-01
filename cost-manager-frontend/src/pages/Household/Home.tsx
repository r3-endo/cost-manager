import React from 'react'
import Header from '../../components/Header'
import {
  Chart as ChartJS,
  LinearScale,
  CategoryScale,
  BarElement,
  LineElement,
  Legend,
  Tooltip,
  LineController,
  BarController,
  DoughnutController,
} from 'chart.js'
import { Bar } from 'react-chartjs-2'

ChartJS.register(
  LinearScale,
  CategoryScale,
  BarElement,
  LineElement,
  Legend,
  Tooltip,
  LineController,
  BarController,
  DoughnutController
)

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
        <h2>総資産推移</h2>
        <Bar data={chartData} options={chartOptions} />
      </div>
    </div>
  )
}

export default Home
