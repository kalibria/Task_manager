import { Dispatch } from "redux"
import { appActions } from "app/appSlice"
import { BaseResponse } from "../types"

export const handleServerAppError = <D>(data: BaseResponse<D>, dispatch: Dispatch, showError: boolean = true): void => {
  if (showError) {
    dispatch(appActions.setAppError({ error: data.messages.length ? data.messages[0] : "Some error occurred" }))
  }
}
