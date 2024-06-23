import { PayloadAction, createSlice } from "@reduxjs/toolkit"

interface initialTypes {
  prompt: string
  isLoading: boolean
  [key: string]: any
}

interface SetValuePayload {
  ident: string
  value: any
}

const initialState: initialTypes = {
  prompt: "",
  isLoading: false,
}

const apiData = createSlice({
  name: "apiData",
  initialState,
  reducers: {
    setValue: (state, action: PayloadAction<SetValuePayload>) => {
      const { ident, value } = action.payload
      state[ident] = value
    },
    handleLoading: (state, action) => {
      state.isLoading = action.payload === true
    },
  },
})

export const { setValue, handleLoading } = apiData.actions
export default apiData.reducer
