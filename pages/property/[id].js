import { FaBed, FaBath } from 'react-icons/fa';
import { BsGridFill } from 'react-icons/bs';
import { GoVerified } from 'react-icons/go';
import millify from 'millify';
import { Avatar, Box, Flex, Spacer, Text } from '@chakra-ui/react';
import { fetchApi, baseUrl } from '../../utils/fetchApi';
import ImageScrollBar from '../../components/ImageScrollBar';

const PropertyDetails = ({
  propertyDetails: {
    price,
    rentFrequency,
    rooms,
    title,
    baths,
    area,
    agency,
    isVerified,
    description,
    type,
    purpose,
    furnishingStatus,
    amenities,
    photos,
  },
}) => (
  <Box maxWidth='1000px' margin='auto' p='5'>
    {photos && <ImageScrollBar data={photos} />}
    <Box w='full' p='6'>
      <Flex paddingTop='2' alignItems='center' justifyContent='space-between'>
        {/* price container */}
        <Flex alignItems='center'>
          <Box paddingRight='3' color='green.400'>
            {isVerified && <GoVerified />}
          </Box>
          <Text fontWeight='bold' fontSize='lg'>
            AED {millify(price)}
            {rentFrequency && `/${rentFrequency}`}
          </Text>
        </Flex>

        {/* agency logo */}
        <Box>
          <Avatar size='sm' src={agency?.logo?.url}></Avatar>
        </Box>
      </Flex>

      {/* rooms container */}
      <Flex
        alignItems='center'
        p='1'
        justifyContent='space-between'
        w='250px'
        color='blue.400'
      >
        {rooms}
        <FaBed /> | {baths} <FaBath /> | {millify(area)} sqft <BsGridFill />
      </Flex>

      <Box marginTop='2' fontSize='lg'>
        <Text fontSize='lg' marginBottom='2' fontWeight='bold'>
          {title}
        </Text>
        <Text lineHeight='2' color='gray.600'>
          {description}
        </Text>
      </Box>

      <Flex
        flexWrap='wrap'
        textTransform='uppercase'
        justifyContent='space-between'
      >
        <Flex
          justifyContent='space-between'
          w='400px'
          borderBottom='1px'
          borderColor='gray.100'
          p='3'
        >
          <Text>Type</Text>
          <Text fontWeight='bold'>{type}</Text>

          <Text>Purpose</Text>
          <Text fontWeight='bold'>{purpose}</Text>
        </Flex>
        {furnishingStatus && (
          <Flex
            justifyContent='space-between'
            w='400px'
            borderBottom='1px'
            borderColor='gray.100'
            p='3'
          >
            <Text>Furnishing Status</Text>
            <Text fontWeight='bold'>{furnishingStatus}</Text>
          </Flex>
        )}
      </Flex>

      <Box>
        {amenities.length && (
          <Text marginTop='5' fontSize='2xl' fontWeight='black'>
            Amenities
          </Text>
        )}

        <Flex flexWrap='wrap'>
          {amenities?.map((item) =>
            item?.amenities?.map((amenity) => (
              <Text
                key={amenity.text}
                p='2'
                bg='gray.200'
                m='1'
                borderRadius='5'
                fontWeight='bold'
                color='blue.400'
                fontSize='l'
              >
                {amenity.text}
              </Text>
            ))
          )}
        </Flex>
      </Box>
    </Box>
  </Box>
);

export default PropertyDetails;

export async function getServerSideProps({ params: { id } }) {
  const data = await fetchApi(`${baseUrl}/properties/detail?externalID=${id}`);

  return {
    props: {
      propertyDetails: data,
    },
  };
}
