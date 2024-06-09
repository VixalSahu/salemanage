// src/pages/ActiveOrders.js
import { useState } from 'react';
import { Button, Table, Tbody, Td, Th, Thead, Tr, useDisclosure } from '@chakra-ui/react';
import { AddIcon } from '@chakra-ui/icons';
import SaleOrderModal from '../components/SaleOrderModal';

function ActiveOrders() {
  const [orders, setOrders] = useState([]);
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <div>
      <Button leftIcon={<AddIcon />} onClick={onOpen}>+ Sale Order</Button>
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
                <Button onClick={() => { /* Edit order */ }}>Edit</Button>
              </Td>
            </Tr>
          ))}
        </Tbody>
      </Table>
      <SaleOrderModal isOpen={isOpen} onClose={onClose} />
    </div>
  );
}

export default ActiveOrders;
