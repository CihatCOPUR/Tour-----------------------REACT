import React from 'react'
import { Container } from 'react-bootstrap'

const TourData = ({tours}) => {
console.log(tours)
  
  return (
    <div>
        <h1>{tours.name}</h1>
    </div>
  )
}

export default TourData