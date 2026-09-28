import { Routes, Route, Link } from 'react-router';
import HomePage  from './pages/HomePage'
import CheckOut from './pages/CheckOut'
import Orders from './pages/Orders'
import TrackingPage  from './pages/TrackingPage';

const App = () => {
  return (
   <>
   <Routes>
    <Route path='/' element = { <HomePage />} />
    <Route path='checkout' element ={<CheckOut />} />
    <Route path='orders' element ={<Orders />} />
    <Route path='tracking' element ={<TrackingPage />} />
    <Route path='*' element ={
      <div className="page-title">Page not found. <Link className="link-primary" to="/">Go home</Link></div>
    } />
   </Routes>
   </>
  )
}

export default App
