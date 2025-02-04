import { baseApi } from "./baseApi";

const specialtiesApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    createSpecialty: build.mutation({
      query: (data) => ({
        url: "/specialties",
        method: "POST",
        contentType: "multipart/form-data",
        data,
      }),
    }),
    getAllSpecialties: build.query({
      query: () => ({
        url: "/specialties",
        method: "GET",
      }),
      providesTags: ["specialties"],
    }),
    deleteSpecialty: build.mutation({
      query: (data) => ({
        url: "/specialties",
        method: "DELETE",
        contentType: "multipart/form-data",
        data,
      }),
    }),
  }),
  overrideExisting: false,
});

export const {
  useCreateSpecialtyMutation,
  useGetAllSpecialtiesQuery,
  useDeleteSpecialtyMutation,
} = specialtiesApi;
