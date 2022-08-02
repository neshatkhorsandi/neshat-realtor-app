import { Link } from 'next/link';
import { FcMenu, FcHome, FcAbout } from 'react-icons/fc';
import { BsSearch } from 'react-icons/bs';
import { FiKey } from 'react-icons/fi';
import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  IconButton,
  Flex,
  Box,
  Spacer,
} from '@chakra-ui/react';

const Navbar = () => (
  <Flex p='2' borderBottom='1px' borderColor='gray.100'>
    <Box fontSize='3xl' color='blue.400' fontWeight='bold'>
      <Link href='/' paddingLeft='2'>
        Realtor
      </Link>
    </Box>

    <Spacer />

    <Box>
      <Menu>
        <MenuButton
          as={IconBtn}
          icon={<FcMenu />}
          variant='outlined'
          color='red.400'
        />
      </Menu>
    </Box>
  </Flex>
);

export default Navbar;
