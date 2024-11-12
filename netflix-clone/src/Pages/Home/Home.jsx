import React from 'react'
import Header from '../../Components/Header/Header'
import Footer from '../../Components/Footer/Footer'
import Banner from '../../Components/Banner/Banner'
import RowList from "../../Components/Rows/RowList/RowList"
// import Header1 from '../../Components/Header/Header1'
import { Route, Routes } from 'react-router-dom'
import SharedLayout from '../../Components/SharedLayout/SharedLayout'


const Home = () => {
  return (
    <> 

      {/* <Routes>
        <Route path="/" element={<SharedLayout />}></Route>
        <Route index element={<RowList />} />
        <Route path="Home" element={<Home />} />
        <Route path="TVShow" element={<TVShow />} />
        <Route path="Movies" element={<Movies />} />
        <Route path="MyList" element={<MyList />} />
        <Route path="Browse by Languages" element={<Browse by Languages />} />
        <Route path="support" element={<Support />} />
        <Route path="cart" element={<Cart />} />
      </Routes> */}

       <Header/>
         {/* <Header1 /> */}
         <Banner/>
       <RowList/> 
        <Footer/> 
    </>
  )
}

export default Home