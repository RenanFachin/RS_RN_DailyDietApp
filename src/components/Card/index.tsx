import { TouchableProps } from "react-native-svg";
import { Container, HourText, Divider, StatusInDiet, Title, CardTypeStyleProps} from "./style";

interface CardProps extends TouchableProps {
  hour: string;
  title: string;
  cardType: string
}

export function Card({ hour, title, cardType = 'WITHIN_DIET', ...props }: CardProps) {
  return (
    <Container {...props}>
      <HourText>{hour}</HourText>

      <Divider />

      <Title numberOfLines={1}>{title}</Title>

      <StatusInDiet cardType={cardType}/>
    </Container>
  )
}