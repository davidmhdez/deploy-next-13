import {createSlice} from "@reduxjs/toolkit";

interface BurgerMenuState {
    isOpen: boolean
}

const initialState: BurgerMenuState = {
    isOpen: false
}

export const burgerMenuSlice =  createSlice({
    name: 'burgerMenu',
    initialState,
    reducers: {
        openMenu: (state) => {
            state.isOpen = true
        },
        closeMenu: (state) => {
            state.isOpen = false
        }
    }
})

export const { openMenu, closeMenu } = burgerMenuSlice.actions
export default burgerMenuSlice.reducer