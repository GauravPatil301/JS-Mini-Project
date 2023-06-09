import React, { useState } from 'react'
import { Box } from '@mui/material'
import Exercises from '../components/Exercises'
import HeroBanner from '../components/HeroBanner'
import SearchExecises from '../components/SearchExecises'

const Home = () => {
  const [bodyPart, setBodyPart] = useState('all')
  const [exercises, setExercises] = useState([])

  console.log(bodyPart)
  return (
    <Box>
      <HeroBanner />
      <SearchExecises
        setExercises={setExercises}
        bodyPart={bodyPart}
        setBodyPart={setBodyPart}
      />
      <Exercises
        exercises={exercises}
        setExercises={setExercises}
        bodyPart={bodyPart}
      />
    </Box>
  )
}

export default Home
