import { Typography, styled, Box } from "@mui/material";
import './App.css'

import {  useState } from "react";

import Blance from "./component/Blance";
import ExpenseCard from "./component/ExpenseCard";
import NewTransaction from "./component/NewTransaction";
import Transactions from "./component/Transactions";

const Header = styled(Typography)`
  font-size: 36px;
  font-weight: 600;
  color:red;
  padding:20px;
  display: flex;
  justify-content: center;
`;

const Component = styled(Box)`
display:flex;
background: #fff;
width: 800px;
padding:10px;
border-radius:20px;
margin:auto;
& > div {
  height : 70vh;
  width:50%;
  padding:10px;
}
` 
function App() {
  const [transaction, setTransactions] = useState([
    // { id: 1, text: "momo", amount: -20 },
    // { id: 2, text: "salary", amount: 3000 },
    // { id: 3, text: "book", amount: -100 },
    // { id: 4, text: "bonus", amount: -1500 },
  ]);
  return (
    <Box className="App">
      <Header>Expanse Tracker</Header>
      <Component className="component1">
        <Box>
          <Blance transactions={transaction} />
          <ExpenseCard transactions={transaction}  />
          <NewTransaction setTransactions = {setTransactions} />
        </Box>
        <Box>
          <Transactions transactions={transaction} setTransactions={setTransactions}/>
        </Box>
      </Component>
    </Box>
  );
}

export default App;
