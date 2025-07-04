import { GlobalApi } from "@/app/store";
import type { ICar } from "../types/car.types";

export const carApi = GlobalApi.injectEndpoints({
  endpoints: ({ query }) => ({
    getCars: query<ICar[], void>({
      query: () => "cars/",
    }),
  }),
});

export const { useGetCarsQuery } = carApi;
