import axios from 'axios'
import React, {  useEffect , useState } from 'react'
import Tour from "./Tour"
// import axios from 'axios'
// ATTENTION!!!!!!!!!!
// I SWITCHED TO PERMANENT DOMAIN
const url = 'https://course-api.com/react-tours-project'




function App() {

const [tours, setTours] = useState([])
const [loading, setLoading] = useState(false)

const remove =(id) =>{
    const newTour = tours.filter((tour)=>tour.id !== id)
    setTours(newTour)
}


const fetchTours = async () => {
  setLoading(true)
 const dataTour = await axios(url)
 setTours(dataTour.data)
setLoading(false)
}


  useEffect(() => {
  
    fetchTours()
      
    }, [])

  return <main>
    {loading ? <p className='loading'>Loading ...</p> : tours.length == 0 ? <h1 className='tourplaces'> TOUR PLACES</h1> :<Tour tours = {tours} remove={remove} loading = {loading} />}
   
    
  </main>
}

export default App
