import { RootState } from '@/redux/store'
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'


// initialize an empty api service that we'll inject endpoints into later as needed

export const baseApi = createApi({
  baseQuery: fetchBaseQuery({
     baseUrl: 'http://localhost:5000/api',
     credentials:'include',
     prepareHeaders:(headers,{getState})=>{
      const token = ((getState() as RootState).auth.token) as string | null;
      if(token){
        headers.set('authorization',`Bearer ${token}`)
      }
      return headers;

     } 
    }),
  endpoints: ()=> ({}),
})