import { GlobalApi } from "@/app/store/api/globalApi";
import type { IProfile } from "../types/profile.types";

export const profileApi = GlobalApi.injectEndpoints({
  endpoints: ({ query }) => ({
    getProfile: query<IProfile, void>({
      query: () => "profile/",
      providesTags: ["Profile"],
    }),
  }),
  overrideExisting: false,
});

export const { useGetProfileQuery } = profileApi;
