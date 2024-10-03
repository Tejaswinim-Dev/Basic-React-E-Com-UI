import Navbar from './Components/Navbar/Navbar'
import Electronics from './Components/electronics/Electronics.jsx'
import Jewelry from './Components/jewerly/Jewelry.jsx'
import Menswear from './Components/menswear/Menswear.jsx'
import Womenswear from './Components/womenswear/Womenswer.jsx'
import PageNotFound from './Components/PageNotFound/pageNotFound.jsx'
import Productdetails from './Components/Productdetails/Productdetails.jsx'
import Home from './Components/Pages/home/Home main/Home.jsx'
import Personaldetails from './Components/user-details/Personaldeatils.jsx'
import Professionaldetails from './Components/user-details/Professionaldetails.jsx'
import Education from './Components/user-details/Education.jsx'
import {Route,Routes,Navigate} from 'react-router-dom'
import Profile from './Components/Pages/profile/Profile.jsx'

import './App.css'

function App() {
 

  return (
    
  <div>
    <Navbar/>
      <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path={"/electronics"} element={<Electronics/>}/>
      <Route path={"/jewelry"} element={<Jewelry/>}/>
      <Route path={"/mens"} element={<Menswear/>}/>
      <Route path={"/womens"} element={<Womenswear/>}/>
      <Route path ={"/productdetails/:id"} element={<Productdetails/>}/>
      <Route path={"/profile"} element={<Profile/>} >
      <Route path={""} element ={<Navigate to="personaldetails"/>}/>
        {/* <Route index path={""} element={<Personaldetails/>}/> */}
        <Route path={"personaldetails"} element={<Personaldetails/>}/>
        <Route path={"professionaldetails"} element={<Professionaldetails/>} />
        <Route path={"educationaldetails"} element={<Education/>}/>
      </Route>
      <Route path="*" element={<PageNotFound/>}/>
      </Routes>
  
  </div>
  )
}

export default App
