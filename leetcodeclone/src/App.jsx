
import './App.css'
import MainContent from './components/MainContent'
import ProgressCard from './components/ProgressCard'
import Sidebar from './components/Sidebar'

function App() {

  return (
    <div className=' flex gap-10 bg-[#1a1a1a]' >
    <Sidebar/>
    <ProgressCard/>
    <MainContent/>
    </div>
  )
}

export default App
