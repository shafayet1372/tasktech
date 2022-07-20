import React from 'react'
import { Box } from '@mui/system'
import Bg from '../assets/backgroud.jpg'
import TextField from '@mui/material/TextField';
import SearchIcon from '@mui/icons-material/Search';
import { Typography } from '@mui/material';
export default function SearchBar() {
  return (
    <Box
      sx={{ position: 'relative', height: "500px", width: '100%' }}
    >

      <img src={Bg} alt="" style={{ height: '500px', width: '100%' }} />
      <Box sx={{ position: "absolute", top: '50%', left: '50%', transform: { xs: "translate(-50%, -50%)", md: 'translate(-50%, -50%)' } }}>
        <Box>
          <TextField sx={{ backgroundColor: 'white', borderRadius: '12px', width: { xs: '450px', md: '900px' } }} id="outlined-basic" variant="outlined" placeholder='search by position/level/type/department' />
          <SearchIcon sx={{ position: 'absolute', right: '40px', top: '18px', display: { xs: 'none', md: "block" } }} />
          <Box sx={{ mt: 2, display: "flex", flexWrap: 'wrap', justifyContent: "center", gap: "5px" }}>
            <span style={{ backgroundColor: "#fff", borderRadius: '5px', padding: '4px', marginRight: '10px', color: 'rgba(0, 0, 0, 0.68)' }}>
              Jr. Cyber Security Engineer
            </span>
            <span style={{ backgroundColor: "#fff", marginRight: '10px', borderRadius: '5px', padding: '4px', color: "rgba(0, 0, 0, 0.68)" }}>
              Sales Executive
            </span>
            <span style={{ backgroundColor: "#fff", marginRight: '10px', borderRadius: '5px', padding: '4px', color: 'rgba(0, 0, 0, 0.68)' }}>
              Accountant
            </span>
            <span style={{ backgroundColor: "#fff", borderRadius: '5px', padding: '4px', marginRight: '10px', color: 'rgba(0, 0, 0, 0.68)' }}>
              Hr Admin
            </span>
            <span style={{ backgroundColor: "#fff", marginRight: '10px', borderRadius: '5px', padding: '4px', color: "rgba(0, 0, 0, 0.68)" }}>
              Sales Executive
            </span>
            <span style={{ backgroundColor: "#fff", marginRight: '10px', borderRadius: '5px', padding: '4px', color: 'rgba(0, 0, 0, 0.68)' }}>
              asdasdr
            </span>



          </Box>
        </Box>

        {/* <Box mt={1} px={16} display="flex" gap="2px" fontSize="14px">
          <span style={{ backgroundColor: "#fff", borderRadius: '5px', padding: '4px', marginRight: '10px', color: 'rgba(0, 0, 0, 0.68)' }}>
            Sales Manager
          </span>
          <span style={{ backgroundColor: "#fff", marginRight: '10px', borderRadius: '5px', padding: '4px', color: "rgba(0, 0, 0, 0.68)" }}>
            HR Admin
          </span>
          <span style={{ backgroundColor: "#fff", borderRadius: '5px', padding: '4px', color: "rgba(0, 0, 0, 0.68)" }}>
            Accountant
          </span>

        </Box> */}
      </Box>

      <Box sx={{ position: "absolute", top: '28%', left: '50%', transform: 'translate(-50%, -50%)' }}>
        <Typography sx={{ fontSize: { xs: '14px', md: "20px", lg: "34px" } }} fontWeight='bold' color="white">
          WORK AT TECHFORING LIMITED
        </Typography>
        <Typography sx={{ textAlign: 'center', color: 'white', fontSize: '14px' }}>
          Turn your passion into a career


        </Typography>
      </Box>
    </Box>
  )
}
