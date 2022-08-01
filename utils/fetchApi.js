import axios from 'axios';

export const baseUrl = 'https://bayut.p.rapidapi.com';

export const fetchApi = async (url) => {
  const { data } = await axios.get(url, {
    headers: {
      'X-RapidAPI-Key': '3a75ada366mshc09c85d4cd64a10p1df2b9jsn7c8c8a9c70cf',
      'X-RapidAPI-Host': 'bayut.p.rapidapi.com',
    },
  });
  return data;
};
