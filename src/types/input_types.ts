export enum InputType {
  Text,
  Select
}

export type InputWrapperProps = {
  label: string
  inputType: InputType
  validaiton: boolean
}
