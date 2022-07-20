import React from 'react'
import Navbar from './components/Navbar'
import { Box } from '@mui/system'
import SearchBar from './components/SearchBar'
import Position from './components/Position'
import Recruitment from './components/Recruitment'
import RecruitmentProcess from './components/RecruitmentProcess'
import Culture from './components/Culture'
import Benefits from './components/Benefits'
export default function App() {
  return <Box>
    <Navbar/>
    <SearchBar/>
    <Position/>
    <Recruitment/>
    <RecruitmentProcess/>
   <Culture/>
   <Benefits/>
  </Box>
}
