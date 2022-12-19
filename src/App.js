import axios from 'axios'
import React, {  useEffect , useState } from 'react'
import Tour from "./Tour"
// import axios from 'axios'
// ATTENTION!!!!!!!!!!
// I SWITCHED TO PERMANENT DOMAIN
const url = 'https://course-api.com/react-tours-project'




function App() {

const [tours, setTours] = useState([])

const fetchTours = async () => {
  
 const dataTour = await axios(url)
console.log(dataTour)
setTours(dataTour)
console.log(tours)
}


  useEffect(() => {
  
    fetchTours()
      
    }, [])

  return <h2>
    <Tour />
  </h2>
}

export default App
