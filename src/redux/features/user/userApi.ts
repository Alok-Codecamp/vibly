// user api endpoints

import { baseApi } from "../baseApi/baseApi";




const userApi = baseApi.injectEndpoints({
  endpoints:(build)=>({
    getMyProfile:build.query({
      query:()=>({
        url:'/user/my-profile',
        method:'GET'
      })
    })
  })
})


export const {useGetMyProfileQuery} = userApi;