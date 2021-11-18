import React from "react"
import data from "./data.json"
const RestorentChild = () => {
  return (
    <>
      <div>
        {data.map(items => (
          <div>
            <p>{items.votes}</p>
            <p>{items.reviews}</p>
            <p>{items.cost}</p>
            <p>{items.min}</p>
            <p>{items.time}</p>
          </div>
        ))}
      </div>
    </>
  )
}
console.log(data)
export default RestorentChild
