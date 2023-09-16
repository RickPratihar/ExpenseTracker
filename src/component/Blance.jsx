import React from 'react'
import { Box, Typography } from '@mui/material'
import styled from '@emotion/styled'

const BlanceText = styled(Typography)`
font-size:25px;
margin-bottom:20px;
display:flex;
justify-content: center;
`

const Blance = ({transactions}) => {
    const amount = transactions.map(transaction => transaction.amount);
    const total = amount.reduce((amount, item) => (amount += item), 0).toFixed(2);
  return (
    <Box>
        < BlanceText >Blance : ₹{total}</ BlanceText >
    </Box>
  )
}

export default Blance