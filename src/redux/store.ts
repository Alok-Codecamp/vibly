

import { configureStore } from '@reduxjs/toolkit'
import counterReducer from '@/redux/features/counter/counterSlice'
import { baseApi } from './features/baseApi/baseApi'
import authReducer from '@/redux/features/auth/authSlice'
import storage from "redux-persist/es/storage";
import { FLUSH, PAUSE, PERSIST, persistReducer, PURGE, REGISTER, REHYDRATE } from 'redux-persist';
import { persistStore } from 'redux-persist';



const persistConfig = {
  key: 'root',
  storage

}
 
const persistedReducer = persistReducer(persistConfig, authReducer)
  
export const store = configureStore({
  reducer: {
    [baseApi.reducerPath]:baseApi.reducer,
    counter:counterReducer,
    auth:persistedReducer
    
  },
  middleware:(getDefaultMiddleware)=>getDefaultMiddleware({
      serializableCheck: {
            ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
        }
  }).concat(baseApi.middleware)
})


 
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch
export const persistor = persistStore(store);