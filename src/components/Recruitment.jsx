import React from 'react'
import { Box, Typography } from '@mui/material'
import Image from '../assets/recruitment.png'
import { Container } from '@mui/system'
export default function Recruitment() {
  return <Box width="100%" mt={10} px={5} sx={{ backgroundColor: '#F4F4F4' }}>
    <Container maxWidth="lg">
      <Typography textAlign="center" color="#5BBC67" fontWeight="bold" pt={2}>
        LIFE AT TECHFORING

      </Typography>
      <Typography textAlign="center" fontWeight='bold' fontSize="20px">
        Get your chance to work with the coolest cyber-tech companies around

      </Typography>
      <Box sx={{ display: 'flex', justifyContent: 'center', marginTop: "10px" }}>
        <img src={Image} alt="" style={{ width: '100vw' }} />
      </Box>
    </Container>

  </Box>
}
