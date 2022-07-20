import React from 'react'
import { Box } from '@mui/system'
import { Container } from '@mui/system'
import Logo from "../assets/logo.png"
import { Typography } from '@mui/material'
import Button from '@mui/material/Button';

export default function Navbar() {
    return (
        <Box sx={{ minHeight: "64px", backgroundColor: "#182F59" }}>

            <Container maxWidth={'xxl'}>
                <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: "15px 0px" }}>
                    <Box display="flex" gap="4px">
                        <img src={Logo} alt="" style={{ width: '50px', height: '50px' }} />
                        <Box   >
                            <Typography color="white" fontWeight="bold">
                                TechForing
                            </Typography>
                            <Typography color="white" fontSize="14px">
                                Shaping Tommorows Cybersecurity
                            </Typography>
                        </Box>



                    </Box>
                    <Box display="flex" gap="10px">
                        <Button variant="outlined" sx={{ border: '1px solid rgb(255, 255, 255)', color: 'white', fontSize: { xs: "12px", sm: "16px" } }}>SIGN IN</Button>
                        <Button variant="contained" sx={{ backgroundColor: "#5BBC2E", padding: '0px 10px', fontSize: { xs: "12px", sm: "16px" } }} disableElevation>SIGN UP</Button>

                    </Box>
                </Box>

            </Container>

        </Box>
    )
}
