import React from 'react'
import { useParams } from 'react-router-dom'

const RecipeDetils = () => {
    const params=useParams()
    const{id}=params
  return (
    <div>
      <h1>Recipe Details of {id}</h1>
    </div>
  )
}

export default RecipeDetils
