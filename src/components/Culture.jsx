import React from 'react'
import { Box } from '@mui/system'
import { Container, Typography } from '@mui/material'
export default function Culture() {
    return (
        <Container maxWidth="lg" >
            <Box mt={10}>
                <Typography textAlign="center" fontWeight="bold" fontSize="30px">OUR CULTURE</Typography>
                <Box mt={5} display="flex" sx={{ flexDirection: { xs: 'column', sm: "row" } }} justifyContent="space-between">
                    <Box>
                        <Box display="flex" alignItems='center' gap="5px" mb={1}>
                            <Box sx={{ height: '15px', width: '15px', backgroundColor: '#5BBC2E', borderRadius: '50%' }}>

                            </Box>
                            <Typography color="rgb(0, 0, 0)" fontSize="14px" fontWeight="bold">We are on a missino in shaping tomorrow’s cybersecurity.

                            </Typography>
                        </Box>
                        <Box display="flex" alignItems='center' gap="5px" mb={1}>
                            <Box sx={{ height: '15px', width: '15px', backgroundColor: '#5BBC2E', borderRadius: '50%' }}>

                            </Box>
                            <Typography color="rgb(0, 0, 0)" fontSize="14px" fontWeight="bold">We save lives by protecting data and preventing cybercrimes.


                            </Typography>
                        </Box>
                        <Box display="flex" alignItems='center' gap="5px" mb={1}>
                            <Box sx={{ height: '15px', width: '15px', backgroundColor: '#5BBC2E', borderRadius: '50%' }}>

                            </Box>
                            <Typography color="rgb(0, 0, 0)" fontSize="14px" fontWeight="bold">We work hard, we prefer quality over quantity.


                            </Typography>
                        </Box>

                    </Box>
                    <Box>
                        <Box display="flex" alignItems='center' gap="5px" mb={1}>
                            <Box sx={{ height: '15px', width: '15px', backgroundColor: '#5BBC2E', borderRadius: '50%' }}>

                            </Box>
                            <Typography color="rgb(0, 0, 0)" fontSize="14px" fontWeight="bold">We push everyone to their limits to help them grow professionally.


                            </Typography>
                        </Box>
                        <Box display="flex" alignItems='center' gap="5px" mb={1}>
                            <Box sx={{ height: '15px', width: '15px', backgroundColor: '#5BBC2E', borderRadius: '50%' }}>

                            </Box>
                            <Typography color="rgb(0, 0, 0)" fontSize="14px" fontWeight="bold">We always have time for a cup of coffee to keep a healthy relationship.




                            </Typography>
                        </Box>
                        <Box display="flex" alignItems='center' gap="5px" mb={1}>
                            <Box sx={{ height: '15px', width: '15px', backgroundColor: '#5BBC2E', borderRadius: '50%' }}>

                            </Box>
                            <Typography color="rgb(0, 0, 0)" fontSize="14px" fontWeight="bold">We never mix work life with our personal lives.



                            </Typography>
                        </Box>

                    </Box>
                </Box>
            </Box>

        </Container>

    )
}
