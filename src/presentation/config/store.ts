import {configureStore} from "@reduxjs/toolkit";
import burgerMenuReducer from '../redux/features/burgerMenu/burgerMenuSlice'

export const store = configureStore({
    reducer: {
        burgerMenu: burgerMenuReducer
    }
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch