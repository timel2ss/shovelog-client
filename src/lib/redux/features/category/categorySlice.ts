import { createSlice } from "@reduxjs/toolkit"

export interface CategoryState {
  isEnabledSideMenu: boolean
}

const initialState: CategoryState = {
  isEnabledSideMenu: false
}

export const categorySlice = createSlice({
  name: 'category',
  initialState,
  reducers: {
    setSideMenuState(state, action) {
      state.isEnabledSideMenu = action.payload
    }
  }
})

export const { setSideMenuState } = categorySlice.actions
export default categorySlice.reducer