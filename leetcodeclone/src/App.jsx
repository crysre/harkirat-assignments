
import { useState } from 'react'
import './App.css'
import MainContent from './components/MainContent'
import ProgressCard from './components/ProgressCard'
import Sidebar from './components/Sidebar'

function App() {

     const [SidebarOpen, SetSidebarOpen] = useState(true)

  return (
    <div className=' h-screen flex flex-col sm:flex-row gap-10 bg-[#1a1a1a]' >
    <Sidebar SidebarOpen={SidebarOpen} SetSidebarOpen={SetSidebarOpen} />
    <ProgressCard/>
    <MainContent/>
    </div>
  )
}

export default App
