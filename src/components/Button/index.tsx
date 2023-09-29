import { TouchableOpacityProps } from "react-native";
import { Container, Title, Icon } from "./styles";

interface ButtonProps extends TouchableOpacityProps {
  title: string
  hasIcon?: boolean
}

export function Button({ title, hasIcon = false, ...props }: ButtonProps) {
  return (
    <Container {...props} activeOpacity={0.7}>

      {
        hasIcon &&
        (
          <Icon />
        )
      }

      <Title>
        {title}
      </Title>
    </Container>
  )
}