import NavBar from './layout/NavBar'
import Footer from './layout/Footer'
import DolarCard from './components/DolarCard'
import { getDolarOficial , getDolarParalelo } from './utils/DolarApi'

function App() {

  return (
    <>
     <NavBar />
     <main className="container my-5 flex-grow-1">
       <div className="row justify-content-center g-4">
         <div className="col-md-6 col-lg-5">
           <DolarCard title="Oficial" fetchFn={getDolarOficial} />
         </div>
         <div className="col-md-6 col-lg-5">
           <DolarCard title="USDT / BINANCE" fetchFn={getDolarParalelo} />
         </div>
       </div>
     </main>
     <Footer />
    </>
  )
}

export default App
