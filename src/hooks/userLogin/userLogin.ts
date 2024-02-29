import {MutateOptions, useMutation} from '@tanstack/react-query';
import {axios as ax, IApiError} from '../axios.config';
const axios = ax('application/json');

export interface ILoginParams {
  username?: string;
  password: string;
}

export interface ILoginResults {
  success: boolean;
  message: string;
}

async function login(params: ILoginParams): Promise<ILoginResults> {
    console.log(params,'????????params');
    
  const res = await axios.post<ILoginResults>(
    'https://dummyjson.com/auth/login',
    {...params},
  );
  return res.data;
}

export const useLogin = (
  config?: MutateOptions<ILoginResults, IApiError, ILoginParams, unknown>,
) => {
  const mutation = useMutation({
    mutationFn: (args: ILoginParams) => login(args),
    ...config,
    retry: false,
  });
  return mutation;
};
