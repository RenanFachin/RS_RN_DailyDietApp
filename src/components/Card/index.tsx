import { TouchableProps } from "react-native-svg";
import { Container, HourText, Divider, StatusInDiet, Title} from "./style";

interface CardProps extends TouchableProps {
  hour: string;
  title: string;
  isInDiet: boolean
}

export function Card({ hour, title, isInDiet, ...props }: CardProps) {
  return (
    <Container {...props}>
      <HourText>{hour}</HourText>

      <Divider />

      <Title numberOfLines={1}>{title}</Title>

      <StatusInDiet isInDiet={isInDiet}/>
    </Container>
  )
}