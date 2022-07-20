import React from 'react'
import { Box } from '@mui/system'
import { Typography } from '@mui/material'
import Icon from '../assets/benefits.png'
import { Container } from '@mui/material'
export default function Benefits() {
    return (
        <Container maxWidth="lg">
            <Box mt={8}>
                <Typography mb={5} textAlign="center" fontWeight="bold" fontSize="30px">EMPLOYEE BENEFITS</Typography>

                <Box display="flex" mt={4} gap="20px" justifyContent="space-between" mb={5} sx={{ flexDirection: { xs: "column", sm: 'row' } }}>
                    <Box display="flex" gap="10px">
                        <img src={Icon} alt="" />
                        <Box>
                            <Typography fontWeight="bold" fontSize="14px">Providend Funds</Typography>
                            <Typography textAlign="justify">A small amount of your basic monthly pay is contributed to your retirement fund.

                            </Typography>
                        </Box>
                    </Box>
                    <Box display="flex" gap="10px">
                        <img src={Icon} alt="" />
                        <Box>
                            <Typography fontWeight="bold" fontSize="14px">Providend Funds</Typography>
                            <Typography>A small amount of your basic monthly pay is contributed to your retirement fund.

                            </Typography>
                        </Box>
                    </Box>
                    <Box display="flex" gap="10px">
                        <img src={Icon} alt="" />
                        <Box>
                            <Typography fontWeight="bold" fontSize="14px">Providend Funds</Typography>
                            <Typography>A small amount of your basic monthly pay is contributed to your retirement fund.

                            </Typography>
                        </Box>
                    </Box>

                </Box>
                <Box display="flex" mt={4} gap="20px" justifyContent="space-between" sx={{ flexDirection: { xs: "column", sm: "row" } }}>
                    <Box display="flex" gap="10px">
                        <img src={Icon} alt="" />
                        <Box>
                            <Typography fontWeight="bold" fontSize="14px">Providend Funds</Typography>
                            <Typography>A small amount of your basic monthly pay is contributed to your retirement fund.

                            </Typography>
                        </Box>
                    </Box>
                    <Box display="flex" gap="10px">
                        <img src={Icon} alt="" />
                        <Box>
                            <Typography fontWeight="bold" fontSize="14px">Providend Funds</Typography>
                            <Typography>A small amount of your basic monthly pay is contributed to your retirement fund.

                            </Typography>
                        </Box>
                    </Box>
                    <Box display="flex" gap="10px">
                        <img src={Icon} alt="" />
                        <Box>
                            <Typography fontWeight="bold" fontSize="14px">Providend Funds</Typography>
                            <Typography>A small amount of your basic monthly pay is contributed to your retirement fund.

                            </Typography>
                        </Box>
                    </Box>

                </Box>

            </Box>
        </Container>

    )
}
