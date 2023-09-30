import { TextInputProps, View } from "react-native"
import { Label, Container } from "./styles"

interface TextAreaProps extends TextInputProps {
  TextAreaLabel: string
}

export function TextArea({ TextAreaLabel, ...props }: TextAreaProps) {
  return (
    <View style={{ flexDirection: 'column', gap: 8 }}>
      <Label>
        {TextAreaLabel}
      </Label>

      <Container
        style={{ textAlignVertical: 'top' }}
        multiline={true}
        placeholder={`Digite uma ${TextAreaLabel}...`}
        {...props}
      />
    </View>
  )
}