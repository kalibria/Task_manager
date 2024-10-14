type FieldErrorType = {
  error: string
  field: string
}

export type BaseResponse<D = {}> = {
  resultCode: number
  messages: string[]
  data: D
  fieldsErrors: FieldErrorType[]
}

export type ActionForTests<T extends (...args: any) => any> = Omit<ReturnType<T>, "meta">
