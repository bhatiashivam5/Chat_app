import {useQuery} from '@tanstack/react-query';
import {axios as ax, IApiError} from '../axios.config';
const axios = ax('application/json');

async function getAllProducts() {
  const res = await axios.get('https://dummyjson.com/products');
  return res.data;
}

export const useGetAllProducts = () => {
  // Queries
  const query = useQuery({queryKey: ['todos'], queryFn: getAllProducts});
  return query;
};
