export enum InputType {
  Text,
  Select
}

export type InputWrapperProps = {
  label: string
  inputType: InputType
  validaiton: boolean
}

export type NewFormInput = {
  label: string
  inputType: string
  description: string
}