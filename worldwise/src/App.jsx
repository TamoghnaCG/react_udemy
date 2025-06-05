import React, { useEffect, useState } from 'react'
import { BrowserRouter as Router, Routes, Route, BrowserRouter, Navigate } from 'react-router-dom'
import Homepage from './pages/Homepage'
import Product from './pages/Product'
import Pricing from './pages/Pricing'
import PageNotFound from './pages/PageNotFound'
import AppLayout from './pages/AppLayout'
import Login from './pages/Login'
import CityList from './components/CityList'
import CountryList from './components/CountryList'
import City from './components/City'
import Form from './components/Form'

export default function App() {
  const [cities, setCities] = useState([])
  const [isLoading, setIsLoading] = useState(false)

  const BASE_URL = "http://localhost:8000"
  const fetch_data = async () => {
    try {
      setIsLoading(true)
      const response = await fetch(`${BASE_URL}/cities`)
      const data =await response.json()
      console.log("Data fetched:", data);
      
      setCities(data)
      setIsLoading(false)
      
    } catch (error) {
      alert("Error fetching data")
      setIsLoading(false)
    } finally {
      setIsLoading(false)
    }
  }
  useEffect(() => {
    fetch_data()
},[])
  return (
    <>
    
    <BrowserRouter>
      <Routes>
        <Route index element={<Homepage/>} />
        <Route path="product" element={<Product/>} />
          <Route path="price" element={<Pricing />} />
          <Route path="app" element={<AppLayout />}>
            <Route index element={<Navigate replace to="cities"/>} />
            <Route path="cities" element={<CityList cities={cities} isLoading={isLoading}/>} />
            <Route path="countries" element={<CountryList cities={cities} isLoading={isLoading} />} />
            <Route path="cities/:id" element={ <City/>} />
            <Route path="form" element={<Form/>} />
          </Route>

          <Route path ="/login" element={<Login/>}/>
        <Route psth ="*" element={<PageNotFound />} />
      </Routes>
    </BrowserRouter>
    </>
  )
}
