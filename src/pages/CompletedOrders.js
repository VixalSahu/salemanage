// src/pages/CompletedOrders.js
import { useState } from 'react';
import { Table, Tbody, Td, Th, Thead, Tr, Button } from '@chakra-ui/react';

function CompletedOrders() {
  const [orders, setOrders] = useState([]);

  return (
    <Table>
      <Thead>
        <Tr>
          <Th>ID</Th>
          <Th>Customer</Th>
          <Th>Amount</Th>
          <Th>Actions</Th>
        </Tr>
      </Thead>
      <Tbody>
        {orders.map(order => (
          <Tr key={order.id}>
            <Td>{order.id}</Td>
            <Td>{order.customer}</Td>
            <Td>{order.amount}</Td>
            <Td>
              <Button onClick={() => { /* View order */ }}>View</Button>
            </Td>
          </Tr>
        ))}
      </Tbody>
    </Table>
  );
}

export default CompletedOrders;