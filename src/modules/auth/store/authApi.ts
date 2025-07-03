import { GlobalApi } from "@/app/store/api/globalApi";
import type { IAuthResponse, ILoginForm } from "../types/auth.types";
import { setAuth } from "./authSlice";

export const authApi = GlobalApi.injectEndpoints({
  endpoints: ({ mutation }) => ({
    register: mutation<void, ILoginForm>({
      query: (body) => ({
        url: "/auth/register/",
        method: "POST",
        body,
      }),
      async onQueryStarted(_, { dispatch, queryFulfilled }) {
        try {
          const { data } = await queryFulfilled;
          console.log(data);
          dispatch(setAuth(data));
        } catch {}
      },
      invalidatesTags: ["Profile"],
    }),
    login: mutation<IAuthResponse, ILoginForm>({
      query: (body) => ({
        url: "/auth/login/",
        method: "POST",
        body,
      }),
      async onQueryStarted(_, { dispatch, queryFulfilled }) {
        try {
          const { data } = await queryFulfilled;
          dispatch(setAuth(data));
        } catch {}
      },
      invalidatesTags: ["Profile"],
    }),
  }),
  overrideExisting: false,
});

export const { useRegisterMutation, useLoginMutation } = authApi;
