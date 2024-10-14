import { createSlice, PayloadAction } from "@reduxjs/toolkit"

const slice = createSlice({
  name: "app",
  initialState: {
    status: "idle" as RequestStatusType,
    error: null as string | null,
    isInitialized: false,
  },
  reducers: {
    setAppError: (state, action: PayloadAction<{ error: string | null }>) => {
      state.error = action.payload.error
    },
    setAppStatus: (state, action: PayloadAction<{ status: RequestStatusType }>) => {
      state.status = action.payload.status
    },
    setAppInitialized: (state, action: PayloadAction<{ isInitialized: boolean }>) => {
      state.isInitialized = action.payload.isInitialized
    },
  },
  selectors: {
    selectError: (state) => state.error,
    selectStatus: (state) => state.status,
    selectIsInitialized: (state) => state.isInitialized,
  },
})

export const appReducer = slice.reducer
export const appActions = slice.actions
export const { selectError, selectStatus, selectIsInitialized } = slice.selectors
export const appPath = slice.reducerPath
export type AppInitialState = ReturnType<typeof slice.getInitialState>

export type RequestStatusType = "idle" | "loading" | "succeeded" | "failed"
