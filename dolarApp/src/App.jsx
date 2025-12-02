import './App.css'
import NavBar from './layout/NavBar'
import Footer from './layout/Footer'
import DolarCard from './components/DolarCard'
import { getDolarOficial , getDolarParalelo } from './utils/DolarApi'
function App() {

  return (
    <>
     <NavBar />
     <DolarCard title="Oficial" fetchFn={getDolarOficial} />
     <DolarCard title="Paralelo" fetchFn={getDolarParalelo} />
     <Footer />
    </>
  )
}

export default App
