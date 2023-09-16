import { Box, Divider, List, Typography } from '@mui/material'
import React from 'react'
import Transaction from './Transaction'

const Transactions = ({transactions, setTransactions}) => {
  return (
    <Box className='transaction'>
        <Typography variant='h5'>Transaction History</Typography>
        <Divider/>
        <List>
            {
              transactions.map(transaction =>(
                <Transaction  transaction={transaction} setTransactions={setTransactions}   transactions={transactions}  />
              ))
            }
        </List>
    </Box>
  )
}

export default Transactions