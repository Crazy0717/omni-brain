import { PayloadAction, createSlice } from "@reduxjs/toolkit"

interface initialTypes {
  prompt: string
  [key: string]: any
}

interface SetValuePayload {
  ident: string
  value: any
}

const initialState: initialTypes = {
  prompt: "",
}

const apiData = createSlice({
  name: "apiData",
  initialState,
  reducers: {
    setValue: (state, action: PayloadAction<SetValuePayload>) => {
      const { ident, value } = action.payload
      state[ident] = value
    },
  },
})

export const { setValue } = apiData.actions
export default apiData.reducer
