import { FaArrowAltCircleLeft, FaArrowAltCircleRight } from 'react-icons/fa';
import { useContext } from 'react';
import { Box, Icon, Flex } from '@chakra-ui/react';
import { ScrollMenu, VisibilityContext } from 'react-horizontal-scrolling-menu';
import Image from 'next/image';

const LeftArrow = () => {
  const { scrollPrev } = useContext(VisibilityContext);

  return (
    <Flex justifyContent='center' alignItems='center' marginRight='1'>
      <Icon
        as={FaArrowAltCircleLeft}
        fontSize='2xl'
        cursor='pointer'
        onClick={() => scrollPrev()}
      />
    </Flex>
  );
};

const RightArrow = () => {
  const { scrollNext } = useContext(VisibilityContext);

  return (
    <Flex justifyContent='center' alignItems='center' marginRight='1'>
      <Icon
        as={FaArrowAltCircleRight}
        fontSize='2xl'
        cursor='pointer'
        onClick={() => scrollNext()}
      />
    </Flex>
  );
};

const ImageScrollBar = ({ data }) => (
  <ScrollMenu LeftArrow={LeftArrow} RightArrow={RightArrow}>
    {data.map((item) => (
      <Box width='910px' key={item.id} itemID={item.id} overflow='hidden' p='1'>
        <Image
          alt='Image'
          placeholder='blur'
          blurDataURL={item.url}
          src={item.url}
          width={1000}
          height={500}
          sizes='(max-width: 500px) 100px, (max-width: 1023px) 400px, 1000px'
        />
      </Box>
    ))}
  </ScrollMenu>
);

export default ImageScrollBar;
