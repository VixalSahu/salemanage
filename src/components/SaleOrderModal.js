// src/components/SaleOrderModal.js
import { Modal, ModalOverlay, ModalContent, ModalHeader, ModalCloseButton, ModalBody, ModalFooter, Button, FormControl, FormLabel, Input, FormErrorMessage } from '@chakra-ui/react';
import { useForm } from 'react-hook-form';

function SaleOrderModal({ isOpen, onClose }) {
  const { register, handleSubmit, formState: { errors }, reset } = useForm();

  const onSubmit = data => {
    console.log(data);
    onClose();
    reset();
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Create Sale Order</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <form onSubmit={handleSubmit(onSubmit)}>
            <FormControl isInvalid={errors.customer_id}>
              <FormLabel>Customer ID</FormLabel>
              <Input {...register('customer_id', { required: 'Customer ID is required' })} />
              <FormErrorMessage>{errors.customer_id && errors.customer_id.message}</FormErrorMessage>
            </FormControl>
            <FormControl isInvalid={errors.sku_id}>
              <FormLabel>SKU ID</FormLabel>
              <Input {...register('sku_id', { required: 'SKU ID is required' })} />
              <FormErrorMessage>{errors.sku_id && errors.sku_id.message}</FormErrorMessage>
            </FormControl>
            <FormControl isInvalid={errors.price}>
              <FormLabel>Price</FormLabel>
              <Input {...register('price', { required: 'Price is required' })} />
              <FormErrorMessage>{errors.price && errors.price.message}</FormErrorMessage>
            </FormControl>
            <FormControl isInvalid={errors.quantity}>
              <FormLabel>Quantity</FormLabel>
              <Input {...register('quantity', { required: 'Quantity is required' })} />
              <FormErrorMessage>{errors.quantity && errors.quantity.message}</FormErrorMessage>
            </FormControl>
            <FormControl isInvalid={errors.invoice_date}>
              <FormLabel>Invoice Date</FormLabel>
              <Input type="date" {...register('invoice_date', { required: 'Invoice Date is required' })} />
              <FormErrorMessage>{errors.invoice_date && errors.invoice_date.message}</FormErrorMessage>
            </FormControl>
            <Button type="submit">Submit</Button>
          </form>
        </ModalBody>
        <ModalFooter>
          <Button variant="ghost" onClick={onClose}>Close</Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
}

export default SaleOrderModal;
