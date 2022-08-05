import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { MdCancel } from 'react-icons/md';
import Image from 'next/image';
import {
  Flex,
  Select,
  Box,
  Text,
  Input,
  Spinner,
  Icon,
  Button,
} from '@chakra-ui/react';
import { filterData, getFilterValues } from '../utils/filterData';

import React from 'react';

const SearchFilters = () => {
  const [filters, setFilters] = useState(filterData);
  const router = useRouter();

  const searchProps = (filterValues) => {
    const path = router.pathname;
    const { query } = router;
    const values = getFilterValues(filterValues);

    values.forEach((item) => {
      // dont want to show all the empty filter options in url
      if (item.value && filterValues?.[item.name]) {
        query[item.name] = item.value;
      }
    });

    router.push({ pathname: path, query });
  };

  return (
    <Flex bg='gray.100' p='4' justifyContent='center' flexWrap='wrap'>
      {filters.map((filter) => (
        <Box key={filter.queryName}>
          <Select
            onChange={(event) =>
              searchProps({ [filter.queryName]: event.target.value })
            }
            placeholder={filter.placeholder}
            w='fit-content'
            p='2'
          >
            {filter?.items?.map((item) => (
              <option value={item.value} key={item.value}>
                {item.name}
              </option>
            ))}
          </Select>
        </Box>
      ))}
    </Flex>
  );
};

export default SearchFilters;
