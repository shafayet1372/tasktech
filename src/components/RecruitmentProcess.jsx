import React from 'react'
import { Box } from '@mui/system'
import Image from '../assets/recruitment2.png'
import { Container } from '@mui/material'
export default function RecruitmentProcess() {
  return (
    <Box mt={5} width="100%">
      <Container maxWidth="lg">
        <img src={Image} alt="" style={{ width: '100%' }} />
      </Container>

    </Box>
  )
}
