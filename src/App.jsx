import { Footer } from './components/Footer'
import { Header } from './components/Header'
import { Main } from "./components/Main";
import "./custom.css"

function App() {
  return <div className='d-flex flex-column min-vh-100 w-100'>
    <Header />
    <Main />
    <Footer />
  </div>
}

export default App
