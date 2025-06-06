import { createContext, useContext, useEffect, useState } from 'react';

const CityContext = createContext()
 const BASE_URL = "http://localhost:8000"
function CityProvider({ children }) {
const [cities, setCities] = useState([])
const [isLoading, setIsLoading] = useState(false)

 
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
  }, [])
    
    return(
        <CityContext.Provider value={{ cities, isLoading }}>
            {children}

        </CityContext.Provider>
    )
}

function useCity() {
  const context = useContext(CityContext)
  if (!context) {
    throw new Error("useCity must be used within a CityProvider")
  }
  return context
}
export {CityProvider, useCity}

