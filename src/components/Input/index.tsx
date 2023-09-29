import { TextInputProps } from "react-native"
import { Label, Container } from "./styles"

interface InputProps extends TextInputProps {
  inputLabel: string
}

export function Input({ inputLabel, ...props }: InputProps) {
  return (
    <>
      <Label>
        {inputLabel}
      </Label>

      <Container
        {...props}
      />
    </>
  )
}