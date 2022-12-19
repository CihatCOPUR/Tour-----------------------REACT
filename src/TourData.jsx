import React from 'react'

const TourData = ({tours}) => {
    console.log(tours)
  return (
    <div>
        {tours.map((tour)=>{
            return(<>
                <img src={tour.image} alt="" />
                <h2>{tour.name}</h2>
                </>
            )
        })}
    </div>
  )
}

export default TourData