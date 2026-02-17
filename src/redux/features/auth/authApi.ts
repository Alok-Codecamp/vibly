import { baseApi } from "../baseApi/baseApi";




const authApi = baseApi.injectEndpoints({
    endpoints:(build)=>({
        signin:build.mutation({
            query:(signinPayload)=>({
                url:'/auth/signin',
                method:'POST',
                body:signinPayload
            })
        })
    })
})



export const {useSigninMutation} = authApi;