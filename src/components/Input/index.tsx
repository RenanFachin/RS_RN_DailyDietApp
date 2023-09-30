import { TextInputProps, View } from "react-native"
import { Label, Container } from "./styles"

interface InputProps extends TextInputProps {
  inputLabel: string
  hasPlaceholder?: boolean
}

export function Input({ inputLabel, hasPlaceholder = false, ...props }: InputProps) {
  return (
    <View style={{ flexDirection: 'column', gap: 8}}>
      <Label>
        {inputLabel}
      </Label>

      {
        hasPlaceholder ? (
          <Container
            placeholder={`Digite uma ${inputLabel}`}
            {...props}
          />
        ) : (
          <Container
            {...props}
          />
        )
      }
    </View>
  )
}