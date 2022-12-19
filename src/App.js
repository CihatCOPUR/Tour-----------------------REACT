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

const fetchTours = async () => {
  setLoading(true)
 const dataTour = await axios(url)
 setTours(dataTour)
setLoading(false)
}


  useEffect(() => {
  
    fetchTours()
      
    }, [])
console.log(tours)
  return <h2>
    <Tour tours = {tours} loading = {loading} />
  </h2>
}

export default App
