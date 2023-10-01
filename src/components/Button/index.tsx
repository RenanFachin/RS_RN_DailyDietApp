import { TouchableOpacityProps } from "react-native";
import { Container, Title, Icon, ButtonTypeStyleProps } from "./styles";

interface ButtonProps extends TouchableOpacityProps {
  title: string
  hasIcon?: boolean
  buttonType?: ButtonTypeStyleProps
}

export function Button({ title, hasIcon = false, buttonType = 'PRIMARY', ...props }: ButtonProps) {
  return (
    <Container buttonType={buttonType} activeOpacity={0.7} {...props}>

      {
        hasIcon &&
        (
          <Icon />
        )
      }

      <Title buttonType={buttonType}>
        {title}
      </Title>
    </Container>
  )
}