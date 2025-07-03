import { setAuth } from "@/modules/auth/store/authSlice";
import {
  createApi,
  fetchBaseQuery,
  type BaseQueryFn,
  type FetchArgs,
  type FetchBaseQueryError,
} from "@reduxjs/toolkit/query/react";
import { toast } from "react-toastify";

export const API_URL = import.meta.env.VITE_API_KEY + "/api";

const baseQuery = fetchBaseQuery({
  baseUrl: API_URL,
  prepareHeaders: (headers, { getState }) => {
    const token = (getState() as any).auth.auth?.access;
    if (token) {
      headers.set("Authorization", `Bearer ${token}`);
    }
    return headers;
  },
});

const baseQueryWithErrorHandling: BaseQueryFn<
  string | FetchArgs,
  unknown,
  FetchBaseQueryError
> = async (args, api, extraOptions) => {
  const result = await baseQuery(args, api, extraOptions);

  if (result.error) {
    toast.error(
      `Ошибка: ${result.error.status} - ${JSON.stringify(result.error.data)}`
    );
    if (result.error.status === 401) {
      api.dispatch(setAuth(null));
    }
  }

  return result;
};

export const GlobalApi = createApi({
  reducerPath: "api",
  baseQuery: baseQueryWithErrorHandling,
  endpoints: () => ({}),
  tagTypes: ['Profile']
});
