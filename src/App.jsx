import './App.css'
import { HashRouter as Router, Routes, Route } from 'react-router-dom'
import { Home } from './pages/home'
import { Company } from './pages/company'
import { Layout } from './Layout'
import { Portfolio } from './pages/portfolio'
import { PortfolioDetail } from './pages/portfolio-detail'
import { Careers } from './pages/careers'
import { Residents } from './pages/residents'
import { Management } from './pages/management'
import { Investors } from './pages/investors'
import { Contact } from './pages/contact'

function App() {
  return(
    <Router>
      <Routes>
        <Route element={<Layout/>}>
          <Route path="/" element={<Home/>}/>
          <Route path="/company" element={<Company/>}/>
          <Route path="/portfolio" element={<Portfolio/>}/>
          <Route path="/portfolio/:id" element={<PortfolioDetail/>}/>
          <Route path="/careers" element={<Careers/>}/>
          <Route path="/residents" element={<Residents/>}/>
          <Route path="/management" element={<Management/>}/>
          <Route path="/investors" element={<Investors/>}/>
          <Route path="/contact" element={<Contact/>}/>
        </Route>
      </Routes>
    </Router>
  )
}

export default App