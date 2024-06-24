import { PayloadAction, createSlice } from "@reduxjs/toolkit"

interface initialTypes {
  prompt: string
  isLoading: boolean
  prevPrompts: string[]
  oldPrompt: string
  showResults: boolean
  [key: string]: any
}

interface SetValuePayload {
  ident: string
  value: any
}

const initialState: initialTypes = {
  showResults: false,
  prompt: "",
  isLoading: false,
  prevPrompts: [],
  oldPrompt: "",
}

const apiData = createSlice({
  name: "apiData",
  initialState,
  reducers: {
    setValue: (state, action: PayloadAction<SetValuePayload>) => {
      const { ident, value } = action.payload
      state[ident] = value
    },
    setPrevPrompts: (state, action) => {
      state.prevPrompts = [...state.prevPrompts, action.payload]
    },
    handleLoading: (state, action) => {
      state.isLoading = action.payload === true
    },
  },
})

export const { setValue, handleLoading, setPrevPrompts } = apiData.actions
export default apiData.reducer
