// src/components/ThemeToggle.js
import { useColorMode, Switch, Flex } from '@chakra-ui/react';

function ThemeToggle() {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <Flex justify="flex-end" p={5}>
      <Switch isChecked={colorMode === 'dark'} onChange={toggleColorMode}>
        Toggle Dark Mode
      </Switch>
    </Flex>
  );
}

export default ThemeToggle;
