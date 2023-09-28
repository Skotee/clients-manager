import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const api = createApi({
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:3001' }),
  endpoints: (builder) => ({
    getClients: builder.query({
      query: () => 'clients',
    }),
    createClient: builder.mutation({
      query: (newClient) => ({
        url: 'clients',
        method: 'POST',
        body: newClient,
      }),
    }),
    deleteClient: builder.mutation({
      query: (clientId) => ({
        url: `clients/${clientId}`,
        method: 'DELETE',
      }),
    }),

    getReports: builder.query({
      query: () => 'reports',
    }),
    createReport: builder.mutation({
      query: (newReport) => ({
        url: 'reports',
        method: 'POST',
        body: newReport,
      }),
    }),
    deleteReport: builder.mutation({
      query: (reportId) => ({
        url: `reports/${reportId}`,
        method: 'DELETE',
      }),
    }),

    getDataItems: builder.query({
      query: () => 'dataItems',
    }),
    createDataItem: builder.mutation({
      query: (newDataItem) => ({
        url: 'dataItems',
        method: 'POST',
        body: newDataItem,
      }),
    }),
    deleteDataItem: builder.mutation({
      query: (dataItemId) => ({
        url: `dataitems/${dataItemId}`,
        method: 'DELETE',
      }),
    }),
  }),
});

export const {
  useGetReportsQuery,
  useCreateReportMutation,
  useDeleteReportMutation,
  useGetDataItemsQuery,
  useCreateDataItemMutation,
  useDeleteDataItemMutation,
  useGetClientsQuery,
  useCreateClientMutation,
  useDeleteClientMutation,
} = api;
